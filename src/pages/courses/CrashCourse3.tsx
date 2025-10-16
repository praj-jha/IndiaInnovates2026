
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthProvider";
import { Download, Clock, Users, Star, CheckCircle, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

export default function CrashCourse3() {
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
      description: "Welcome to the Product Strategy Track.",
    });
  };

  const curriculum = [
    "Product Thinking Fundamentals",
    "User Research Essentials",
    "Market Analysis Techniques",
    "Prioritization Frameworks",
    "Product Strategy Development",
    "MVP Design and Testing",
    "Product Metrics and Analytics",
    "Go-to-Market Strategy"
  ];

  const outcomes = [
    "Develop strong product thinking abilities",
    "Learn user research and persona development",
    "Create product roadmaps and strategy",
    "Master prioritization techniques",
    "Measure product success with appropriate metrics"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Product Strategy Crash Course - Product Management Fundamentals India",
    "description": "Master product strategy fundamentals in India's intensive crash course at CRACKTHRU. Learn product thinking, user research, roadmapping with industry experts. Quick results for aspiring PMs. Join 250+ product professionals.",
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
      "duration": "P4W",
      "instructor": {
        "@type": "Person",
        "name": "Senior Product Managers from Top Tech Companies"
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://crackthru.com"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "11999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "category": "Product Management Training"
    },
    "coursePrerequisites": "Basic business or technical knowledge",
    "educationalLevel": "Professional Development",
    "inLanguage": "en",
    "teaches": [
      "Product Strategy Development",
      "User Research Methods",
      "Product Roadmap Planning",
      "Market Analysis",
      "Product Metrics",
      "Go-to-Market Strategy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "95",
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
          "name": "Product Management Student"
        },
        "reviewBody": "Best product strategy crash course in India. Gave me solid foundation to transition into product management role."
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Product Strategy Crash Course India | Product Management Fundamentals - CRACKTHRU"
        description="Master product strategy fundamentals in India's intensive crash course at CRACKTHRU. Learn product thinking, user research, roadmapping with industry experts. Quick results for aspiring PMs."
        keywords="product strategy course, product management crash course, product fundamentals course, PM course india, product thinking course, user research course, product roadmap course, crackthru product"
        canonical="/courses/crash-course-product"
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
                <span className="text-sm font-medium">4.6</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-orange-600">
                    Product Strategy
                  </span>
                  <br />
                  <span className="text-foreground">Crash Course</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl">
                  Learn product thinking and strategy development in an accelerated format.
                  Ideal for current or aspiring product managers, entrepreneurs, and business
                  professionals looking to build product strategy skills quickly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" onClick={handleEnroll} className="bg-orange-600 hover:bg-orange-700">
                    Enroll Now - $899
                  </Button>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Syllabus
                  </Button>
                </div>

                <div className="flex items-center space-x-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">5 weeks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">180+ students</span>
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
                  alt="Product Strategy Crash Course"
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
                    This intensive 5-week crash course is designed for professionals who want to learn product
                    thinking and strategy development in an accelerated format. Perfect for current or aspiring
                    product managers, entrepreneurs, or business professionals looking to develop product
                    strategy skills quickly.
                  </p>
                  <p className="text-muted-foreground">
                    Through hands-on exercises, case studies, and practical assignments, you'll develop
                    the mindset and skills to build successful products that users love and businesses value.
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
                    Key topics covered in this intensive 5-week program
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
                    <span className="text-3xl font-bold text-orange-600">$899</span>
                  </CardTitle>
                  <CardDescription className="text-center">
                    Intensive 5-week program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={handleEnroll} className="w-full bg-orange-600 hover:bg-orange-700 mb-4">
                    Enroll Now
                  </Button>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Duration</span>
                      <span className="font-medium">5 weeks</span>
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
                      <span>Basic product understanding</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Business and user mindset</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Problem-solving abilities</span>
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
                      <span>Practical exercises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Product strategy templates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Case studies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Product analytics tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Product Strategy Skills?</h2>
              <p className="mb-6 opacity-90">
                Master product thinking and strategy in just 5 weeks with our intensive crash course
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
