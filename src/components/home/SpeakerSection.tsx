import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface Speaker {
    id: number;
    name: string;
    title: string;
    followers: string;
    category: string;
    image: string;
    description: string;
}

// kapil mishra , shehzad poonawala , sunil bansal , bagga , 

const SPEAKERS_DATA: Speaker[] = [
    {
        id: 1,
        name: "Rekha Gupta",
        title: "Chief Minister of Delhi",
        followers: "500K+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/rekha_sjg3hd.avif",
        description: "Rekha Gupta is the Chief Minister of Delhi, leading the state government with a focus on urban development, education reform, digital governance, and women's empowerment. Her administration is working to transform Delhi into a model smart city."
    },
    {
        id: 2,
        name: "Piyush Goyal",
        title: "Union Minister for Commerce & Industry",
        followers: "15M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/piyush_brqefi.avif",
        description: "Piyush Goyal is the Union Minister for Commerce & Industry, Railways and Consumer Affairs. He has been instrumental in driving India's trade policies and infrastructure development."
    },
    {
        id: 3,
        name: "Om Birla",
        title: "Speaker of Lok Sabha",
        followers: "2M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198414/ba207a2a-4063-4af7-9f37-f70f0ec65200.png",
        description: "Om Birla is the Speaker of the 17th Lok Sabha. A seasoned parliamentarian from Rajasthan, he has been instrumental in maintaining parliamentary decorum and strengthening democratic institutions in India."
    },
    {
        id: 4,
        name: "Parvesh Verma",
        title: "Cabinet Minister, Government of Delhi",
        followers: "1.5M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198546/dd8e09dc-0ead-469c-a59d-d20daea668e2.png",
        description: "Parvesh Verma is a Cabinet Minister in the Government of Delhi. Son of former Delhi CM Sahib Singh Verma, he has been actively involved in key development projects and social welfare initiatives for Delhi's progress."
    },
    {
        id: 5,
        name: "Kapil Mishra",
        title: "Minister for Art, Culture & Language, Delhi",
        followers: "3M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198512/6aa0b965-db65-4331-b20f-3360de15daa8.png",
        description: "Kapil Mishra is the Minister for Art, Culture and Language in the Government of Delhi. He has been instrumental in promoting Delhi's rich cultural heritage, supporting artists, and developing cultural infrastructure in the capital."
    },
    {
        id: 6,
        name: "Manoj Tiwari",
        title: "Member of Parliament & Actor",
        followers: "12M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198487/42fbe97c-5e90-43b5-a801-fe8c0ab7f3ac.png",
        description: "Manoj Tiwari is a Member of Parliament from North-East Delhi and a renowned Bhojpuri actor-singer. He has successfully bridged entertainment and politics, representing the voice of Purvanchali community in Delhi."
    },
    {
        id: 7,
        name: "Shehzad Poonawala",
        title: "BJP National Spokesperson",
        followers: "2.5M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198919/532243aa-4d83-4e27-8884-c6fc97a1c33c.png",
        description: "Shehzad Poonawala is the National Spokesperson of BJP and a prominent political commentator. Known for his articulate media presence, he actively represents BJP's viewpoint on national television and social media platforms."
    },
    {
        id: 8,
        name: "Manjinder Singh Sirsa",
        title: "Minister for Environment, Forest & Wildlife, Delhi",
        followers: "1M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198586/d00f313b-0ddb-4dd0-a829-9ae711f0fe48.png",
        description: "Manjinder Singh Sirsa is the Minister for Environment, Forest and Wild Life in the Government of Delhi. A dedicated leader, he has been working on environmental conservation, pollution control, and sustainable development initiatives for the capital."
    },
    {
        id: 9,
        name: "Tajinder Pal Singh Bagga",
        title: "BJP Spokesperson & Youth Leader",
        followers: "2M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198688/3184314b-9f62-42d3-8f75-12389bcbed98.png",
        description: "Tajinder Pal Singh Bagga is a BJP Spokesperson and prominent youth leader. Known for his aggressive social media presence and grassroots activism, he represents the new generation of political communicators in India."
    },
    {
        id: 10,
        name: "Aman Gupta",
        title: "Co-founder & CMO, boAt",
        followers: "8M+ Followers",
        category: "ENTREPRENEUR",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/aman_h972eu.avif",
        description: "Aman Gupta is the co-founder and CMO of boAt, India's leading consumer electronics brand. Known for his appearance on Shark Tank India, he has revolutionized the audio accessories market in India."
    },
    {
        id: 11,
        name: "Annamalai K",
        title: "BJP Tamil Nadu President & Former IPS",
        followers: "3M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/anna_vwandt.avif",
        description: "Annamalai K is the Tamil Nadu BJP President and former IPS officer. His transition from civil services to politics has brought a unique perspective to governance and public service in Tamil Nadu."
    },

];

