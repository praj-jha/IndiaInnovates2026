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
