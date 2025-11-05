import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/home/Footer";

interface PassFeature {
    text: string;
    included: boolean;
    highlighted?: boolean;
}

interface DelegatePass {
    title: string;
    price: string;
    usdPrice: string;
    gst: string;
    badge: string;
    badgeColor: string;
    features: PassFeature[];
    registerLink: string;
    borderColor: string;
}

const delegatePasses: DelegatePass[] = [
    {
        title: "Premium Delegate Pass",
        price: "₹15,000",
        usdPrice: "$181",
        gst: "+18% GST",
        badge: "CXO, MD, Sr. Govt Officials, Startup Founders, Investors",
        badgeColor: "bg-gradient-to-r from-yellow-600 to-amber-600",
        borderColor: "border-yellow-500",
        registerLink: "/delegate-registration",
        features: [
            { text: "Exclusive Business Lounge Access", included: true, highlighted: true },
            { text: "All Conference Access", included: true },
            { text: "Award Ceremony Access", included: true, highlighted: true },
            { text: "Lunch in VIP Dining Area", included: true },
            { text: "Exclusive Interaction with chief guests", included: true },
            { text: "Priority conference seating", included: true },
            { text: "Startup Expo Access", included: true },
            { text: "Workshop Access", included: true },
            { text: "Startup Product's Launch Access", included: true },
            { text: "Industry Roundtable Access", included: true },
            { text: "GALA Dinner", included: true },
            { text: "VIP car parking pass", included: true },
            { text: "Delegate kits", included: true },
            { text: "Discussion with top MPs", included: true },
        ],
    },
    {
        title: "Business Delegate Pass",
        price: "₹7,500",
        usdPrice: "$90",
        gst: "+18% GST",
        badge: "CXO, Startup Founders, Investors",
        badgeColor: "bg-gradient-to-r from-slate-500 to-gray-500",
        borderColor: "border-slate-400",
        registerLink: "/delegate-registration",
        features: [
            { text: "Exclusive Business Lounge Access", included: false },
            { text: "All Conference Access", included: true },
            { text: "Award Ceremony Access", included: true, highlighted: true },
            { text: "Lunch in VIP Dining Area", included: false },
            { text: "Exclusive Interaction with chief guests", included: false },
            { text: "Priority conference seating", included: false },
            { text: "Startup Expo Access", included: true },
            { text: "Workshop Access", included: true },
            { text: "Startup Product's Launch Access", included: true },
            { text: "Industry Roundtable Access", included: false },
            { text: "GALA Dinner", included: false },
            { text: "VIP car parking pass", included: false },
            { text: "Delegate kits", included: false },
            { text: "Discussion with top MPs", included: false },
        ],
    },
    {
        title: "Standard Delegate Pass",
        price: "₹1,999",
        usdPrice: "$24",
        gst: "+18% GST",
        badge: "Business Representatives, Researchers, Students",
        badgeColor: "bg-gradient-to-r from-orange-600 to-orange-700",
        borderColor: "border-orange-500",
        registerLink: "/delegate-registration",
        features: [
            { text: "Exclusive Business Lounge Access", included: false },
            { text: "All Conference Access", included: true },
            { text: "Award Ceremony Access", included: false },
            { text: "Lunch in VIP Dining Area", included: false },
            { text: "Exclusive Interaction with chief guests", included: false },
            { text: "Priority conference seating", included: false },
            { text: "Startup Expo Access", included: true },
            { text: "Workshop Access", included: true },
            { text: "Startup Product's Launch Access", included: false },
            { text: "Industry Roundtable Access", included: false },
            { text: "GALA Dinner", included: false },
            { text: "VIP car parking pass", included: false },
            { text: "Delegate kits", included: false },
            { text: "Discussion with top MPs", included: false },
        ],
    },
    {
        title: "Government Pass",
        price: "Free",
        usdPrice: "",
        gst: "",
        badge: "Government Officials & Public Sector Representatives",
        badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
        borderColor: "border-purple-400",
        registerLink: "/delegate-registration",
        features: [
            { text: "Inauguration seating", included: true },
            { text: "Access to conference", included: true },
            { text: "B2B networking access", included: true },
            { text: "Exhibition access", included: true },
        ],
    },
    {
        title: "Media Pass",
        price: "Free",
        usdPrice: "",
        gst: "",
        badge: "Journalists, Reporters & Media Personnel",
        badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
        borderColor: "border-purple-400",
        registerLink: "/delegate-registration",
        features: [
            { text: "Inauguration seating", included: true },
            { text: "Access to conference", included: true },
            { text: "B2B networking access", included: true },
            { text: "Media Kit", included: true },
            { text: "Lunch in delegate Dining Area", included: true },
            { text: "Exhibition access", included: true },
            { text: "Award Night", included: true },
            { text: "Media car parking pass", included: true },
        ],
    },
    {
        title: "Visitors Pass",
        price: "Free",
        usdPrice: "",
        gst: "",
        badge: "Students & General Visitors",
        badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
        borderColor: "border-purple-400",
        registerLink: "/delegate-registration",
        features: [
            { text: "Access to conference", included: true },
            { text: "Exhibition access", included: true },
        ],
    },
];

