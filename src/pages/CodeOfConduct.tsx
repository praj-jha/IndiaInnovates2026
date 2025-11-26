import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const CodeOfConduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Code of Conduct</h1>
            <p className="text-foreground/60 text-sm">Last updated: November 26, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:heart" width={24} />
                1. Our Commitment
              </h2>
              <p className="text-foreground/80 mb-4">
                India Innovates is committed to providing a safe, inclusive, and harassment-free experience for everyone, regardless of age, gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, or technical ability.
              </p>
              <p className="text-foreground/80 mb-4">
                We expect all participants—including attendees, speakers, sponsors, volunteers, exhibitors, and staff—to uphold these values throughout the event and all related activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:check-circle" width={24} />
                2. Expected Behavior
              </h2>
              <p className="text-foreground/80 mb-4">
                All participants are expected to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Be respectful and considerate of others</li>
                <li>Exercise empathy and kindness in all interactions</li>
                <li>Respect differing opinions, viewpoints, and experiences</li>
                <li>Give and gracefully accept constructive feedback</li>
                <li>Focus on what is best for the community and individual participants</li>
                <li>Show respect for event organizers, volunteers, and venue staff</li>
                <li>Follow all venue rules and regulations</li>
                <li>Arrive on time for scheduled sessions and activities</li>
                <li>Keep mobile devices on silent during presentations</li>
                <li>Respect intellectual property rights and privacy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:x-circle" width={24} />
                3. Unacceptable Behavior
              </h2>
              <p className="text-foreground/80 mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Harassment and Discrimination</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Offensive verbal comments related to gender, gender identity, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices</li>
                <li>Deliberate intimidation, stalking, or following</li>
                <li>Unwelcome sexual attention or advances</li>
                <li>Inappropriate physical contact without consent</li>
                <li>Discriminatory jokes, language, or imagery</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Disruptive Conduct</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Sustained disruption of talks, presentations, or other events</li>
                <li>Intoxication or being under the influence of illegal substances</li>
                <li>Aggressive, threatening, or violent behavior</li>
                <li>Destruction or misuse of event property or facilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Digital Misconduct</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Recording or photographing others without explicit consent</li>
                <li>Sharing others' personal information without permission</li>
                <li>Cyberbullying or online harassment</li>
                <li>Posting inappropriate content on social media using event hashtags</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:users" width={24} />
                4. Specific Guidelines for Participants
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 For Attendees and Delegates</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Wear your badge at all times during the event</li>
                <li>Respect speaker presentation time and Q&A protocols</li>
                <li>Network respectfully and professionally</li>
                <li>Do not share conference materials without permission</li>
                <li>Report any concerns to event staff immediately</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 For Speakers and Presenters</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Ensure presentation content is appropriate for all audiences</li>
                <li>Avoid using offensive language, images, or examples</li>
                <li>Be respectful of audience questions and feedback</li>
                <li>Stay within allocated presentation time</li>
                <li>Acknowledge sources and give proper credit</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 For Sponsors and Exhibitors</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Respect booth space boundaries</li>
                <li>Do not engage in aggressive marketing or solicitation</li>
                <li>Ensure booth materials and presentations are appropriate</li>
                <li>Respect attendees' right to decline engagement</li>
                <li>Comply with all sponsorship agreement terms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.4 For School Competition Participants</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Compete fairly and honestly</li>
                <li>Respect judges' decisions</li>
                <li>Support fellow competitors</li>
                <li>Follow all competition rules and guidelines</li>
                <li>Stay with designated chaperones or guardians</li>
                <li>Represent your school with dignity and respect</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:shield-alert" width={24} />
                5. Safety and Security
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Personal Safety</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Follow all emergency procedures and evacuation routes</li>
                <li>Report suspicious activity to security immediately</li>
                <li>Keep personal belongings secure</li>
                <li>Do not leave bags or personal items unattended</li>
                <li>Follow all health and safety protocols</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Health Considerations</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Inform staff of any medical conditions that may require attention</li>
                <li>Follow current health guidelines and protocols</li>
                <li>If feeling unwell, inform staff and seek appropriate care</li>
                <li>Be mindful of food allergies and dietary restrictions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:alert-triangle" width={24} />
                6. Reporting and Enforcement
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.1 How to Report Violations</h3>
              <p className="text-foreground/80 mb-4">
                If you experience or witness unacceptable behavior:
              </p>
              <div className="bg-content2 p-6 rounded-lg mb-4">
                <ul className="space-y-3 text-foreground/80">
                  <li><strong>In Person:</strong> Contact any event staff member wearing an official badge</li>
                  <li><strong>Phone:</strong> Call our event hotline (number provided at registration)</li>
                  <li><strong>Email:</strong> conduct@indiainnovates.org</li>
                  <li><strong>Emergency:</strong> For immediate safety concerns, contact venue security or local authorities</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.2 What to Include in Your Report</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Your contact information (if you wish to provide it)</li>
                <li>Names or descriptions of individuals involved</li>
                <li>Description of what occurred</li>
                <li>Time and location of the incident</li>
                <li>Names of any witnesses</li>
                <li>Any supporting evidence (photos, screenshots, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Our Response</h3>
              <p className="text-foreground/80 mb-4">
                All reports will be taken seriously and handled with discretion. Our response may include:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Investigation of the complaint</li>
                <li>Mediation between parties (if appropriate)</li>
                <li>Warning to the offending party</li>
                <li>Removal from the event without refund</li>
                <li>Ban from future India Innovates events</li>
                <li>Involvement of law enforcement (if necessary)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:camera" width={24} />
                7. Photography and Recording
              </h2>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Official event photography and videography will be conducted</li>
                <li>By attending, you consent to being photographed or recorded</li>
                <li>Personal photography is allowed in public areas only</li>
                <li>Always ask for permission before photographing individuals</li>
                <li>Recording of presentations may be restricted—follow posted guidelines</li>
                <li>Do not share photos of minors on social media without parental consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:trophy" width={24} />
                8. Academic Integrity for Competitions
              </h2>
              <p className="text-foreground/80 mb-4">
                Participants in school and university competitions must:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Submit only original work</li>
                <li>Properly cite all sources and references</li>
                <li>Not plagiarize or copy others' work</li>
                <li>Follow all competition-specific rules</li>
                <li>Collaborate only as permitted by competition guidelines</li>
                <li>Not cheat or engage in any form of academic dishonesty</li>
              </ul>
              <p className="text-foreground/80 mb-4">
                Violations will result in disqualification and may affect future participation eligibility.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:wifi" width={24} />
                9. Technology Use
              </h2>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Use event Wi-Fi responsibly and legally</li>
                <li>Do not engage in hacking or unauthorized access</li>
                <li>Respect network bandwidth—avoid streaming or large downloads</li>
                <li>Keep devices on silent during sessions</li>
                <li>Use technology to enhance, not disrupt, the event experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:shield-check" width={24} />
                10. Confidentiality and Privacy
              </h2>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Respect the privacy of other participants</li>
                <li>Do not share others' contact information without permission</li>
                <li>Maintain confidentiality of private conversations</li>
                <li>Do not record or share private sessions without consent</li>
                <li>Respect embargo periods on sensitive information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:scale" width={24} />
                11. Consequences of Violations
              </h2>
              <p className="text-foreground/80 mb-4">
                Participants who violate this Code of Conduct may face:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Verbal or written warning</li>
                <li>Removal from specific sessions or activities</li>
                <li>Expulsion from the event without refund</li>
                <li>Ban from future India Innovates events</li>
                <li>Disqualification from competitions and forfeiture of prizes</li>
                <li>Reporting to school or institutional authorities</li>
                <li>Legal action (for serious violations)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:users-round" width={24} />
                12. Building an Inclusive Community
              </h2>
              <p className="text-foreground/80 mb-4">
                We encourage all participants to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
                <li>Be welcoming to newcomers and first-time attendees</li>
                <li>Help create a positive environment for learning and networking</li>
                <li>Speak up if you see something concerning</li>
                <li>Support and amplify underrepresented voices</li>
                <li>Share knowledge and resources generously</li>
                <li>Celebrate diversity and different perspectives</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:book-open" width={24} />
                13. Acknowledgment
              </h2>
              <p className="text-foreground/80 mb-4">
                By registering for and participating in India Innovates, you acknowledge that you have read, understood, and agree to abide by this Code of Conduct. Failure to comply may result in removal from the event and other consequences as outlined above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Icon icon="lucide:mail" width={24} />
                14. Contact Information
              </h2>
              <p className="text-foreground/80 mb-4">
                For questions about this Code of Conduct or to report violations:
              </p>
              <div className="bg-content2 p-6 rounded-lg">
                <p className="text-foreground/80 mb-2">
                  <strong>Email:</strong> conduct@indiainnovates.org
                </p>
                <p className="text-foreground/80 mb-2">
                  <strong>General Inquiries:</strong> contact@indiainnovates.org
                </p>
                <p className="text-foreground/80 mb-2">
                  <strong>Registered Address:</strong> Pole No-39 Vill Kangan Heri New Delhi, 110043
                </p>
                <p className="text-foreground/80">
                  <strong>Operating Address:</strong> 2151/11, New Patel Nagar, Pandu Nagar, Central Delhi, Delhi, 110008
                </p>
              </div>
            </section>

            <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg mt-8">
              <p className="text-foreground/80 font-medium mb-2">
                Thank you for helping us create a safe, welcoming, and productive event for everyone!
              </p>
              <p className="text-foreground/80">
                Together, we can make India Innovates an inspiring and inclusive experience for all participants.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeOfConduct;

