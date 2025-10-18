import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

interface PassCategory {
    id: string;
    title: string;
    price: string;
    usdPrice: string;
    gst: string;
}

interface FormData {
    passCategory: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    designation: string;
    organization: string;
    fathersName: string;
    govtIdType: string;
    govtIdNumber: string;
    linkedinId: string;
    country: string;
    state: string;
    city: string;
    address: string;
    profileImage: File | null;
}

const passCategories: PassCategory[] = [
    {
        id: "premium",
        title: "Premium Delegate Pass",
        price: "₹15,000",
        usdPrice: "$181",
        gst: "+18% GST"
    },
    {
        id: "business",
        title: "Business Delegate Pass",
        price: "₹7,500",
        usdPrice: "$90",
        gst: "+18% GST"
    },
    {
        id: "standard",
        title: "Standard Delegate Pass",
        price: "₹1,999",
        usdPrice: "$24",
        gst: "+18% GST"
    },
    {
        id: "government",
        title: "Government Pass",
        price: "Free",
        usdPrice: "",
        gst: ""
    },
    {
        id: "media",
        title: "Media Pass",
        price: "Free",
        usdPrice: "",
        gst: ""
    },
    {
        id: "visitor",
        title: "Visitors Pass",
        price: "Free",
        usdPrice: "",
        gst: ""
    }
];

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const govtIdTypes = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Voter ID",
    "Other Government ID"
];

