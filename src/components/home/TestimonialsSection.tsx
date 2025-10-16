import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "I express my sincere appreciation for the outstanding services provided by CRACKTHRU. Their online sessions have been invaluable in shaping my career trajectory. The team meticulously covered every aspect of the interview process, providing me with the confidence needed to excel.",
    name: "Gyanendra Tripathi",
    title: "Management Consultant",
    image: "/optimized/1.webp"
  },
  {
    quote: "CRACKTHRU definitely proves to be very helpful for my professional career. I learned a lot about consultancy and direct sessions with industry professionals was an absolutely great learning experience.",
    name: "Sakshi Mishra",
    title: "Strategy Professional",
    image: "/optimized/2.webp"
  },
  {
    quote: "The experience was new and learned. It felt nice to be tutored by industry experts. The CRACKTHRU team delivered what they promised at the start of the course. Looking forward to more courses.",
    name: "Dr. Nitish Chaudhri",
    title: "Healthcare Consultant",
    image: "/optimized/3.webp"
  },
  {
    quote: "It was great to interact and learn from industry experts. The team gave us a comprehensive overview of the consulting world with practical insights.",
    name: "A M Shobhit",
    title: "Business Analyst",
    image: "/optimized/4.webp"
  },
  {
    quote: "CRACKTHRU Fellowship is a game-changer. From personalized CV reviews to direct expert access, it's invaluable. The referrals and insights transformed my career path. It's a competitive advantage and community.",
    name: "Purva Pandya",
    title: "Management Consultant",
    image: "/optimized/1.webp"
  },
  {
    quote: "The Fellowship Programme proved valuable in my professional development, providing hands-on exposure to real-world consulting practices. It enhanced my prospects for a successful consulting career.",
    name: "Shayna",
    title: "Strategy Consultant",
    image: "/optimized/2.webp"
  },
  {
    quote: "The comprehensive training and mentorship provided by CRACKTHRU has been instrumental in my career growth. The practical insights and industry connections have opened doors I never thought possible.",
    name: "Rajesh Kumar",
    title: "Senior Consultant",
    image: "/optimized/3.webp"
  },
  {
    quote: "CRACKTHRU's approach to teaching consulting skills is unique and effective. The real-world case studies and expert guidance have significantly improved my problem-solving abilities.",
    name: "Priya Sharma",
    title: "Business Strategy Analyst",
    image: "/optimized/4.webp"
  },
  {
    quote: "The networking opportunities and career guidance provided by CRACKTHRU have been exceptional. I've built valuable connections and gained insights that have accelerated my professional journey.",
    name: "Arjun Patel",
    title: "Management Trainee",
    image: "/optimized/1.webp"
  },
  {
    quote: "CRACKTHRU's curriculum is well-structured and industry-relevant. The skills I've gained have made me more confident in client interactions and strategic thinking.",
    name: "Neha Gupta",
    title: "Consultant",
    image: "/optimized/2.webp"
  },
  {
    quote: "The personalized approach and one-on-one mentoring sessions have been invaluable. CRACKTHRU doesn't just teach theory; they provide practical, actionable insights.",
    name: "Rohit Verma",
    title: "Digital Strategy Consultant",
    image: "/optimized/3.webp"
  },
  {
    quote: "From case study preparation to interview coaching, CRACKTHRU covers it all. The mock interviews were particularly helpful in building my confidence.",
    name: "Kavya Reddy",
    title: "Business Consultant",
    image: "/optimized/4.webp"
  },
  {
    quote: "The industry exposure and practical learning approach at CRACKTHRU has been phenomenal. I now feel equipped to tackle any business challenge.",
    name: "Amit Singh",
    title: "Strategy Analyst",
    image: "/optimized/1.webp"
  },
  {
    quote: "CRACKTHRU's comprehensive program and excellent mentorship helped me transition from engineering to consulting successfully. Highly recommended!",
    name: "Sneha Agarwal",
    title: "Management Consultant",
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
