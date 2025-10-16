import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Trophy, CheckCircle, Star, BookOpen, Target } from "lucide-react";

const fellowships = [
    {
        id: "ib-fellowship",
        title: "Investment Banking Fellowship",
        duration: "4-5 Weeks",
        price: "₹25,000",
        status: "Launching Soon",
        level: "Advanced",
        description: "Comprehensive program covering financial modeling, valuation, M&A transactions, and pitch deck creation",
        highlights: [
            "Build 5+ financial models from scratch",
            "Work on real M&A case studies",
            "1-on-1 mentorship with IB professionals",
            "Certificate from industry experts",
            "Live project with actual company data"
        ],
        skills: ["Financial Modeling", "Valuation", "M&A Analysis", "Pitch Decks", "Excel Mastery"],
        mentors: ["Goldman Sachs", "Morgan Stanley", "JP Morgan"],
        color: "from-blue-500 to-blue-700"
    },
    {
        id: "pe-fellowship",
        title: "Private Equity Fellowship",
        duration: "4-5 Weeks",
        price: "₹7,000",
        status: "Launching Soon",
        level: "Intermediate",
        description: "Deep dive into private equity with LBO modeling, due diligence, and portfolio company analysis",
        highlights: [
            "Master LBO financial modeling",
            "Conduct full due diligence process",
            "Portfolio company value creation",
            "Industry expert mentorship",
            "Real PE case study projects"
        ],
        skills: ["LBO Modeling", "Due Diligence", "Value Creation", "Portfolio Analysis", "Risk Assessment"],
        mentors: ["KKR", "Blackstone", "Carlyle Group"],
        color: "from-purple-500 to-purple-700"
    },
    {
        id: "vc-fellowship",
        title: "Venture Capital Fellowship",
        duration: "4-5 Weeks",
        price: "₹6,000",
        status: "Launching Soon",
        level: "Intermediate",
        description: "Learn startup evaluation, term sheet negotiation, and portfolio management in the VC ecosystem",
        highlights: [
            "Startup valuation methodologies",
            "Term sheet analysis & negotiation",
            "Market research and sizing",
            "Pitch evaluation frameworks",
            "Portfolio management strategies"
        ],
        skills: ["Startup Valuation", "Term Sheets", "Market Analysis", "Due Diligence", "Pattern Recognition"],
        mentors: ["Sequoia Capital", "Accel Partners", "Matrix Partners"],
        color: "from-green-500 to-green-700"
    },
    {
        id: "corp-dev-fellowship",
        title: "Corporate Development Fellowship",
        duration: "4-5 Weeks",
        price: "₹5,000",
        status: "Launching Soon",
        level: "Intermediate",
        description: "Strategic planning, M&A execution, and business development within corporate environments",
        highlights: [
            "Strategic planning frameworks",
            "M&A process and execution",
            "Business development strategies",
            "Cross-functional collaboration",
            "Strategic partnership evaluation"
        ],
        skills: ["Strategic Planning", "M&A Execution", "Business Development", "Financial Analysis", "Partnership Evaluation"],
        mentors: ["Microsoft", "Google", "Amazon"],
        color: "from-orange-500 to-orange-700"
    },
    {
        id: "ai-finance-fellowship",
        title: "AI in Corporate Finance Fellowship",
        duration: "4 Weeks",
        price: "₹10,000",
        status: "Launching Soon",
        level: "Advanced",
        description: "Cutting-edge program combining AI/ML applications with corporate finance and investment analysis",
        highlights: [
            "AI-powered financial modeling",
            "Machine learning for risk assessment",
            "Automated due diligence tools",
            "Predictive analytics in finance",
            "Build AI-enhanced investment tools"
        ],
        skills: ["Python for Finance", "Machine Learning", "Data Analysis", "AI Tools", "Automated Modeling"],
        mentors: ["Two Sigma", "Renaissance Technologies", "DE Shaw"],
        color: "from-teal-500 to-teal-700"
    }
];

export default function FellowshipsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-600/10 dark:from-orange-900/30 dark:to-red-900/30 border border-orange-500/30 dark:border-red-700 rounded-full mb-6">
                            <p className="text-orange-700 dark:text-orange-300 text-sm font-semibold tracking-wide uppercase">
                                Intensive Fellowship Programs
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
                            Fast-Track Your <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">Finance Career</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            Join our intensive 4-5 week fellowship programs designed by industry experts. Get hands-on experience with real projects and direct mentorship from professionals at top firms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                                Browse All Fellowships <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Apply for Early Access
                            </Button>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">95%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Job Placement Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-2">4-5</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Week Duration</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1:5</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Mentor Ratio</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Alumni Network</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fellowship Programs */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {fellowships.map((fellowship) => (
                            <Card key={fellowship.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${fellowship.color} flex items-center justify-center`}>
                                                    <BookOpen className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl">{fellowship.title}</CardTitle>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="secondary" className="text-xs">
                                                            <Clock className="w-3 h-3 mr-1" />
                                                            {fellowship.duration}
                                                        </Badge>
                                                        <Badge variant={fellowship.level === "Advanced" ? "destructive" : "default"} className="text-xs">
                                                            {fellowship.level}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-primary">{fellowship.price}</div>
                                            <Badge variant="outline" className="text-xs text-orange-600 border-orange-600">
                                                {fellowship.status}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {fellowship.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {/* Key Highlights */}
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center">
                                            <Trophy className="w-4 h-4 mr-2 text-orange-500" />
                                            What You'll Achieve
                                        </h4>
                                        <div className="space-y-2">
                                            {fellowship.highlights.slice(0, 3).map((highlight, index) => (
                                                <div key={index} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center">
                                            <Target className="w-4 h-4 mr-2 text-blue-500" />
                                            Skills You'll Master
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {fellowship.skills.map((skill, index) => (
                                                <Badge key={index} variant="secondary" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mentors */}
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center">
                                            <Users className="w-4 h-4 mr-2 text-purple-500" />
                                            Learn from Experts at
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {fellowship.mentors.map((mentor, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {mentor}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4 space-y-3">
                                        <Button className={`w-full bg-gradient-to-r ${fellowship.color} text-white hover:opacity-90`}>
                                            Apply for Early Access
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            Download Curriculum
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                            How Our Fellowships Work
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Our structured approach ensures you get maximum value and real-world experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Apply & Get Selected</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Submit your application and go through our selection process
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Learn & Build</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Work on real projects with hands-on guidance from mentors
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Get Certified</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Receive industry-recognized certification upon completion
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Land Your Dream Job</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Get placed with our extensive network and career support
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-lg mb-8 text-orange-100">
                        Join thousands of professionals who have accelerated their finance careers through our fellowship programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                            Apply for Early Access
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
