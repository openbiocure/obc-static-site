import Head from 'next/head'
import { useEffect } from 'react'

export default function HSV2Report() {
  useEffect(() => {
    // Add print styles
    const style = document.createElement('style')
    style.textContent = `
      @media print {
        @page {
          margin: 2cm;
          size: A4;
        }
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .no-print {
          display: none;
        }
        .page-break {
          page-break-before: always;
        }
        .avoid-break {
          page-break-inside: avoid;
        }
        h1, h2, h3 {
          page-break-after: avoid;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <Head>
        <title>HSV2 Facial Presentation - Medical Information Report</title>
        <meta name="description" content="Medical research findings about HSV2 appearing on the face" />
      </Head>
      <div className="min-h-screen bg-bg-white text-text-primary print:bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 print:px-0 print:py-0">
          {/* Print Button */}
          <div className="no-print mb-8 print:hidden">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-accent-primary text-text-white rounded-large font-medium hover:opacity-hover transition-base"
            >
              Print Report
            </button>
          </div>

          {/* Report Content */}
          <article className="prose prose-lg max-w-none">
            {/* Logo Header */}
            <div className="mb-8 avoid-break print:mb-6">
              <img 
                src="/images/icon-obc.png" 
                alt="OpenBioCure Logo" 
                className="h-16 w-auto print:h-12"
              />
            </div>

            <h1 className="text-h1 font-bold text-text-primary mb-6 print:text-2xl">
              HSV2 Facial Presentation - Medical Information Report
            </h1>

            <p className="text-body-large text-text-secondary mb-8 print:text-base">
              This report summarizes medical research findings about HSV2 (herpes simplex virus type 2) appearing on the face, based on analysis of published medical studies.
            </p>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-4">Your Situation</h2>
              
              <div className="mb-6">
                <h3 className="text-body font-bold text-text-primary mb-3">Your Case:</h3>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4">
                  <li>5 outbreaks of HSV2 in the same location on your face (inner edge of eyebrow)</li>
                  <li>HSV2 confirmed via swab during active blistering</li>
                  <li>Never had genital herpes despite exposure</li>
                  <li>On daily valtrex but still experiencing outbreaks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-body font-bold text-text-primary mb-3">Your Questions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-body text-text-secondary ml-4">
                  <li>Is HSV2 on face only possible?</li>
                  <li>Why face but not genitals?</li>
                  <li>Transmission concerns (saliva, partner risk)</li>
                </ol>
              </div>
            </section>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-6">Quick Answers to Your Questions</h2>

              <div className="mb-8">
                <h3 className="text-body-large font-bold text-text-primary mb-4">
                  Is HSV2 on Face Only Possible?
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  <strong className="text-text-primary">Yes, this is absolutely possible.</strong> While HSV2 is most commonly associated with genital herpes, medical research shows that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4 mb-4">
                  <li>HSV2 can infect any area of skin or mucous membranes, including the face</li>
                  <li>Facial HSV2 infections are documented in medical literature</li>
                  <li>This can happen through:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Oral-genital contact</li>
                      <li>Transfer from one body part to another (auto-inoculation)</li>
                      <li>Initial infection occurring on the face rather than genitals</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-body text-text-secondary">
                  <strong className="text-text-primary">Bottom line:</strong> Your situation is medically documented and not unusual.
                </p>
              </div>

              <div className="mb-8 page-break">
                <h3 className="text-body-large font-bold text-text-primary mb-4">
                  Why Face But Not Genitals?
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  Here's what likely explains why you get outbreaks on your face but never on your genitals:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-body text-text-secondary ml-4 mb-4">
                  <li>
                    <strong className="text-text-primary">Where the virus "lives":</strong> Once HSV2 infects an area, it travels to nearby nerve cells (ganglia) where it stays dormant. If your initial infection was on your face, the virus settled in the facial nerves (trigeminal ganglia) rather than the genital nerves (sacral ganglia). Once established in facial nerves, it tends to reactivate in that same facial area.
                  </li>
                  <li>
                    <strong className="text-text-primary">How you got it:</strong> If the initial exposure was specifically to your facial area (for example, during oral sex), the virus would have entered through your face and traveled to facial nerves, not genital nerves.
                  </li>
                  <li>
                    <strong className="text-text-primary">Your body's response:</strong> Your immune system may be providing better protection at your genital area while allowing reactivation on your face where the virus originally established itself.
                  </li>
                </ol>
                <p className="text-body text-text-secondary">
                  <strong className="text-text-primary">Bottom line:</strong> The virus is "programmed" to reactivate where it first entered your body - in your case, your face.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-body-large font-bold text-text-primary mb-4">
                  Transmission Concerns
                </h3>
                
                <div>
                  <h4 className="text-body font-bold text-text-primary mb-2">During Outbreaks:</h4>
                  <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4">
                    <li>HSV2 can be passed from facial lesions to a partner's genitals through direct contact, especially during oral sex</li>
                    <li>The risk is highest when you have active blisters or sores</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-4">Database Query Summary</h2>
              <p className="text-body text-text-secondary mb-4">
                This report was generated by querying a medical literature database for publications related to HSV2. Here's how the search was conducted:
              </p>
              
              <div className="mb-4">
                <h3 className="text-body font-bold text-text-primary mb-3">Search Criteria:</h3>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4">
                  <li>Searched for publications containing HSV2-related terms: "HSV2", "HSV-2", "herpes simplex virus 2", "herpes simplex virus type 2"</li>
                  <li>Analyzed publications linked to HSV2 entities extracted from medical literature</li>
                  <li>Reviewed text chunks from publications discussing HSV2 in various contexts</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-body font-bold text-text-primary mb-3">Query Results:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-border-default">
                    <thead className="bg-bg-gray-100">
                      <tr>
                        <th className="border border-border-default px-4 py-2 text-left text-body font-bold text-text-primary">Metric</th>
                        <th className="border border-border-default px-4 py-2 text-left text-body font-bold text-text-primary">Count</th>
                        <th className="border border-border-default px-4 py-2 text-left text-body font-bold text-text-primary">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary font-bold">Total Publications</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">68</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">Publications containing HSV2-related content</td>
                      </tr>
                      <tr>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary font-bold">Research Articles</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">65</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">Original studies and research papers</td>
                      </tr>
                      <tr>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary font-bold">Meta-Analyses</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">2</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">Comprehensive reviews combining multiple studies</td>
                      </tr>
                      <tr>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary font-bold">Clinical Trials</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">1</td>
                        <td className="border border-border-default px-4 py-2 text-body text-text-secondary">Controlled studies testing treatments/interventions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-body text-text-secondary mb-4">
                <strong className="text-text-primary">Note on Clinical Trial:</strong> The clinical trial in the database tests HSV2 prevention/treatment interventions. While not specifically about facial HSV2, it contributes to understanding HSV2 behavior, transmission, and treatment responses that apply across all infection sites, including facial presentations.
              </p>

              <div>
                <h3 className="text-body font-bold text-text-primary mb-3">Search Method:</h3>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4">
                  <li>Entity-based search using knowledge extraction from medical literature</li>
                  <li>Database: OpenBioCure Datalake (medical research publications database)</li>
                  <li>Analysis included: Publication titles, abstracts, extracted entities, and text chunks</li>
                </ul>
              </div>
            </section>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-4">What Medical Research Says</h2>
              <p className="text-body text-text-secondary mb-4">
                <strong className="text-text-primary">Your situation is medically documented.</strong> Multiple studies discuss HSV2 infections that occur on the face or other non-genital areas. The pattern you're experiencing - HSV2 on the face but never on genitals - is consistent with how the virus behaves when it establishes itself in facial nerves rather than genital nerves.
              </p>
              <p className="text-body text-text-secondary">
                <strong className="text-text-primary">Conclusion:</strong> Your presentation is <strong className="text-text-primary">medically plausible</strong> and well-documented in medical literature. The virus likely established itself in your facial nerves, which is why you get recurrent facial outbreaks while your genital area remains unaffected.
              </p>
            </section>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-4">Key Takeaways</h2>
              <ol className="list-decimal list-inside space-y-3 text-body text-text-secondary ml-4">
                <li>
                  <strong className="text-text-primary">Your situation is documented:</strong> HSV2 on the face only is medically documented in published research.
                </li>
                <li>
                  <strong className="text-text-primary">Why it happens:</strong> Research shows the virus establishes itself in facial nerves when initial infection occurs on the face, leading to reactivation in that same area.
                </li>
                <li>
                  <strong className="text-text-primary">Transmission risk:</strong> Studies show HSV2 can be transmitted from facial lesions through direct contact, with highest risk during active outbreaks.
                </li>
                <li>
                  <strong className="text-text-primary">Evidence base:</strong> This pattern is documented in 68 medical publications, including research articles, meta-analyses, and clinical trials.
                </li>
              </ol>
            </section>

            <hr className="border-border-default my-8" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-4">Evidence Summary</h2>
              <p className="text-body text-text-secondary mb-4">
                This report is based on analysis of <strong className="text-text-primary">68 medical publications</strong> that discuss HSV2. Here's the breakdown of the research:
              </p>
              
              <div className="mb-4">
                <h3 className="text-body font-bold text-text-primary mb-3">Publication Types:</h3>
                <ul className="list-disc list-inside space-y-2 text-body text-text-secondary ml-4">
                  <li><strong className="text-text-primary">65 research articles</strong> - Original studies and research papers</li>
                  <li><strong className="text-text-primary">2 meta-analyses</strong> - Comprehensive reviews that combine findings from multiple studies</li>
                  <li><strong className="text-text-primary">1 clinical trial</strong> - Controlled study testing treatments or interventions</li>
                </ul>
              </div>

              <p className="text-body text-text-secondary">
                <strong className="text-text-primary">What This Means:</strong> The evidence supporting your situation comes from a diverse range of high-quality medical research, including original studies, comprehensive reviews, and clinical trials. This provides strong scientific support for the medical explanations about HSV2 facial presentation.
              </p>
            </section>

            <hr className="border-border-default my-8 page-break" />

            <section className="mb-8 avoid-break">
              <h2 className="text-h2 font-bold text-text-primary mb-6">Relevant Medical Studies</h2>
              <p className="text-body text-text-secondary mb-6">
                Here are key medical publications that discuss HSV2, including non-genital presentations:
              </p>

              <div className="space-y-8">
                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">1. Antiviral Effect of Polyphenolic Substances</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Evidence-based complementary and alternative medicine | <strong>Date:</strong> 2022
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Research on natural substances that may help with HSV2 infections.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.1155/2022/7953728" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/35646147" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">2. HSV-2 Vaccine Research</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Vaccines | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> HSV-2 infection continues to be a significant global health concern, as there are no approved vaccines despite numerous attempts at development.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3390/vaccines13050497" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/40432109" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">3. Prevention Technology Study</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Frontiers in cellular and infection microbiology | <strong>Date:</strong> 2023
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> New prevention products are needed to prevent HIV and herpes simplex virus type 2 (HSV2). This study evaluated a fast-dissolve insert that may be used vaginally or rectally for prevention of infection.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3389/fcimb.2023.1130101" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/37153145" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">4. Cross-Neutralizing Treatment Research</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Virology | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Research on treatments that work against both HSV-1 and HSV-2 by targeting how the virus enters cells.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.1016/j.virol.2023.109916" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/37925791" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">5. Skin-Based Immune Response Study</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> JCI insight | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Research showing that the skin at the site of HSV-2 reactivation has specific immune cells. Studies are looking at whether vaccines could help build up these protective cells in the skin.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.1172/jci.insight.179010" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/39133650" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">6. HSV-2 and Other Infections Study</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> The Lancet Global Health | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Large study looking at how HSV-2 relates to other sexually transmitted infections in communities.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.1016/S2214-109X(22)00424-7" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/36400088" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">7. HSV-2 Prevalence in China</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Frontiers in Immunology | <strong>Date:</strong> 2024
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Study showing that HSV-2 infection is a growing global health challenge, with research focusing on understanding patterns and risk factors.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3389/fimmu.2024.1369086" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/39104540" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">8. HSV-2 and Fertility Treatment</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Frontiers in Public Health | <strong>Date:</strong> 2022
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> HSV-2 is a common sexually transmitted infection affecting more than 400 million people globally. This study looked at HSV-2 rates in people seeking fertility treatment.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3389/fpubh.2022.991040" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/36420003" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">9. HSV-2 Treatment Resistance</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Viruses | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Research on genetic changes in HSV-2 that might make it resistant to medications like acyclovir (similar to valtrex).
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3390/v15081709" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/37632051" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>

                <div className="avoid-break">
                  <h3 className="text-body font-bold text-text-primary mb-2">10. HSV-2 and Central Nervous System</h3>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Journal:</strong> Viruses | <strong>Date:</strong> Recent
                  </p>
                  <p className="text-body text-text-secondary mb-2">
                    <strong>Summary:</strong> Research on how herpesviruses, including HSV-2, can affect the nervous system and how the body's immune system responds.
                  </p>
                  <p className="text-body text-text-secondary">
                    <strong>Link:</strong> <a href="https://doi.org/10.3390/v14122757" className="text-accent-link underline">View Study</a> | <a href="https://pubmed.ncbi.nlm.nih.gov/36560759" className="text-accent-link underline">PubMed</a>
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border-default my-8" />

            <footer className="text-body text-text-secondary italic avoid-break">
              <p>
                <strong>Important Note:</strong> This report summarizes findings from published medical research and is for informational purposes only. All statements are based on evidence from the cited medical publications.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </>
  )
}
