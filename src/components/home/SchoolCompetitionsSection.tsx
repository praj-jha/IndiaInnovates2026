import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";

const competitions = [
    {
        id: "drone-obstacle",
        name: "Drone Obstacle Crossing",
        nameHindi: "ड्रोन ऑब्सटेकल क्रॉसिंग",
        description: "Navigate drones through challenging obstacle courses",
        descriptionHindi: "ड्रोन को निर्धारित बाधाओं से पार कराने की प्रतियोगिता",
        icon: "🚁",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: "agritech",
        name: "Agritech – Smart Farming",
        nameHindi: "एग्रीटेक – स्मार्ट फार्मिंग",
        description: "Showcase innovative smart farming solutions",
        descriptionHindi: "स्मार्ट खेती से जुड़े इनोवेशन मॉडल",
        icon: "🌾",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        id: "robots-war",
        name: "Robots War",
        nameHindi: "रोबोट्स वॉर",
        description: "Robot fighting and task performance",
        descriptionHindi: "रोबोट्स की फाइटिंग या टास्क परफॉर्मेंस प्रतियोगिता",
        icon: "🤖",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: "zero-waste",
        name: "Zero Waste Innovation",
        nameHindi: "जीरो वेस्ट इनोवेशन",
        description: "Create useful products from waste materials",
        descriptionHindi: "कचरे को पुनः उपयोग कर नई उपयोगी वस्तुएँ बनाना",
        icon: "♻️",
        gradient: "from-teal-500 to-green-500",
    },
    {
        id: "reelbaaz",
        name: "ReelBaaz",
        nameHindi: "रीलबाज़",
        description: "Create engaging 30-second reels",
        descriptionHindi: "30 सेकंड की आकर्षक रील बनाएं",
        icon: "📱",
        gradient: "from-rose-500 to-orange-500",
    },
    {
        id: "clickkarr",
        name: "Clickkarr – Photography",
        nameHindi: "क्लिककर – फोटोग्राफी",
        description: "Showcase photography and digital media skills",
        descriptionHindi: "फोटोग्राफी या डिजिटल मीडिया क्रिएशन कॉन्टेस्ट",
        icon: "📸",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        id: "ad-mad-show",
        name: "AD Mad Show",
        nameHindi: "एडी मैड शो",
        description: "Create and present innovative advertisements",
        descriptionHindi: "विज्ञापन बनाने और प्रस्तुत करने की प्रतियोगिता",
        icon: "🎬",
        gradient: "from-yellow-500 to-amber-500",
    },
    {
        id: "debate",
        name: "Debate Competition",
        nameHindi: "वाद-विवाद प्रतियोगिता",
        description: "Showcase debating skills on contemporary topics",
        descriptionHindi: "समकालीन विषयों पर वाद-विवाद प्रतियोगिता",
        icon: "🎤",
        gradient: "from-red-500 to-pink-500",
    },
];

const SchoolCompetitionsSection = () => {
    const navigate = useNavigate();

    const handleCompetitionClick = (competitionId: string) => {
        navigate(`/school-competitions?competition=${competitionId}`);
    };

    const handleRegisterAll = () => {
        navigate("/school-competitions");
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
                        School Competitions
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                        स्कूली प्रतियोगिताएं | Participate in exciting competitions and showcase your talents!
                    </p>
                    <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full">
                        <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                            Registration Fee: ₹2,200 per school
                        </span>
                    </div>
                </div>

                {/* Competitions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {competitions.map((competition, index) => (
                        <Card
                            key={competition.id}
                            className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-orange-400"
                            onClick={() => handleCompetitionClick(competition.id)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${competition.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                            <CardHeader className="space-y-3 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="text-5xl">{competition.icon}</div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                                    {competition.name}
                                </CardTitle>
                                <CardDescription className="text-xs font-medium">
                                    {competition.nameHindi}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative z-10">
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                    {competition.descriptionHindi}
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:underline">
                                        Click to Register →
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-green-500 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready to Register Your School?
                        </h3>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join us for an exciting showcase of innovation and talent. Register now and be part of India Innovates 2025!
                        </p>
                        <Button
                            onClick={handleRegisterAll}
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg"
                        >
                            Register Your School Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-3xl mb-2">🏆</div>
                        <h4 className="font-semibold mb-2">Exciting Prizes</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Winners get certificates, trophies, and exciting prizes
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-3xl mb-2">👨‍🏫</div>
                        <h4 className="font-semibold mb-2">Expert Judges</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Evaluated by industry experts and professionals
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-3xl mb-2">🌟</div>
                        <h4 className="font-semibold mb-2">Platform for Excellence</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Showcase your talents on a national platform
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolCompetitionsSection;
