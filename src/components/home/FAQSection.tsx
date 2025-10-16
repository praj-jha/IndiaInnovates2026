import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes CRACKTHRU different from other EdTech platforms?",
    answer: "We focus exclusively on high-impact careers in finance, consulting, and product management. Our mentors come from top-tier firms and provide real-world insights that you won't find elsewhere."
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Our cohorts are designed for serious learners at all levels. We provide foundational content for beginners while offering advanced insights for experienced professionals."
  },
  {
    question: "What kind of support do I get during the course?",
    answer: "You'll have access to live sessions, 1-on-1 mentorship, peer groups, and our dedicated support team throughout your learning journey."
  },
  {
    question: "Do you offer any placement assistance?",
    answer: "While we focus on skill development and industry insights, our strong network of alumni and mentors often leads to valuable career opportunities."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about CRACKTHRU
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
