import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

const themes = [
    {
        id: "biotechnology",
        name: "Biotechnology",
        tagline: "Innovation at the intersection of biology and imagination.",
        description: "India Innovates showcases solutions that reimagine health, food, and the environment using living systems. From breakthrough vaccines to sustainable bioprocessing, this theme celebrates the new age of life science entrepreneurship.",
        motto: "Biology is not just science — it's the blueprint of our sustainable future.",
        icon: "🧬",
    },
    {
        id: "manufacturing-industry",
        name: "Manufacturing & Industry 4.0",
        tagline: "Where machines think, learn, and build smarter.",
        description: "This theme focuses on the rise of intelligent manufacturing — robotics, IoT, digital twins, and automation reshaping how India makes the world move.",
        motto: "From factory floors to future hubs — manufacturing innovation made in India, for the world.",
        icon: "⚙️",
    },
    {
        id: "smart-cities",
        name: "Smart Cities & Urban Mobility",
        tagline: "Designing tomorrow's cities for the people of today.",
        description: "India Innovates envisions data-driven, green, and human-centric cities — powered by intelligent transport, clean infrastructure, and connected governance.",
        motto: "Smart isn't about sensors — it's about citizens.",
        icon: "🌆",
    },
    {
        id: "blue-economy",
        name: "Blue Economy",
        tagline: "Harnessing the power of water to fuel growth and sustainability.",
        description: "This theme explores ocean-based innovations — from marine biotechnology and coastal energy to sustainable fisheries and pollution control.",
        motto: "India's blue frontier — innovation that flows with purpose.",
        icon: "🌊",
    },
    {
        id: "disaster-management",
        name: "Disaster Management & Resilient Infrastructure",
        tagline: "Technology that protects, predicts, and rebuilds.",
        description: "Focusing on innovations that make communities climate-ready — early warning systems, resilient construction, and real-time response networks.",
        motto: "Because the strength of a nation lies in how it rises again.",
        icon: "🌪️",
    },
    {
        id: "next-gen-communications",
        name: "Next-Gen Communications",
        tagline: "Connecting ideas, people, and planets.",
        description: "From 5G and satellite internet to quantum communication, this theme highlights India's leap into the future of global connectivity.",
        motto: "Every signal carries a story — of innovation, inclusion, and impact.",
        icon: "📡",
    },
    {
        id: "space-aerospace-defence",
        name: "Space, Aerospace & Defence",
        tagline: "Pushing boundaries beyond Earth.",
        description: "Celebrating India's innovators in satellite technology, defence systems, UAVs, and deep-space exploration — redefining strategic self-reliance.",
        motto: "When innovation meets courage, the sky is not the limit.",
        icon: "🚀",
    },
    {
        id: "healthcare-medtech",
        name: "Healthcare & MedTech",
        tagline: "Empowering life through technology.",
        description: "From AI-powered diagnostics to wearable health devices and telemedicine, this theme celebrates innovation that keeps humanity at the heart of medicine.",
        motto: "Because health innovation is the truest form of compassion.",
        icon: "🏥",
    },
    {
        id: "advanced-computing",
        name: "Advanced Computing, AI & Quantum",
        tagline: "Reimagining intelligence itself.",
        description: "This theme explores breakthroughs in AI, deep learning, supercomputing, and quantum technologies that are reshaping research, governance, and business.",
        motto: "India's intelligence revolution — built on algorithms and imagination.",
        icon: "💻",
    },
    {
        id: "semiconductors",
        name: "Semiconductors & Microelectronics",
        tagline: "Powering the pulse of modern technology.",
        description: "From chip design and sensors to fabrication and packaging, this theme reflects India's journey toward technological self-reliance and innovation in silicon.",
        motto: "Tiny chips. Massive impact.",
        icon: "🧠",
    },
    {
        id: "agriculture-food",
        name: "Agriculture & Food Technologies",
        tagline: "Innovation rooted in the soil, grown by science.",
        description: "Smart farming, agri-drones, food processing, and sustainable nutrition — redefining the way India feeds its people and the planet.",
        motto: "From farm to future — technology that nourishes progress.",
        icon: "🌾",
    },
    {
        id: "energy-sustainability",
        name: "Energy, Sustainability & Climate Change",
        tagline: "Building a greener world, one innovation at a time.",
        description: "This theme unites renewables, green hydrogen, circular economy, and carbon solutions for a sustainable planet.",
        motto: "The energy of innovation is the power to sustain life.",
        icon: "🔋",
    },
    {
        id: "advanced-materials",
        name: "Advanced Materials & Critical Minerals",
        tagline: "Inventing the substances of tomorrow.",
        description: "Nanomaterials, composites, rare earth innovation, and material science breakthroughs that shape everything — from mobility to medicine.",
        motto: "Matter matters — and innovation transforms it.",
        icon: "⚗️",
    },
    {
        id: "governance-policy",
        name: "Governance & Policy",
        tagline: "Where innovation meets public service.",
        description: "Exploring new digital frameworks for transparent governance, citizen engagement, and evidence-based policymaking.",
        motto: "From paper to pixels — reimagining how democracy delivers.",
        icon: "🏛️",
    },
    {
        id: "booth-manager",
        name: "Booth Manager Simulation",
        tagline: "The future of election management — simulated and smart.",
        description: "A next-gen platform that trains teams in booth-level strategy, volunteer coordination, and real-time voting analytics.",
        motto: "Every vote counts — and every booth learns.",
        icon: "🗳️",
    },
    {
        id: "ai-voter-profiler",
        name: "AI Voter Profiler",
        tagline: "Understanding voters through responsible AI.",
        description: "Analyzing behavioral patterns, issues, and sentiments to help leaders connect with citizens meaningfully and ethically.",
        motto: "Data that empowers democracy — not divides it.",
        icon: "🤖",
    },
    {
        id: "ai-complaint-resolver",
        name: "AI Complaint Resolver",
        tagline: "Because listening is the first act of leadership.",
        description: "An intelligent system that sorts, tracks, and recommends solutions to citizen grievances in real time.",
        motto: "Turning complaints into conversations — and actions.",
        icon: "🧾",
    },
    {
        id: "data-analysis",
        name: "Data Analysis",
        tagline: "From data to decisions.",
        description: "Empowering innovators, policymakers, and students to visualize insights, predict outcomes, and design better public systems.",
        motto: "Numbers tell stories — when innovation listens.",
        icon: "📊",
    },
    {
        id: "ai-calling-agent",
        name: "AI Calling Agent",
        tagline: "Human warmth, machine efficiency.",
        description: "AI-driven voice systems that interact naturally with citizens — for surveys, awareness campaigns, and service feedback.",
        motto: "Every call is a connection — powered by AI.",
        icon: "☎️",
    },
    {
        id: "ai-poster-maker",
        name: "AI Poster Maker",
        tagline: "Design meets data.",
        description: "A creative engine that generates campaign posters, infographics, and awareness visuals automatically through prompt-based design.",
        motto: "Where imagination is automated.",
        icon: "🧠",
    },
    {
        id: "ai-social-media-manager",
        name: "AI Social Media Manager",
        tagline: "The digital voice of innovation.",
        description: "Manages and analyzes online campaigns, engagement patterns, and audience behavior — ensuring meaningful digital dialogue.",
        motto: "Because the algorithm should work for truth, not trends.",
        icon: "🌐",
    },
    {
        id: "grassroot-reporter",
        name: "Best Grassroot Reporter",
        tagline: "Innovation from the ground up.",
        description: "Recognizing voices that report local change, community innovation, and civic transformation using digital tools.",
        motto: "Real journalism begins where power meets people.",
        icon: "📰",
    },
    {
        id: "ai-chatbot-designer",
        name: "AI Chatbot Designer",
        tagline: "Conversational intelligence for every cause.",
        description: "Designing chatbots that guide, inform, and engage citizens, students, and innovators — in every Indian language.",
        motto: "One nation, many voices — one AI that listens to all.",
        icon: "💬",
    },
];

