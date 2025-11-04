import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

const competitions = [
  {
    id: "drone-obstacle",
    name: "Drone Obstacle Crossing",
    description: "Navigate drones through challenging obstacle courses",
    icon: "🚁",
  },
  {
    id: "agritech",
    name: "Agritech – Smart Farming",
    description: "Showcase innovative smart farming solutions",
    icon: "🌾",
  },
  {
    id: "robots-war",
    name: "Robots War",
    description: "Robot fighting and task performance competition",
    icon: "🤖",
  },
  {
    id: "zero-waste",
    name: "Zero Waste Innovation",
    description: "Create useful products from waste materials",
    icon: "♻️",
  },
  {
    id: "reelbaaz",
    name: "ReelBaaz",
    description: "Create engaging 30-second reels",
    icon: "📱",
  },
  {
    id: "clickkarr",
    name: "Clickkarr – Photography",
    description: "Showcase photography and digital media skills",
    icon: "📸",
  },
  {
    id: "ad-mad-show",
    name: "AD Mad Show",
    description: "Create and present innovative advertisements",
    icon: "🎬",
  },
  {
    id: "debate",
    name: "Debate Competition",
    description: "Showcase debating skills on contemporary topics",
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
              Participate in exciting competitions and showcase your talents!
            </p>
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
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 font-normal">
                    {competition.description}
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

          {/* Individual/Team Participation Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-900/20 p-8 md:p-12 rounded-3xl shadow-sm border-2 border-blue-200 dark:border-blue-800">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-blue-500/20">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium text-black dark:text-white mb-4 tracking-tight">
                  Independent Students & Teams Welcome!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto font-light leading-relaxed text-lg">
                  Not representing a school? No problem! Individual students and independent teams can also participate in all competitions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl">
                  <div className="text-4xl mb-3">👨‍🎓</div>
                  <h4 className="font-semibold text-black dark:text-white mb-2 text-xl">Individual Students</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Compete as a solo participant and showcase your unique talents and innovations
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl">
                  <div className="text-4xl mb-3">👥</div>
                  <h4 className="font-semibold text-black dark:text-white mb-2 text-xl">Independent Teams</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    Form your own team with friends from different schools and compete together
                  </p>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-gray-900/60 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl mb-8">
                <h4 className="font-semibold text-black dark:text-white mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">💡</span> Registration Details
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span><strong>Same competitions:</strong> Access to all 8 exciting competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span><strong>Flexible registration:</strong> Register as an individual or form teams of 2-5 members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span><strong>Same benefits:</strong> Certificates, prizes, and recognition for all winners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span><strong>Individual fee:</strong> ₹500 per student (individual or team member)</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleRegisterAll}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-8 text-base tracking-wide hover:scale-[1.02] transition-all rounded-full shadow-lg shadow-blue-500/20"
                >
                  Register as Individual/Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
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