export default function DelegateRegistration() {
    const [formData, setFormData] = useState<FormData>({
        passCategory: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        designation: "",
        organization: "",
        fathersName: "",
        govtIdType: "",
        govtIdNumber: "",
        linkedinId: "",
        country: "India",
        state: "",
        city: "",
        address: "",
        profileImage: null,
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (file: File) => {
        // Validate file type
        if (!file.type.match(/^image\/(png|jpeg|jpg)$/)) {
            toast.error("Please upload only PNG or JPG images");
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB");
            return;
        }

        // Create image preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Validate dimensions (recommended 250x250)
                if (img.width < 250 || img.height < 250) {
                    toast.error("Image should be at least 250x250 pixels");
                    return;
                }
                setImagePreview(e.target?.result as string);
                setFormData((prev) => ({ ...prev, profileImage: file }));
                toast.success("Image uploaded successfully");
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        setFormData((prev) => ({ ...prev, profileImage: null }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validateForm = (): boolean => {
        // Check pass category first
        if (!formData.passCategory) {
            toast.error("Please select a pass category");
            return false;
        }

        // Required fields validation
        const requiredFields: (keyof FormData)[] = [
            "firstName",
            "lastName",
            "email",
            "mobile",
            "designation",
            "organization",
            "fathersName",
            "govtIdType",
            "govtIdNumber",
            "country",
            "address",
        ];

        // Add state and city to required fields only if country is India
        if (formData.country === "India") {
            requiredFields.push("state", "city");
        }

        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`);
                return false;
            }
        }

        if (!formData.profileImage) {
            toast.error("Please upload a profile image");
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return false;
        }

        // Mobile validation - must start with + and have at least 10 digits
        const mobileRegex = /^\+?[0-9]{10,15}$/;
        if (!mobileRegex.test(formData.mobile.replace(/[\s-]/g, ""))) {
            toast.error("Please enter a valid mobile number with country code (e.g., +91XXXXXXXXXX)");
            return false;
        }

        // LinkedIn validation (optional but if provided, should be valid)
        if (formData.linkedinId && !formData.linkedinId.includes("linkedin.com")) {
            toast.error("Please enter a valid LinkedIn URL");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Here you would typically send the data to your backend
            console.log("Form submitted:", formData);

            toast.success("Registration submitted successfully! We'll contact you soon.");

            // Reset form
            setFormData({
                passCategory: "",
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                designation: "",
                organization: "",
                fathersName: "",
                govtIdType: "",
                govtIdNumber: "",
                linkedinId: "",
                country: "India",
                state: "",
                city: "",
                address: "",
                profileImage: null,
            });
            setImagePreview(null);
        } catch (error) {
            toast.error("Failed to submit registration. Please try again.");
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 py-8 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Delegate Registration - India Innovates 2026</title>
                <meta name="description" content="Register for your delegate pass at India Innovates 2026" />
                <meta name="keywords" content="India Innovates, delegate registration, conference registration, event registration" />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                {/* Registration Form */}
                <Card className="shadow-2xl border-2 border-purple-200 dark:border-purple-900 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-10">
                        {/* Logo and Title Section - Inside Form */}
                        <div className="text-center mb-6 pb-4 border-b-2 border-purple-100 dark:border-purple-900">
                            <img
                                src="/iil.png"
                                alt="India Innovates Logo"
                                className="h-24 md:h-48 mx-auto -mt-20"
                            />
                            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white -mt-12 mb-2">
                                Delegate Pass Registration
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                                Fill in your details to register for India Innovates 2026
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Pass Category Selection */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Select Pass Category
                                </h2>

                                <div className="space-y-2">
                                    <Label htmlFor="passCategory" className="text-sm font-medium">
                                        Pass Category <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={formData.passCategory}
                                        onValueChange={(value) => handleInputChange("passCategory", value)}
                                    >
                                        <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                                            <SelectValue placeholder="Select your pass category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {passCategories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Show selected pass details */}
                                {formData.passCategory && (
                                    <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
                                                {passCategories.find(p => p.id === formData.passCategory)?.title}
                                            </h3>
                                            <div className="flex items-baseline justify-center gap-2">
                                                <span className="text-3xl font-bold text-purple-600">
                                                    {passCategories.find(p => p.id === formData.passCategory)?.price}
                                                </span>
                                                {passCategories.find(p => p.id === formData.passCategory)?.usdPrice && (
                                                    <span className="text-lg text-gray-600 dark:text-gray-400">
                                                        / {passCategories.find(p => p.id === formData.passCategory)?.usdPrice}
                                                    </span>
                                                )}
                                            </div>
                                            {passCategories.find(p => p.id === formData.passCategory)?.gst && (
                                                <p className="text-sm text-purple-600 font-medium mt-1">
                                                    {passCategories.find(p => p.id === formData.passCategory)?.gst}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Personal Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Personal Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-medium">
                                            First Name (As per Govt ID Proof) <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                                            placeholder="Enter your first name"
                                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-medium">
                                            Last Name (As per Govt ID Proof) <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                                            placeholder="Enter your last name"
                                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="fathersName" className="text-sm font-medium">
                                        Father's Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="fathersName"
                                        value={formData.fathersName}
                                        onChange={(e) => handleInputChange("fathersName", e.target.value)}
                                        placeholder="Enter your father's name"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Contact Information
                                </h2>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="your.email@example.com"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="mobile" className="text-sm font-medium">
                                        Mobile (with country code) <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                                        placeholder={formData.country === "India" ? "+91 10-digit mobile number" : "+1234567890"}
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="linkedinId" className="text-sm font-medium">
                                        LinkedIn ID
                                    </Label>
                                    <Input
                                        id="linkedinId"
                                        type="url"
                                        value={formData.linkedinId}
                                        onChange={(e) => handleInputChange("linkedinId", e.target.value)}
                                        placeholder="https://www.linkedin.com/in/username"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            {/* Professional Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Professional Information
                                </h2>

                                <div className="space-y-2">
                                    <Label htmlFor="designation" className="text-sm font-medium">
                                        Designation <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="designation"
                                        value={formData.designation}
                                        onChange={(e) => handleInputChange("designation", e.target.value)}
                                        placeholder="Your job title"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="organization" className="text-sm font-medium">
                                        Organization Name / Institution Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="organization"
                                        value={formData.organization}
                                        onChange={(e) => handleInputChange("organization", e.target.value)}
                                        placeholder="Your company or institution"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Government ID Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Government ID Proof
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="govtIdType" className="text-sm font-medium">
                                            Select Govt. ID <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.govtIdType}
                                            onValueChange={(value) => handleInputChange("govtIdType", value)}
                                        >
                                            <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                                                <SelectValue placeholder="Select ID type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {govtIdTypes.map((idType) => (
                                                    <SelectItem key={idType} value={idType}>
                                                        {idType}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="govtIdNumber" className="text-sm font-medium">
                                            Govt ID Number <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="govtIdNumber"
                                            value={formData.govtIdNumber}
                                            onChange={(e) => handleInputChange("govtIdNumber", e.target.value)}
                                            placeholder="Enter ID number"
                                            className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Address Information
                                </h2>

                                <div className="space-y-2">
                                    <Label htmlFor="country" className="text-sm font-medium">
                                        Country <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={formData.country}
                                        onValueChange={(value) => {
                                            handleInputChange("country", value);
                                            // Reset state and city when country changes
                                            if (value !== "India") {
                                                handleInputChange("state", "");
                                                handleInputChange("city", "");
                                            }
                                        }}
                                    >
                                        <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                                            <SelectValue placeholder="Select your country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((country) => (
                                                <SelectItem key={country} value={country}>
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Only show State and City for India */}
                                {formData.country === "India" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="state" className="text-sm font-medium">
                                                State <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                value={formData.state}
                                                onValueChange={(value) => handleInputChange("state", value)}
                                            >
                                                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                                                    <SelectValue placeholder="Select your state" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {indianStates.map((state) => (
                                                        <SelectItem key={state} value={state}>
                                                            {state}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="city" className="text-sm font-medium">
                                                City <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="city"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange("city", e.target.value)}
                                                placeholder="Enter your city"
                                                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="address" className="text-sm font-medium">
                                        Address <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="address"
                                        value={formData.address}
                                        onChange={(e) => handleInputChange("address", e.target.value)}
                                        placeholder="Enter your complete address"
                                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 min-h-[100px]"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Profile Image Upload */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
                                    Profile Image
                                </h2>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">
                                        Please Upload Profile Image <span className="text-red-500">*</span>
                                    </Label>

                                    {!imagePreview ? (
                                        <div
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`
                                                relative border-2 border-dashed rounded-xl p-8 
                                                transition-all duration-300 cursor-pointer
                                                hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30
                                                ${isDragging
                                                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950/30 scale-105"
                                                    : "border-purple-300 dark:border-purple-700"
                                                }
                                            `}
                                        >
                                            <div className="flex flex-col items-center justify-center space-y-4">
                                                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                                                    <Upload className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                                                        Drag & drop or Click Here to upload
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                        Image size should be 250x250
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        PNG, JPG
                                                    </p>
                                                </div>
                                            </div>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg"
                                                onChange={handleFileSelect}
                                                className="hidden"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <div className="border-2 border-purple-300 dark:border-purple-700 rounded-xl p-4 bg-purple-50 dark:bg-purple-950/30">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Profile preview"
                                                        className="w-32 h-32 object-cover rounded-lg border-2 border-purple-400"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                            <span className="font-medium">Image uploaded successfully</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            {formData.profileImage?.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                                            {formData.profileImage && `${(formData.profileImage.size / 1024).toFixed(2)} KB`}
                                                        </p>
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={removeImage}
                                                        className="border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Submitting...</span>
                                        </div>
                                    ) : formData.passCategory ? (
                                        (() => {
                                            const selectedPass = passCategories.find(p => p.id === formData.passCategory);
                                            if (selectedPass?.price === "Free") {
                                                return "SUBMIT REGISTRATION";
                                            }
                                            return `PROCEED TO PAY ${selectedPass?.price}${selectedPass?.usdPrice ? ` / ${selectedPass?.usdPrice}` : ''}`;
                                        })()
                                    ) : (
                                        "SUBMIT REGISTRATION"
                                    )}
                                </Button>
                            </div>

                            {/* Terms and Conditions */}
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-4">
                                By submitting this form, you agree to our terms and conditions.
                                All information provided will be kept confidential and used only for registration purposes.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
