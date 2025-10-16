import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Trophy, TrendingUp } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

export default function InvestmentBankingCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Investment Banking Course - #1 Investment Banking Course in India",
    "description": "India's #1 investment banking course at CRACKTHRU. Master financial modeling, valuation, M&A with Goldman Sachs, Morgan Stanley, JP Morgan professionals. 95% placement rate at top investment banks. Join 2000+ successful investment bankers.",
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
        "name": "Investment Banking Professionals from Goldman Sachs Morgan Stanley JP Morgan"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "29999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500",
      "bestRating": "5"
    },
    "teaches": [
      "Financial Modeling",
      "Valuation Techniques",
      "Mergers and Acquisitions",
      "Investment Banking Process",
      "Excel Financial Models",
      "Investment Analysis"
    ]
  };

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Master Financial Modeling",
      description: "Build complex LBO, DCF, and M&A models used by top investment banks"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "95% Placement Rate",
      description: "Our alumni work at Goldman Sachs, Morgan Stanley, JP Morgan, Barclays"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Learn from Industry Experts",
      description: "Instructors from top investment banks with 15+ years experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Learning",
      description: "Live sessions + recorded content for working professionals"
    }
  ];

  const curriculum = [
    "Financial Statement Analysis & Accounting",
    "Advanced Excel & Financial Modeling",
    "Valuation Methods (DCF, Comparable Company, Precedent Transactions)",
    "Leveraged Buyout (LBO) Modeling",
    "Mergers & Acquisitions Process",
    "Pitch Books & Investment Banking Materials",
    "Industry Analysis & Sector Coverage",
    "Interview Preparation & Case Studies"
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Analyst at Goldman Sachs",
      text: "CRACKTHRU's investment banking course is unmatched. The financial modeling skills I learned helped me crack Goldman Sachs interview."
    },
    {
      name: "Priya Patel",
      role: "Associate at Morgan Stanley",
      text: "Best investment banking course in India. The practical approach and industry insights made all the difference in my career."
    },
    {
      name: "Amit Singh",
      role: "VP at JP Morgan",
      text: "From basics to advanced modeling, this course covers everything. Now leading M&A deals at JP Morgan thanks to CRACKTHRU."
    }
  ];

  return (
    <>
      <SEOHead
        title="Investment Banking Course - #1 Investment Banking Course in India | CRACKTHRU"
        description="Join India's #1 investment banking course at CRACKTHRU. Master financial modeling, valuation, M&A with Goldman Sachs, Morgan Stanley, JP Morgan professionals. 95% placement rate at top investment banks. 2000+ alumni."
        keywords="investment banking course, investment banking course in india, best investment banking course, financial modeling course, investment banking training, goldman sachs course, morgan stanley course, jp morgan course, investment banking certification, crackthru investment banking"
        canonical="/investment-banking-course"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                #1 Investment Banking Course in India
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-600">Investment Banking</span>
                <br />
                <span className="text-foreground">Course</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Master investment banking with India's most comprehensive course. Learn financial modeling, 
                valuation, and M&A from Goldman Sachs, Morgan Stanley, and JP Morgan professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/cohorts/investment-banking">Start Your IB Journey</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Download Curriculum
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
                  <span className="text-muted-foreground">Alumni</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="h-4 w-4" />
                  <span className="font-medium">95%</span>
                  <span className="text-muted-foreground">Placement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why CRACKTHRU's Investment Banking Course is #1 in India
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

        {/* Curriculum Section */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Investment Banking Curriculum
              </h2>
              <p className="text-xl text-muted-foreground">
                Master every aspect of investment banking with our industry-leading curriculum
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

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from Top Investment Banks
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
              Ready to Start Your Investment Banking Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 2000+ professionals who've built successful careers with CRACKTHRU's investment banking course
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/cohorts/investment-banking">Enroll Now</Link>
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