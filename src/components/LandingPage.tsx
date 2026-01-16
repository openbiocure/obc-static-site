import { Button } from "./ui/button";
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
  Rocket,
  Search,
  Brain,
  FileCheck,
  FileText,
  Layers,
  PenTool,
  Globe,
  CheckSquare
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

function ProductDemoImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(8);
  const [rotateY, setRotateY] = useState(20);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    lastScrollY.current = window.scrollY || 0;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (scrollingDown !== (scrollDirection.current === 'down')) {
        scrollDirection.current = scrollingDown ? 'down' : 'up';
      }
      
      lastScrollY.current = currentScrollY;
      
      // Animate to 0 when scrolling down, back to 8/20 when scrolling up
      if (scrollDirection.current === 'down') {
        setRotateX(0);
        setRotateY(0);
      } else {
        setRotateX(8);
        setRotateY(20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto" 
      style={{ 
        aspectRatio: '1462/1065', 
        maxHeight: '200px',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <img 
          src="/images/search.svg" 
          alt="OpenBioCure Search Interface Demo" 
          className="w-full h-full object-contain rounded-medium"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
          }}
        />
      </div>
    </div>
  );
}

function WorkspaceImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(8);
  const [rotateY, setRotateY] = useState(20);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    lastScrollY.current = window.scrollY || 0;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (scrollingDown !== (scrollDirection.current === 'down')) {
        scrollDirection.current = scrollingDown ? 'down' : 'up';
      }
      
      lastScrollY.current = currentScrollY;
      
      // Animate to 0 when scrolling down, back to 8/20 when scrolling up
      if (scrollDirection.current === 'down') {
        setRotateX(0);
        setRotateY(0);
      } else {
        setRotateX(8);
        setRotateY(20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto" 
      style={{ 
        aspectRatio: '1462/1065', 
        maxHeight: '200px',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <img 
          src="/images/workspace.svg" 
          alt="OpenBioCure Workspace Interface" 
          className="w-full h-full object-contain rounded-medium"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
          }}
        />
      </div>
    </div>
  );
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function LandingPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const RECAPTCHA_SITE_KEY = '6Lcoa0wsAAAAAM6ek8KdgpuDwqELiSq0xt9J1TD3';

    try {
      // Execute reCAPTCHA v3 (invisible, runs automatically)
      let recaptchaToken = '';
      
      if (RECAPTCHA_SITE_KEY) {
        if (typeof window === 'undefined' || !window.grecaptcha) {
          // Wait for reCAPTCHA to load (max 5 seconds)
          await new Promise<void>((resolve, reject) => {
            const maxWait = 5000;
            const startTime = Date.now();
            
            const checkRecaptcha = () => {
              if (typeof window !== 'undefined' && window.grecaptcha) {
                resolve();
              } else if (Date.now() - startTime > maxWait) {
                reject(new Error('reCAPTCHA failed to load. Please refresh the page.'));
              } else {
                setTimeout(checkRecaptcha, 100);
              }
            };
            
            checkRecaptcha();
          });
        }

        // Now execute reCAPTCHA
        await new Promise<void>((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            try {
              recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
              if (!recaptchaToken) {
                reject(new Error('Failed to generate reCAPTCHA token'));
              } else {
                resolve();
              }
            } catch (error) {
              console.error('reCAPTCHA execute error:', error);
              reject(error);
            }
          });
        });
      } else {
        throw new Error('reCAPTCHA is not configured');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will contact you soon.' });
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Network error. Please try again later.';
      setSubmitStatus({ type: 'error', message: errorMessage.includes('reCAPTCHA') ? errorMessage : 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-white font-sans flex flex-col">
      {/* Navigation */}
      <nav className="bg-bg-white border-b border-border-default sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-logo-header">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/icon-obc.png" 
                alt="OpenBioCure Logo" 
                className="h-8 w-8"
              />
              <span className="text-brand font-bold text-text-primary" style={{ fontSize: 'var(--font-size-brand)', lineHeight: '1' }}>OpenBioCure™</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow">
      {/* Hero Section - Investor Pitch */}
      <section className="relative overflow-hidden bg-bg-black pt-24 pb-32">
        <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-overlay)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent-primary/20 backdrop-blur-sm px-6 py-3 rounded-large mb-8 border border-accent-primary/30">
              <Rocket className="h-5 w-5 text-accent-primary" />
              <span className="text-button font-medium text-text-white">Pilot Stage - Seeking Strategic Partners & Investment</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-white mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Transforming Biomedical Research
              <br />
              <span className="text-accent-primary">with AI-Powered Intelligence</span>
            </h1>
            <p className="text-body-large text-text-light-gray mb-6 max-w-3xl mx-auto leading-relaxed">
              OpenBioCure is building the next-generation AI platform that enables healthcare institutions 
              to unlock insights from millions of research papers, accelerating evidence-based decision-making 
              and reducing time-to-innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent-primary hover:opacity-90 text-text-white text-button px-8 py-6 rounded-large"
                style={{ background: 'var(--gradient-primary)' }}
                asChild
              >
                <a href="#contact">
                  Explore Investment Opportunity
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-bg-white/10 border-bg-white/20 text-text-white hover:bg-bg-white/20 text-button px-8 py-6 rounded-large"
                asChild
              >
                <a href="#contact" className="text-text-white">
                  View Product Demo
                </a>
              </Button>
            </div>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="bg-bg-white/10 backdrop-blur-sm rounded-large p-6 border border-bg-white/20">
                <div className="text-4xl font-bold text-accent-primary mb-2">10+</div>
                <div className="text-body text-text-light-gray">Data Sources Integrated</div>
              </div>
              <div className="bg-bg-white/10 backdrop-blur-sm rounded-large p-6 border border-bg-white/20">
                <div className="text-4xl font-bold text-accent-primary mb-2">Pilot</div>
                <div className="text-body text-text-light-gray">Stage - Seeking Partners</div>
              </div>
              <div className="bg-bg-white/10 backdrop-blur-sm rounded-large p-6 border border-bg-white/20">
                <div className="text-4xl font-bold text-accent-primary mb-2">30+</div>
                <div className="text-body text-text-light-gray">Specialist Agents & Connectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="demo" className="h-screen flex items-center bg-bg-gray-50" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-text-primary mb-2" style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)' }}>
              Intelligent Research Search
            </h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Ask questions in natural language and discover relevant research papers, clinical trials, and biomedical insights across multiple databases in seconds
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ProductDemoImage />
            <div className="bg-bg-white rounded-large p-8 shadow-lg border border-border-default">
              <p className="text-body text-text-secondary mb-6">
                Our prototype demonstrates intelligent search capabilities that understand context and meaning, 
                helping researchers quickly find relevant information across multiple research databases.
              </p>
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent-primary hover:opacity-90 text-text-white text-button px-8 py-6 rounded-large"
                  style={{ background: 'var(--gradient-primary)' }}
                  asChild
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-bg-white border-border-default text-text-primary hover:bg-bg-gray-50 text-button px-8 py-6 rounded-large"
                  asChild
                >
                  <a href="#contact">
                    Request Access
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <section id="workspace" className="h-screen flex items-center bg-bg-white" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-text-primary mb-2" style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)' }}>
              Workspace
            </h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Organize and manage your research projects in a collaborative workspace
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <WorkspaceImage />
            <div className="bg-bg-white rounded-large p-8 shadow-lg border border-border-default">
              <p className="text-body text-text-secondary mb-6">
                Our workspace feature enables researchers to organize their projects, collaborate with team members, 
                and manage research workflows efficiently. Keep track of your research, save important findings, 
                and work together seamlessly.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-accent-primary/10 px-4 py-2 rounded-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary" />
                  <span className="text-body font-medium text-text-primary">Project Organization</span>
                </div>
                <div className="flex items-center gap-2 bg-accent-primary/10 px-4 py-2 rounded-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary" />
                  <span className="text-body font-medium text-text-primary">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2 bg-accent-primary/10 px-4 py-2 rounded-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary" />
                  <span className="text-body font-medium text-text-primary">Workflow Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Workflow</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">From querying hundreds of millions of papers to writing your final manuscript, we ensure every step is grounded in peer-reviewed data.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Step 1: Aggregate */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="w-20 h-20 rounded-2xl bg-bg-white border-2 border-accent-primary/20 shadow-xl flex items-center justify-center text-accent-primary mb-6 transition-transform hover:scale-110">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-text-primary text-xl font-bold mb-2">Aggregate</h3>
              <p className="text-text-secondary text-sm">Query 200M+ medical papers via PubMed and CrossRef instantly.</p>
            </div>

            {/* Step 2: Synthesize */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="w-20 h-20 rounded-2xl bg-bg-white border-2 border-accent-primary/20 shadow-xl flex items-center justify-center text-accent-primary mb-6 transition-transform hover:scale-110">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-text-primary text-xl font-bold mb-2">Synthesize</h3>
              <p className="text-text-secondary text-sm">Bio-LLM identifies patterns and summarizes findings without fabrication.</p>
            </div>

            {/* Step 3: Verify */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="w-20 h-20 rounded-2xl bg-bg-white border-2 border-accent-primary/20 shadow-xl flex items-center justify-center text-accent-primary mb-6 transition-transform hover:scale-110">
                <CheckSquare className="h-10 w-10" />
              </div>
              <h3 className="text-text-primary text-xl font-bold mb-2">Verify</h3>
              <p className="text-text-secondary text-sm">Click any statement to see the original highlighted source text.</p>
            </div>

            {/* Step 4: Publish */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4 px-4">
              <div className="w-20 h-20 rounded-2xl bg-green-50 border-2 border-green-500 shadow-xl flex items-center justify-center text-green-600 mb-6 transition-transform hover:scale-110">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="text-text-primary text-xl font-bold mb-2">Publish</h3>
              <p className="text-text-secondary text-sm">Export to LaTeX, Word, or EndNote with formatted bibliographies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Data Sources & Repositories Hero Section */}
      <section className="py-16 bg-bg-white border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
              TRUSTED DATA SOURCES & REPOSITORIES
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-800">PubMed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-800">ClinicalTrials.gov</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-800">Europe PMC</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-800">arXiv.org</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gray-800">NIH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Pilot Test Invitation */}
      <section id="contact" className="py-24" style={{ background: 'var(--gradient-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-text-white mb-6" style={{ fontSize: '48px', lineHeight: '1.1' }}>
              Join Our Pilot Test Program
            </h2>
            <p className="text-body-large text-text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              We're inviting organizations and individuals to pilot test our platform. 
              Help us shape the future of biomedical research by providing feedback and insights 
              as we refine our AI-powered research tools.
            </p>
          </div>
          <div className="bg-bg-white rounded-large p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-h2 font-bold text-text-primary mb-6 text-center">Request Pilot Access</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-body font-medium text-text-primary mb-2">
                  Name <span className="text-accent-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-input px-4 py-2 border border-border-default rounded-medium text-body text-text-primary bg-bg-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-body font-medium text-text-primary mb-2">
                  Email <span className="text-accent-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-input px-4 py-2 border border-border-default rounded-medium text-body text-text-primary bg-bg-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-body font-medium text-text-primary mb-2">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full h-input px-4 py-2 border border-border-default rounded-medium text-body text-text-primary bg-bg-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="Your organization or institution"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-body font-medium text-text-primary mb-2">
                  Tell us about your interest <span className="text-accent-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border-default rounded-medium text-body text-text-primary bg-bg-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary resize-none"
                  placeholder="Why are you interested in pilot testing OpenBioCure? What research challenges are you hoping to solve?"
                />
              </div>
              {submitStatus.type && (
                <div className={`p-4 rounded-medium ${
                  submitStatus.type === 'success' 
                    ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
                    : 'bg-accent-error-bg text-accent-error-text border border-accent-error/20'
                }`}>
                  <p className="text-body font-medium">{submitStatus.message}</p>
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent-primary hover:opacity-90 text-text-white text-button px-8 py-6 rounded-large font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="bg-bg-black text-text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/images/icon-obc.png" 
                  alt="OpenBioCure Logo" 
                  className="h-6 w-6"
                />
                <span className="text-brand font-bold" style={{ fontSize: 'var(--font-size-brand)', lineHeight: '1' }}>OpenBioCure™</span>
              </div>
              <p className="text-footer text-text-tertiary">
                AI-powered biomedical research platform with evidence-backed insights.
              </p>
              <p className="text-footer text-text-tertiary mt-2">
                Pilot Stage - Seeking Strategic Partners & Investment
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-text-white">Platform</h4>
              <ul className="space-y-2 text-footer text-text-tertiary">
                <li><a href="#product" className="hover:text-text-white transition-colors">Product</a></li>
                <li><a href="#demo" className="hover:text-text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-text-white">Company</h4>
              <ul className="space-y-2 text-footer text-text-tertiary">
                <li><a href="#product" className="hover:text-text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-text-white">Contact</h4>
              <ul className="space-y-2 text-footer text-text-tertiary">
                <li>
                  <a href="mailto:info@openbiocure.ai" className="hover:text-text-white transition-colors">
                    info@openbiocure.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-text-tertiary/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-footer text-text-tertiary">© 2026 OpenBioCure™. All rights reserved.</p>
              <div className="flex gap-6 text-footer">
                <a href="/privacy-policy" className="text-text-white hover:text-accent-primary transition-colors underline">
                  Privacy Policy
                </a>
                <a href="/terms-of-conditions" className="text-text-white hover:text-accent-primary transition-colors underline">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

