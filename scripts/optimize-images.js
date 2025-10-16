import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// Configuration for different image types
const imageConfigs = {
    // Small thumbnails (profile pictures) - 96px for retina displays
    thumbnails: {
        width: 96,
        height: 96,
        quality: 85,
        format: 'webp'
    },
    // Hero background image - responsive sizes
    hero: {
        sizes: [
            { width: 800, suffix: '-mobile' },
            { width: 1200, suffix: '-tablet' },
            { width: 1920, suffix: '-desktop' }
        ],
        quality: 85,
        format: 'webp'
    },
    // Company logos - optimized but keeping original dimensions
    logos: {
        quality: 90,
        format: 'webp'
    },
    // Course images
    courses: {
        width: 600,
        height: 400,
        quality: 85,
        format: 'webp'
    }
};

async function optimizeImage(inputPath, outputPath, config) {
    try {
        let pipeline = sharp(inputPath);

        if (config.width && config.height) {
            pipeline = pipeline.resize(config.width, config.height, { fit: 'cover' });
        } else if (config.width) {
            pipeline = pipeline.resize(config.width, null, { withoutEnlargement: true });
        }

        if (config.format === 'webp') {
            pipeline = pipeline.webp({ quality: config.quality });
        } else if (config.format === 'jpeg') {
            pipeline = pipeline.jpeg({ quality: config.quality });
        }

        await pipeline.toFile(outputPath);
        console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error.message);
    }
}

async function main() {
    try {
        // Create optimized directory
        const optimizedDir = path.join(publicDir, 'optimized');
        try {
            await fs.access(optimizedDir);
        } catch {
            await fs.mkdir(optimizedDir, { recursive: true });
        }

        // Optimize profile thumbnails (1.jpg, 2.JPG, 3.jpg, 4.jpg)
        const thumbnailFiles = ['1.jpg', '2.JPG', '3.jpg', '4.jpg'];
        for (const file of thumbnailFiles) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(optimizedDir, file.toLowerCase().replace(/\.(jpg|jpeg)$/i, '.webp'));
            await optimizeImage(inputPath, outputPath, imageConfigs.thumbnails);
        }

        // Optimize hero background image with multiple sizes
        const heroInput = path.join(publicDir, 'bgct.png');
        for (const size of imageConfigs.hero.sizes) {
            const outputPath = path.join(optimizedDir, `bgct${size.suffix}.webp`);
            await optimizeImage(heroInput, outputPath, {
                width: size.width,
                quality: imageConfigs.hero.quality,
                format: imageConfigs.hero.format
            });
        }

        // Optimize course images
        const courseFiles = ['MC.jpeg', 'IB.jpeg'];
        for (const file of courseFiles) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(optimizedDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
            await optimizeImage(inputPath, outputPath, imageConfigs.courses);
        }

        // Optimize company logos
        const logoFiles = ['del.png', 'oyo.png', 'pwc.png', 'EYP.png'];
        for (const file of logoFiles) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(optimizedDir, file.replace('.png', '.webp'));
            await optimizeImage(inputPath, outputPath, imageConfigs.logos);
        }

        console.log('\n✅ Image optimization complete!');
        console.log('📁 Optimized images saved to /public/optimized/');

        // Show size comparison
        console.log('\n📊 Size Comparison:');
        for (const file of thumbnailFiles) {
            const originalPath = path.join(publicDir, file);
            const optimizedPath = path.join(optimizedDir, file.toLowerCase().replace(/\.(jpg|jpeg)$/i, '.webp'));

            try {
                const originalStats = await fs.stat(originalPath);
                const optimizedStats = await fs.stat(optimizedPath);
                const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);

                console.log(`${file}: ${(originalStats.size / 1024).toFixed(1)}KB -> ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
            } catch (error) {
                console.log(`Could not compare ${file}: ${error.message}`);
            }
        }

    } catch (error) {
        console.error('Error during optimization:', error);
    }
}

main();
