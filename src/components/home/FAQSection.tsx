import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is India Innovates 2026?",
    answer: "India Innovates 2026 is India's premier innovation and technology summit taking place at Bharat Mandapam, New Delhi on 28-29 March 2026. It brings together 5,000+ international delegates, 300+ Members of Parliament, 200+ investors, and young innovators to shape India's innovation ecosystem and build towards India's 2047 vision."
  },
  {
    question: "What are the sub-events at India Innovates 2026?",
    answer: "The summit features multiple exciting sub-events including: Future of Politics sessions with leading parliamentarians, II26 Awards recognizing outstanding innovators, Future of Cities dialogue on urban innovation, India 2047 vision workshops, School and University Competitions for young innovators, and an Innovation Expo showcasing cutting-edge technology and startups."
  },
  {
    question: "What does a Delegate Pass include?",
    answer: "A Delegate Pass gives you full access to all summit sessions, keynote speeches, panel discussions, networking events, and the innovation expo. You'll get opportunities to interact with MPs, industry leaders, investors, and fellow innovators. Passes also include access to workshops, competition events, and exclusive networking lounges. Early bird and group discounts are available."
  },
  {
    question: "How can I participate in the Innovation Expo?",
    answer: "Organizations, startups, and innovators can book exhibition space to showcase their innovations, products, and services. The expo provides a platform to connect with investors, partners, and potential customers. Exhibition packages include booth space, branding opportunities, and promotional support. Visit our Exhibitor Registration page to learn more about packages and book your space."
  },
  {
    question: "Are there competitions for students and young innovators?",
    answer: "Yes! We have separate competition tracks for school students and university students/young professionals. These include innovation challenges in technology, sustainability, and social impact. Winners receive awards, mentorship opportunities, and potential funding. Competitions are designed to identify and nurture India's next generation of innovators aligned with the Prime Minister's vision of self-reliant innovation."
  },
  {
    question: "How can I register for India Innovates 2026?",
    answer: "You can register through our website by selecting your category: Delegate Pass for general attendees, School Competition Registration for school participants, or Exhibitor Registration for organizations wanting exhibition space. Group registrations and early bird discounts are available. For any questions, contact us at contact@indiainnovates.org"
  }
];

export default function FAQSection() {
  return (
    <section id="faqs" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="michroma-heading text-3xl lg:text-4xl font-semibold mb-4">Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about India Innovates 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
