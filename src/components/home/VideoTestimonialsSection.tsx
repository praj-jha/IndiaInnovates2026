import { useState } from 'react';
import { Play, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    organization: string;
    videoUrl: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Rajesh Kumar",
        title: "Chief Technology Officer",
        organization: "Tech Mahindra",
        videoUrl: "/v3.mp4",
        quote: "India Innovates has been a game-changer for our innovation journey."
    },
    {
        id: 2,
        name: "Priya Sharma",
        title: "Startup Founder",
        organization: "InnovateTech Solutions",
        videoUrl: "/v3.mp4",
        quote: "The networking opportunities at India Innovates are unparalleled."
    },
    {
        id: 3,
        name: "Amit Patel",
        title: "Investment Manager",
        organization: "Sequoia Capital",
        videoUrl: "/v3.mp4",
        quote: "We discovered incredible startups at India Innovates 2025."
    },
];

export function VideoTestimonialsSection() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const handlePlayVideo = (id: number) => {
        setActiveVideo(id);
    };



    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full mb-4">
                        <Quote className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold tracking-wide uppercase">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Hear From Our <span className="text-purple-200">Community</span>
                    </h2>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        Discover what delegates, speakers, and partners have to say about their India Innovates experience
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video bg-gray-900">
                                {activeVideo === testimonial.id ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        src={testimonial.videoUrl}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <>
                                        {/* Neutral gradient placeholder (no thumbnail) */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 to-blue-600/70 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
                                            {/* subtle decorative shapes */}
                                            <div className="w-24 h-24 rounded-full bg-white/6 absolute left-8 bottom-8" />
                                            <div className="w-32 h-32 rounded-full bg-white/4 absolute right-8 top-8" />
                                        </div>

                                        {/* Play Button */}
                                        <button
                                            onClick={() => handlePlayVideo(testimonial.id)}
                                            className="absolute inset-0 flex items-center justify-center group/play"
                                        >
                                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover/play:bg-white group-hover/play:scale-110 transition-all duration-300 shadow-xl">
                                                <Play className="w-10 h-10 text-purple-600 ml-1" fill="currentColor" />
                                            </div>
                                        </button>

                                        {/* Quote Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <Quote className="w-6 h-6 text-white/60 mb-2" />
                                            <p className="text-white text-sm italic line-clamp-2">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-purple-600 font-semibold mb-1">
                                    {testimonial.title}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {testimonial.organization}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-purple-100 mb-4">
                        Want to share your India Innovates experience?
                    </p>
                    <a
                        href="mailto:info@indiainnovates.in"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-purple-50 text-purple-700 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                        Submit Your Testimonial
                    </a>
                </div>
            </div>
        </section>
    );
}
