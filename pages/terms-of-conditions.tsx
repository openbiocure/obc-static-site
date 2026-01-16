import Head from 'next/head'
import Link from 'next/link'

export default function TermsOfConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - OpenBioCure</title>
        <meta name="description" content="OpenBioCure Terms and Conditions - Legal terms for using our platform." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms and Conditions - OpenBioCure" />
        <meta property="og:url" content="https://openbiocure.ai/terms-of-conditions" />
      </Head>
      
      <div className="min-h-screen bg-bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-bg-white shadow-lg rounded-large p-8">
          <div className="mb-8">
            <Link href="/" className="text-accent-primary hover:text-accent-link mb-4 inline-block font-medium">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-text-primary mb-2" style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)' }}>Terms and Conditions</h1>
            <p className="text-body text-text-secondary">Last updated: January 16, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>1. Acceptance of Terms</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                By accessing and using OpenBioCure ("the Service"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>2. Description of Service</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                OpenBioCure is an AI-powered biomedical research platform that enables healthcare professionals, academic researchers, and institutional stakeholders to ingest, analyze, and act on vast volumes of domain-specific literature and structured data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>3. Eligibility</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into these Terms. By using the Service, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>4. Pilot Program</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                The Service is currently available through a pilot program for universities and research institutions. Participation in the pilot program is subject to approval and may be limited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>5. User Accounts</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>6. Acceptable Use</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 text-body text-text-secondary mb-4 leading-relaxed">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Reproduce, duplicate, or copy any portion of the Service</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>7. Intellectual Property</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                The Service and its original content, features, and functionality are owned by OpenBioCure and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>8. User Content</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                You retain ownership of any content you submit to the Service. By submitting content, you grant us a license to use, modify, and display such content for the purpose of providing and improving the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>9. Disclaimers</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>10. Limitation of Liability</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPENBIOCURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>11. Indemnification</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                You agree to indemnify and hold harmless OpenBioCure from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>12. Termination</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>13. Governing Law</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>14. Changes to Terms</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)' }}>15. Contact Information</h2>
              <p className="text-body text-text-secondary mb-4 leading-relaxed">
                If you have questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-body text-text-secondary">
                <strong>Email:</strong> <a href="mailto:legal@openbiocure.ai" className="text-accent-link hover:text-accent-primary underline">legal@openbiocure.ai</a><br />
                <strong>Website:</strong> <a href="https://openbiocure.ai" className="text-accent-link hover:text-accent-primary underline">openbiocure.ai</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