const UniversityCompetitions = () => {
    const navigate = useNavigate();

    const handleThemeClick = (themeId: string) => {
        navigate(`/university-competitions-register?theme=${themeId}`);
    };

    const handleRegisterAll = () => {
        navigate("/university-competitions-register");
    };

    return (
        <>
            <Helmet>
                <title>Innovation Themes - Universities & Professionals - India Innovates</title>
                <meta
                    name="description"
                    content="Explore 13 innovation themes including Biotechnology, Manufacturing & Industry 4.0, Smart Cities, Healthcare, AI & Quantum Computing, and more at India Innovates Summit 2025."
                />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-background py-20 px-4 sm:px-6 lg:px-8">
                {/* Subtle background pattern */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-5"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-6 shadow-lg shadow-purple-500/20">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white mb-4 tracking-tight">
                            Innovation Themes
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4 font-light">
                            Universities & Professionals
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-6 font-light">
                            Choose your theme and showcase groundbreaking innovations that shape India's future
                        </p>
                        <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 px-6 py-3 rounded-full">
                            <span className="text-lg font-medium bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                23 Innovation Themes • Open to All
                            </span>
                        </div>
                    </div>

                    {/* Themes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {themes.map((theme, index) => (
                            <Card
                                key={theme.id}
                                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-300 dark:hover:border-purple-700 rounded-2xl"
                                onClick={() => handleThemeClick(theme.id)}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                <CardHeader className="space-y-3 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="text-4xl">{theme.icon}</div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <CardTitle className="text-xl leading-tight font-medium text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {theme.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm font-medium text-purple-600 dark:text-purple-400 italic">
                                        {theme.tagline}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 font-normal">
                                        {theme.description}
                                    </p>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <p className="text-xs italic text-gray-500 dark:text-gray-500 line-clamp-2">
                                            "{theme.motto}"
                                        </p>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-xs font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
                                            Click to Register →
                                        </span>
                                    </div>
                                </CardContent>

                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mb-16">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 p-8 md:p-12 rounded-3xl shadow-sm border border-purple-200 dark:border-purple-800">
                            <h3 className="text-2xl sm:text-3xl font-medium text-black dark:text-white mb-4 tracking-tight">
                                Ready to Showcase Your Innovation?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                                Join universities and professionals from across India in presenting groundbreaking innovations. Register now and be part of India Innovates 2026!
                            </p>
                            <Button
                                onClick={handleRegisterAll}
                                size="lg"
                                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 text-white font-medium px-8 text-base tracking-wide hover:scale-[1.02] transition-all rounded-full shadow-lg shadow-purple-500/20"
                            >
                                Register Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">🏆</div>
                            <h4 className="font-medium text-black dark:text-white mb-2 text-lg">Recognition & Rewards</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                Winners receive certificates, recognition, and opportunities to collaborate with industry leaders
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">👨‍🏫</div>
                            <h4 className="font-medium text-black dark:text-white mb-2 text-lg">Expert Evaluation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                Projects evaluated by industry experts, researchers, and innovation leaders
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-3">🌟</div>
                            <h4 className="font-medium text-black dark:text-white mb-2 text-lg">National Platform</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                Present your innovations on India's premier platform for technological excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

UniversityCompetitions.displayName = 'UniversityCompetitions';

export default UniversityCompetitions;
