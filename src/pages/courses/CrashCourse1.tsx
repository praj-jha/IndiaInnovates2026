
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthProvider";
import { Download, Clock, Users, Star, CheckCircle, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

export default function CrashCourse1() {
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
      description: "Welcome to the Finance Fundamentals Track.",
    });
  };

  const curriculum = [
    "Financial Statement Analysis",
    "Time Value of Money",
    "Basic Financial Modeling",
    "Ratio Analysis",
    "Cash Flow Fundamentals",
    "Risk and Return Concepts",
    "Capital Structure Basics",
    "Valuation Principles"
  ];

  const outcomes = [
    "Understand core financial concepts and principles",
    "Read and analyze financial statements effectively",
    "Build basic financial models in Excel",
    "Calculate and interpret key financial ratios",
    "Assess company financial health and performance"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Finance Fundamentals Crash Course - Quick Finance Training India",
    "description": "Master finance fundamentals in India's intensive crash course at CRACKTHRU. Learn financial modeling, statement analysis, valuation with industry experts. Quick results for working professionals. Join 500+ finance professionals.",
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
      "duration": "P2W",
      "instructor": {
        "@type": "Person",
        "name": "Finance Industry Professionals"
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://crackthru.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "7999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "Finance Training"
    },
    "coursePrerequisites": "Basic business knowledge",
    "educationalLevel": "Professional Development",
    "inLanguage": "en",
    "teaches": [
      "Financial Statement Analysis",
      "Financial Modeling Basics",
      "Valuation Principles",
      "Risk Assessment",
      "Cash Flow Analysis",
      "Investment Evaluation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "120",
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
          "name": "Finance Professional"
        },
        "reviewBody": "Best finance crash course in India. Quickly built essential finance skills needed for my career transition."
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Finance Fundamentals Crash Course India | Quick Finance Training - CRACKTHRU"
        description="Master finance fundamentals in India's intensive crash course at CRACKTHRU. Learn financial modeling, statement analysis, valuation with industry experts. Quick results for working professionals."
        keywords="finance crash course, finance fundamentals course, finance course india, financial modeling course, finance training, quick finance course, crackthru finance, financial analysis course"
        canonical="/courses/crash-course-finance"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-orange-50 dark:from-navy-950 dark:via-background dark:to-orange-950">
        <div className="container py-12">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                <Zap className="h-3 w-3 mr-1" />
                Crash Course
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.7</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-orange-600">
                    Finance Fundamentals
                  </span>
                  <br />
                  <span className="text-foreground">Crash Course</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl">
                  Intensive crash course covering essential finance concepts and modeling techniques.
                  Perfect for professionals looking to quickly build foundational finance skills or
                  prepare for more advanced programs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" onClick={handleEnroll} className="bg-orange-600 hover:bg-orange-700">
                    Enroll Now - $799
                  </Button>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Syllabus
                  </Button>
                </div>

                <div className="flex items-center space-x-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">4 weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">150+ students</span>
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
                  alt="Finance Fundamentals Crash Course"
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
                    This intensive 4-week crash course is designed for professionals who need to quickly build
                    foundational finance skills. Whether you're preparing for a career transition, upcoming
                    interviews, or simply want to enhance your financial literacy, this course provides essential
                    knowledge in a condensed format.
                  </p>
                  <p className="text-muted-foreground">
                    Learn from experienced finance professionals and gain practical skills you can immediately
                    apply in your work or further studies.
                  </p>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Achieve</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
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
                    Key topics covered in this intensive 4-week program
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
                    <span className="text-3xl font-bold text-orange-600">$799</span>
                  </CardTitle>
                  <CardDescription className="text-center">
                    Intensive 4-week program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleEnroll} className="w-full bg-orange-600 hover:bg-orange-700 mb-4">
                    Enroll Now
                  </Button>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Duration</span>
                      <span className="font-medium">4 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Format</span>
                      <span className="font-medium">Self-paced + Live</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Support</span>
                      <span className="font-medium">Community & Q&A</span>
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
                      <span>Basic math skills</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Microsoft Excel basics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>No prior finance experience needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-orange-600 mt-0.5" />
                      <span>Fast-paced learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Practical exercises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Real-world examples</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Downloadable resources</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Master Finance Fundamentals?</h2>
              <p className="mb-6 opacity-90">
                Build essential finance skills in just 4 weeks with our intensive crash course
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
