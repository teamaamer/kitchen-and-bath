import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | KBS - Kitchen & Bath Society',
  description: 'Privacy Policy for Kitchen & Bath Society',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-taupe">
          <p className="text-sm text-muted-taupe mb-8">
            Last Updated: March 30, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">1. Introduction</h2>
            <p>
              Kitchen & Bath Society ("KBS," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">2. Information We Collect</h2>
            <h3 className="font-heading text-xl text-charcoal mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Project details and design preferences</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="font-heading text-xl text-charcoal mb-3">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process quote requests and project consultations</li>
              <li>Send you promotional materials and updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting our business</li>
              <li><strong>Business Partners:</strong> Trusted partners who help us provide products and services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites and integrate with third-party services (such as Facebook). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Kitchen & Bath Society</strong><br />
              Email: sakher@255adv.com<br />
              Website: kitchen-and-bath.vercel.app
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
