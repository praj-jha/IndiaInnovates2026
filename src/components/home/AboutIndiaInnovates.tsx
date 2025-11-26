import { Quote } from 'lucide-react';

export function PMQuote() {
    return (
        <section id="about" className="relative py-20 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <h2 className="michroma-heading text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                        Our{' '}
                        <span className="font-medium text-primary">Inspiration</span>
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* PM Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <div className="relative h-[400px] w-[320px] lg:h-[550px] lg:w-[440px] overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-1">
                                <div className="flex h-full w-full items-center justify-center rounded-xl bg-background/50 backdrop-blur-sm">
                                    <img
                                        src="/mdg.png"
                                        alt="Honorable Prime Minister"
                                        className="h-full w-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                        <Quote className="absolute -left-2 -top-9 h-12 w-12 lg:h-16 lg:w-16 text-primary/20" />
                        <div className="relative space-y-4 pt-8 lg:space-y-6">
                            <blockquote className="text-xl font-light leading-relaxed text-foreground md:text-2xl lg:text-3xl">
                                India's youth are not just the future, they are the present
                                force driving innovation and change. Through platforms like
                                India Innovates, we empower our young minds to dream big,
                                innovate fearlessly, and transform India into a global
                                innovation hub.
                            </blockquote>
                            <div className="flex items-center gap-4 pt-4 lg:pt-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                                <cite className="not-italic text-sm font-normal text-muted-foreground lg:text-base">
                                    Honorable Prime Minister of India
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Keep the same export name for backward compatibility
export default PMQuote;
export { PMQuote as AboutIndiaInnovates };
