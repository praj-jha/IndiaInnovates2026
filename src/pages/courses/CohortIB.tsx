
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthProvider";
import { Download, Clock, Users, Star, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

export default function CohortIB() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to enroll in this course.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    toast({
      title: "Enrollment successful!",
      description: "Welcome to the Investment Banking Cohort.",
    });
  };

  const curriculum = [
    "Financial Modeling Fundamentals",
    "DCF Analysis and Valuation",
    "Comparable Company Analysis",
    "Precedent Transaction Analysis",
    "LBO Modeling",
    "Merger Models",
    "Pitch Book Creation",
    "Industry Analysis",
    "Excel Advanced Techniques",
    "Client Presentation Skills"
  ];

  const outcomes = [
    "Master financial modeling and valuation techniques",
    "Build comprehensive DCF and LBO models",
    "Create professional pitch books and presentations",
    "Understand M&A transaction structures",
    "Develop industry analysis capabilities",
    "Network with investment banking professionals"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Investment Banking Cohort - Best Investment Banking Course in India",
    "description": "India's #1 investment banking course. Master financial modeling, DCF analysis, LBO modeling with Wall Street professionals. 95% placement rate at top firms like Goldman Sachs, JPMorgan Chase, Morgan Stanley. Join 1500+ successful alumni.",
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
        "name": "Wall Street Investment Banking Professionals"
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://crackthru.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "24999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "Investment Banking Training"
    },
    "coursePrerequisites": "Basic finance knowledge helpful but not required",
    "educationalLevel": "Professional Development",
    "inLanguage": "en",
    "teaches": [
      "Financial Modeling",
      "DCF Analysis", 
      "LBO Modeling",
      "Investment Banking Valuation",
      "M&A Analysis",
      "Pitch Book Creation",
      "Excel for Investment Banking"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "250",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Investment Banking Student"
        },
        "reviewBody": "Best investment banking course in India. Got placed at Goldman Sachs after completing this cohort."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Best Investment Banking Course in India | #1 Investment Banking Cohort - CRACKTHRU"
        description="Join India's #1 investment banking course at CRACKTHRU. Learn financial modeling, DCF analysis, LBO from Wall Street experts. 95% placement rate at Goldman Sachs, JPMorgan, Morgan Stanley. 1500+ alumni success stories."
        keywords="investment banking course, investment banking course in india, best investment banking course, investment banking cohort, financial modeling course, DCF analysis course, LBO modeling course, investment banking training, investment banking certification, crackthru, crack thru, wall street course, goldman sachs training, jpmorgan course"
        canonical="/cohorts/investment-banking"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
      <div className="container py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-navy-100 text-navy-800 dark:bg-navy-900 dark:text-navy-200">
              Cohort Program
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-600">Investment</span>{" "}
                <span className="text-foreground">Banking</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl">
                Master the fundamentals of investment banking with expert mentors from top-tier firms. 
                Learn financial modeling, valuation techniques, and M&A analysis through hands-on projects 
                and real-world case studies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" onClick={handleEnroll} className="bg-orange-600 hover:bg-orange-700">
                  Enroll Now - $2,499
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Syllabus
                </Button>
              </div>

              <div className="flex items-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">12 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">250+ students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Certificate included</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/optimized/IB.webp" 
                alt="Investment Banking Course" 
                className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This comprehensive 12-week cohort is designed for ambitious professionals looking to break into 
                  investment banking or advance their careers in finance. You'll work alongside peers and learn 
                  from experienced professionals from Goldman Sachs, JP Morgan, and other top-tier firms.
                </p>
                <p className="text-muted-foreground">
                  The program combines theoretical knowledge with practical application, ensuring you graduate 
                  with the skills and confidence needed to excel in investment banking roles.
                </p>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Achieve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Highlights</CardTitle>
                <CardDescription>
                  Key topics covered throughout the 12-week program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {curriculum.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                      <span className="text-sm font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-3xl font-bold text-orange-600">$2,499</span>
                </CardTitle>
                <CardDescription className="text-center">
                  Full cohort access with mentorship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleEnroll} className="w-full bg-orange-600 hover:bg-orange-700 mb-4">
                  Enroll Now
                </Button>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Duration</span>
                    <span className="font-medium">12 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Format</span>
                    <span className="font-medium">Live + Recorded</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Support</span>
                    <span className="font-medium">1-on-1 Mentorship</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Certificate</span>
                    <span className="font-medium">Included</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Basic finance knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Intermediate Excel skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Bachelor's degree preferred</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mentor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Learn from the Best</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our mentors are current and former professionals from:
                </p>
                <div className="mt-3 space-y-1 text-sm font-medium">
                  <div>• Goldman Sachs</div>
                  <div>• JP Morgan</div>
                  <div>• Morgan Stanley</div>
                  <div>• Bank of America</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Investment Banking Journey?</h2>
            <p className="mb-6 opacity-90">
              Join hundreds of successful professionals who've launched their IB careers with CRACKTHRU
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleEnroll}>
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-orange-600 hover:border-orange-600" asChild>
                <Link to="/">Browse Other Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
