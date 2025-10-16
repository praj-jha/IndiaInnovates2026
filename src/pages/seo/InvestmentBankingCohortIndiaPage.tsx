import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Trophy, TrendingUp, MapPin } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

export default function InvestmentBankingCohortIndiaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Investment Banking Cohort in India - Best IB Cohort India",
    "description": "Join India's #1 investment banking cohort at CRACKTHRU. Master financial modeling, valuation, M&A with Goldman Sachs, Morgan Stanley, JP Morgan professionals. 95% placement rate at top investment banks across India. Mumbai, Delhi, Bangalore.",
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
      "duration": "P12W",
      "instructor": {
        "@type": "Person",
        "name": "Investment Banking Professionals from Goldman Sachs Morgan Stanley JP Morgan India"
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
      "price": "29999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "Investment Banking Training India"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500",
      "bestRating": "5"
    },
    "teaches": [
      "Financial Modeling in Indian Markets",
      "Valuation Techniques for Indian Companies",
      "M&A Process in India",
      "Investment Banking Career in India",
      "Excel Financial Models",
      "Indian Financial Markets"
    ]
  };

  const indiaFeatures = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "India-Focused Curriculum",
      description: "Learn with Indian market examples, regulations, and business cases"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Top IB Placements in India",
      description: "Alumni at Goldman Sachs Mumbai, Morgan Stanley Bangalore, JP Morgan Delhi"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "India-Based Experts",
      description: "Learn from investment bankers working in Mumbai, Delhi, Bangalore"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "IST Timezone Classes",
      description: "Live sessions scheduled for Indian professionals and students"
    }
  ];

  const indiaCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", 
    "Kolkata", "Ahmedabad", "Gurgaon", "Noida"
  ];

  const indianCompanies = [
    "Goldman Sachs India", "Morgan Stanley India", "JP Morgan India", 
    "Barclays India", "Citi India", "Deutsche Bank India", "Credit Suisse India", 
    "UBS India", "Nomura India", "HDFC Bank", "ICICI Bank", "Kotak Mahindra"
  ];

  const curriculum = [
    "Indian Financial Markets & Regulations",
    "Financial Modeling for Indian Companies",
    "Valuation of Indian Businesses (Reliance, TCS, Infosys)",
    "M&A in Indian Market (Recent Deals)",
    "IPO Process in India (NSE, BSE)",
    "Private Equity in India",
    "Indian Banking Sector Analysis",
    "Interview Prep for Indian IB Roles"
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Analyst at Goldman Sachs Mumbai",
      location: "Mumbai",
      text: "CRACKTHRU's investment banking cohort in India gave me deep insights into Indian markets. The Mumbai-specific case studies helped me crack Goldman Sachs interview."
    },
    {
      name: "Priya Patel",
      role: "Associate at Morgan Stanley Bangalore",
      location: "Bangalore", 
      text: "Best investment banking cohort in India. The focus on Indian regulatory environment and local market dynamics was exactly what I needed for my career in Bangalore."
    },
    {
      name: "Amit Singh",
      role: "VP at JP Morgan Delhi",
      location: "Delhi",
      text: "From Indian IPO processes to local M&A deals, this cohort covers everything needed for investment banking career in India. Now leading deals at JP Morgan Delhi."
    }
  ];

  return (
    <>
      <SEOHead
        title="Investment Banking Cohort in India - Best IB Cohort India | CRACKTHRU"
        description="Join India's #1 investment banking cohort at CRACKTHRU. Master financial modeling, valuation, M&A with Goldman Sachs, Morgan Stanley, JP Morgan professionals. 95% placement rate at top investment banks across India."
        keywords="investment banking cohort in india, investment banking cohort india, best investment banking cohort india, IB cohort india, investment banking course india, goldman sachs india, morgan stanley india, jp morgan india, investment banking mumbai, investment banking bangalore, investment banking delhi, crackthru investment banking india"
        canonical="/investment-banking-cohort-india"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                #1 Investment Banking Cohort in India
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-600">Investment Banking Cohort</span>
                <br />
                <span className="text-foreground">in India</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Master investment banking with India's most comprehensive cohort. Learn financial modeling for Indian markets, 
                valuation of Indian companies, and M&A processes from top investment bankers across Mumbai, Delhi, and Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/cohorts/investment-banking">Join IB Cohort India</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Download India Curriculum
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5</span>
                  <span className="text-muted-foreground">(500+ reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">2000+</span>
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
              Why Our Investment Banking Cohort is Perfect for India
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
                Investment Banking Curriculum for Indian Markets
              </h2>
              <p className="text-xl text-muted-foreground">
                Learn with real Indian market examples and regulatory frameworks
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

        {/* Indian Cities Coverage */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Investment Banking Cohort Available Across India
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
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Alumni Work at Top Investment Banks in India
              </h2>
              <p className="text-xl text-muted-foreground">
                2000+ professionals placed across leading financial institutions in India
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {indianCompanies.map((company, index) => (
                <div key={index} className="text-center p-4 rounded-lg border">
                  <span className="text-sm font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India Testimonials */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from Investment Banking Professionals in India
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
              Ready to Start Your Investment Banking Career in India?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 2000+ professionals who've built successful investment banking careers across India with CRACKTHRU
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/cohorts/investment-banking">Enroll in IB Cohort India</Link>
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