export default function DelegatePass() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Delegate Pass - India Innovates 2026</title>
                <meta name="description" content="Choose your delegate pass for India Innovates 2026 - Premium, Business, Standard, Government, Media, or Visitors Pass" />
                <meta name="keywords" content="India Innovates, delegate pass, conference pass, event registration" />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background dark:from-gray-900">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Choose Your <span className="text-purple-600">Delegate Pass</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Select the perfect pass that fits your conference needs
                    </p>
                </div>
            </section>

            {/* Main Passes Grid (Premium, Business, Standard) */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {delegatePasses.slice(0, 3).map((pass, index) => (
                            <Card
                                key={index}
                                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 border-4 ${pass.borderColor} hover:-translate-y-2 flex flex-col`}
                            >
                                <CardHeader className="space-y-4 pb-4">
                                    <CardTitle className="text-2xl font-bold text-center">
                                        {pass.title}
                                    </CardTitle>

                                    {/* Badge */}
                                    <div className={`${pass.badgeColor} text-white text-sm font-medium px-4 py-3 rounded text-center`}>
                                        {pass.badge}
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-1 py-4">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-5xl font-bold text-purple-600">
                                                {pass.price}
                                            </span>
                                            {pass.usdPrice && (
                                                <span className="text-xl text-muted-foreground">
                                                    / {pass.usdPrice}
                                                </span>
                                            )}
                                        </div>
                                        {pass.gst && (
                                            <p className="text-base text-purple-600 font-semibold text-center">
                                                {pass.gst}
                                            </p>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4 flex-1 flex flex-col">
                                    {/* Features List */}
                                    <ul className="space-y-3 flex-1">
                                        {pass.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${feature.highlighted ? 'text-purple-600' : 'text-green-600'}`} />
                                                ) : (
                                                    <X className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                                                )}
                                                <span className={`text-sm ${!feature.included ? 'text-gray-400 line-through' : feature.highlighted ? 'text-purple-600 font-semibold' : ''}`}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Register Button */}
                                    <Button
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 text-base rounded-lg mt-4"
                                        asChild
                                    >
                                        <a href={pass.registerLink}>REGISTER NOW</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Passes Section (Government, Media, Visitors) */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                            Additional <span className="text-purple-600">Pass Options</span>
                        </h2>
                        <p className="text-muted-foreground">Special passes for government officials, media, and visitors</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {delegatePasses.slice(3).map((pass, index) => (
                            <Card
                                key={index}
                                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 border-4 ${pass.borderColor} hover:-translate-y-2 flex flex-col`}
                            >
                                <CardHeader className="space-y-4 pb-4">
                                    <CardTitle className="text-2xl font-bold text-center">
                                        {pass.title}
                                    </CardTitle>

                                    {/* Badge */}
                                    <div className={`${pass.badgeColor} text-white text-sm font-medium px-4 py-3 rounded text-center`}>
                                        {pass.badge}
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-1 py-4">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-5xl font-bold text-green-600">
                                                {pass.price}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4 flex-1 flex flex-col">
                                    {/* Features List */}
                                    <ul className="space-y-3 flex-1">
                                        {pass.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />
                                                <span className="text-sm">
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Register Button */}
                                    <Button
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 text-base rounded-lg mt-4"
                                        asChild
                                    >
                                        <a href={pass.registerLink}>REGISTER NOW</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
