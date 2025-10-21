import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
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

const ALL_SPEAKERS_DATA: Speaker[] = [
    {
        id: 1,
        name: "Narendra Modi",
        title: "Prime Minister of India",
        followers: "100M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/modi_xrej0s.avif",
        description: "Narendra Modi is the Prime Minister of India and one of the most influential political leaders globally. His leadership has transformed India's digital infrastructure, economic policies, and international relations. Known for his vision of Digital India and Make in India initiatives."
    },
    {
        id: 2,
        name: "Amit Shah",
        title: "Union Home Minister of India",
        followers: "20M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/shah_vcnki2.avif",
        description: "Amit Shah serves as the Union Home Minister of India and is a prominent political strategist. He has played a crucial role in India's internal security policies and administrative reforms."
    },
    {
        id: 3,
        name: "Rekha Gupta",
        title: "Chief Minister of Delhi",
        followers: "5M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/rekha_sjg3hd.avif",
        description: "Rekha Gupta is the Chief Minister of Delhi, leading initiatives in urban development, education reform, and digital governance. Her leadership focuses on making Delhi a model smart city."
    },
    {
        id: 4,
        name: "Piyush Goyal",
        title: "Union Minister for Commerce & Industry",
        followers: "15M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/piyush_brqefi.avif",
        description: "Piyush Goyal is the Union Minister for Commerce & Industry, Railways and Consumer Affairs. He has been instrumental in driving India's trade policies and infrastructure development."
    },
    {
        id: 5,
        name: "Sultan Al Jaber",
        title: "Minister of Information Technology, UAE",
        followers: "2M+ Followers",
        category: "TECHNOLOGY LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/dubai_j7gahz.avif",
        description: "Leading Dubai's digital transformation initiatives and smart city projects. Spearheading the emirate's vision to become a global hub for artificial intelligence and blockchain technology."
    },
    {
        id: 6,
        name: "Aman Gupta",
        title: "Co-founder & CMO, boAt",
        followers: "8M+ Followers",
        category: "ENTREPRENEUR",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/aman_h972eu.avif",
        description: "Aman Gupta is the co-founder and CMO of boAt, India's leading consumer electronics brand. Known for his appearance on Shark Tank India, he has revolutionized the audio accessories market in India."
    },
    {
        id: 7,
        name: "Annamalai K",
        title: "Political Leader & Former IPS Officer",
        followers: "3M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/anna_vwandt.avif",
        description: "Annamalai K is a prominent political leader and former IPS officer. His transition from civil services to politics has brought a unique perspective to governance and public service."
    },
    {
        id: 8,
        name: "Shashi Tharoor",
        title: "Member of Parliament & Author",
        followers: "25M+ Followers",
        category: "POLITICAL LEADER",
        image: "https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/shashi_xtmsn0.avif",
        description: "Shashi Tharoor is a Member of Parliament, accomplished author, and former UN diplomat. Known for his eloquent speeches and writings on Indian politics, history, and international relations."
    }
];

export default function AllSpeakers() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-purple-50/30 dark:from-gray-900 dark:to-purple-950/30">
            <Helmet>
                <title>All Speakers - India Innovates 2026</title>
                <meta name="description" content="Meet all the distinguished speakers at India Innovates 2026" />
                <meta name="keywords" content="India Innovates, speakers, political leaders, entrepreneurs, technology leaders" />
            </Helmet>

            <div className="py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-8">
                    <Link to="/">
                        <Button
                            variant="outline"
                            className="mb-6 border-purple-200 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            All <span className="text-purple-600">Speakers</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Meet the visionary leaders, innovators, and changemakers speaking at India Innovates 2026
                        </p>
                    </div>
                </div>

                {/* Speakers Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {ALL_SPEAKERS_DATA.map((speaker) => (
                            <div
                                key={speaker.id}
                                className="group relative cursor-pointer overflow-hidden rounded-xl bg-card border-2 border-border hover:border-purple-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                        width={240}
                                        height={320}
                                        decoding="async"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content Section */}
                                <div className="relative p-3 bg-card">
                                    {/* Followers Count */}
                                    <div className="mb-1">
                                        <span className="text-purple-600 dark:text-purple-400 text-[10px] sm:text-xs font-semibold tracking-wide">
                                            {speaker.followers}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-foreground text-xs sm:text-sm md:text-base font-bold mb-1 tracking-tight uppercase line-clamp-2">
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
                        ))}
                    </div>
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
                                        <span className="bg-purple-600 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                            {selectedSpeaker.followers}
                                        </span>
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
        </div>
    );
}
