import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  FlaskConical, 
  Bot, 
  Database, 
  FileSearch, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Network,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const connectors = [
  { name: "PubMed", logo: "/images/connectors/pubmed.png", alt: "PubMed/NCBI" },
  { name: "Google Scholar", logo: "/images/connectors/googlescholar.png", alt: "Google Scholar" },
  { name: "medRxiv", logo: "/images/connectors/medrxiv.png", alt: "medRxiv" },
  { name: "bioRxiv", logo: "/images/connectors/biorxiv.png", alt: "bioRxiv" },
  { name: "OpenAlex", logo: "/images/connectors/openalex.png", alt: "OpenAlex" },
  { name: "Europe PMC", logo: "/images/connectors/europmc.png", alt: "Europe PMC" },
  { name: "arXiv", logo: "/images/connectors/arxiv.svg", alt: "arXiv", fallback: "/images/connectors/arxiv.png" },
  { name: "Zenodo", logo: "/images/connectors/zenodo.png", alt: "Zenodo" },
  { name: "UniProt", logo: "/images/connectors/uniprot.png", alt: "UniProt" },
  { name: "Ensembl", logo: "/images/connectors/ensembl.png", alt: "Ensembl" },
  { name: "ClinicalTrials", logo: "/images/connectors/clinicaltrials.png", alt: "ClinicalTrials.gov" },
];

function ConnectorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6;

  const next = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, connectors.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, connectors.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <section className="py-16 bg-obc-bg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Integrated Data Sources
          </h3>
          <p className="text-sm text-gray-600">
            Connecting to leading biomedical research platforms
          </p>
        </div>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous connectors"
          >
            <ChevronLeft className="h-6 w-6 text-obc-blue" />
          </button>
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {connectors.map((connector, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity px-4"
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                >
                  <img 
                    src={connector.logo}
                    alt={connector.alt} 
                    className="h-12 w-auto object-contain max-w-full"
                    onError={(e) => { 
                      if (connector.fallback) {
                        e.currentTarget.src = connector.fallback;
                      }
                    }}
                  />
                  <span className="text-xs text-gray-500 mt-2 text-center">{connector.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next connectors"
          >
            <ChevronRight className="h-6 w-6 text-obc-blue" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-obc-bg font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/icon-obc.png" 
                alt="OpenBioCure Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-obc-blue">OpenBioCure</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-obc-blue transition-colors">Features</a>
              <a href="#solution" className="text-gray-600 hover:text-obc-blue transition-colors">Solution</a>
              <a href="#demo" className="text-gray-600 hover:text-obc-blue transition-colors">Demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-obc-blue via-obc-dark-blue to-obc-blue pt-20 pb-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Accelerating Biomedical
              <br />
              <span className="text-obc-cyan">Research & Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              A multi-tenant SaaS platform that enables healthcare professionals, 
              academic researchers, and institutional stakeholders to ingest, analyze, and act on 
              vast volumes of domain-specific literature and structured data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-obc-orange hover:bg-obc-orange/90 text-white text-lg px-8 py-6 rounded-lg"
                asChild
              >
                <a href="https://app.openbiocure.ai" target="_blank" rel="noopener noreferrer">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="solution" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-obc-dark-blue mb-6">
                Democratizing Access to Cutting-Edge Research
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The biomedical research landscape is rapidly expanding, with millions of publications 
                and datasets generated annually. Researchers and healthcare professionals struggle to 
                keep pace with the volume of information, leading to missed opportunities and delayed 
                innovation.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                OpenBioCure bridges this gap by providing a comprehensive multi-tenant SaaS platform 
                that combines artificial intelligence with powerful data ingestion and analysis capabilities, 
                making cutting-edge research accessible to institutions, teams, and individual researchers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-obc-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-obc-dark-blue mb-1">Evidence-Based Decision Making</h3>
                    <p className="text-gray-600">Accelerate decision-making with AI-powered insights from vast research libraries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-obc-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-obc-dark-blue mb-1">Standardized Best Practices</h3>
                    <p className="text-gray-600">Ensure consistency and quality across clinical and research workflows</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-obc-cyan mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-obc-dark-blue mb-1">Reduced Time-to-Innovation</h3>
                    <p className="text-gray-600">Cut down research cycles and bring solutions to market faster</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-obc-blue to-obc-cyan rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <Bot className="h-8 w-8 text-obc-blue" />
                    <h3 className="text-xl font-bold text-obc-dark-blue">Platform Capabilities</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-obc-bg p-4 rounded-lg">
                      <Database className="h-6 w-6 text-obc-cyan mb-2" />
                      <p className="font-semibold text-sm">Data Ingestion</p>
                    </div>
                    <div className="bg-obc-bg p-4 rounded-lg">
                      <FileSearch className="h-6 w-6 text-obc-orange mb-2" />
                      <p className="font-semibold text-sm">Literature Analysis</p>
                    </div>
                    <div className="bg-obc-bg p-4 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-obc-blue mb-2" />
                      <p className="font-semibold text-sm">AI Insights</p>
                    </div>
                    <div className="bg-obc-bg p-4 rounded-lg">
                      <Network className="h-6 w-6 text-obc-cyan mb-2" />
                      <p className="font-semibold text-sm">Multi-Source</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-obc-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-obc-dark-blue mb-4">
              Powerful Features for Modern Research
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-obc-blue transition-colors">
              <div className="bg-obc-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="h-6 w-6 text-obc-blue" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Multi-Source Connectors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate with PubMed, medRxiv, bioRxiv, OpenAlex, Europe PMC, arXiv, Zenodo, UniProt, 
                and 20+ other biomedical data sources. Comprehensive document ingestion with automated processing pipelines.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-orange transition-colors">
              <div className="bg-obc-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-obc-orange" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                AI-Powered RAG
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Retrieval Augmented Generation technology enables intelligent document analysis, 
                entity extraction, and contextual insights from research literature.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-blue transition-colors">
              <div className="bg-obc-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-obc-blue" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Advanced Search & Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful search capabilities with semantic understanding, citation tracking, 
                and relationship mapping across research documents.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-orange transition-colors">
              <div className="bg-obc-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-obc-orange" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Scalable & Efficient
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built for scale with cloud-native deployment and support for processing 
                millions of documents efficiently.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-cyan transition-colors">
              <div className="bg-obc-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-obc-cyan" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Secure & Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Platform with enterprise-grade security, comprehensive access controls, 
                and full audit trails for research compliance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SaaS Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-obc-dark-blue mb-4">
              Enterprise-Ready SaaS Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multi-tenant architecture designed for institutions, research teams, and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-obc-blue transition-colors">
              <div className="bg-obc-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-obc-blue" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Multi-Tenant Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Secure tenant isolation with dedicated workspaces for institutions, 
                research teams, and organizations. Complete data separation and access control.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-orange transition-colors">
              <div className="bg-obc-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-obc-orange" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Personalized Scholar Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered personalized dashboard with trending topics, new publications, 
                citation tracking, and research insights tailored to your interests.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-cyan transition-colors">
              <div className="bg-obc-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-obc-cyan" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Workspace & Project Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborative workspaces for research projects with team management, 
                shared resources, and real-time collaboration features.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-blue transition-colors">
              <div className="bg-obc-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-obc-blue" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Team Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time collaboration with team members, project invitations, 
                shared research contexts, and collaborative analysis tools.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-orange transition-colors">
              <div className="bg-obc-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-obc-orange" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Real-Time Notifications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with real-time notifications for collaboration requests, 
                project updates, new publications, and citation alerts.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-obc-cyan transition-colors">
              <div className="bg-obc-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-obc-cyan" />
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">
                Role-Based Access Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade RBAC with tenant-scoped permissions, 
                secure authentication, and comprehensive audit logging.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Source Connectors */}
      <ConnectorsCarousel />

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-obc-dark-blue mb-4">
              Built for Healthcare & Research Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering clinical, pharmaceutical, and public-health settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-obc-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">Clinical Settings</h3>
              <p className="text-gray-600">
                Enable evidence-based decision making in clinical environments with real-time 
                access to the latest research and treatment protocols.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-obc-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">Pharmaceutical Research</h3>
              <p className="text-gray-600">
                Accelerate drug discovery and development by analyzing vast literature databases 
                and identifying promising research directions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-obc-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-obc-dark-blue mb-3">Academic Research</h3>
              <p className="text-gray-600">
                Support academic researchers with comprehensive tools for literature review, 
                citation analysis, and research collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="py-24 bg-gradient-to-r from-obc-blue to-obc-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Research Workflow?
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            We're in pre-seed stage and ready to present a demo. Join us in revolutionizing 
            biomedical research with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-obc-orange hover:bg-obc-orange/90 text-white text-lg px-8 py-6 rounded-lg"
              asChild
            >
              <a href="https://app.openbiocure.ai" target="_blank" rel="noopener noreferrer">
                Play the demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-lg"
              asChild
            >
              <a href="mailto:info@openbiocure.ai?subject=Contact Us">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obc-dark-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/icon-obc.png" 
                  alt="OpenBioCure Logo" 
                  className="h-6 w-6"
                />
                <span className="text-lg font-bold">OpenBioCure</span>
              </div>
              <p className="text-gray-300 text-sm">
                Democratizing access to cutting-edge biomedical research insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
            <p>© 2025 OpenBioCure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

