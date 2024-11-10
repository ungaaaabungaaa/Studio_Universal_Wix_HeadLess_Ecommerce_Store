'use client'
import { motion } from "framer-motion";


export default function TermsOfService() {
  return (
    <>
    
    <div className="min-h-screen h-full bg-black text-white flex flex-col justify-center items-center p-4 md:p-8">
      <main className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Terms of Service
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
        >
          By using our services, you agree to the following terms and conditions.
        </motion.p>
        <div className="space-y-6 text-gray-300">
          <p>
            Welcome to Studio Universal! These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website
            and services. By accessing or using our website, you agree to comply with and be bound by these Terms.
            Please read them carefully before using our services.
          </p>

          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By using our website or services, you agree to these Terms and any future updates or modifications to them. 
            If you do not agree to these Terms, you should not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          <p>
            You may use our website and services only for lawful purposes and in accordance with these Terms. You agree
            not to:
          </p>
          <div className="space-y-2 pl-6">
            <ul className="list-disc">
              <li>Violate any applicable law or regulation.</li>
              <li>Use our services to transmit harmful or malicious content.</li>
              <li>Engage in any conduct that could damage, disable, or impair the functionality of our website or services.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            To access certain features, you may need to create a user account. You agree to provide accurate and complete
            information when creating an account and to keep your account information up to date. You are responsible for
            maintaining the confidentiality of your account credentials and are liable for any activity under your account.
          </p>

          <h2 className="text-2xl font-semibold">4. Product Availability and Pricing</h2>
          <p>
            All products on our website are subject to availability. We make every effort to ensure that product
            descriptions, images, and prices are accurate. However, we reserve the right to modify or discontinue
            products and change prices without notice.
          </p>

          <h2 className="text-2xl font-semibold">5. Payments</h2>
          <p>
            All payments made for products or services are processed through secure third-party payment gateways.
            By completing a purchase, you agree to pay the total price for the items, including any applicable taxes and
            shipping fees.
          </p>

          <h2 className="text-2xl font-semibold">6. Returns and Refunds</h2>
          <p>
            We want you to be satisfied with your purchase. If you are not, please refer to our Return and Refund
            Policy for instructions on how to return or exchange items.
          </p>

          <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of
            Studio Universal and is protected by copyright and intellectual property laws. You may not use, modify,
            distribute, or reproduce any content from our website without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold">8. Privacy and Data Protection</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. Please review it to understand how we
            collect, use, and protect your personal data.
          </p>

          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Studio Universal will not be held liable for any indirect, incidental,
            special, or consequential damages arising from the use of our website or services, including any loss of
            data, profits, or business.
          </p>

          <h2 className="text-2xl font-semibold">10. Termination</h2>
          <p>
            We may suspend or terminate your access to our services at any time, without notice, for any reason,
            including violation of these Terms. Upon termination, your right to use our services will immediately end.
          </p>

          <h2 className="text-2xl font-semibold">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the jurisdiction where our
            company is based. Any disputes arising out of or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts in that jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold">12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page with the revised date.
            By continuing to use our website or services after such changes, you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold">13. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Service, please contact us at
            <a href="mailto:support@studio-universal.com" className="text-blue-400">support@studio-universal.com</a>.
          </p>
        </div>
      </main>
    </div>
    </>
  );
}
