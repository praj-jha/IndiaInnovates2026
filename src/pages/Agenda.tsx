import { Helmet } from "react-helmet-async";

export default function Agenda() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Agenda - India Innovates 2026</title>
                <meta name="description" content="View the complete agenda for India Innovates 2026 conference" />
                <meta name="keywords" content="India Innovates, conference agenda, event schedule" />
            </Helmet>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background dark:from-gray-900">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Conference <span className="text-purple-600">Agenda</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Complete schedule for India Innovates 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="bg-muted/50 rounded-lg p-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                        <p className="text-muted-foreground">
                            The detailed agenda will be published soon. Stay tuned!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
