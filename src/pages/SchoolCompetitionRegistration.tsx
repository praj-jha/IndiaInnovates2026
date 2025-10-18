import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Trophy, Rocket, Building2, GraduationCap, Users, Phone, Mail, MapPin } from "lucide-react";

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
        name: "Agritech – Smart Farming Models",
        nameHindi: "एग्रीटेक – स्मार्ट फार्मिंग मॉडल",
        description: "Showcase innovative smart farming solutions",
        descriptionHindi: "स्मार्ट खेती से जुड़े इनोवेशन मॉडल",
        icon: "🌾",
    },
    {
        id: "robots-war",
        name: "Robots War",
        nameHindi: "रोबोट्स वॉर",
        description: "Robot fighting and task performance competition",
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
        name: "ReelBaaz (30s Reel Making)",
        nameHindi: "रीलबाज़ (30 सेकंड रील मेकिंग)",
        description: "Create engaging 30-second reels",
        descriptionHindi: "30 सेकंड की आकर्षक रील बनाएं",
        icon: "📱",
    },
    {
        id: "clickkarr",
        name: "Clickkarr – Photography Contest",
        nameHindi: "क्लिककर – फोटोग्राफी कॉन्टेस्ट",
        description: "Showcase photography and digital media creation skills",
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

interface FormData {
    schoolName: string;
    principalName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    contactPerson: string;
    contactPersonPhone: string;
    numberOfStudents: string;
    selectedCompetitions: string[];
}

const SchoolCompetitionRegistration = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const preSelectedCompetition = searchParams.get("competition");

    const [formData, setFormData] = useState<FormData>({
        schoolName: "",
        principalName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        contactPerson: "",
        contactPersonPhone: "",
        numberOfStudents: "",
        selectedCompetitions: preSelectedCompetition ? [preSelectedCompetition] : [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCompetitionToggle = (competitionId: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedCompetitions: prev.selectedCompetitions.includes(competitionId)
                ? prev.selectedCompetitions.filter((id) => id !== competitionId)
                : [...prev.selectedCompetitions, competitionId],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (formData.selectedCompetitions.length === 0) {
            toast({
                title: "No Competition Selected",
                description: "Please select at least one competition to participate in.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Here you would typically send the data to your backend
            console.log("Form Data:", formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Registration Successful! 🎉",
                description: `Your school has been registered for ${formData.selectedCompetitions.length} competition(s). Total fee: ₹2,200. You will receive a confirmation email shortly.`,
            });

            // Reset form or redirect
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            toast({
                title: "Registration Failed",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>School Competition Registration - India Innovates</title>
                <meta
                    name="description"
                    content="Register your school for exciting competitions including Drone Obstacle Crossing, Agritech, Robots War, and more at India Innovates."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4">
                            <Trophy className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-4">
                            School Competition Registration
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Register your school for exciting competitions at India Innovates Summit 2025
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full">
                            <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                Registration Fee: ₹2,200
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* School Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-orange-600" />
                                    School Information
                                </CardTitle>
                                <CardDescription>Basic details about your institution</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="schoolName">School Name *</Label>
                                    <Input
                                        id="schoolName"
                                        name="schoolName"
                                        value={formData.schoolName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter school name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="principalName">Principal's Name *</Label>
                                    <Input
                                        id="principalName"
                                        name="principalName"
                                        value={formData.principalName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter principal's name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address *
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="school@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone Number *
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="address" className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Address *
                                    </Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Street address"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">City *</Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="City"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state">State *</Label>
                                    <Input
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="State"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pincode">Pincode *</Label>
                                    <Input
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Pincode"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Person */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-orange-600" />
                                    Contact Person Details
                                </CardTitle>
                                <CardDescription>Point of contact for competition coordination</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="contactPerson">Contact Person Name *</Label>
                                    <Input
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Teacher/Coordinator name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contactPersonPhone">Contact Person Phone *</Label>
                                    <Input
                                        id="contactPersonPhone"
                                        name="contactPersonPhone"
                                        type="tel"
                                        value={formData.contactPersonPhone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="numberOfStudents" className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        Approximate Number of Participating Students
                                    </Label>
                                    <Input
                                        id="numberOfStudents"
                                        name="numberOfStudents"
                                        type="number"
                                        value={formData.numberOfStudents}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 20"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Competition Selection */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-orange-600" />
                                    Select Competitions
                                </CardTitle>
                                <CardDescription>Choose the competitions your school wants to participate in</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {competitions.map((competition) => (
                                        <div
                                            key={competition.id}
                                            className={`border-2 rounded-lg p-4 transition-all ${formData.selectedCompetitions.includes(competition.id)
                                                ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                                                : "border-gray-200 dark:border-gray-700"
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <Checkbox
                                                    checked={formData.selectedCompetitions.includes(competition.id)}
                                                    onCheckedChange={() => handleCompetitionToggle(competition.id)}
                                                    className="mt-1"
                                                />
                                                <div
                                                    className="flex-1 cursor-pointer"
                                                    onClick={() => handleCompetitionToggle(competition.id)}
                                                >
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-2xl">{competition.icon}</span>
                                                        <h3 className="font-semibold text-sm">{competition.name}</h3>
                                                    </div>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                        {competition.nameHindi}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                                        {competition.descriptionHindi}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {formData.selectedCompetitions.length > 0 && (
                                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                        <p className="text-sm font-medium text-green-800 dark:text-green-300">
                                            ✓ {formData.selectedCompetitions.length} competition(s) selected
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center gap-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                            >
                                {isSubmitting ? "Submitting..." : "Register School (₹2,200)"}
                            </Button>
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-md">
                                By registering, you agree to our terms and conditions. You will receive a payment link via email after submission.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SchoolCompetitionRegistration;
