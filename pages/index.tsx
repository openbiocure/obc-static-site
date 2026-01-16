import LandingPage from '../src/components/LandingPage'
import Head from 'next/head'
import Script from 'next/script'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenBioCure - AI-Powered Biomedical Research Platform</title>
        <meta name="title" content="OpenBioCure - AI-Powered Biomedical Research Platform" />
        <meta name="description" content="Enables healthcare professionals, academic researchers, and institutional stakeholders to ingest, analyze, and act on vast volumes of domain-specific literature and structured data. Accelerating biomedical research & innovation." />
        <meta name="keywords" content="biomedical research, AI platform, healthcare, research platform, PubMed, medRxiv, bioRxiv, OpenAlex, literature analysis, clinical research, pharmaceutical research, academic research, RAG, retrieval augmented generation" />
        <meta name="author" content="OpenBioCure" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openbiocure.ai/" />
        <meta property="og:title" content="OpenBioCure - AI-Powered Biomedical Research Platform" />
        <meta property="og:description" content="Enables healthcare professionals, academic researchers, and institutional stakeholders to ingest, analyze, and act on vast volumes of domain-specific literature and structured data." />
        <meta property="og:image" content="https://openbiocure.ai/images/openbiocure.webp" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://openbiocure.ai/" />
        <meta property="twitter:title" content="OpenBioCure - AI-Powered Biomedical Research Platform" />
        <meta property="twitter:description" content="Enables healthcare professionals, academic researchers, and institutional stakeholders to ingest, analyze, and act on vast volumes of domain-specific literature and structured data." />
        <meta property="twitter:image" content="https://openbiocure.ai/images/openbiocure.webp" />
        
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OpenBioCure",
              "url": "https://openbiocure.ai",
              "logo": "https://openbiocure.ai/images/icon-obc.png",
              "description": "Enables healthcare professionals, academic researchers, and institutional stakeholders to ingest, analyze, and act on vast volumes of domain-specific literature and structured data.",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@openbiocure.ai",
                "contactType": "Customer Service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "OpenBioCure",
              "applicationCategory": "HealthcareApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered biomedical research platform with multi-source connectors, RAG technology, and advanced literature analysis capabilities.",
              "operatingSystem": "Web",
              "url": "https://openbiocure.ai"
            })
          }}
        />
      </Head>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6Lcoa0wsAAAAAM6ek8KdgpuDwqELiSq0xt9J1TD3"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.grecaptcha) {
            console.log('reCAPTCHA loaded successfully');
          }
        }}
        onError={(e) => {
          console.error('reCAPTCHA script failed to load:', e);
        }}
      />
      <LandingPage />
    </>
  )
}

