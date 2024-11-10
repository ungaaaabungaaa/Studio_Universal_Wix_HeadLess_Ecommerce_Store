'use client'
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <>
    
    <div className="min-h-screen h-full bg-black text-white flex flex-col justify-center items-center p-4 md:p-8">
      <main className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Privacy Policy
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
        >
          Your privacy is our priority. Learn more about how we protect your personal information.
        </motion.p>
        <div className="space-y-6 text-gray-300">
          <p>
            At Studio Universal, we value your privacy and are committed to maintaining the confidentiality of your
            personal information. This policy explains what data we collect, how we use it, and your rights
            regarding that information.
          </p>

          <h2 className="text-2xl font-semibold">1. Information Collection</h2>
          <p>
            We collect information necessary to provide and improve our services. This includes:
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Information: Name, email address, phone number, shipping address, etc.</li>
              <li>Payment Information: Credit card details or other payment methods when you make a purchase.</li>
              <li>Usage Data: Information about how you interact with our website, such as browsing behavior, IP address, and device type.</li>
              <li>Cookies: We use cookies to enhance your experience, analyze usage patterns, and offer personalized content.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Information</h2>
          <p>
            The information we gather is used for the following purposes:
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and improve our services, including processing orders and providing customer support.</li>
              <li>To personalize your experience and offer tailored recommendations based on your preferences.</li>
              <li>To send transactional and promotional emails (only if you have opted in) about new products, services, and updates.</li>
              <li>To comply with legal obligations and resolve disputes, if necessary.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">3. Data Security</h2>
          <p>
            We implement strict security measures to protect your information from unauthorized access or alteration.
            This includes encryption, secure servers, and regular monitoring of our systems to prevent any breaches.
            However, please note that no data transmission over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information in
            the following limited circumstances:
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers who assist in processing orders, delivering products, or improving our website.</li>
              <li>When required by law, such as in response to a subpoena or legal process.</li>
              <li>If necessary to protect our rights, safety, or property, or that of others.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to:
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your personal data, subject to certain legal restrictions.</li>
              <li>Opt-out of promotional communications by following the unsubscribe instructions in our emails or contacting us directly.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience and gather information about how
            you use our website. You can control cookies through your browser settings, but please note that disabling
            certain cookies may affect your experience on our website.
          </p>

          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the content or privacy practices
            of these external sites. We encourage you to review the privacy policies of any third-party websites before
            providing your personal information.
          </p>

          <h2 className="text-2xl font-semibold">8. Changes to this Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. When we make changes, we will update the
            "Last Updated" date at the top of this page. We encourage you to review this policy periodically to stay
            informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or the way your personal data is handled,
            please contact us at <a href="mailto:support@studio-universal.com" className="text-blue-400">support@studio-universal.com</a>.
          </p>
        </div>
      </main>
    </div>
    </>
  );
}
