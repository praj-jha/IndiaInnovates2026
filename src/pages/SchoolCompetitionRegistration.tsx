import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Trophy, Rocket, Users, Phone, Mail, GraduationCap, Plus, Trash2, AlertCircle } from "lucide-react";

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

interface TeamMember {
    name: string;
    age: string;
    phone: string;
}

interface FormData {
    schoolName: string;
    teamName: string;
    teamLeadName: string;
    teamLeadEmail: string;
    teamLeadPhone: string;
    teamLeadAge: string;
    parentGuardianName: string;
    parentGuardianPhone: string;
    city: string;
    state: string;
    teamMembers: TeamMember[];
    selectedCompetitions: string[];
}

const SchoolCompetitionRegistration = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const preSelectedCompetition = searchParams.get("competition");

    const [formData, setFormData] = useState<FormData>({
        schoolName: "",
        teamName: "",
        teamLeadName: "",
        teamLeadEmail: "",
        teamLeadPhone: "",
        teamLeadAge: "",
        parentGuardianName: "",
        parentGuardianPhone: "",
        city: "",
        state: "",
        teamMembers: [],
        selectedCompetitions: preSelectedCompetition ? [preSelectedCompetition] : [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
        setFormData((prev) => {
            const newTeamMembers = [...prev.teamMembers];
            newTeamMembers[index] = { ...newTeamMembers[index], [field]: value };
            return { ...prev, teamMembers: newTeamMembers };
        });
    };

    const addTeamMember = () => {
        if (formData.teamMembers.length < 4) {
            setFormData((prev) => ({
                ...prev,
                teamMembers: [...prev.teamMembers, { name: "", age: "", phone: "" }],
            }));
        } else {
            toast({
                title: "Maximum Team Size Reached",
                description: "A team can have a maximum of 5 members (1 team lead + 4 additional members).",
                variant: "destructive",
            });
        }
    };

    const removeTeamMember = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            teamMembers: prev.teamMembers.filter((_, i) => i !== index),
        }));
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
            console.log("Form Data:", formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "Registration Successful! 🎉",
                description: `Team registration completed for ${formData.selectedCompetitions.length} competition(s). You will receive a confirmation email shortly.`,
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
                    content="Register your school team for exciting competitions including Drone Obstacle Crossing, Agritech, Robots War, and more at India Innovates."
                />
            </Helmet>

            <div className="min-h-screen bg-white dark:bg-background py-20 px-4 sm:px-6 lg:px-8">
                {/* Subtle background pattern */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-5"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-6 shadow-lg shadow-purple-500/20">
                            <Trophy className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-medium text-black dark:text-white mb-4 tracking-tight">
                            School Competition Registration
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
                            Register your team for exciting competitions at India Innovates Summit 2025 - FREE Registration!
                        </p>
                    </div>

                    {/* Eligibility Notice */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 mb-8">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-2">
                                        Eligibility Criteria
                                    </h3>
                                    <p className="text-blue-800 dark:text-blue-200">
                                        <strong>Only school students</strong> are eligible to participate in these competitions.
                                        Teams can consist of 1 to 5 students from the same or different schools.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* School & Team Information */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-purple-600" />
                                    School & Team Information
                                </CardTitle>
                                <CardDescription>Enter your school and team details</CardDescription>
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
                                        placeholder="Enter your school name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamName">Team Name *</Label>
                                    <Input
                                        id="teamName"
                                        name="teamName"
                                        value={formData.teamName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your team name"
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
                            </CardContent>
                        </Card>

                        {/* Team Lead Information */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-purple-600" />
                                    Team Lead Information
                                </CardTitle>
                                <CardDescription>Details of the team leader</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="teamLeadName">Team Lead Name *</Label>
                                    <Input
                                        id="teamLeadName"
                                        name="teamLeadName"
                                        value={formData.teamLeadName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamLeadAge">Age *</Label>
                                    <Input
                                        id="teamLeadAge"
                                        name="teamLeadAge"
                                        type="number"
                                        value={formData.teamLeadAge}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Age"
                                        min="5"
                                        max="20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamLeadEmail" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address *
                                    </Label>
                                    <Input
                                        id="teamLeadEmail"
                                        name="teamLeadEmail"
                                        type="email"
                                        value={formData.teamLeadEmail}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamLeadPhone" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone Number *
                                    </Label>
                                    <Input
                                        id="teamLeadPhone"
                                        name="teamLeadPhone"
                                        type="tel"
                                        value={formData.teamLeadPhone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Parent/Guardian Information */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-purple-600" />
                                    Parent/Guardian Information
                                </CardTitle>
                                <CardDescription>Contact details of parent or guardian</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="parentGuardianName">Parent/Guardian Name *</Label>
                                    <Input
                                        id="parentGuardianName"
                                        name="parentGuardianName"
                                        value={formData.parentGuardianName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="parentGuardianPhone">Parent/Guardian Phone *</Label>
                                    <Input
                                        id="parentGuardianPhone"
                                        name="parentGuardianPhone"
                                        type="tel"
                                        value={formData.parentGuardianPhone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Team Members */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-purple-600" />
                                    Team Members
                                </CardTitle>
                                <CardDescription>
                                    If you're registering as a team, add your team members here (up to 4 additional members).
                                    Solo participants can skip this section. Total team size: 1-5 members.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {formData.teamMembers.map((member, index) => (
                                    <div key={index} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-medium text-sm">Team Member {index + 1}</h4>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeTeamMember(index)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor={`member-name-${index}`}>Name *</Label>
                                                <Input
                                                    id={`member-name-${index}`}
                                                    value={member.name}
                                                    onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                                                    required
                                                    placeholder="Full name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`member-age-${index}`}>Age *</Label>
                                                <Input
                                                    id={`member-age-${index}`}
                                                    type="number"
                                                    value={member.age}
                                                    onChange={(e) => handleTeamMemberChange(index, "age", e.target.value)}
                                                    required
                                                    placeholder="Age"
                                                    min="5"
                                                    max="20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`member-phone-${index}`}>Phone *</Label>
                                                <Input
                                                    id={`member-phone-${index}`}
                                                    type="tel"
                                                    value={member.phone}
                                                    onChange={(e) => handleTeamMemberChange(index, "phone", e.target.value)}
                                                    required
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {formData.teamMembers.length < 4 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={addTeamMember}
                                        className="w-full border-dashed"
                                    >
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add Team Member ({formData.teamMembers.length}/4)
                                    </Button>
                                )}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Current team size: {formData.teamMembers.length + 1} member(s) (including team lead)
                                </p>
                            </CardContent>
                        </Card>

                        {/* Competition Selection */}
                        <Card className="border-gray-200 dark:border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-purple-600" />
                                    Select Competitions
                                </CardTitle>
                                <CardDescription>Choose the competitions your team wants to participate in</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {competitions.map((competition) => (
                                        <div
                                            key={competition.id}
                                            className={`border-2 rounded-lg p-4 transition-all ${formData.selectedCompetitions.includes(competition.id)
                                                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
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
                                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                        <p className="text-sm font-medium text-purple-800 dark:text-purple-300">
                                            ✓ {formData.selectedCompetitions.length} competition(s) selected
                                        </p>
                                    </div>
                                )}
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
                                By registering, you agree to our terms and conditions. You will receive a confirmation email shortly.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SchoolCompetitionRegistration;
