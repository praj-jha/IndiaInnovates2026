import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

const competitions = [
  {
    id: "drone-obstacle",
    name: "Drone Obstacle Crossing",
    nameHindi: "ड्रोन ऑब्सटेकल क्रॉसिंग",
    description: "Navigate drones through challenging obstacle courses",
    descriptionHindi: "ड्रोन को निर्धारित बाधाओं से पार कराने की प्रतियोगिता",
    icon: "🚁",
  },
  {
    id: "agritech",
    name: "Agritech – Smart Farming",
    nameHindi: "एग्रीटेक – स्मार्ट फार्मिंग",
    description: "Showcase innovative smart farming solutions",
    descriptionHindi: "स्मार्ट खेती से जुड़े इनोवेशन मॉडल",
    icon: "🌾",
  },
  {
    id: "robots-war",
    name: "Robots War",
    nameHindi: "रोबोट्स वॉर",
    description: "Robot fighting and task performance",
    descriptionHindi: "रोबोट्स की फाइटिंग या टास्क परफॉर्मेंस प्रतियोगिता",
    icon: "🤖",
  },
  {
    id: "zero-waste",
    name: "Zero Waste Innovation",
    nameHindi: "जीरो वेस्ट इनोवेशन",
    description: "Create useful products from waste materials",
    descriptionHindi: "कचरे को पुनः उपयोग कर नई उपयोगी वस्तुएँ बनाना",
    icon: "♻️",
  },
  {
    id: "reelbaaz",
    name: "ReelBaaz",
    nameHindi: "रीलबाज़",
    description: "Create engaging 30-second reels",
    descriptionHindi: "30 सेकंड की आकर्षक रील बनाएं",
    icon: "📱",
  },
  {
    id: "clickkarr",
    name: "Clickkarr – Photography",
    nameHindi: "क्लिककर – फोटोग्राफी",
    description: "Showcase photography and digital media skills",
    descriptionHindi: "फोटोग्राफी या डिजिटल मीडिया क्रिएशन कॉन्टेस्ट",
    icon: "📸",
  },
  {
    id: "ad-mad-show",
    name: "AD Mad Show",
    nameHindi: "एडी मैड शो",
    description: "Create and present innovative advertisements",
    descriptionHindi: "विज्ञापन बनाने और प्रस्तुत करने की प्रतियोगिता",
    icon: "🎬",
  },
  {
    id: "debate",
    name: "Debate Competition",
    nameHindi: "वाद-विवाद प्रतियोगिता",
    description: "Showcase debating skills on contemporary topics",
    descriptionHindi: "समकालीन विषयों पर वाद-विवाद प्रतियोगिता",
    icon: "🎤",
  },
];

const SchoolCompetitions = () => {
  const navigate = useNavigate();

  const handleCompetitionClick = (competitionId: string) => {
    navigate(`/school-competitions-register?competition=${competitionId}`);
  };

  const handleRegisterAll = () => {
    navigate("/school-competitions-register");
  };

  return (
    <>
      <Helmet>
        <title>School Competitions - India Innovates</title>
        <meta
          name="description"
          content="Explore exciting school competitions including Drone Obstacle Crossing, Agritech, Robots War, and more at India Innovates Summit 2025."
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
              School Competitions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 font-light">
              स्कूली प्रतियोगिताएं | Participate in exciting competitions and showcase your talents!
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 px-6 py-3 rounded-full">
              <span className="text-lg font-medium bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                Registration Fee: ₹2,200 per school
              </span>
            </div>
          </div>

          {/* Competitions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {competitions.map((competition, index) => (
              <Card
                key={competition.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-purple-300 dark:hover:border-purple-700 rounded-2xl"
                onClick={() => handleCompetitionClick(competition.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="text-5xl">{competition.icon}</div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg leading-tight font-medium text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {competition.name}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {competition.nameHindi}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 font-normal">
                    {competition.descriptionHindi}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400 group-hover:underline">
                      Click to Register →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 p-8 md:p-12 rounded-3xl shadow-sm border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl sm:text-3xl font-medium text-black dark:text-white mb-4 tracking-tight">
                Ready to Register Your School?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Join us for an exciting showcase of innovation and talent. Register now and be part of India Innovates 2025!
              </p>
              <Button
                onClick={handleRegisterAll}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 text-white font-medium px-8 text-base tracking-wide hover:scale-[1.02] transition-all rounded-full shadow-lg shadow-purple-500/20"
              >
                Register Your School Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-medium text-black dark:text-white mb-2 text-lg">Exciting Prizes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Winners get certificates, trophies, and exciting prizes
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h4 className="font-medium text-black dark:text-white mb-2 text-lg">Expert Judges</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Evaluated by industry experts and professionals
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-medium text-black dark:text-white mb-2 text-lg">Platform for Excellence</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Showcase your talents on a national platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolCompetitions;
