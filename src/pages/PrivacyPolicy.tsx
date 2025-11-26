import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-foreground/60 text-sm">Last updated: November 26, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:info" width={24} />
                1. Introduction
              </h2>
              <p className="text-foreground/80 mb-4">
                Hansa Ai Technologies Private Limited ("we," "us," or "our") operates the India Innovates website and event. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our events.
              </p>
              <p className="text-foreground/80 mb-4">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or participate in our events.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:database" width={24} />
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-foreground/80 mb-4">
                We may collect personal information that you provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Name, email address, phone number</li>
                <li>School or institution name</li>
                <li>Date of birth and age</li>
                <li>Parent/guardian information (for minors)</li>
                <li>Payment information</li>
                <li>Professional information (for delegates)</li>
                <li>Competition submissions and related materials</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-foreground/80 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Time zone settings and location</li>
                <li>Operating system and platform</li>
                <li>Website usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:target" width={24} />
                3. How We Use Your Information
              </h2>
              <p className="text-foreground/80 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Process event registrations and payments</li>
                <li>Communicate with participants about the event</li>
                <li>Manage competitions and distribute prizes</li>
                <li>Improve our website and services</li>
                <li>Send promotional materials and updates (with consent)</li>
                <li>Comply with legal obligations</li>
                <li>Ensure security and prevent fraud</li>
                <li>Analyze usage patterns and trends</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:share-2" width={24} />
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-foreground/80 mb-4">
                We may share your information with:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
              <p className="text-foreground/80 mb-4">
                Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Event Partners and Sponsors</h3>
              <p className="text-foreground/80 mb-4">
                With your consent, we may share limited information with event sponsors and partners for networking and promotional purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="text-foreground/80 mb-4">
                When required by law or to protect our rights, we may disclose your information to law enforcement or regulatory authorities.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Business Transfers</h3>
              <p className="text-foreground/80 mb-4">
                In connection with any merger, sale of assets, or acquisition, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:cookie" width={24} />
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-foreground/80 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. For more details, please see our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:shield" width={24} />
                6. Data Security
              </h2>
              <p className="text-foreground/80 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-foreground/80 mb-4">
                Security measures include:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure payment processing</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:clock" width={24} />
                7. Data Retention
              </h2>
              <p className="text-foreground/80 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. After the retention period, we will securely delete or anonymize your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:check-circle" width={24} />
                8. Your Rights
              </h2>
              <p className="text-foreground/80 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                To exercise these rights, please contact us at contact@indiainnovates.org.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:baby" width={24} />
                9. Children's Privacy
              </h2>
              <p className="text-foreground/80 mb-4">
                We take special care to protect the privacy of children participating in our school competitions. We collect information from children only with parental consent. Parents have the right to review, update, or delete their child's information at any time.
              </p>
              <p className="text-foreground/80 mb-4">
                If we discover that we have collected personal information from a child without proper consent, we will delete that information immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:globe" width={24} />
                10. International Data Transfers
              </h2>
              <p className="text-foreground/80 mb-4">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:bell-off" width={24} />
                11. Marketing Communications
              </h2>
              <p className="text-foreground/80 mb-4">
                You may opt-out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly. Please note that you may still receive transactional or administrative communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:refresh-cw" width={24} />
                12. Updates to This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:mail" width={24} />
                13. Contact Us
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;

