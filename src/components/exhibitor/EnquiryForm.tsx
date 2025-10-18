import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const industries = [
    'Health',
    'Cloud & IT',
    'EdTech',
    'Artificial intelligence',
    'Robotics',
    'Drone/UAV',
    'Defence',
    'Automobile (EV)',
    'Fire & Safety',
    'FinTech/BSFI',
    'AgriTech',
    'Food Tech',
    'CleanTech',
    'Meta/Gameing',
    'RealTech',
    'Cyber Tech',
    'Renewable Energy',
    'Logistic/Travel',
    'Traditional',
    'Incubator & Accelerator',
];

const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];

export function EnquiryForm() {
    const [formData, setFormData] = useState({
        organizationName: '',
        applicantName: '',
        designation: '',
        mobileNumber: '',
        email: '',
        gstNumber: '',
        organizationAddress: '',
        country: 'India',
        state: '',
        city: '',
        selectedIndustries: [] as string[],
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleIndustryToggle = (industry: string) => {
        setFormData(prev => ({
            ...prev,
            selectedIndustries: prev.selectedIndustries.includes(industry)
                ? prev.selectedIndustries.filter(i => i !== industry)
                : [...prev.selectedIndustries, industry],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        Enquiry For 5th Edition
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Organization Name - Full Width */}
                        <div>
                            <Input
                                type="text"
                                placeholder="Name of Organization*"
                                value={formData.organizationName}
                                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                                className="w-full h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                        </div>

                        {/* Row 1: Applicant Name, Designation, Mobile, Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Input
                                type="text"
                                placeholder="Applicant Name*"
                                value={formData.applicantName}
                                onChange={(e) => handleInputChange('applicantName', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                            <Input
                                type="text"
                                placeholder="Designation *"
                                value={formData.designation}
                                onChange={(e) => handleInputChange('designation', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                            <Input
                                type="tel"
                                placeholder="Mobile Number*"
                                value={formData.mobileNumber}
                                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                            <Input
                                type="email"
                                placeholder="Email Id*"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                        </div>

                        {/* Row 2: GST Number, Organization Address */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                placeholder="Organization GST No."
                                value={formData.gstNumber}
                                onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            />
                            <Input
                                type="text"
                                placeholder="Organization Address*"
                                value={formData.organizationAddress}
                                onChange={(e) => handleInputChange('organizationAddress', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                required
                            />
                        </div>

                        {/* Row 3: Country, State, City */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                                <SelectTrigger className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="India">India</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                                <SelectTrigger className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                                    <SelectValue placeholder="Please Select State*" />
                                </SelectTrigger>
                                <SelectContent>
                                    {states.map(state => (
                                        <SelectItem key={state} value={state}>{state}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Input
                                type="text"
                                placeholder="Please Select City"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                className="h-14 text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            />
                        </div>

                        {/* Industry Selection */}
                        <div className="space-y-4">
                            <Label className="text-lg font-semibold text-gray-900 dark:text-white">
                                Select Your Industry*
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {industries.map((industry) => (
                                    <label
                                        key={industry}
                                        className="flex items-center space-x-3 cursor-pointer group"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={formData.selectedIndustries.includes(industry)}
                                                onChange={() => handleIndustryToggle(industry)}
                                                className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                                            />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {industry}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* reCAPTCHA Placeholder */}
                        <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
                            <input
                                type="checkbox"
                                className="w-6 h-6 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                                required
                            />
                            <span className="text-base text-gray-700 dark:text-gray-300">
                                I'm not a robot
                            </span>
                            <div className="ml-auto">
                                <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">reCAPTCHA</span>
                                    <span className="text-[10px]">Privacy - Terms</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Enquiry Now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
