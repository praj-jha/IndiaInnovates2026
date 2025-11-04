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
        description: "Navigate drones through challenging obstacle courses",
        icon: "🚁",
    },
    {
        id: "agritech",
        name: "Agritech – Smart Farming Models",
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
        name: "ReelBaaz (30s Reel Making)",
        description: "Create engaging 30-second reels",
        icon: "📱",
    },
    {
        id: "clickkarr",
        name: "Clickkarr – Photography Contest",
        description: "Showcase photography and digital media creation skills",
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

interface FormData {
    registrationType: "school" | "individual" | "";
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
    // For individual/team registration
    studentName: string;
    studentAge: string;
    parentName: string;
    parentPhone: string;
    teamMembers: string;
}

const SchoolCompetitionRegistration = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const preSelectedCompetition = searchParams.get("competition");

    const [formData, setFormData] = useState<FormData>({
        registrationType: "",
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
        studentName: "",
        studentAge: "",
        parentName: "",
        parentPhone: "",
        teamMembers: "",
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
        if (!formData.registrationType) {
            toast({
                title: "Registration Type Required",
                description: "Please select whether you're registering as a school or individual/team.",
                variant: "destructive",
            });
            return;
        }

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

            const registrationType = formData.registrationType === "school" ? "School" : "Individual/Team";

            toast({
                title: "Registration Successful! 🎉",
                description: `${registrationType} registration completed for ${formData.selectedCompetitions.length} competition(s). You will receive a confirmation email shortly.`,
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
                            Register for exciting competitions at India Innovates Summit 2025 - FREE Registration!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Registration Type Selection */}
                        <Card className="border-2 border-orange-200 dark:border-orange-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-orange-600" />
                                    Registration Type
                                </CardTitle>
                                <CardDescription>Choose how you want to register</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, registrationType: "school" }))}
                                        className={`p-6 rounded-xl border-2 transition-all ${formData.registrationType === "school"
                                            ? "border-orange-500 bg-orange-50 dark:bg-orange-950/30"
                                            : "border-gray-200 dark:border-gray-700 hover:border-orange-300"
                                            }`}
                                    >
                                        <Building2 className={`w-8 h-8 mb-3 ${formData.registrationType === "school" ? "text-orange-600" : "text-gray-400"
                                            }`} />
                                        <h3 className="font-semibold text-lg mb-2">School Registration</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Register on behalf of your school
                                        </p>
                                        <p className="text-sm font-semibold text-green-600 mt-2">Free</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, registrationType: "individual" }))}
                                        className={`p-6 rounded-xl border-2 transition-all ${formData.registrationType === "individual"
                                            ? "border-orange-500 bg-orange-50 dark:bg-orange-950/30"
                                            : "border-gray-200 dark:border-gray-700 hover:border-orange-300"
                                            }`}
                                    >
                                        <GraduationCap className={`w-8 h-8 mb-3 ${formData.registrationType === "individual" ? "text-orange-600" : "text-gray-400"
                                            }`} />
                                        <h3 className="font-semibold text-lg mb-2">Individual / Team</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Register as individual or with friends
                                        </p>
                                        <p className="text-sm font-semibold text-green-600 mt-2">Free</p>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* School Information - Only show if school type selected */}
                        {formData.registrationType === "school" && (
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
                        )}

                        {/* Individual/Team Information - Only show if individual type selected */}
                        {formData.registrationType === "individual" && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-orange-600" />
                                        Student/Team Information
                                    </CardTitle>
                                    <CardDescription>Your personal details</CardDescription>
                                </CardHeader>
                                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="studentName">Student Name *</Label>
                                        <Input
                                            id="studentName"
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleInputChange}
                                            required={formData.registrationType === "individual"}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="studentAge">Age *</Label>
                                        <Input
                                            id="studentAge"
                                            name="studentAge"
                                            type="number"
                                            value={formData.studentAge}
                                            onChange={handleInputChange}
                                            required={formData.registrationType === "individual"}
                                            placeholder="Your age"
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
                                            required={formData.registrationType === "individual"}
                                            placeholder="student@example.com"
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
                                            required={formData.registrationType === "individual"}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                                        <Input
                                            id="parentName"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleInputChange}
                                            required={formData.registrationType === "individual"}
                                            placeholder="Parent or guardian name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="parentPhone">Parent/Guardian Phone *</Label>
                                        <Input
                                            id="parentPhone"
                                            name="parentPhone"
                                            type="tel"
                                            value={formData.parentPhone}
                                            onChange={handleInputChange}
                                            required={formData.registrationType === "individual"}
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="teamMembers">Team Members (Optional)</Label>
                                        <Input
                                            id="teamMembers"
                                            name="teamMembers"
                                            value={formData.teamMembers}
                                            onChange={handleInputChange}
                                            placeholder="Names of team members (comma-separated)"
                                        />
                                        <p className="text-xs text-gray-500">If participating as a team, list other members</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City *</Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required={formData.registrationType === "individual"}
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
                                            required={formData.registrationType === "individual"}
                                            placeholder="State"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Contact Person - Only for school registration */}
                        {formData.registrationType === "school" && (
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
                        )}

                        {/* Competition Selection - Show for both types */}
                        {formData.registrationType && (
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
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-2xl">{competition.icon}</span>
                                                            <h3 className="font-semibold text-sm">{competition.name}</h3>
                                                        </div>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                                            {competition.description}
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
                        )}

                        {/* Submit Button */}
                        {formData.registrationType && (
                            <div className="flex flex-col items-center gap-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !formData.registrationType}
                                    className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                >
                                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                                </Button>
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-md">
                                    By registering, you agree to our terms and conditions. You will receive a confirmation email shortly.
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SchoolCompetitionRegistration;
