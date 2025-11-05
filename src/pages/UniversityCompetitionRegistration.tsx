import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Trophy, Building2, Users, Phone, Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const themes = [
    {
        id: "biotechnology",
        name: "Biotechnology",
        icon: "🧬",
    },
    {
        id: "manufacturing-industry",
        name: "Manufacturing & Industry 4.0",
        icon: "⚙️",
    },
    {
        id: "smart-cities",
        name: "Smart Cities & Urban Mobility",
        icon: "🌆",
    },
    {
        id: "blue-economy",
        name: "Blue Economy",
        icon: "🌊",
    },
    {
        id: "disaster-management",
        name: "Disaster Management & Resilient Infrastructure",
        icon: "🌪️",
    },
    {
        id: "next-gen-communications",
        name: "Next-Gen Communications",
        icon: "📡",
    },
    {
        id: "space-aerospace-defence",
        name: "Space, Aerospace & Defence",
        icon: "🚀",
    },
    {
        id: "healthcare-medtech",
        name: "Healthcare & MedTech",
        icon: "🏥",
    },
    {
        id: "advanced-computing",
        name: "Advanced Computing, AI & Quantum",
        icon: "💻",
    },
    {
        id: "semiconductors",
        name: "Semiconductors & Microelectronics",
        icon: "🧠",
    },
    {
        id: "agriculture-food",
        name: "Agriculture & Food Technologies",
        icon: "🌾",
    },
    {
        id: "energy-sustainability",
        name: "Energy, Sustainability & Climate Change",
        icon: "🔋",
    },
    {
        id: "advanced-materials",
        name: "Advanced Materials & Critical Minerals",
        icon: "⚗️",
    },
    {
        id: "pollution",
        name: "Pollution Control & Environmental Solutions",
        icon: "🌍",
    },
    {
        id: "women-safety",
        name: "Women Safety & Empowerment",
        icon: "👩",
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

        setIsSubmitting(true);

        try {
            // Here you would typically send the data to your backend
            console.log("Form Data:", formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const selectedThemeName = themes.find((t) => t.id === formData.selectedTheme)?.name || "Selected theme";

            toast({
                title: "Registration Successful! 🎉",
                description: `Your registration for "${selectedThemeName}" has been submitted successfully. You will receive a confirmation email shortly.`,
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
                <title>Innovation Theme Registration - Universities & Professionals - India Innovates</title>
                <meta
                    name="description"
                    content="Register for innovation themes including Biotechnology, AI & Quantum Computing, Smart Cities, and more at India Innovates Summit 2026."
                />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-background py-12 px-4 sm:px-6 lg:px-8">
                {/* Subtle background pattern */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-5"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4 shadow-lg shadow-purple-500/20">
                            <Trophy className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-medium text-black dark:text-white mb-4 tracking-tight">
                            Innovation Theme Registration
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Register your innovative project for India Innovates Summit 2026
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Universities & Professionals
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Participant Type */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-purple-600" />
                                    Participant Type
                                </CardTitle>
                                <CardDescription>Select your category</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div
                                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${formData.participantType === "university"
                                            ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                                            : "border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700"
                                            }`}
                                        onClick={() => setFormData((prev) => ({ ...prev, participantType: "university" }))}
                                    >
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="w-8 h-8 text-purple-600" />
                                            <div>
                                                <h3 className="font-medium text-black dark:text-white">University/College</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Students & Research Scholars</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${formData.participantType === "professional"
                                            ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                                            : "border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700"
                                            }`}
                                        onClick={() => setFormData((prev) => ({ ...prev, participantType: "professional" }))}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Briefcase className="w-8 h-8 text-purple-600" />
                                            <div>
                                                <h3 className="font-medium text-black dark:text-white">Professional</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Industry Professionals & Researchers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Organization & Personal Information */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-purple-600" />
                                    {formData.participantType === "university" ? "University" : "Organization"} Information
                                </CardTitle>
                                <CardDescription>Your details and contact information</CardDescription>
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
                                                ? "Enter university/college name"
                                                : "Enter organization name"
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
                                        placeholder="Enter your full name"
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
                                        placeholder="Number of team members"
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
                                    <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required placeholder="City" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state">State *</Label>
                                    <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required placeholder="State" />
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

                        {/* Theme Selection */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-purple-600" />
                                    Select Innovation Theme
                                </CardTitle>
                                <CardDescription>Choose the theme that best fits your project</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {themes.map((theme) => (
                                        <div
                                            key={theme.id}
                                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${formData.selectedTheme === theme.id
                                                ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                                                : "border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700"
                                                }`}
                                            onClick={() => handleThemeSelect(theme.id)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-3xl">{theme.icon}</div>
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-sm text-black dark:text-white leading-tight">{theme.name}</h4>
                                                </div>
                                                {formData.selectedTheme === theme.id && (
                                                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Information - For Regular Themes */}
                        {formData.selectedTheme && formData.selectedTheme !== "custom-category" && (
                            <Card className="border-gray-200 dark:border-gray-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-purple-600" />
                                        Project Information
                                    </CardTitle>
                                    <CardDescription>Tell us about your innovation</CardDescription>
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
                                            placeholder="Enter your project title"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="projectDescription">Project Description *</Label>
                                        <Textarea
                                            id="projectDescription"
                                            name="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Describe your innovation, its objectives, methodology, and expected impact (minimum 100 words)"
                                            rows={6}
                                            className="resize-none"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {formData.projectDescription.split(" ").filter((w) => w).length} words
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Custom Category Section */}
                        <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-green-600" />
                                    Project in a Different Category?
                                </CardTitle>
                                <CardDescription>
                                    If your innovation doesn't fit into any of the above themes, register here with your custom category
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700">
                                    <h4 className="font-medium text-black dark:text-white mb-3">
                                        Have a unique innovation that doesn't match our listed themes?
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        We welcome innovations across all domains! If your project falls under a different category not mentioned above,
                                        you can still register and our team will review your submission. Select the "Other - Custom Category" option
                                        below and provide detailed information about your innovation theme.
                                    </p>
                                    <div
                                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${formData.selectedTheme === "custom-category"
                                            ? "border-green-600 bg-green-50 dark:bg-green-950/20"
                                            : "border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700"
                                            }`}
                                        onClick={() => handleThemeSelect("custom-category")}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="text-3xl">✨</div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm text-black dark:text-white leading-tight">
                                                    Other - Custom Category
                                                </h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                    My innovation belongs to a different category
                                                </p>
                                            </div>
                                            {formData.selectedTheme === "custom-category" && (
                                                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {formData.selectedTheme === "custom-category" && (
                                        <div className="mt-6 space-y-6">
                                            {/* Project Information - Only for Custom Category */}
                                            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
                                                <h4 className="font-semibold text-lg text-black dark:text-white mb-4 flex items-center gap-2">
                                                    <Trophy className="w-5 h-5 text-green-600" />
                                                    Project Information
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    Tell us about your innovation
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="projectTitle">Project Title *</Label>
                                                        <Input
                                                            id="projectTitle"
                                                            name="projectTitle"
                                                            value={formData.projectTitle}
                                                            onChange={handleInputChange}
                                                            required={formData.selectedTheme === "custom-category"}
                                                            placeholder="Enter your project title"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="projectDescription">Project Description *</Label>
                                                        <Textarea
                                                            id="projectDescription"
                                                            name="projectDescription"
                                                            value={formData.projectDescription}
                                                            onChange={handleInputChange}
                                                            required={formData.selectedTheme === "custom-category"}
                                                            placeholder="Describe your innovation, its objectives, methodology, expected impact, and importantly - specify your project's category (minimum 100 words)"
                                                            rows={6}
                                                            className="resize-none"
                                                        />
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            {formData.projectDescription.split(" ").filter((w) => w).length} words
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-green-100 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                                                <p className="text-sm text-green-800 dark:text-green-300">
                                                    <strong>Note:</strong> Please clearly mention your project's category in the description above.
                                                    Our evaluation team will review your submission and contact you with further details.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center gap-6 pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                size="lg"
                                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-12 text-base tracking-wide hover:scale-[1.02] transition-all rounded-full shadow-lg shadow-purple-500/20"
                            >
                                {isSubmitting ? "Submitting..." : "Complete Registration"}
                            </Button>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-2xl">
                                By submitting this form, you agree to participate in India Innovates 2026 and follow the competition
                                guidelines. You will receive a confirmation email with further details.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

UniversityCompetitionRegistration.displayName = "UniversityCompetitionRegistration";

export default UniversityCompetitionRegistration;
