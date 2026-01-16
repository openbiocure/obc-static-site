import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - OpenBioCure</title>
        <meta name="description" content="OpenBioCure Privacy Policy - How we collect, use, and protect your data." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy - OpenBioCure" />
        <meta property="og:url" content="https://openbiocure.ai/privacy-policy" />
      </Head>
      
      <div className="min-h-screen bg-bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-bg-white shadow-lg rounded-large p-8">
          <div className="mb-8">
            <Link href="/" className="text-accent-primary hover:text-accent-link mb-4 inline-block font-medium">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-text-primary mb-2" style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)' }}>Privacy Policy</h1>
            <p className="text-body text-text-secondary">Last updated: January 16, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>1. Introduction</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                OpenBioCure ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at openbiocure.ai (the "Service").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-accent-primary mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>Email address and institutional affiliation when you sign up for our pilot program</li>
                <li>Research queries and search terms you enter into the platform</li>
                <li>Feedback and communications you send to us</li>
              </ul>
              
              <h3 className="text-xl font-medium text-accent-primary mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>Usage data, including pages visited, time spent, and features used</li>
                <li>Device information, including browser type, operating system, and IP address</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>3. How We Use Your Information</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process your pilot program application</li>
                <li>Send you updates about the Service and respond to your inquiries</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>4. Data Sharing and Disclosure</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>With your consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist in operating our Service (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>5. Data Security</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>6. Your Rights</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:privacy@openbiocure.ai" className="text-accent-link hover:text-accent-primary underline">privacy@openbiocure.ai</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>7. Cookies and Tracking</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and assist in marketing efforts. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>8. Children's Privacy</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>9. International Data Transfers</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>10. Changes to This Policy</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>11. Contact Us</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-body text-text-secondary">
                <strong>Email:</strong> <a href="mailto:privacy@openbiocure.ai" className="text-accent-link hover:text-accent-primary underline">privacy@openbiocure.ai</a><br />
                <strong>Website:</strong> <a href="https://openbiocure.ai" className="text-accent-link hover:text-accent-primary underline">openbiocure.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
