import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, MapPin, Trophy, Globe } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

export default function CohortInIndiaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CRACKTHRU - Best Professional Cohorts in India",
    "description": "Join India's top professional cohorts at CRACKTHRU. Investment banking, management consulting, product management cohorts with industry experts. 95% placement rate. 3000+ alumni across India.",
    "url": "https://crackthru.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Cohorts in India",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Investment Banking Cohort India",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "CRACKTHRU"
          }
        },
        {
          "@type": "Course",
          "name": "Management Consulting Cohort India",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "CRACKTHRU"
          }
        },
        {
          "@type": "Course",
          "name": "Product Management Cohort India",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "CRACKTHRU"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000",
      "bestRating": "5"
    }
  };

  const cohorts = [
    {
      title: "Investment Banking Cohort",
      description: "Master financial modeling, valuation, and M&A with Goldman Sachs, Morgan Stanley professionals",
      duration: "12 weeks",
      students: "2000+",
      rating: "4.9",
      price: "₹29,999",
      link: "/cohorts/investment-banking",
      features: ["Financial Modeling", "LBO & DCF Models", "M&A Process", "Interview Prep"]
    },
    {
      title: "Management Consulting Cohort",
      description: "Learn case interview techniques and frameworks from McKinsey, BCG, Bain consultants",
      duration: "10 weeks",
      students: "1500+",
      rating: "4.8",
      price: "₹24,999",
      link: "/cohorts/management-consultancy",
      features: ["Case Interviews", "Business Frameworks", "Problem Solving", "Communication"]
    },
    {
      title: "Product Management Cohort",
      description: "Build product strategy and management skills with Google, Meta, Amazon product leaders",
      duration: "10 weeks",
      students: "800+",
      rating: "4.9",
      price: "₹24,999",
      link: "/cohorts/product-management",
      features: ["Product Strategy", "User Research", "Roadmap Planning", "Data Analysis"]
    }
  ];

  const whyIndia = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Designed for Indian Market",
      description: "Cohorts specifically tailored for Indian professionals and job market dynamics"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Industry Experts",
      description: "Learn from professionals working in top Indian and international companies"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "India-Focused Case Studies",
      description: "Real business cases from Indian companies and market scenarios"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Strong Alumni Network",
      description: "Connect with 3000+ alumni across Mumbai, Delhi, Bangalore, and other major cities"
    }
  ];

  const benefits = [
    "Live online sessions conducted in IST timezone",
    "Career guidance specific to Indian job market",
    "Placement support with top Indian and MNC companies",
    "Industry mentorship from India-based professionals",
    "Networking opportunities with local alumni",
    "Course content adapted for Indian business environment",
    "Affordable pricing for Indian students and professionals",
    "Weekend and evening sessions for working professionals"
  ];

  return (
    <>
      <SEOHead
        title="Best Professional Cohorts in India | Investment Banking, Consulting, Product Management - CRACKTHRU"
        description="Join India's top professional cohorts at CRACKTHRU. Investment banking, management consulting, product management cohorts with industry experts. 95% placement rate. 3000+ alumni across India."
        keywords="cohort in india, professional cohorts india, investment banking cohort india, management consulting cohort india, product management cohort india, best cohorts india, crackthru cohort, online cohorts india"
        canonical="/cohort-in-india"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                #1 Professional Cohorts in India
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-600">Professional Cohorts</span>
                <br />
                <span className="text-foreground">in India</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Join India's most comprehensive professional development cohorts. Learn from industry experts, 
                build real skills, and accelerate your career with our proven programs.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm mb-8">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8/5</span>
                  <span className="text-muted-foreground">(1000+ reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">3000+</span>
                  <span className="text-muted-foreground">Alumni</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">All India</span>
                  <span className="text-muted-foreground">Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cohorts Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Professional Cohort in India
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {cohorts.map((cohort, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{cohort.duration}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{cohort.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{cohort.title}</CardTitle>
                    <p className="text-muted-foreground">{cohort.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Students</span>
                          <p className="font-medium">{cohort.students}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price</span>
                          <p className="font-medium text-orange-600">{cohort.price}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {cohort.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={cohort.link}>Join This Cohort</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why India Section */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Professional Cohorts in India with CRACKTHRU
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyIndia.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-orange-100 dark:bg-orange-900 rounded-lg w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Benefits of Joining Our Cohorts in India
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything designed specifically for Indian professionals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-600 text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join India's Top Professional Cohorts?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey with 3000+ professionals who've transformed their careers with CRACKTHRU cohorts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/">Explore All Cohorts</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-orange-600">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
