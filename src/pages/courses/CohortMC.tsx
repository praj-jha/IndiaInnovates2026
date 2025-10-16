
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthProvider";
import { Download, Clock, Users, Star, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

export default function CohortMC() {
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
      description: "Welcome to the Management Consultancy Cohort.",
    });
  };

  const curriculum = [
    "Case Interview Fundamentals",
    "Problem-Solving Frameworks",
    "Market Sizing and Estimation",
    "Profitability Analysis",
    "Competitive Intelligence & Forecasting (New!)",
    "Business Analytics Basics (Excel + Power BI)",
    "Client Communication",
    "Presentation Skills",
    "Capstone Live Project",
    "Career Launchpad (Referrals + Mock Interviews)"
  ];

  const outcomes = [
    "Master case-solving methodologies and frameworks",
    "Develop structured problem-solving skills", 
    "Build confidence in client-facing situations",
    "Understand consulting project lifecycle",
    "Learn industry-specific best practices",
    "Gain foundational skills in business analytics (Excel + Power BI)",
    "Learn competitive intelligence & forecasting from industry experts",
    "Network with top consulting professionals"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course", 
    "name": "Management Consulting Cohort - Best Management Consulting Course in India",
    "description": "India's #1 management consulting course. Master case interview techniques, frameworks, and problem-solving with McKinsey, BCG, Bain professionals. 95% placement rate at top consulting firms. Join 1200+ successful consultants.",
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
      "duration": "P6W",
      "instructor": {
        "@type": "Person",
        "name": "McKinsey BCG Bain Consulting Professionals"
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://crackthru.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "9999",
      "priceCurrency": "INR", 
      "availability": "https://schema.org/InStock",
      "category": "Management Consulting Training"
    },
    "coursePrerequisites": "Basic business knowledge helpful but not required",
    "educationalLevel": "Professional Development",
    "inLanguage": "en",
    "teaches": [
      "Case Interview Preparation",
      "Business Framework Application",
      "Problem Solving Methodologies", 
      "Consulting Communication Skills",
      "Industry Analysis",
      "Strategic Thinking"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "180",
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
          "name": "Management Consulting Student"
        },
        "reviewBody": "Best management consulting course in India. Cracked McKinsey interview after this cohort training."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Best Management Consulting Course in India | #1 Management Consulting Cohort - CRACKTHRU"
        description="Join India's #1 management consulting course at CRACKTHRU. Master case interviews, business frameworks with McKinsey, BCG, Bain experts. 95% placement rate at top consulting firms. 1200+ alumni at MBB firms."
        keywords="management consulting course, management consulting course in india, best management consulting course, management consulting cohort, case interview preparation, consulting course, mckinsey course, bcg course, bain course, consulting training, consulting certification, crackthru, crack thru, mbb preparation"
        canonical="/cohorts/management-consultancy"
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
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-600">Management</span>{" "}
                <span className="text-foreground">Consulting</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl">
                Learn case-solving methodologies and frameworks used by leading consulting firms like McKinsey, 
                BCG, and Bain. Gain hands-on experience in business analytics, competitive intelligence, and 
                forecasting — all taught by real industry experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" onClick={handleEnroll} className="bg-orange-600 hover:bg-orange-700">
                  Enroll Now - ₹9,999
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Syllabus
                </Button>
              </div>

              <div className="flex items-center space-x-8 mt-8">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">6 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">200+ students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Certificate included</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/optimized/MC.webp" 
                alt="Management Consulting Course" 
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
                The CrackThru Management Consulting Mastery Cohort is a 6-week immersive learning fellowship designed for final-year students, graduates, and early-career professionals who aspire to enter top consulting and strategy roles.

This flagship program builds on the legacy of Prajwal academy — a pioneering initiative that helped 2,000+ students break into the world of consulting. Today, CrackThru continues that mission with a sharper focus, industry-backed curriculum, and hands-on career-building tools.
                </p>
                <p className="text-muted-foreground">
                  Our mentors come from McKinsey, BCG, Bain, Deloitte, IQVIA, Accenture, and other elite consulting firms — guiding learners like you toward the next big step in your career.
                  Through case studies, group work, and individual coaching, you'll develop the analytical 
                  and communication skills essential for consulting success.
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
                  Key topics covered throughout the 6-week program
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
                  <span className="text-3xl font-bold text-orange-600">₹9,999</span>
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
                    <span className="font-medium">6 weeks</span>
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
                    <span>Analytical mindset</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Business curiosity</span>
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
                  <div>• McKinsey & Company</div>
                  <div>• Boston Consulting Group</div>
                  <div>• Bain & Company</div>
                  <div>• Deloitte</div>
                  <div>• IQVIA</div>
                  <div>• Accenture</div>
                  <div>• NITI Aayog</div>
                  <div>• Genpact</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Master Management Consulting?</h2>
            <p className="mb-6 opacity-90">
              Join the ranks of successful consultants who've honed their skills with CRACKTHRU
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
