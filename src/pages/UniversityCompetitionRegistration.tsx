import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Trophy, Building2, Phone, Mail, MapPin, Briefcase, GraduationCap, Lightbulb, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { submitThemeRegistration } from "@/services/api";

const themes = [
    {
        id: "biotechnology",
        name: "Biotechnology",
        icon: "🧬",
        description: "Innovations in biotech, genomics, and life sciences"
    },
    {
        id: "manufacturing-industry",
        name: "Manufacturing & Industry 4.0",
        icon: "⚙️",
        description: "Smart manufacturing and industrial automation"
    },
    {
        id: "smart-cities",
        name: "Smart Cities & Urban Mobility",
        icon: "🌆",
        description: "Urban solutions and intelligent transportation"
    },
    {
        id: "blue-economy",
        name: "Blue Economy",
        icon: "🌊",
        description: "Ocean resources and maritime innovations"
    },
    {
        id: "disaster-management",
        name: "Disaster Management & Resilient Infrastructure",
        icon: "🌪️",
        description: "Emergency response and resilient systems"
    },
    {
        id: "next-gen-communications",
        name: "Next-Gen Communications",
        icon: "📡",
        description: "5G, 6G, and advanced networking"
    },
    {
        id: "space-aerospace-defence",
        name: "Space, Aerospace & Defence",
        icon: "🚀",
        description: "Space tech and defense innovations"
    },
    {
        id: "healthcare-medtech",
        name: "Healthcare & MedTech",
        icon: "🏥",
        description: "Medical technology and healthcare solutions"
    },
    {
        id: "advanced-computing",
        name: "Advanced Computing, AI & Quantum",
        icon: "💻",
        description: "AI, machine learning, and quantum computing"
    },
    {
        id: "semiconductors",
        name: "Semiconductors & Microelectronics",
        icon: "🧠",
        description: "Chip design and microelectronics"
    },
    {
        id: "agriculture-food",
        name: "Agriculture & Food Technologies",
        icon: "🌾",
        description: "AgriTech and food innovation"
    },
    {
        id: "energy-sustainability",
        name: "Energy, Sustainability & Climate Change",
        icon: "🔋",
        description: "Renewable energy and climate solutions"
    },
    {
        id: "advanced-materials",
        name: "Advanced Materials & Critical Minerals",
        icon: "⚗️",
        description: "New materials and mineral technologies"
    },
    {
        id: "pollution",
        name: "Pollution Control & Environmental Solutions",
        icon: "🌍",
        description: "Environmental protection and remediation"
    },
    {
        id: "women-safety",
        name: "Women Safety & Empowerment",
        icon: "👩",
        description: "Solutions for women's safety and empowerment"
    },
    {
        id: "custom-category",
        name: "Other - Custom Category",
        icon: "✨",
        description: "Don't see your category? Register with a custom theme"
    },
];

interface FormData {
    participantType: "university" | "professional" | "";
    organizationName: string;
    participantName: string;
    designation: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    projectTitle: string;
    projectDescription: string;
    teamSize: string;
    selectedTheme: string;
}