export const SpeakerSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [speakersPerView, setSpeakersPerView] = useState(4);

    // Responsive speakers per view
    useEffect(() => {
        const updateSpeakersPerView = () => {
            if (window.innerWidth < 640) {
                setSpeakersPerView(1); // Mobile: 1 speaker
            } else if (window.innerWidth < 768) {
                setSpeakersPerView(2); // Tablet: 2 speakers
            } else if (window.innerWidth < 1024) {
                setSpeakersPerView(3); // Medium: 3 speakers
            } else {
                setSpeakersPerView(4); // Desktop: 4 speakers
            }
        };

        updateSpeakersPerView();
        window.addEventListener('resize', updateSpeakersPerView);
        return () => window.removeEventListener('resize', updateSpeakersPerView);
    }, []);

    const totalSlides = SPEAKERS_DATA.length - speakersPerView + 1;

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const maxIndex = SPEAKERS_DATA.length - speakersPerView;
                if (prevIndex >= maxIndex) {
                    return 0; // Loop back to start
                }
                return prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, speakersPerView]);

    const goToNext = useCallback(() => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => {
            const maxIndex = SPEAKERS_DATA.length - speakersPerView;
            if (prevIndex >= maxIndex) {
                return 0;
            }
            return prevIndex + 1;
        });
    }, [speakersPerView]);

    const goToPrev = useCallback(() => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => {
            const maxIndex = SPEAKERS_DATA.length - speakersPerView;
            if (prevIndex <= 0) {
                return maxIndex;
            }
            return prevIndex - 1;
        });
    }, [speakersPerView]);

    // Resume auto-play after manual navigation
    useEffect(() => {
        if (!isAutoPlaying) {
            const timer = setTimeout(() => {
                setIsAutoPlaying(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isAutoPlaying]);

    return (
        <section id="speakers" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-800 to-purple-900 dark:from-purple-950 dark:to-black">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-8 text-center">
                <h2 className="michroma-heading text-2xl font-bold sm:text-3xl md:text-4xl mb-2 text-white">
                    Distinguished <span className="text-orange-400">Speakers</span>
                </h2>
                <p className="text-base text-purple-200 max-w-2xl mx-auto">
                    Learn from visionary leaders shaping the future of innovation
                </p>
            </div>

            {/* Speaker Slider */}
            <div className="max-w-7xl mx-auto relative">
                {/* Navigation Buttons - Now visible on mobile too */}
                <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-all duration-300 border-2 border-orange-400 dark:border-orange-600"
                    aria-label="Previous speakers"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-50 dark:hover:bg-orange-900 transition-all duration-300 border-2 border-orange-400 dark:border-orange-600"
                    aria-label="Next speakers"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </button>

                {/* Slider Container */}
                <div className="overflow-hidden px-1 sm:px-0">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / speakersPerView)}%)`
                        }}
                    >
                        {SPEAKERS_DATA.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="flex-shrink-0 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                                style={{
                                    width: `${100 / speakersPerView}%`
                                }}
                            >
                                <div
                                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    onMouseEnter={() => setHoveredCard(speaker.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => setSelectedSpeaker(speaker)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${speaker.name} details`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setSelectedSpeaker(speaker);
                                        }
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                                            width={240}
                                            height={320}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="relative p-3 bg-card">
                                        {/* Name and Title */}
                                        <h3 className="text-sm sm:text-base font-bold text-foreground mb-0.5 line-clamp-1">
                                            {speaker.name}
                                        </h3>

                                        {/* Title */}
                                        <p className="text-muted-foreground text-[10px] sm:text-xs leading-snug line-clamp-2 min-h-[2rem]">
                                            {speaker.title}
                                        </p>

                                        {/* Hover Arrow Indicator */}
                                        <div
                                            className={`absolute bottom-3 right-3 transition-all duration-300 ${hoveredCard === speaker.id
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-2'
                                                }`}
                                        >
                                            <div className="bg-purple-600 text-white p-1.5 rounded-full shadow-lg">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider Dots Indicator (hidden on mobile) */}
                <div className="hidden sm:flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-purple-600'
                                : 'w-2 bg-purple-300 hover:bg-purple-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* View All Speakers Button */}
                <div className="mt-8 text-center">
                    <Button
                        asChild
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-5 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <Link to="/all-speakers">
                            View All Speakers
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Speaker Detail Modal */}
            {selectedSpeaker && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-screen items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedSpeaker(null)}
                            aria-hidden="true"
                        />

                        {/* Modal Content */}
                        <div className="relative bg-card rounded-2xl shadow-2xl max-w-xl w-full mx-auto transform transition-all border-2 border-purple-200 dark:border-purple-800">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedSpeaker(null)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10 p-2 rounded-full hover:bg-muted"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Header */}
                            <div className="p-6 pb-0">
                                <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                                    SPEAKER PROFILE
                                </h2>
                            </div>

                            {/* Speaker Details */}
                            <div className="flex flex-col sm:flex-row gap-4 p-6 pt-3">
                                {/* Speaker Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-purple-200 dark:border-purple-800">
                                        <img
                                            src={selectedSpeaker.image}
                                            alt={selectedSpeaker.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Speaker Info */}
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                                        {selectedSpeaker.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-3 text-base">
                                        {selectedSpeaker.title}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="bg-muted text-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                            {selectedSpeaker.category}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {selectedSpeaker.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
