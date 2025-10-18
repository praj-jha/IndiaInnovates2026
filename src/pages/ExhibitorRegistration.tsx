import { Helmet } from 'react-helmet-async';
import { EnquiryForm } from '@/components/exhibitor/EnquiryForm';
import { WhyExhibitSection } from '@/components/exhibitor/WhyExhibitSection';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function ExhibitorRegistration() {
    const features = [
        'Dedicated exhibition stall space',
        'Marketing materials and signage',
        'Access to all conference sessions',
        'Networking opportunities with VIPs',
        'Media coverage and PR support',
        'Lead generation opportunities',
        'Product demonstration facilities',
        'Digital presence on event platform',
    ];

    return (
        <>
            <Helmet>
                <title>Exhibitor Registration - India Innovates 2026</title>
                <meta
                    name="description"
                    content="Book a stall to showcase your innovations at India Innovates 2026. Connect with 5,000+ delegates, 200+ investors, and 300+ Parliament members."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
                {/* Hero Section with Background Image */}
                <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/fut.png)',
                        }}
                    />

                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

                    {/* Content */}
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
                                Showcase your innovation/business in II26
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">300+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Parliament Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">5,000+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">International Delegates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">200+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Investors</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Exhibit Section */}
                <WhyExhibitSection />

                {/* Features Section */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    What's Included in Your Stall Package?
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    Everything you need to make a lasting impression at India Innovates 2026.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-orange-600 to-purple-600 dark:from-orange-700 dark:to-purple-700">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Limited Stalls Available!
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                            Secure your spot today and be part of India's innovation revolution.
                            Fill out the enquiry form below to get started.
                        </p>
                    </div>
                </section>

                {/* Enquiry Form */}
                <EnquiryForm />
            </div>
        </>
    );
}
