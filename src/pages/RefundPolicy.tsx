import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-foreground/60 text-sm">Last updated: November 26, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:info" width={24} />
                1. Overview
              </h2>
              <p className="text-foreground/80 mb-4">
                This Refund Policy outlines the terms and conditions under which Hansa Ai Technologies Private Limited ("India Innovates") will process refunds for event registrations, delegate passes, and competition fees.
              </p>
              <p className="text-foreground/80 mb-4">
                We understand that circumstances may change, and we aim to be as accommodating as possible while maintaining fair policies for all participants.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:ticket" width={24} />
                2. Delegate Pass Refunds
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Refund Timeline</h3>
              <div className="bg-content2 p-6 rounded-lg mb-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">More than 60 days before the event:</p>
                    <p className="text-foreground/80">100% refund (minus processing fees)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">30-60 days before the event:</p>
                    <p className="text-foreground/80">75% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">15-29 days before the event:</p>
                    <p className="text-foreground/80">50% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Less than 15 days before the event:</p>
                    <p className="text-foreground/80">No refund available</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Transfer Option</h3>
              <p className="text-foreground/80 mb-4">
                If you cannot attend, you may transfer your delegate pass to another person up to 7 days before the event. A transfer fee of ₹500 will apply. Contact us at contact@indiainnovates.org to process the transfer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:graduation-cap" width={24} />
                3. School Competition Refunds
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Registration Fees</h3>
              <p className="text-foreground/80 mb-4">
                School competition registration fees are generally non-refundable after submission. However, exceptions may be made in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Medical emergencies (with valid documentation)</li>
                <li>School-mandated schedule conflicts</li>
                <li>Event cancellation by India Innovates</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Withdrawal Timeline</h3>
              <div className="bg-content2 p-6 rounded-lg mb-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">More than 30 days before competition:</p>
                    <p className="text-foreground/80">80% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">15-30 days before competition:</p>
                    <p className="text-foreground/80">50% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Less than 15 days before competition:</p>
                    <p className="text-foreground/80">No refund available</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:store" width={24} />
                4. Exhibitor Registration Refunds
              </h2>
              <p className="text-foreground/80 mb-4">
                Exhibitor booth bookings are subject to different refund terms due to space commitments and planning requirements.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Cancellation Terms</h3>
              <div className="bg-content2 p-6 rounded-lg mb-4">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">More than 90 days before the event:</p>
                    <p className="text-foreground/80">90% refund (10% retained as cancellation fee)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">60-90 days before the event:</p>
                    <p className="text-foreground/80">70% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">30-59 days before the event:</p>
                    <p className="text-foreground/80">50% refund</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Less than 30 days before the event:</p>
                    <p className="text-foreground/80">No refund available</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Downgrading Booth Size</h3>
              <p className="text-foreground/80 mb-4">
                If you wish to downgrade your booth size, you may do so up to 45 days before the event. The price difference will be refunded minus a 15% administrative fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:x-circle" width={24} />
                5. Event Cancellation or Postponement
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Cancellation by India Innovates</h3>
              <p className="text-foreground/80 mb-4">
                If India Innovates cancels the event, all participants will receive a full refund of their registration fees within 30 business days.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Event Postponement</h3>
              <p className="text-foreground/80 mb-4">
                If the event is postponed to a new date:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Your registration will automatically transfer to the new date</li>
                <li>If you cannot attend the new date, you may request a full refund within 14 days of the postponement announcement</li>
                <li>Refunds will be processed within 30 business days of the request</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Force Majeure</h3>
              <p className="text-foreground/80 mb-4">
                In the event of force majeure circumstances (natural disasters, government restrictions, etc.), India Innovates will work to provide alternative solutions, which may include:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Virtual participation options</li>
                <li>Credit towards future events</li>
                <li>Partial or full refunds at our discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:file-text" width={24} />
                6. How to Request a Refund
              </h2>
              <p className="text-foreground/80 mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-foreground/80 space-y-3 mb-4">
                <li>Email contact@indiainnovates.org with "Refund Request" in the subject line</li>
                <li>Include your registration confirmation number and full name</li>
                <li>Provide the reason for your refund request</li>
                <li>Include any supporting documentation (if applicable)</li>
                <li>Specify your preferred refund method</li>
              </ol>
              <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg mb-4">
                <p className="text-foreground/80">
                  <strong>Note:</strong> Refund requests must be submitted in writing via email. Verbal requests will not be processed.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:clock" width={24} />
                7. Processing Time
              </h2>
              <p className="text-foreground/80 mb-4">
                Once your refund is approved:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Credit/Debit Card: 7-14 business days</li>
                <li>Bank Transfer: 5-10 business days</li>
                <li>UPI: 3-7 business days</li>
                <li>Other payment methods: Up to 21 business days</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                Please note that processing times may vary depending on your financial institution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:credit-card" width={24} />
                8. Processing Fees
              </h2>
              <p className="text-foreground/80 mb-4">
                Payment processing fees (typically 2-3% of the transaction amount) are non-refundable. These fees are charged by third-party payment processors and are deducted from all refund amounts where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:ban" width={24} />
                9. Non-Refundable Items
              </h2>
              <p className="text-foreground/80 mb-4">
                The following items are non-refundable under any circumstances:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Early bird discounts or promotional offers</li>
                <li>Group registration discounts</li>
                <li>Partial participation in multi-day events</li>
                <li>No-shows (failure to attend without prior cancellation)</li>
                <li>Add-on services or merchandise</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:heart-pulse" width={24} />
                10. Special Circumstances
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Medical Emergencies</h3>
              <p className="text-foreground/80 mb-4">
                In cases of medical emergencies, we may offer refunds outside of our standard policy. Valid medical documentation must be provided within 7 days of the event date.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Bereavement</h3>
              <p className="text-foreground/80 mb-4">
                In the unfortunate event of a death in the immediate family, full refunds will be provided upon submission of appropriate documentation.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">10.3 Visa Denials</h3>
              <p className="text-foreground/80 mb-4">
                For international participants who are denied visas, a full refund (minus processing fees) will be provided upon submission of the official visa denial letter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:alert-triangle" width={24} />
                11. Disputes
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have a dispute regarding a refund:
              </p>
              <ol className="list-decimal pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Contact us at contact@indiainnovates.org to resolve the issue directly</li>
                <li>If unresolved, you may escalate the matter in writing within 30 days</li>
                <li>We will review and respond within 15 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:refresh-cw" width={24} />
                12. Policy Changes
              </h2>
              <p className="text-foreground/80 mb-4">
                India Innovates reserves the right to modify this Refund Policy at any time. Changes will be posted on our website, and the "Last updated" date will be revised. The policy in effect at the time of your registration will apply to your transaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:mail" width={24} />
                13. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                For refund requests or questions about this policy, please contact:
              </p>
              <div className="bg-content2 p-6 rounded-lg">
                <p className="text-foreground/80 mb-2">
                  <strong>Email:</strong> contact@indiainnovates.org
                </p>
                <p className="text-foreground/80 mb-2">
                  <strong>Subject Line:</strong> "Refund Request - [Your Registration Number]"
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

export default RefundPolicy;

