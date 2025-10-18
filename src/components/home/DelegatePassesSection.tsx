import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        badgeColor: "bg-red-600",
        borderColor: "border-purple-300",
        registerLink: "/delegate-registration",
        features: [
            { text: "Exclusive Business Lounge Access", included: true, highlighted: true },
            { text: "All Conference Access", included: true },
            { text: "Award Ceremony Access", included: true, highlighted: true },
            { text: "Lunch in VIP Dining Area", included: true },
            { text: "Exclusive Interaction with chief guests", included: true },
        ],
    },
    {
        title: "Business Delegate Pass",
        price: "₹7,500",
        usdPrice: "$90",
        gst: "+18% GST",
        badge: "CXO, Startup Founders, Investors",
        badgeColor: "bg-red-600",
        borderColor: "border-purple-300",
        registerLink: "/delegate-registration",
        features: [
            { text: "All Conference Access", included: true },
            { text: "Award Ceremony Access", included: true, highlighted: true },
            { text: "Startup Expo Access", included: true },
            { text: "Workshop Access", included: true },
            { text: "Startup Product's Launch Access", included: true },
        ],
    },
    {
        title: "Standard Delegate Pass",
        price: "₹1,999",
        usdPrice: "$24",
        gst: "+18% GST",
        badge: "Business Representatives, Researchers, Students",
        badgeColor: "bg-red-600",
        borderColor: "border-purple-300",
        registerLink: "/delegate-registration",
        features: [
            { text: "All Conference Access", included: true },
            { text: "Startup Expo Access", included: true },
            { text: "Workshop Access", included: true },
            { text: "Exhibition access", included: true },
        ],
    },
];

export function DelegatePassesSection() {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Choose Your <span className="text-purple-600">Delegate Pass</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                        Select the perfect pass that fits your conference needs
                    </p>
                </div>

                {/* Passes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {delegatePasses.map((pass, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${pass.borderColor} hover:-translate-y-2`}
                        >
                            <CardHeader className="space-y-4">
                                <CardTitle className="text-2xl font-bold">
                                    {pass.title}
                                </CardTitle>

                                {/* Badge */}
                                <div className={`${pass.badgeColor} text-white text-sm font-medium px-4 py-2 rounded text-center`}>
                                    {pass.badge}
                                </div>

                                {/* Price */}
                                <div className="space-y-1">
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-4xl font-bold text-purple-600">
                                            {pass.price}
                                        </span>
                                        {pass.usdPrice && (
                                            <span className="text-lg text-gray-600 dark:text-gray-400">
                                                / {pass.usdPrice}
                                            </span>
                                        )}
                                    </div>
                                    {pass.gst && (
                                        <p className="text-sm text-purple-600 font-medium text-center">
                                            {pass.gst}
                                        </p>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Features List */}
                                <ul className="space-y-3">
                                    {pass.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
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
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 text-base"
                                    onClick={() => navigate(pass.registerLink)}
                                >
                                    REGISTER NOW
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button
                        onClick={() => navigate('/delegate-pass')}
                        variant="outline"
                        size="lg"
                        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-6 text-base"
                    >
                        View All Delegate Passes
                    </Button>
                </div>
            </div>
        </section>
    );
}
