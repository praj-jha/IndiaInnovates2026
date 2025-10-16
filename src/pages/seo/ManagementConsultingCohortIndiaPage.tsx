import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Trophy, Brain, MapPin } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

export default function ManagementConsultingCohortIndiaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Management Consulting Cohort in India - Best Consulting Cohort India",
    "description": "Join India's #1 management consulting cohort at CRACKTHRU. Master case interviews, frameworks, problem-solving with McKinsey, BCG, Bain professionals. 95% placement rate at top consulting firms across India. Mumbai, Delhi, Bangalore.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "CRACKTHRU",
      "url": "https://crackthru.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": "P10W",
      "instructor": {
        "@type": "Person",
        "name": "Management Consulting Professionals from McKinsey BCG Bain India"
      },
      "location": {
        "@type": "Place",
        "name": "India",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "24999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "Management Consulting Training India"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "350",
      "bestRating": "5"
    },
    "teaches": [
      "Case Interview Techniques for Indian Market",
      "Business Framework Application in India",
      "Problem Solving for Indian Companies",
      "Consulting Communication in Indian Context",
      "Strategic Thinking for Indian Businesses",
      "Market Analysis of Indian Industries"
    ]
  };

  const indiaFeatures = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "India-Centric Case Studies",
      description: "Practice with real Indian business cases from companies like Reliance, TCS, Flipkart"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Top MBB Placements in India",
      description: "Alumni at McKinsey Mumbai, BCG Bangalore, Bain Delhi, and other top firms"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "India-Based MBB Consultants",
      description: "Learn from consultants working in McKinsey, BCG, Bain offices across India"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "IST Timezone Sessions",
      description: "Live case practice sessions scheduled for Indian professionals"
    }
  ];

  const indiaCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", 
    "Kolkata", "Ahmedabad", "Gurgaon", "Noida"
  ];

  const indianConsultingFirms = [
    "McKinsey & Company India", "Boston Consulting Group India", "Bain & Company India", 
    "Deloitte India", "PwC India", "EY India", "KPMG India", 
    "Accenture India", "Oliver Wyman India", "AT Kearney India", "Roland Berger India", "Capgemini India"
  ];

  const curriculum = [
    "Case Interview Fundamentals for Indian Market",
    "Market Sizing with Indian Examples (Indian Railways, Jio, etc.)",
    "Profitability Cases for Indian Companies (Tata, Reliance)",
    "Digital Transformation in Indian Businesses",
    "Operations Cases for Indian Manufacturing",
    "Strategy Cases for Indian Startups (Flipkart, Paytm)",
    "Government Policy Impact Analysis in India",
    "Interview Prep for Indian Consulting Roles"
  ];

  const indianCases = [
    {
      title: "Reliance Digital Transformation",
      description: "How should Reliance Industries digitize their retail operations across India?"
    },
    {
      title: "Flipkart Market Expansion",
      description: "Strategy for Flipkart to expand into Tier-2 and Tier-3 Indian cities"
    },
    {
      title: "Indian Railways Efficiency",
      description: "Operational improvements for Indian Railways passenger services"
    },
    {
      title: "Tata Group Diversification",
      description: "Should Tata Group enter the Indian fintech market?"
    }
  ];

  const testimonials = [
    {
      name: "Anjali Gupta",
      role: "Consultant at McKinsey & Company Mumbai",
      location: "Mumbai",
      text: "CRACKTHRU's management consulting cohort in India was perfect preparation. The India-specific cases and understanding of Indian business environment helped me crack McKinsey Mumbai interview."
    },
    {
      name: "Rohan Kumar",
      role: "Senior Associate at BCG Bangalore",
      location: "Bangalore", 
      text: "Best management consulting cohort in India. The focus on Indian market dynamics and local business challenges was exactly what I needed for my BCG Bangalore role."
    },
    {
      name: "Sneha Reddy",
      role: "Principal at Bain & Company Delhi",
      location: "Delhi",
      text: "From Indian startup cases to government policy analysis, this cohort covers everything needed for consulting career in India. Now leading client engagements at Bain Delhi."
    }
  ];

  return (
    <>
      <SEOHead
        title="Management Consulting Cohort in India - Best Consulting Cohort India | CRACKTHRU"
        description="Join India's #1 management consulting cohort at CRACKTHRU. Master case interviews, frameworks, problem-solving with McKinsey, BCG, Bain professionals. 95% placement rate at top consulting firms across India."
        keywords="management consulting cohort in india, management consulting cohort india, best consulting cohort india, consulting cohort india, management consulting course india, mckinsey india, bcg india, bain india, consulting mumbai, consulting bangalore, consulting delhi, crackthru consulting india"
        canonical="/management-consulting-cohort-india"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                #1 Management Consulting Cohort in India
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-600">Management Consulting Cohort</span>
                <br />
                <span className="text-foreground">in India</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Master management consulting with India's most comprehensive cohort. Learn case interview techniques 
                for Indian markets, business frameworks, and problem-solving from top consultants across Mumbai, Delhi, and Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/cohorts/management-consultancy">Join Consulting Cohort India</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Download India Case Studies
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5</span>
                  <span className="text-muted-foreground">(350+ reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">1500+</span>
                  <span className="text-muted-foreground">Alumni in India</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="h-4 w-4" />
                  <span className="font-medium">95%</span>
                  <span className="text-muted-foreground">India Placement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India-Specific Features */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Our Management Consulting Cohort is Perfect for India
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {indiaFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-orange-100 dark:bg-orange-900 rounded-lg w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* India-Focused Curriculum */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Management Consulting Curriculum for Indian Markets
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn with real Indian business cases and market dynamics
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {curriculum.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indian Case Studies */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Practice with Real Indian Business Cases
              </h2>
              <p className="text-xl text-muted-foreground">
                Master consulting frameworks with actual Indian company scenarios
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {indianCases.map((caseStudy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{caseStudy.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Indian Cities Coverage */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Management Consulting Cohort Available Across India
              </h2>
              <p className="text-xl text-muted-foreground">
                Join from any major Indian city with live online sessions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {indiaCities.map((city, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-orange-600" />
                  <span className="text-sm font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Companies in India */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Alumni Work at Top Consulting Firms in India
              </h2>
              <p className="text-xl text-muted-foreground">
                1500+ professionals placed across leading consulting firms in India
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {indianConsultingFirms.map((firm, index) => (
                <div key={index} className="text-center p-4 rounded-lg border">
                  <span className="text-sm font-medium">{firm}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India Testimonials */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from Management Consultants in India
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-orange-600">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Management Consulting Career in India?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1500+ professionals who've built successful consulting careers across India with CRACKTHRU
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/cohorts/management-consultancy">Enroll in Consulting Cohort India</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-orange-600">
                Talk to India Advisor
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
