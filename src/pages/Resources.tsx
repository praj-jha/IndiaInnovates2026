import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, FileSpreadsheet, FileText, CheckSquare, BookOpen, Search, TrendingUp } from "lucide-react";

const resourceCategories = [
    {
        id: "financial-models",
        title: "Financial Models",
        description: "Professional-grade Excel models for valuation, M&A, and financial planning",
        icon: FileSpreadsheet,
        color: "bg-green-500",
        items: [
            { name: "DCF Valuation Model", type: "Premium", downloads: "2.5k+" },
            { name: "LBO Model Template", type: "Premium", downloads: "1.8k+" },
            { name: "M&A Merger Model", type: "Premium", downloads: "1.2k+" },
            { name: "Startup Valuation Model", type: "Free", downloads: "5.1k+" }
        ]
    },
    {
        id: "pitch-decks",
        title: "Pitch Deck Templates",
        description: "Investment-ready presentation templates used by top firms",
        icon: TrendingUp,
        color: "bg-blue-500",
        items: [
            { name: "Series A Pitch Deck", type: "Premium", downloads: "3.2k+" },
            { name: "M&A Transaction Deck", type: "Premium", downloads: "2.1k+" },
            { name: "Startup Investor Deck", type: "Free", downloads: "4.8k+" },
            { name: "Corporate Strategy Deck", type: "Premium", downloads: "1.9k+" }
        ]
    },
    {
        id: "resume-templates",
        title: "Resume Templates",
        description: "ATS-friendly templates that land interviews at top firms",
        icon: FileText,
        color: "bg-purple-500",
        items: [
            { name: "Investment Banking Resume", type: "Free", downloads: "8.2k+" },
            { name: "Private Equity Resume", type: "Premium", downloads: "3.1k+" },
            { name: "Consulting Resume", type: "Free", downloads: "6.7k+" },
            { name: "Corporate Finance Resume", type: "Premium", downloads: "2.4k+" }
        ]
    },
    {
        id: "checklists",
        title: "Checklists",
        description: "Step-by-step guides for interviews, networking, and career prep",
        icon: CheckSquare,
        color: "bg-orange-500",
        items: [
            { name: "IB Interview Checklist", type: "Free", downloads: "7.3k+" },
            { name: "Due Diligence Checklist", type: "Premium", downloads: "2.8k+" },
            { name: "Networking Action Plan", type: "Free", downloads: "5.6k+" },
            { name: "First Day Preparation", type: "Premium", downloads: "1.7k+" }
        ]
    },
    {
        id: "case-studies",
        title: "Case Studies",
        description: "Real deal case studies from recent transactions and investments",
        icon: BookOpen,
        color: "bg-red-500",
        items: [
            { name: "Tesla-Twitter Acquisition", type: "Premium", downloads: "4.2k+" },
            { name: "Stripe Valuation Analysis", type: "Premium", downloads: "3.5k+" },
            { name: "Retail Industry Turnaround", type: "Free", downloads: "2.9k+" },
            { name: "Tech IPO Case Study", type: "Premium", downloads: "3.8k+" }
        ]
    },
    {
        id: "research-reports",
        title: "Research Reports",
        description: "Industry analysis and market research from our expert network",
        icon: Search,
        color: "bg-teal-500",
        items: [
            { name: "FinTech Market Report 2024", type: "Premium", downloads: "1.9k+" },
            { name: "ESG Investment Trends", type: "Free", downloads: "3.2k+" },
            { name: "AI in Financial Services", type: "Premium", downloads: "2.1k+" },
            { name: "Crypto Market Analysis", type: "Premium", downloads: "2.7k+" }
        ]
    }
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-500/30 dark:border-purple-700 rounded-full mb-6">
                            <p className="text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
                                Premium Resources Library
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
                            Everything You Need to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Excel in Finance</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            Access our curated collection of financial models, templates, case studies, and research reports used by professionals at top firms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                                Browse All Resources <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Join Premium Access
                            </Button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Resources Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50k+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">2.5k+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.9/5</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resourceCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{category.title}</CardTitle>
                                                <CardDescription className="text-sm">
                                                    {category.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {category.items.map((item, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                                                    <div className="flex-1">
                                                        <div className="font-medium text-sm">{item.name}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.downloads} downloads</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant={item.type === "Premium" ? "default" : "secondary"} className="text-xs">
                                                            {item.type}
                                                        </Badge>
                                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                                            <Download className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <Button className="w-full mt-4" variant="outline">
                                            View All {category.title}
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Access Premium Resources?
                    </h2>
                    <p className="text-lg mb-8 text-blue-100">
                        Join our community and get unlimited access to all premium resources, including exclusive models and templates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            Join Premium - ₹2,999/year
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
