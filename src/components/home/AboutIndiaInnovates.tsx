import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

export function AboutIndiaInnovates() {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Autoplay video when component mounts
        if (videoRef.current) {
            const video = videoRef.current;

            video.play().catch(error => {
                console.log("Video autoplay failed:", error);
                setIsPlaying(false);
            });

            // Only prevent pause on desktop
            const handlePause = () => {
                if (!isMobile) {
                    video.play().catch(error => {
                        console.log("Video play failed:", error);
                    });
                }
            };

            video.addEventListener('pause', handlePause);

            return () => {
                video.removeEventListener('pause', handlePause);
                window.removeEventListener('resize', checkMobile);
            };
        }
    }, [isMobile]);

    const handleMouseEnter = () => {
        if (videoRef.current && !isMobile) {
            videoRef.current.muted = false;
            setIsMuted(false);
            // Ensure video continues playing
            videoRef.current.play().catch(error => {
                console.log("Video play failed:", error);
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && !isMobile) {
            videoRef.current.muted = true;
            setIsMuted(true);
            // Ensure video continues playing
            videoRef.current.play().catch(error => {
                console.log("Video play failed:", error);
            });
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().catch(error => {
                    console.log("Video play failed:", error);
                });
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="py-2 md:py- bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Text Content - Left Side */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 dark:from-orange-900/40 dark:to-orange-900/30 border border-orange-500/30 dark:border-orange-700 rounded-full">
                            <p className="text-Purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase">
                                About India Innovates 2026
                            </p>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Challenge <span className='text-purple-800'>Accepted!</span>
                        </h2>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                            <p>
                                When <span className="font-semibold text-green-700 dark:text-green-500">Prime Minister Narendra Modi</span> challenged India's youth to build their own social media apps and innovations instead of depending on foreign products, <span className="font-semibold text-green-700 dark:text-green-500">we accepted</span>.
                            </p>

                            <p>
                                India Innovates 2026 is our answer - a premier platform bringing together <span className="font-semibold text-orange-600 dark:text-orange-400">300+ Members of Parliament</span>, <span className="font-semibold text-orange-600 dark:text-orange-400">5,000+ international delegates</span>, and <span className="font-semibold text-orange-600 dark:text-orange-400">200+ investors</span> to empower India's next generation of innovators and entrepreneurs.
                            </p>

                            <p>
                                Through expert-led fellowships in Technology, Innovation, Entrepreneurship, and Strategy, we're building the talent that will create India's future - <span className="font-semibold">Made in India, for the World</span>.
                            </p>

                            <p>
                                With mentors from <span className="font-semibold">KPMG, EY Parthenon, Deloitte, PwC, OYO, Tech Mahindra</span>, and more, we're transforming ambitious students into industry-ready professionals who will lead India's innovation revolution.
                            </p>
                        </div>

                        <div className="pt-6 gap-4 flex flex-col sm:flex-row">
                            <div className="w-full sm:w-auto">
                                <Button
                                    onClick={() => navigate('/exhibitor-registration')}
                                    size="lg"
                                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Book a space
                                </Button>
                            </div>
                            <div className="w-full sm:w-auto">
                                <Button
                                    onClick={() => navigate('/exhibitor-registration')}
                                    size="lg"
                                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Delegate Pass
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Video - Right Side */}
                    <div className="order-1 lg:order-2 flex justify-center lg:pl-32 lg:mt-20 lg:justify-start">
                        {/* Purple Frame Container */}
                        <div className="p-2 md:p-3 lg:p-4 bg-purple-700 rounded-2xl shadow-2xl">
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer w-full max-w-[400px] aspect-[11/15]"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/mds.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Mobile Controls */}
                                {isMobile && (
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                                        {/* Play/Pause Button */}
                                        <button
                                            onClick={togglePlayPause}
                                            className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition-all"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-5 h-5" />
                                            ) : (
                                                <Play className="w-5 h-5" />
                                            )}
                                        </button>

                                        {/* Mute/Unmute Button */}
                                        <button
                                            onClick={toggleMute}
                                            className="bg-black/70 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition-all"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5" />
                                            ) : (
                                                <Volume2 className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                )}

                                {/* Desktop Sound indicator (hidden on mobile) */}
                                {!isMobile && (
                                    <>
                                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                                            </svg>
                                        </div>

                                        {/* Hover to unmute text */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                                                </svg>
                                                Hover for sound
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                            {/* End of Purple Frame */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
