import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Clock, Users } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

const courses = [
	{
		id: "ib",
		title: "Investment Banking",
		description:
			"Master the fundamentals of investment banking with expert mentors from top-tier firms.",
		duration: "12 weeks",
		students: "250+",
		rating: 4.9,
		originalPrice: "₹29,999",
		price: "₹24,999",
		link: "/cohorts/investment-banking",
		type: "cohort",
		image: "/optimized/IB.webp",
	},
	{
		id: "mc",
		title: "Management Consulting",
		description:
			"Learn case-solving methodologies and frameworks used by leading consulting firms.",
		duration: "10 weeks",
		students: "180+",
		rating: 4.8,
		originalPrice: "₹29,999",
		price: "₹14,999",
		link: "/cohorts/management-consultancy",
		type: "cohort",
		image: "/optimized/MC.webp",
	},
	{
		id: "pm",
		title: "Product Management",
		description:
			"Build product strategy and management skills with hands-on projects and mentorship.",
		duration: "8 weeks",
		students: "320+",
		rating: 4.9,
		originalPrice: "₹29,999",
		price: "₹14,999",
		link: "/cohorts/product-management",
		type: "cohort",
		image: "/optimized/MC.webp",
	},
	{
		id: "crash1",
		title: "Finance Fundamentals Track",
		description:
			"Intensive crash course covering essential finance concepts and modeling techniques.",
		duration: "4 weeks",
		students: "150+",
		rating: 4.7,
		originalPrice: "₹9,999",
		price: "₹4,999",
		link: "/crash-courses/track-1",
		type: "crash",
		image: "/optimized/MC.webp",
	},
	{
		id: "crash2",
		title: "Consulting Case Prep Track",
		description:
			"Fast-track preparation for consulting case interviews with proven frameworks.",
		duration: "3 weeks",
		students: "200+",
		rating: 4.8,
		originalPrice: "₹14,999",
		price: "₹7,499",
		link: "/crash-courses/track-2",
		type: "crash",
		image: "/optimized/IB.webp",
	},
	{
		id: "crash3",
		title: "Product Strategy Track",
		description:
			"Learn product thinking and strategy development in an accelerated format.",
		duration: "5 weeks",
		students: "180+",
		rating: 4.6,
		originalPrice: "₹19,999",
		price: "₹9,999",
		link: "/crash-courses/track-3",
		type: "crash",
		image: "/optimized/IB.webp",
	},
];

export default function CoursesSection() {
	// Note: This section can be repurposed for event-related content in the future

	return (
		<section id="courses" className="py-24">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold mb-4">
						Choose. Commit.{" "}
						<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
							Cohort. Conquer.
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Whether you prefer comprehensive cohorts or intensive crash courses, we
						have the perfect program for your career goals.
					</p>
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					id="cohorts"
				>
					{courses.map((course) => (
						<Card
							key={course.id}
							className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800 overflow-hidden"
						>
							{/* Course Image */}
							<div className="relative h-48 overflow-hidden">
								<OptimizedImage
									src={course.image}
									alt={course.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									width={600}
									height={400}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
								<Badge
									variant={
										course.type === "cohort" ? "default" : "secondary"
									}
									className="absolute top-4 left-4 bg-white/90 text-gray-800 hover:bg-white"
								>
									{course.type === "cohort" ? "Cohort" : "Crash Course"}
								</Badge>
							</div>

							<CardHeader>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center space-x-1">
										<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm font-medium">
											{course.rating}
										</span>
									</div>
								</div>
								<CardTitle className="group-hover:text-orange-600 transition-colors">
									{course.title}
								</CardTitle>
								<CardDescription>{course.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex items-center justify-between text-sm">
										<div className="flex items-center space-x-1">
											<Clock className="h-4 w-4" />
											<span>{course.duration}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Users className="h-4 w-4" />
											<span>{course.students}</span>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex flex-col">
											<span className="text-2xl font-bold text-black dark:text-white">
												{course.price}
											</span>
											{course.originalPrice &&
												course.originalPrice !== course.price && (
													<span className="text-sm text-muted-foreground line-through">
														{course.originalPrice}
													</span>
												)}
										</div>
										<Button
											asChild
											className="group-hover:bg-orange-600 group-hover:border-orange-600"
										>
											<Link to={course.link}>
												Learn More <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div id="crash-courses" className="pt-8"></div>
			</div>
		</section>
	);
}
