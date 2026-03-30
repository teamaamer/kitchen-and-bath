import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | KBS - Kitchen & Bath Society',
  description: 'Terms of Service for Kitchen & Bath Society',
}

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-taupe">
          <p className="text-sm text-muted-taupe mb-8">
            Last Updated: March 30, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to Kitchen & Bath Society ("KBS," "we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">2. Description of Services</h2>
            <p>
              KBS provides premium kitchen and bath products and services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Kitchen cabinetry (framed and flat-door)</li>
              <li>Bathroom vanities and fixtures</li>
              <li>Countertops and surfaces</li>
              <li>LED mirrors and medicine cabinets</li>
              <li>Design consultation services</li>
              <li>Project planning and support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">3. Use of Website</h2>
            <h3 className="font-heading text-xl text-charcoal mb-3">Permitted Use</h3>
            <p>You may use our website for lawful purposes only. You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access the website without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">4. Quotes and Pricing</h2>
            <p>
              All quotes provided are estimates based on the information you provide. Final pricing may vary based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Actual measurements and site conditions</li>
              <li>Product availability and specifications</li>
              <li>Custom requirements and modifications</li>
              <li>Installation complexity</li>
            </ul>
            <p>
              Quotes are valid for 30 days unless otherwise specified. We reserve the right to modify pricing based on market conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">5. Orders and Payments</h2>
            <p>
              By placing an order with KBS, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Pay all applicable fees and charges</li>
              <li>Comply with payment terms as specified in your agreement</li>
            </ul>
            <p>
              We reserve the right to refuse or cancel orders at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">6. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and images. However:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Colors may vary due to screen settings and natural material variations</li>
              <li>Specifications are subject to change by manufacturers</li>
              <li>Images may be representative and not exact</li>
              <li>We recommend viewing physical samples when possible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">7. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of KBS or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">8. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party websites and integrate with third-party services (such as Facebook). We are not responsible for the content, privacy practices, or terms of service of these third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, KBS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific product or service giving rise to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">10. Warranties and Disclaimers</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The website will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The website is free of viruses or harmful components</li>
            </ul>
            <p>
              Product warranties are provided by manufacturers and are subject to their terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless KBS, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable local laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Kitchen & Bath Society</strong><br />
              Email: sakher@255adv.com<br />
              Website: kitchen-and-bath.vercel.app
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-4">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