const UniversityCompetitionRegistration = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const preSelectedTheme = searchParams.get("theme");

    const [currentStep, setCurrentStep] = useState(preSelectedTheme ? 2 : 1);
    const [formData, setFormData] = useState<FormData>({
        participantType: "",
        organizationName: "",
        participantName: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        projectTitle: "",
        projectDescription: "",
        teamSize: "",
        selectedTheme: preSelectedTheme || "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleThemeSelect = (themeId: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedTheme: themeId,
        }));
        // Auto-advance to next step after theme selection
        setTimeout(() => setCurrentStep(2), 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.selectedTheme) {
            toast({
                title: "No Theme Selected",
                description: "Please select a theme for your innovation.",
                variant: "destructive",
            });
            setCurrentStep(1);
            return;
        }

        if (!formData.participantType) {
            toast({
                title: "Participant Type Required",
                description: "Please select whether you're from a university or professional background.",
                variant: "destructive",
            });
            return;
        }

        // Validate word count for project description
        const wordCount = formData.projectDescription.trim().split(/\s+/).filter((w) => w).length;
        if (wordCount < 100) {
            toast({
                title: "Description Too Short",
                description: `Your project description must be at least 100 words. Current: ${wordCount} words`,
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await submitThemeRegistration(formData);

            const selectedThemeName = themes.find((t) => t.id === formData.selectedTheme)?.name || "Selected theme";

            toast({
                title: "Registration Successful! 🎉",
                description: `Your registration for "${selectedThemeName}" has been submitted successfully. You will receive a confirmation email shortly.`,
            });

            // Reset form or redirect
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error: any) {
            toast({
                title: "Registration Failed",
                description: error?.message || "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectedThemeData = themes.find((t) => t.id === formData.selectedTheme);
    const wordCount = formData.projectDescription.trim().split(/\s+/).filter((w) => w).length;

    return (
        <>
            <Helmet>
                <title>Innovation Theme Registration - Universities & Professionals - India Innovates</title>
                <meta
                    name="description"
                    content="Register for innovation themes including Biotechnology, AI & Quantum Computing, Smart Cities, and more at India Innovates Summit 2026."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-background dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4 shadow-lg">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-3">
                            University Competition Registration
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Choose your innovation theme and register for India Innovates Summit 2026
                        </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="max-w-3xl mx-auto mb-8">
                        <div className="flex items-center justify-center gap-4">
                            <div className={`flex items-center gap-2 ${currentStep === 1 ? "text-purple-600 font-semibold" : "text-gray-400"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 1 ? "bg-purple-600 text-white" : currentStep > 1 ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                                    {currentStep > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
                                </div>
                                <span className="hidden sm:inline">Select Theme</span>
                            </div>
                            <div className="w-12 sm:w-24 h-0.5 bg-gray-300"></div>
                            <div className={`flex items-center gap-2 ${currentStep === 2 ? "text-purple-600 font-semibold" : "text-gray-400"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
                                    2
                                </div>
                                <span className="hidden sm:inline">Your Details</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* STEP 1: Theme Selection */}
                        {currentStep === 1 && (
                            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
                                <CardHeader className="text-center pb-6">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <Lightbulb className="w-6 h-6 text-purple-600" />
                                        <CardTitle className="text-2xl">Select Your Innovation Theme</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">
                                        Choose the theme that best matches your project or select "Custom Category" if none fit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {themes.map((theme) => (
                                            <div
                                                key={theme.id}
                                                className={`group relative p-5 border-2 rounded-xl cursor-pointer transition-all hover:shadow-lg ${
                                                    formData.selectedTheme === theme.id
                                                        ? theme.id === "custom-category"
                                                            ? "border-green-500 bg-green-50 dark:bg-green-950/20 shadow-md"
                                                            : "border-purple-500 bg-purple-50 dark:bg-purple-950/20 shadow-md"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                                                }`}
                                                onClick={() => handleThemeSelect(theme.id)}
                                            >
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-start justify-between">
                                                        <div className="text-4xl">{theme.icon}</div>
                                                        {formData.selectedTheme === theme.id && (
                                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                                                theme.id === "custom-category" ? "bg-green-600" : "bg-purple-600"
                                                            }`}>
                                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-base text-black dark:text-white leading-tight mb-1">
                                                            {theme.name}
                                                        </h4>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                                                            {theme.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {formData.selectedTheme && (
                                        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                            <p className="text-sm text-center text-purple-900 dark:text-purple-200">
                                                <strong>Selected:</strong> {selectedThemeData?.name}
                                                {formData.selectedTheme === "custom-category" && " - You'll specify your custom category in the project description"}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* STEP 2: Registration Form */}
                        {currentStep === 2 && (
                            <>
                                {/* Selected Theme Display */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-purple-200 dark:border-purple-700 shadow-md">
                                    <div className="flex items-center justify-between flex-wrap gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">{selectedThemeData?.icon}</div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Selected Theme:</p>
                                                <h3 className="font-semibold text-lg text-black dark:text-white">{selectedThemeData?.name}</h3>
                                            </div>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentStep(1)}
                                            className="text-purple-600 border-purple-300"
                                        >
                                            Change Theme
                                        </Button>
                                    </div>
                                </div>

                                {/* Participant Type */}
                                <Card className="border-gray-200 dark:border-gray-700 shadow-md">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5 text-purple-600" />
                                            Participant Type
                                        </CardTitle>
                                        <CardDescription>Are you a student or professional?</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div
                                                className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${
                                                    formData.participantType === "university"
                                                        ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                                                }`}
                                                onClick={() => setFormData((prev) => ({ ...prev, participantType: "university" }))}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <GraduationCap className="w-8 h-8 text-purple-600" />
                                                    <div>
                                                        <h3 className="font-semibold text-black dark:text-white">University/College</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">Students & Research Scholars</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${
                                                    formData.participantType === "professional"
                                                        ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                                                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                                                }`}
                                                onClick={() => setFormData((prev) => ({ ...prev, participantType: "professional" }))}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Briefcase className="w-8 h-8 text-purple-600" />
                                                    <div>
                                                        <h3 className="font-semibold text-black dark:text-white">Professional</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">Industry Professionals & Researchers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Organization & Personal Information */}
                                <Card className="border-gray-200 dark:border-gray-700 shadow-md">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Building2 className="w-5 h-5 text-purple-600" />
                                            {formData.participantType === "university" ? "University" : "Organization"} & Personal Information
                                        </CardTitle>
                                        <CardDescription>Tell us about yourself and your team</CardDescription>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="organizationName">
                                                {formData.participantType === "university" ? "University/College Name" : "Organization Name"} *
                                            </Label>
                                            <Input
                                                id="organizationName"
                                                name="organizationName"
                                                value={formData.organizationName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={
                                                    formData.participantType === "university"
                                                        ? "e.g., Delhi University"
                                                        : "e.g., Tech Innovations Pvt Ltd"
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="participantName">Your Full Name *</Label>
                                            <Input
                                                id="participantName"
                                                name="participantName"
                                                value={formData.participantName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="e.g., Rahul Sharma"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="designation">
                                                {formData.participantType === "university" ? "Course/Year" : "Designation"} *
                                            </Label>
                                            <Input
                                                id="designation"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={
                                                    formData.participantType === "university" ? "e.g., B.Tech 3rd Year" : "e.g., Research Scientist"
                                                }
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="teamSize">Team Size *</Label>
                                            <Input
                                                id="teamSize"
                                                name="teamSize"
                                                type="number"
                                                value={formData.teamSize}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="e.g., 4"
                                                min="1"
                                                max="10"
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
                                                placeholder="your.email@example.com"
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
                                                placeholder="+91 9876543210"
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
                                            <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required placeholder="e.g., Mumbai" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state">State *</Label>
                                            <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required placeholder="e.g., Maharashtra" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pincode">Pincode *</Label>
                                            <Input
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="e.g., 400001"
                                                maxLength={6}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Project Information */}
                                <Card className="border-gray-200 dark:border-gray-700 shadow-md">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Trophy className="w-5 h-5 text-purple-600" />
                                            Project Information
                                        </CardTitle>
                                        <CardDescription>
                                            {formData.selectedTheme === "custom-category"
                                                ? "Describe your innovation and specify your custom category"
                                                : "Tell us about your innovation"}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="projectTitle">Project Title *</Label>
                                            <Input
                                                id="projectTitle"
                                                name="projectTitle"
                                                value={formData.projectTitle}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="e.g., AI-Powered Healthcare Diagnostics"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="projectDescription">
                                                Project Description *
                                                {formData.selectedTheme === "custom-category" && (
                                                    <span className="text-green-600 ml-2">(Please specify your custom category)</span>
                                                )}
                                            </Label>
                                            <Textarea
                                                id="projectDescription"
                                                name="projectDescription"
                                                value={formData.projectDescription}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={
                                                    formData.selectedTheme === "custom-category"
                                                        ? "Describe your innovation, its objectives, methodology, expected impact, and importantly - specify your project's custom category (minimum 100 words)"
                                                        : "Describe your innovation, its objectives, methodology, and expected impact (minimum 100 words)"
                                                }
                                                rows={8}
                                                className="resize-none"
                                            />
                                            <div className="flex items-center justify-between">
                                                <p className={`text-xs ${
                                                    wordCount < 100 ? "text-orange-600 dark:text-orange-400" : "text-green-600 dark:text-green-400"
                                                }`}>
                                                    {wordCount} / 100 words minimum
                                                </p>
                                                {wordCount >= 100 && (
                                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                )}
                                            </div>
                                        </div>

                                        {formData.selectedTheme === "custom-category" && (
                                            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                                                <div className="flex items-start gap-2">
                                                    <Lightbulb className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <h5 className="font-semibold text-sm text-green-900 dark:text-green-200 mb-1">
                                                            Custom Category Guidelines
                                                        </h5>
                                                        <p className="text-xs text-green-800 dark:text-green-300">
                                                            Please clearly mention your project's category in the description above.
                                                            Our evaluation team will review your submission and contact you with further details.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Submit Button */}
                                <div className="flex flex-col items-center gap-6 pt-6">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-16 py-6 text-lg tracking-wide hover:scale-[1.02] transition-all rounded-xl shadow-xl shadow-purple-500/30"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            "Complete Registration"
                                        )}
                                    </Button>
                                    <div className="text-center max-w-2xl">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            By submitting this form, you agree to participate in India Innovates 2026 and follow the competition guidelines.
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                            You will receive a confirmation email with further details shortly.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

UniversityCompetitionRegistration.displayName = "UniversityCompetitionRegistration";

export default UniversityCompetitionRegistration;
