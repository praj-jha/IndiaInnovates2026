import { useState } from 'react';
import { Presentation, Users, Handshake, TrendingUp } from 'lucide-react';

interface ExhibitReason {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradientFrom: string;
    gradientTo: string;
}

export function WhyExhibitSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons: ExhibitReason[] = [
        {
            title: 'Showcase your innovations',
            description: 'Present your innovative tech solutions at India\'s largest stage for digital technology in a wide range of domains in the sector, ranging from 5G, 6G, AI, cybersecurity, Satcom, and more.',
            icon: <Presentation className="w-12 h-12" />,
            gradientFrom: 'from-green-400',
            gradientTo: 'to-teal-500',
        },
        {
            title: 'Meet the trailblazers',
            description: 'With experts, innovators, and enthusiasts from across the world under one roof, at India Innovates you get a chance to interact with the who\'s who of the industry.',
            icon: <Users className="w-12 h-12" />,
            gradientFrom: 'from-blue-400',
            gradientTo: 'to-cyan-500',
        },
        {
            title: 'Collaborate with tech enthusiasts',
            description: 'Get an opportunity to network with fellow tech enthusiasts and build meaningful connections.',
            icon: <Handshake className="w-12 h-12" />,
            gradientFrom: 'from-purple-400',
            gradientTo: 'to-pink-500',
        },
        {
            title: 'Stay on top of latest industry trends',
            description: 'Witness the latest advancements reigning in the technology industry and experience tech transformation like never before.',
            icon: <TrendingUp className="w-12 h-12" />,
            gradientFrom: 'from-orange-400',
            gradientTo: 'to-red-500',
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Exhibit at India Innovates 2026?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Join India's premier innovation platform and unlock unparalleled opportunities
                        </p>
                    </div>

                    {/* Grid of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card */}
                                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                    {/* Gradient Header with Icon */}
                                    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${reason.gradientFrom} ${reason.gradientTo} p-6`}>
                                        {/* Icon in top left */}
                                        <div className={`text-white transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                                            }`}>
                                            {reason.icon}
                                        </div>

                                        {/* Decorative circles */}
                                        <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full" />
                                        <div className="absolute top-12 right-4 w-32 h-32 bg-white/5 rounded-full" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
