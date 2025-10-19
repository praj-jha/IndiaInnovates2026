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
            { width: 640, suffix: '-mobile' },
            { width: 1024, suffix: '-tablet' },
            { width: 1920, suffix: '-desktop' }
        ],
        quality: 85,
        format: 'webp',
        avif: true
    },
    // Speaker images - responsive sizes for better performance
    speakers: {
        sizes: [
            { width: 240, height: 320, suffix: '' }, // Desktop size
            { width: 180, height: 240, suffix: '-sm' } // Mobile size
        ],
        quality: 82,
        format: 'webp',
        avif: true
    },
    // Logo image - responsive sizes
    logo: {
        sizes: [
            { width: 200, suffix: '' }, // Desktop
            { width: 120, suffix: '-sm' } // Mobile
        ],
        quality: 90,
        format: 'webp',
        avif: true
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
        } else if (config.format === 'avif') {
            pipeline = pipeline.avif({ quality: config.quality, effort: 4 });
        } else if (config.format === 'jpeg') {
            pipeline = pipeline.jpeg({ quality: config.quality });
        }

        await pipeline.toFile(outputPath);
        console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error.message);
    }
}

async function optimizeMultiFormat(inputPath, outputPathBase, config) {
    // Create WebP version
    const webpPath = outputPathBase.replace(/\.\w+$/, '.webp');
    await optimizeImage(inputPath, webpPath, { ...config, format: 'webp' });

    // Create AVIF version if specified
    if (config.avif) {
        const avifPath = outputPathBase.replace(/\.\w+$/, '.avif');
        await optimizeImage(inputPath, avifPath, { ...config, format: 'avif' });
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

        console.log('🚀 Starting image optimization...\n');

        // Optimize hero image (vr.png) with multiple sizes and formats
        console.log('📸 Optimizing hero image (vr.png)...');
        const heroInput = path.join(publicDir, 'vr.png');
        for (const size of imageConfigs.hero.sizes) {
            const basePath = path.join(optimizedDir, `vr${size.suffix}.webp`);
            await optimizeMultiFormat(heroInput, basePath, {
                width: size.width,
                quality: imageConfigs.hero.quality,
                format: 'webp',
                avif: imageConfigs.hero.avif
            });
        }

        // Optimize speaker images
        console.log('\n👥 Optimizing speaker images...');
        const speakerFiles = ['modi.png', 'shah.png', 'rekha.png', 'piyush.png', 'dubai.png', 'aman.png', 'anna.png', 'shashi.png'];
        for (const file of speakerFiles) {
            const inputPath = path.join(publicDir, file);
            try {
                await fs.access(inputPath);
                for (const size of imageConfigs.speakers.sizes) {
                    const baseName = file.replace('.png', '');
                    const basePath = path.join(optimizedDir, `${baseName}${size.suffix}.webp`);
                    await optimizeMultiFormat(inputPath, basePath, {
                        width: size.width,
                        height: size.height,
                        quality: imageConfigs.speakers.quality,
                        format: 'webp',
                        avif: imageConfigs.speakers.avif
                    });
                }
            } catch (error) {
                console.log(`⚠️  ${file} not found, skipping...`);
            }
        }

        // Optimize logo image (iil.png)
        console.log('\n🏷️  Optimizing logo image (iil.png)...');
        const logoInput = path.join(publicDir, 'iil.png');
        for (const size of imageConfigs.logo.sizes) {
            const basePath = path.join(optimizedDir, `iil${size.suffix}.webp`);
            await optimizeMultiFormat(logoInput, basePath, {
                width: size.width,
                quality: imageConfigs.logo.quality,
                format: 'webp',
                avif: imageConfigs.logo.avif
            });
        }

        // Optimize profile thumbnails (1.jpg, 2.JPG, 3.jpg, 4.jpg)
        console.log('\n👤 Optimizing profile thumbnails...');
        const thumbnailFiles = ['1.jpg', '2.JPG', '3.jpg', '4.jpg'];
        for (const file of thumbnailFiles) {
            const inputPath = path.join(publicDir, file);
            try {
                await fs.access(inputPath);
                const outputPath = path.join(optimizedDir, file.toLowerCase().replace(/\.(jpg|jpeg)$/i, '.webp'));
                await optimizeImage(inputPath, outputPath, imageConfigs.thumbnails);
            } catch (error) {
                console.log(`⚠️  ${file} not found, skipping...`);
            }
        }

        // Optimize hero background image with multiple sizes
        console.log('\n🌄 Optimizing background image (bgct.png)...');
        const bgInput = path.join(publicDir, 'bgct.png');
        try {
            await fs.access(bgInput);
            for (const size of imageConfigs.hero.sizes) {
                const outputPath = path.join(optimizedDir, `bgct${size.suffix}.webp`);
                await optimizeImage(bgInput, outputPath, {
                    width: size.width,
                    quality: imageConfigs.hero.quality,
                    format: imageConfigs.hero.format
                });
            }
        } catch (error) {
            console.log(`⚠️  bgct.png not found, skipping...`);
        }

        // Optimize course images
        console.log('\n📚 Optimizing course images...');
        const courseFiles = ['MC.jpeg', 'IB.jpeg'];
        for (const file of courseFiles) {
            const inputPath = path.join(publicDir, file);
            try {
                await fs.access(inputPath);
                const outputPath = path.join(optimizedDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
                await optimizeImage(inputPath, outputPath, imageConfigs.courses);
            } catch (error) {
                console.log(`⚠️  ${file} not found, skipping...`);
            }
        }

        // Optimize company logos
        console.log('\n🏢 Optimizing company logos...');
        const logoFiles = ['del.png', 'oyo.png', 'pwc.png', 'EYP.png'];
        for (const file of logoFiles) {
            const inputPath = path.join(publicDir, file);
            try {
                await fs.access(inputPath);
                const outputPath = path.join(optimizedDir, file.replace('.png', '.webp'));
                await optimizeImage(inputPath, outputPath, imageConfigs.logos);
            } catch (error) {
                console.log(`⚠️  ${file} not found, skipping...`);
            }
        }

        console.log('\n✅ Image optimization complete!');
        console.log('📁 Optimized images saved to /public/optimized/');

        // Show size comparison for speaker images
        console.log('\n📊 Size Comparison (Speaker Images):');
        for (const file of speakerFiles.slice(0, 3)) {
            const originalPath = path.join(publicDir, file);
            const optimizedPath = path.join(optimizedDir, file.replace('.png', '.webp'));

            try {
                const originalStats = await fs.stat(originalPath);
                const optimizedStats = await fs.stat(optimizedPath);
                const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);

                console.log(`${file}: ${(originalStats.size / 1024).toFixed(1)}KB -> ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
            } catch (error) {
                // Silently skip if file doesn't exist
            }
        }

    } catch (error) {
        console.error('Error during optimization:', error);
    }
}

main();
