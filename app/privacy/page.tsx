"use client";

import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#00a3e0]/10 via-white to-[#00239c]/10">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-[#00239c]/10 text-[#00239c] border-[#00239c]/20">
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is fundamental to our mission. Learn how we protect and handle your data.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  OpenBioCure (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our biotechnology platform, including our website, applications, and services.
                </p>
                <p>
                  By using OpenBioCure&apos;s services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Name, email address, and contact information</li>
                    <li>Professional credentials and affiliations</li>
                    <li>Research interests and specializations</li>
                    <li>Account credentials and authentication data</li>
                    <li>Communication preferences and settings</li>
                    <li>Professional background and work history</li>
                    <li>Institutional affiliations and credentials</li>
                    <li>Profile information and biographical data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Research and Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Research datasets and analysis results</li>
                    <li>Platform usage patterns and interactions</li>
                    <li>Technical logs and system performance data</li>
                    <li>Collaboration and project information</li>
                    <li>API usage and integration data</li>
                    <li>Research publications and citations</li>
                    <li>Laboratory protocols and methodologies</li>
                    <li>Clinical trial data (where applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage analytics and performance metrics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Session data and user behavior patterns</li>
                    <li>Error logs and crash reports</li>
                    <li>Network information and connection details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.4 Third-Party Data Sources</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Public research databases and repositories</li>
                    <li>Academic and institutional databases</li>
                    <li>Published scientific literature and journals</li>
                    <li>Government and regulatory databases</li>
                    <li>Collaborative research networks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Provision:</strong> To provide and maintain our biotechnology platform and services</li>
                  <li><strong>Research Collaboration:</strong> To facilitate collaboration between researchers and healthcare professionals</li>
                  <li><strong>Platform Improvement:</strong> To enhance our services, develop new features, and improve user experience</li>
                  <li><strong>Communication:</strong> To send important updates, notifications, and respond to inquiries</li>
                  <li><strong>Security:</strong> To protect against fraud, abuse, and ensure platform security</li>
                  <li><strong>Compliance:</strong> To meet legal obligations and regulatory requirements</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns and optimize platform performance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing and Disclosure */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">4. Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  <li><strong>Research Collaborators:</strong> With other researchers and institutions as part of collaborative projects (with appropriate safeguards)</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in platform operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of users and the public</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="mt-4 p-4 bg-blue-50 border-l-4 border-[#00239c] rounded">
                  <strong>Note:</strong> We never sell your personal information to third parties for marketing purposes.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">5. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We implement comprehensive security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data centers with physical and digital safeguards</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Data backup and disaster recovery procedures</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
                <p className="mt-4 p-4 bg-yellow-50 border-l-4 border-[#e76900] rounded">
                  <strong>Important:</strong> While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide our services and maintain your account</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Support ongoing research collaborations</li>
                  <li>Meet academic and research integrity standards</li>
                  <li>Fulfill contractual obligations with partners</li>
                </ul>
                <p>When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.</p>
                
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#00239c] rounded">
                  <h4 className="font-semibold text-[#00239c] mb-2">Retention Periods:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Account Data:</strong> Retained for 7 years after account deactivation</li>
                    <li><strong>Research Data:</strong> Retained for 10 years for academic integrity</li>
                    <li><strong>Analytics Data:</strong> Retained for 3 years for service improvement</li>
                    <li><strong>Communication Logs:</strong> Retained for 5 years for compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">7. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided below.</p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  OpenBioCure operates globally and may transfer your information to countries other than your own. When we do so, we ensure appropriate safeguards are in place to protect your information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions for countries with equivalent data protection standards</li>
                  <li>Other appropriate safeguards as required by applicable law</li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Verification and Compliance */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">9. Business Verification and Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  For business verification purposes and compliance with platform requirements (including LinkedIn), we may collect and process additional information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Business Information:</strong> Company name, registration details, tax identification numbers</li>
                  <li><strong>Verification Documents:</strong> Business licenses, certificates, and regulatory approvals</li>
                  <li><strong>Financial Information:</strong> Payment processing data and billing information</li>
                  <li><strong>Compliance Records:</strong> Regulatory filings and compliance documentation</li>
                  <li><strong>Professional Credentials:</strong> Academic degrees, certifications, and professional licenses</li>
                  <li><strong>Institutional Affiliations:</strong> University, hospital, or research institution details</li>
                </ul>
                
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">Verification Process:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Document verification through secure channels</li>
                    <li>Third-party verification services for business credentials</li>
                    <li>Academic credential verification through authorized institutions</li>
                    <li>Regular compliance audits and updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">10. Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">11. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the &ldquo;Last updated&rdquo; date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00239c]">12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p><strong>Email:</strong> info@openbiocure.ai</p>
                    <p><strong>Address:</strong> OpenBioCure Privacy Team</p>
                    <p><strong>Website:</strong> https://openbiocure.ai</p>
                    <p><strong>Response Time:</strong> We aim to respond to privacy inquiries within 30 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-[#00239c] to-[#001e62] text-white rounded-xl px-8 py-3 shadow-lg font-semibold hover:from-[#001e62] hover:to-[#00239c] hover:shadow-xl transition"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
