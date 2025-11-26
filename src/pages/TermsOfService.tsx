import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-foreground/60 text-sm">Last updated: November 26, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:file-text" width={24} />
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground/80 mb-4">
                By accessing and using the India Innovates website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:users" width={24} />
                2. Event Registration and Participation
              </h2>
              <p className="text-foreground/80 mb-4">
                <strong>2.1 Registration:</strong> All participants must register through our official website. Registration information must be accurate and complete.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>2.2 Age Requirements:</strong> School competition participants must meet the age criteria specified for their respective categories. Delegates must be 18 years or older, or attend with a legal guardian.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>2.3 Payment:</strong> All fees must be paid in full before the event. Registration is confirmed only upon receipt of payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:shield-check" width={24} />
                3. Intellectual Property Rights
              </h2>
              <p className="text-foreground/80 mb-4">
                <strong>3.1 Content Ownership:</strong> All content on the India Innovates website, including text, graphics, logos, images, and software, is the property of Hansa Ai Technologies Private Limited or its content suppliers.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>3.2 Competition Submissions:</strong> Participants retain ownership of their competition entries but grant India Innovates a non-exclusive license to showcase and promote these works.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:alert-triangle" width={24} />
                4. User Conduct
              </h2>
              <p className="text-foreground/80 mb-4">
                Participants agree to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights and dignity of other participants</li>
                <li>Not engage in any disruptive or harmful behavior</li>
                <li>Follow the Code of Conduct at all times during the event</li>
                <li>Not misuse or damage event facilities or equipment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:camera" width={24} />
                5. Photography and Recording
              </h2>
              <p className="text-foreground/80 mb-4">
                By participating in India Innovates, you consent to being photographed, filmed, or recorded during the event. These materials may be used for promotional purposes without additional compensation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:ban" width={24} />
                6. Limitation of Liability
              </h2>
              <p className="text-foreground/80 mb-4">
                India Innovates and Hansa Ai Technologies Private Limited shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Personal injury or loss of property during the event</li>
                <li>Technical failures or interruptions of service</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Force majeure events beyond our reasonable control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:calendar-x" width={24} />
                7. Event Changes and Cancellation
              </h2>
              <p className="text-foreground/80 mb-4">
                India Innovates reserves the right to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Modify the event schedule, venue, or content</li>
                <li>Cancel or postpone the event due to circumstances beyond our control</li>
                <li>Refuse admission or remove participants who violate these terms</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                Refund policies for event changes are detailed in our Refund Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:trophy" width={24} />
                8. Competition Rules
              </h2>
              <p className="text-foreground/80 mb-4">
                <strong>8.1 Eligibility:</strong> Competition participants must meet all eligibility requirements specified for their category.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>8.2 Judging:</strong> All judging decisions are final and binding. India Innovates reserves the right to disqualify entries that violate competition rules.
              </p>
              <p className="text-foreground/80 mb-4">
                <strong>8.3 Prizes:</strong> Prize winners will be notified within 30 days of the event conclusion. Prizes are non-transferable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:link" width={24} />
                9. Third-Party Links
              </h2>
              <p className="text-foreground/80 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:edit" width={24} />
                10. Modifications to Terms
              </h2>
              <p className="text-foreground/80 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:scale" width={24} />
                11. Governing Law
              </h2>
              <p className="text-foreground/80 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:mail" width={24} />
                12. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-content2 p-6 rounded-lg">
                <p className="text-foreground/80 mb-2">
                  <strong>Email:</strong> contact@indiainnovates.org
                </p>
                <p className="text-foreground/80 mb-2">
                  <strong>Registered Address:</strong> Pole No-39 Vill Kangan Heri New Delhi, 110043
                </p>
                <p className="text-foreground/80">
                  <strong>Operating Address:</strong> 2151/11, New Patel Nagar, Pandu Nagar, Central Delhi, Delhi, 110008
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;

