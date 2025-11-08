import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { submitVolunteerRegistration, submitSponsorRegistration } from "@/services/api";

interface TeamFormData {
  userType: "team" | "sponsor" | "";
  // Common fields
  name: string;
  email: string;
  mobile: string;
  // Team member specific
  studentStatus?: string;
  institution?: string;
  course?: string;
  yearOfStudy?: string;
  skillset?: string;
  department?: string;
  availability?: string;
  // Sponsor/Marketing specific
  companyName?: string;
  designation?: string;
  companyWebsite?: string;
  sponsorshipType?: string;
  budgetRange?: string;
  marketingGoals?: string;
  // Common
  message: string;
}

const JoinOurTeam = () => {
  const [formData, setFormData] = useState<TeamFormData>({
    userType: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit based on user type
      if (formData.userType === "team") {
        await submitVolunteerRegistration({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          studentStatus: formData.studentStatus,
          institution: formData.institution,
          course: formData.course,
          yearOfStudy: formData.yearOfStudy,
          department: formData.department,
          skillset: formData.skillset,
          availability: formData.availability,
          message: formData.message,
        });
      } else {
        await submitSponsorRegistration({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          companyName: formData.companyName,
          designation: formData.designation,
          companyWebsite: formData.companyWebsite,
          sponsorshipType: formData.sponsorshipType,
          budgetRange: formData.budgetRange,
          marketingGoals: formData.marketingGoals,
          message: formData.message,
        });
      }

      setIsSuccess(true);
      toast.success("Application submitted successfully! We'll get back to you soon.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          userType: "",
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderTeamMemberFields = () => (
    <>
      <div className="space-y-2">
        <Label htmlFor="studentStatus">Are you a student? *</Label>
        <select
          id="studentStatus"
          name="studentStatus"
          value={formData.studentStatus || ""}
          onChange={(e) => handleSelectChange("studentStatus", e.target.value)}
          required
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="" disabled>Select status</option>
          <option value="yes">Yes, I'm a student</option>
          <option value="no">No, I'm a professional</option>
        </select>
      </div>

      {formData.studentStatus === "yes" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="institution">Institution/University Name *</Label>
            <Input
              id="institution"
              name="institution"
              value={formData.institution || ""}
              onChange={handleInputChange}
              placeholder="Enter your institution name"
              required
              className="h-12 text-base md:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course/Program *</Label>
              <Input
                id="course"
                name="course"
                value={formData.course || ""}
                onChange={handleInputChange}
                placeholder="e.g., B.Tech, MBA"
                required
                className="h-12 text-base md:text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearOfStudy">Year of Study *</Label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                value={formData.yearOfStudy || ""}
                onChange={(e) => handleSelectChange("yearOfStudy", e.target.value)}
                required
                className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="" disabled>Select year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="postgrad">Postgraduate</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="department">Department/Area of Interest *</Label>
        <select
          id="department"
          name="department"
          value={formData.department || ""}
          onChange={(e) => handleSelectChange("department", e.target.value)}
          required
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="" disabled>Select department</option>
          <option value="marketing">Marketing & Social Media</option>
          <option value="content">Content Creation</option>
          <option value="design">Design & Graphics</option>
          <option value="tech">Technology & Development</option>
          <option value="operations">Operations & Logistics</option>
          <option value="pr">Public Relations</option>
          <option value="event">Event Management</option>
          <option value="research">Research & Documentation</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="skillset">Skills & Expertise *</Label>
        <Textarea
          id="skillset"
          name="skillset"
          value={formData.skillset || ""}
          onChange={handleInputChange}
          placeholder="Tell us about your skills, tools you're proficient in, etc."
          rows={3}
          required
          className="text-base md:text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability *</Label>
        <select
          id="availability"
          name="availability"
          value={formData.availability || ""}
          onChange={(e) => handleSelectChange("availability", e.target.value)}
          required
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="" disabled>Select your availability</option>
          <option value="fulltime">Full-time (20+ hours/week)</option>
          <option value="parttime">Part-time (10-20 hours/week)</option>
          <option value="flexible">Flexible (As needed)</option>
          <option value="remote">Remote only</option>
        </select>
      </div>
    </>
  );

  const renderSponsorFields = () => (
    <>
      <div className="space-y-2">
        <Label htmlFor="companyName">Company/Organization Name *</Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName || ""}
          onChange={handleInputChange}
          placeholder="Enter company name"
          required
          className="h-12 text-base md:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="designation">Your Designation *</Label>
          <Input
            id="designation"
            name="designation"
            value={formData.designation || ""}
            onChange={handleInputChange}
            placeholder="e.g., Marketing Manager"
            required
            className="h-12 text-base md:text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyWebsite">Company Website</Label>
          <Input
            id="companyWebsite"
            name="companyWebsite"
            value={formData.companyWebsite || ""}
            onChange={handleInputChange}
            placeholder="https://example.com"
            type="url"
            className="h-12 text-base md:text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sponsorshipType">Type of Partnership *</Label>
        <select
          id="sponsorshipType"
          name="sponsorshipType"
          value={formData.sponsorshipType || ""}
          onChange={(e) => handleSelectChange("sponsorshipType", e.target.value)}
          required
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="" disabled>Select partnership type</option>
          <option value="title">Title Sponsor</option>
          <option value="platinum">Platinum Sponsor</option>
          <option value="gold">Gold Sponsor</option>
          <option value="silver">Silver Sponsor</option>
          <option value="bronze">Bronze Sponsor</option>
          <option value="inkind">In-kind Sponsor</option>
          <option value="media">Media Partner</option>
          <option value="marketing">Marketing Collaboration</option>
          <option value="stall">Exhibition Stall</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
        <select
          id="budgetRange"
          name="budgetRange"
          value={formData.budgetRange || ""}
          onChange={(e) => handleSelectChange("budgetRange", e.target.value)}
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="">Select budget range</option>
          <option value="under50k">Under ₹50,000</option>
          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
          <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
          <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
          <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
          <option value="above10l">Above ₹10,00,000</option>
          <option value="discuss">Prefer to discuss</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="marketingGoals">Marketing Goals & Expectations *</Label>
        <Textarea
          id="marketingGoals"
          name="marketingGoals"
          value={formData.marketingGoals || ""}
          onChange={handleInputChange}
          placeholder="What do you hope to achieve through this partnership?"
          rows={4}
          required
          className="text-base md:text-sm"
        />
      </div>
    </>
  );

  if (isSuccess) {
    return (
      <>
        <Helmet>
          <title>Join Our Team - India Innovates 2026</title>
          <meta
            name="description"
            content="Join the India Innovates 2026 team or become a sponsor. Be part of shaping India's innovation landscape."
          />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-lg mx-auto text-center">
              <CardContent className="pt-12 pb-12">
                <div className="mb-6 flex justify-center">
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle2 className="w-16 h-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Your application has been submitted successfully. We'll review your submission and get back to you soon.
                </p>
                <p className="text-sm text-gray-500">
                  Redirecting you back to the form...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Join Our Team - India Innovates 2026</title>
        <meta
          name="description"
          content="Join the India Innovates 2026 team or become a sponsor. Be part of shaping India's innovation landscape."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/iil_flk4xg.avif"
              alt="India Innovates 2026 Logo"
              className="h-32 w-auto"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of India's largest innovation summit. Whether you want to join our team or sponsor the event, we'd love to hear from you.
            </p>
          </div>

          {/* Selection Cards */}
          {!formData.userType && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <Card
                className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-purple-600"
                onClick={() => handleSelectChange("userType", "team")}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-purple-100 rounded-full p-4">
                      <Users className="w-12 h-12 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Join Our Team
                  </h3>
                  <p className="text-gray-600">
                    Work with us as a volunteer or team member and help make this event a success
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-purple-600"
                onClick={() => handleSelectChange("userType", "sponsor")}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-purple-100 rounded-full p-4">
                      <Briefcase className="w-12 h-12 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Sponsor/Partner
                  </h3>
                  <p className="text-gray-600">
                    Partner with us to showcase your brand and reach thousands of innovators
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Form */}
          {formData.userType && (
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <Button
                    variant="ghost"
                    onClick={() => setFormData({ userType: "", name: "", email: "", mobile: "", message: "" })}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    ← Back to selection
                  </Button>
                  <h2 className="text-2xl font-bold text-purple-900 mt-4">
                    {formData.userType === "team" ? "Team Member Application" : "Sponsorship Inquiry"}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Common Fields */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12 text-base md:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-12 text-base md:text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="h-12 text-base md:text-sm"
                      />
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  {formData.userType === "team" && renderTeamMemberFields()}
                  {formData.userType === "sponsor" && renderSponsorFields()}

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {formData.userType === "team"
                        ? "Why do you want to join our team?"
                        : "Additional Information"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={
                        formData.userType === "team"
                          ? "Tell us about your motivation and what you can bring to the team..."
                          : "Any additional details you'd like to share..."
                      }
                      rows={4}
                      required
                      className="text-base md:text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg min-h-[48px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default JoinOurTeam;
