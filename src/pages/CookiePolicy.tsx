import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-foreground/60 text-sm">Last updated: November 26, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:cookie" width={24} />
                1. What Are Cookies?
              </h2>
              <p className="text-foreground/80 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="text-foreground/80 mb-4">
                This Cookie Policy explains how India Innovates and Hansa Ai Technologies Private Limited use cookies and similar technologies on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:list" width={24} />
                2. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Essential Cookies</h3>
              <p className="text-foreground/80 mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <div className="bg-content2 p-4 rounded-lg mb-4">
                <p className="text-foreground/80"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mt-2">
                  <li>Session management</li>
                  <li>Load balancing</li>
                  <li>Security features</li>
                  <li>Authentication</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Analytics Cookies</h3>
              <p className="text-foreground/80 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <div className="bg-content2 p-4 rounded-lg mb-4">
                <p className="text-foreground/80"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mt-2">
                  <li>Google Analytics</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Traffic sources</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Functional Cookies</h3>
              <p className="text-foreground/80 mb-4">
                These cookies allow the website to remember choices you make (such as your language preference or theme selection) and provide enhanced, personalized features.
              </p>
              <div className="bg-content2 p-4 rounded-lg mb-4">
                <p className="text-foreground/80"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mt-2">
                  <li>Theme preferences (dark/light mode)</li>
                  <li>Language settings</li>
                  <li>Registration form pre-fill</li>
                  <li>Video player preferences</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Marketing Cookies</h3>
              <p className="text-foreground/80 mb-4">
                These cookies track your online activity to help us deliver more relevant advertising or to limit how many times you see an advertisement.
              </p>
              <div className="bg-content2 p-4 rounded-lg mb-4">
                <p className="text-foreground/80"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1 mt-2">
                  <li>Social media integration</li>
                  <li>Advertising platforms</li>
                  <li>Retargeting pixels</li>
                  <li>Conversion tracking</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:search" width={24} />
                3. Specific Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-content2">
                      <th className="border border-foreground/20 p-3 text-left">Cookie Name</th>
                      <th className="border border-foreground/20 p-3 text-left">Type</th>
                      <th className="border border-foreground/20 p-3 text-left">Purpose</th>
                      <th className="border border-foreground/20 p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-foreground/20 p-3">_session</td>
                      <td className="border border-foreground/20 p-3">Essential</td>
                      <td className="border border-foreground/20 p-3">Maintains user session</td>
                      <td className="border border-foreground/20 p-3">Session</td>
                    </tr>
                    <tr className="bg-content2/50">
                      <td className="border border-foreground/20 p-3">theme_preference</td>
                      <td className="border border-foreground/20 p-3">Functional</td>
                      <td className="border border-foreground/20 p-3">Stores theme choice</td>
                      <td className="border border-foreground/20 p-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-foreground/20 p-3">_ga</td>
                      <td className="border border-foreground/20 p-3">Analytics</td>
                      <td className="border border-foreground/20 p-3">Google Analytics identifier</td>
                      <td className="border border-foreground/20 p-3">2 years</td>
                    </tr>
                    <tr className="bg-content2/50">
                      <td className="border border-foreground/20 p-3">_gid</td>
                      <td className="border border-foreground/20 p-3">Analytics</td>
                      <td className="border border-foreground/20 p-3">Google Analytics identifier</td>
                      <td className="border border-foreground/20 p-3">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-foreground/20 p-3">cookie_consent</td>
                      <td className="border border-foreground/20 p-3">Essential</td>
                      <td className="border border-foreground/20 p-3">Stores cookie preferences</td>
                      <td className="border border-foreground/20 p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:globe" width={24} />
                4. Third-Party Cookies
              </h2>
              <p className="text-foreground/80 mb-4">
                We use services from third parties that may set their own cookies. These include:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Video Hosting Services:</strong> For embedded video content</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                These third parties have their own privacy policies, and we have no control over their cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:settings" width={24} />
                5. Managing Cookies
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Browser Settings</h3>
              <p className="text-foreground/80 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Clear cookies when you close your browser</li>
                <li>Notify you when cookies are being set</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Browser-Specific Instructions</h3>
              <div className="bg-content2 p-4 rounded-lg mb-4">
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Opt-Out Tools</h3>
              <p className="text-foreground/80 mb-4">
                You can opt-out of specific cookie types:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Advertising Cookies:</strong> Visit <a href="http://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:alert-circle" width={24} />
                6. Impact of Disabling Cookies
              </h2>
              <p className="text-foreground/80 mb-4">
                If you choose to disable cookies, some features of our website may not function properly. Specifically, you may experience:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Difficulty completing registration forms</li>
                <li>Loss of personalized settings (theme, language)</li>
                <li>Repeated login requirements</li>
                <li>Limited functionality of certain features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:smartphone" width={24} />
                7. Mobile Device Cookies
              </h2>
              <p className="text-foreground/80 mb-4">
                Mobile devices use similar technologies to cookies. You can manage these in your mobile device settings:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li><strong>iOS:</strong> Settings → Safari → Privacy & Security</li>
                <li><strong>Android:</strong> Settings → Privacy → Advanced → Site Settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:refresh-cw" width={24} />
                8. Updates to This Policy
              </h2>
              <p className="text-foreground/80 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:help-circle" width={24} />
                9. More Information
              </h2>
              <p className="text-foreground/80 mb-4">
                For more information about cookies and how they work, visit:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li><a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                <li><a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">About Cookies</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:mail" width={24} />
                10. Contact Us
              </h2>
              <p className="text-foreground/80 mb-4">
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;

