import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "India Innovates 2026 was an incredible platform that showcased the power of youth innovation. The robotics competitions and AI demonstrations inspired me to pursue my dreams in technology.",
    name: "Aarav Sharma",
    title: "Student Innovator",
    image: "/optimized/1.webp"
  },
  {
    quote: "Participating in the drone obstacle course at India Innovates 2026 was a life-changing experience. The event brought together the brightest young minds and gave us a platform to showcase our skills.",
    name: "Diya Patel",
    title: "Robotics Enthusiast",
    image: "/optimized/2.webp"
  },
  {
    quote: "As a speaker at India Innovates 2026, I was amazed by the energy and passion of young innovators. This summit is truly shaping the future of technology in India.",
    name: "Dr. Rajesh Kumar",
    title: "Technology Innovator",
    image: "/optimized/3.webp"
  },
  {
    quote: "The AgriTech competition at India Innovates 2026 gave me the opportunity to present my smart farming solution. The mentorship and feedback I received were invaluable.",
    name: "Ananya Singh",
    title: "Young Entrepreneur",
    image: "/optimized/4.webp"
  },
  {
    quote: "India Innovates 2026 is not just an event, it's a movement. Connecting with fellow innovators and industry leaders has opened doors I never thought possible.",
    name: "Arjun Mehta",
    title: "Tech Innovator",
    image: "/optimized/1.webp"
  },
  {
    quote: "The Zero Waste Innovation challenge pushed me to think creatively about sustainability. India Innovates 2026 showed me that young people can make a real difference.",
    name: "Priya Desai",
    title: "Environmental Innovator",
    image: "/optimized/2.webp"
  },
  {
    quote: "Exhibiting at India Innovates 2026 helped our startup gain visibility and connect with potential investors. This summit is a game-changer for youth entrepreneurship.",
    name: "Vikram Reddy",
    title: "Startup Founder",
    image: "/optimized/3.webp"
  },
  {
    quote: "The scale and quality of India Innovates 2026 is unmatched. From AI workshops to robotics wars, every aspect of the summit was designed to inspire and educate.",
    name: "Sneha Kapoor",
    title: "AI Researcher",
    image: "/optimized/4.webp"
  },
  {
    quote: "As a delegate at India Innovates 2026, I gained insights from global leaders and connected with innovators from across the country. An unforgettable experience!",
    name: "Rohan Gupta",
    title: "Innovation Enthusiast",
    image: "/optimized/1.webp"
  },
  {
    quote: "The competitions at India Innovates 2026 are world-class. Participating in the Robots War gave me practical skills and confidence to pursue robotics professionally.",
    name: "Kavya Iyer",
    title: "Robotics Engineer",
    image: "/optimized/2.webp"
  },
  {
    quote: "India Innovates 2026 celebrates the spirit of innovation and entrepreneurship. The networking opportunities alone made it worth attending.",
    name: "Aditya Verma",
    title: "Young Innovator",
    image: "/optimized/3.webp"
  },
  {
    quote: "The ReelBaaz competition showcased how creativity and technology can come together. India Innovates 2026 is redefining what youth summits can achieve.",
    name: "Ishita Joshi",
    title: "Content Creator",
    image: "/optimized/4.webp"
  },
  {
    quote: "Attending India Innovates 2026 was a turning point in my journey. The exposure to cutting-edge technology and mentorship from industry experts was priceless.",
    name: "Karan Malhotra",
    title: "Tech Enthusiast",
    image: "/optimized/1.webp"
  },
  {
    quote: "India Innovates 2026 is where passion meets opportunity. The event inspired me to take my innovation from concept to reality.",
    name: "Neha Agarwal",
    title: "Student Innovator",
    image: "/optimized/2.webp"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 bg-clip-text text-transparent">Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from our alumni who've landed their dream Jobs
          </p>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
