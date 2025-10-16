import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Trophy, Brain } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

export default function ManagementConsultingCoursePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Management Consulting Course - #1 Management Consulting Course in India",
    "description": "India's #1 management consulting course at CRACKTHRU. Master case interviews, frameworks, problem-solving with McKinsey, BCG, Bain professionals. 95% placement rate at top consulting firms. Join 1500+ successful consultants.",
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
        "name": "Management Consulting Professionals from McKinsey BCG Bain"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "24999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "350",
      "bestRating": "5"
    },
    "teaches": [
      "Case Interview Techniques",
      "Business Framework Application",
      "Problem Solving Methodologies",
      "Consulting Communication",
      "Strategic Thinking",
      "Market Analysis"
    ]
  };

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Master Case Interviews",
      description: "Learn structured problem-solving and frameworks used by top consulting firms"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "95% Placement Rate",
      description: "Our alumni work at McKinsey, BCG, Bain, Deloitte, and other top firms"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Learn from MBB Consultants",
      description: "Instructors from McKinsey, BCG, Bain with 10+ years consulting experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Intensive Training",
      description: "10-week comprehensive program with live case practice sessions"
    }
  ];

  const curriculum = [
    "Case Interview Fundamentals & Structure",
    "Market Sizing and Estimation Techniques",
    "Profitability and Cost Reduction Frameworks",
    "Business Strategy and Growth Cases",
    "Operations and Process Optimization",
    "Digital Transformation Cases",
    "Industry-Specific Case Studies",
    "Communication and Presentation Skills",
    "Mock Interviews with MBB Consultants",
    "Interview Strategy and Career Guidance"
  ];

  const testimonials = [
    {
      name: "Anjali Gupta",
      role: "Consultant at McKinsey & Company",
      text: "CRACKTHRU's management consulting course gave me the structured thinking and frameworks I needed to crack McKinsey interviews. The mock sessions were incredibly helpful."
    },
    {
      name: "Rohan Kumar",
      role: "Senior Associate at BCG",
      text: "Best management consulting course in India. The case interview preparation was thorough and the instructors' insights from real consulting experience made all the difference."
    },
    {
      name: "Sneha Reddy",
      role: "Principal at Bain & Company",
      text: "From case frameworks to client communication, this course covers everything. Now leading client engagements at Bain thanks to the solid foundation from CRACKTHRU."
    }
  ];

  const cohortFeatures = [
    "Live case interview sessions with MBB consultants",
    "1-on-1 mentorship and career guidance",
    "Access to 100+ practice cases",
    "Industry-specific consulting frameworks",
    "Mock interviews and feedback sessions",
    "Consulting career placement support",
    "Lifetime access to course materials",
    "Alumni network of 1500+ consultants"
  ];

  return (
    <>
      <SEOHead
        title="Management Consulting Course - #1 Management Consulting Course in India | CRACKTHRU"
        description="Join India's #1 management consulting course at CRACKTHRU. Master case interviews, frameworks, problem-solving with McKinsey, BCG, Bain professionals. 95% placement rate at top consulting firms. 1500+ alumni."
        keywords="management consulting course, management consulting course in india, best management consulting course, case interview preparation, consulting course, mckinsey course, bcg course, bain course, consulting training, mbb preparation, crackthru consulting"
        canonical="/management-consulting-course"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                #1 Management Consulting Course in India
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-orange-600">Management Consulting</span>
                <br />
                <span className="text-foreground">Course</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Master management consulting with India's most comprehensive course. Learn case interview techniques, 
                frameworks, and problem-solving from McKinsey, BCG, and Bain professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/cohorts/management-consultancy">Start Your Consulting Journey</Link>
                </Button>
                <Button size="lg" variant="outline">
                  Download Case Studies
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
              Why CRACKTHRU's Management Consulting Course is #1 in India
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
                Comprehensive Management Consulting Curriculum
              </h2>
              <p className="text-xl text-muted-foreground">
                Master every aspect of management consulting with our MBB-designed curriculum
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

        {/* Cohort Features */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What's Included in Your Management Consulting Cohort
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to land your dream consulting job
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cohortFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white/50 dark:bg-black/20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories from Top Consulting Firms
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
              Ready to Start Your Management Consulting Career?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1500+ professionals who've built successful careers with CRACKTHRU's management consulting course
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/cohorts/management-consultancy">Enroll Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-orange-600">
                Download Free Case Study
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}