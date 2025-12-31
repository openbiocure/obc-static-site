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
  ChevronRight,
  X
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const connectors = [
  { name: "PubMed", logo: "/images/connectors/pubmed.png", alt: "PubMed/NCBI" },
  { name: "Google Scholar", logo: "/images/connectors/googlescholar.png", alt: "Google Scholar" },
  { name: "medRxiv", logo: "/images/connectors/medrxiv.png", alt: "medRxiv" },
  { name: "bioRxiv", logo: "/images/connectors/biorxiv.png", alt: "bioRxiv" },
  { name: "OpenAlex", logo: "/images/connectors/openalex.png", alt: "OpenAlex" },
  { name: "Europe PMC", logo: "/images/connectors/europmc.png", alt: "Europe PMC" },
  { name: "arXiv", logo: "/images/connectors/arxiv.png", alt: "arXiv" },
  { name: "Zenodo", logo: "/images/connectors/zenodo.png", alt: "Zenodo" },
  { name: "UniProt", logo: "/images/connectors/uniprot.png", alt: "UniProt" },
  { name: "Ensembl", logo: "/images/connectors/ensembl.png", alt: "Ensembl" },
  { name: "ClinicalTrials", logo: "/images/connectors/clinicaltrials.png", alt: "ClinicalTrials.gov" },
];

// Middle Eastern Universities and Research Organizations (excluding Israel)
const meOrganizations = [
  // Saudi Arabia
  "King Saud University",
  "King Abdulaziz University",
  "King Fahd University of Petroleum and Minerals",
  "King Abdullah University of Science and Technology (KAUST)",
  "King Saud bin Abdulaziz University for Health Sciences",
  "King Faisal Specialist Hospital and Research Centre",
  "King Abdullah International Medical Research Center",
  "Umm Al-Qura University",
  "Imam Mohammad Ibn Saud Islamic University",
  "King Khalid University",
  "Princess Nourah bint Abdulrahman University",
  "King Saud Medical City",
  "King Fahad Medical City",
  "King Faisal University",
  "Qassim University",
  "Taif University",
  "University of Tabuk",
  "Najran University",
  "Jazan University",
  "Northern Border University",
  "Al Jouf University",
  "Hail University",
  "Baha University",
  "Majmaah University",
  "Shaqra University",
  "King Fahd Armed Forces Hospital",
  "King Abdulaziz Medical City",
  "National Guard Health Affairs",
  "Saudi German Hospital",
  "King Fahd University Hospital",
  "King Khalid University Hospital",
  "King Abdullah Medical City",
  "King Fahad National Guard Hospital",
  "King Fahad Specialist Hospital",
  "King Fahad Hospital",
  // UAE
  "United Arab Emirates University",
  "Khalifa University",
  "American University of Sharjah",
  "University of Sharjah",
  "Zayed University",
  "Abu Dhabi University",
  "Ajman University",
  "Al Ain University",
  "Mohammed bin Rashid University of Medicine and Health Sciences",
  "Gulf Medical University",
  "Dubai Medical College",
  "Rashid Hospital",
  "Sheikh Khalifa Medical City",
  "Tawam Hospital",
  "Cleveland Clinic Abu Dhabi",
  "Sheikh Shakhbout Medical City",
  "Al Jalila Children's Specialty Hospital",
  "Dubai Hospital",
  "Al Qasimi Hospital",
  "Al Zahra Hospital",
  // Qatar
  "Qatar University",
  "Weill Cornell Medicine - Qatar",
  "Hamad Bin Khalifa University",
  "Qatar Foundation",
  "Sidra Medicine",
  "Hamad Medical Corporation",
  "Qatar Biomedical Research Institute",
  "Qatar National Research Fund",
  "Al Wakra Hospital",
  "Al Khor Hospital",
  "Heart Hospital",
  "National Center for Cancer Care and Research",
  // Kuwait
  "Kuwait University",
  "American University of Kuwait",
  "Gulf University for Science and Technology",
  "Australian College of Kuwait",
  "Kuwait Institute for Scientific Research",
  "Dasman Diabetes Institute",
  "Kuwait Cancer Control Center",
  "Al Amiri Hospital",
  "Mubarak Al-Kabeer Hospital",
  "Al Sabah Hospital",
  "Ibn Sina Hospital",
  "Al Razi Hospital",
  "Farwaniya Hospital",
  "Jahra Hospital",
  "Adan Hospital",
  // Bahrain
  "University of Bahrain",
  "Arabian Gulf University",
  "Royal College of Surgeons in Ireland - Medical University of Bahrain",
  "Ahlia University",
  "Bahrain Polytechnic",
  "King Hamad University Hospital",
  "Salmaniya Medical Complex",
  "Bahrain Defence Force Hospital",
  "American Mission Hospital",
  "Royal Bahrain Hospital",
  "Al Hilal Hospital",
  // Oman
  "Sultan Qaboos University",
  "University of Nizwa",
  "Dhofar University",
  "German University of Technology in Oman",
  "Sohar University",
  "Oman Medical College",
  "National University of Science and Technology",
  "Sultan Qaboos University Hospital",
  "Royal Hospital",
  "Khoula Hospital",
  "Al Nahdha Hospital",
  "Sohar Hospital",
  "Nizwa Hospital",
  "Salalah Hospital",
  // Jordan
  "University of Jordan",
  "Jordan University of Science and Technology",
  "Yarmouk University",
  "Hashemite University",
  "Mutah University",
  "Al-Balqa Applied University",
  "Princess Sumaya University for Technology",
  "American University of Madaba",
  "Applied Science Private University",
  "Philadelphia University",
  "Zarqa University",
  "Al Hussein Cancer Center",
  "King Hussein Cancer Center",
  "King Abdullah University Hospital",
  "Jordan Hospital",
  "Islamic Hospital",
  "Al Khalidi Medical Center",
  "Specialty Hospital",
  "Istishari Hospital",
  "King Hussein Medical City",
  // Lebanon
  "American University of Beirut",
  "Lebanese American University",
  "Saint Joseph University",
  "Lebanese University",
  "University of Balamand",
  "Notre Dame University",
  "Beirut Arab University",
  "Haigazian University",
  "American University of Science and Technology",
  "Lebanese International University",
  "American University of Beirut Medical Center",
  "Hotel Dieu de France",
  "Rafik Hariri University Hospital",
  "Lebanese Hospital Geitaoui",
  "Mount Lebanon Hospital",
  "Bellevue Medical Center",
  "AUB Medical Center",
  "Clemenceau Medical Center",
  "Middle East Institute of Health",
  // Egypt
  "Cairo University",
  "Ain Shams University",
  "Alexandria University",
  "American University in Cairo",
  "AUC",
  "Zagazig University",
  "Mansoura University",
  "Assiut University",
  "Tanta University",
  "Suez Canal University",
  "Helwan University",
  "Benha University",
  "Minia University",
  "South Valley University",
  "Fayoum University",
  "Kafrelsheikh University",
  "Damietta University",
  "Port Said University",
  "Suez University",
  "New Valley University",
  "National Research Centre",
  "Egyptian Atomic Energy Authority",
  "National Cancer Institute",
  "Kasr Al Ainy Hospital",
  "Ain Shams University Hospitals",
  "Alexandria University Hospitals",
  "Cairo University Hospitals",
  "National Liver Institute",
  "Children's Cancer Hospital Egypt",
  "57357 Hospital",
  // Iraq
  "University of Baghdad",
  "University of Mosul",
  "University of Basrah",
  "University of Kufa",
  "Al-Mustansiriya University",
  "University of Technology",
  "University of Anbar",
  "University of Diyala",
  "University of Babylon",
  "University of Tikrit",
  "University of Sulaimani",
  "University of Duhok",
  "University of Erbil",
  "Kurdistan Institution for Strategic Studies",
  "Medical City",
  "Ibn Sina Teaching Hospital",
  "Al-Kindy Teaching Hospital",
  "Al-Yarmouk Teaching Hospital",
  // Iran
  "University of Tehran",
  "Tehran University of Medical Sciences",
  "Sharif University of Technology",
  "Amirkabir University of Technology",
  "Iran University of Science and Technology",
  "Shahid Beheshti University",
  "Isfahan University of Technology",
  "Isfahan University of Medical Sciences",
  "Mashhad University of Medical Sciences",
  "Tabriz University of Medical Sciences",
  "Shiraz University of Medical Sciences",
  "Pasteur Institute of Iran",
  "Royan Institute",
  "National Institute for Medical Research Development",
  "Tehran Heart Center",
  "Shariati Hospital",
  "Imam Khomeini Hospital",
  "Milad Hospital",
  // Turkey (Middle East region)
  "Istanbul University",
  "Ankara University",
  "Hacettepe University",
  "Middle East Technical University",
  "Bogazici University",
  "Istanbul Technical University",
  "Koç University",
  "Sabancı University",
  "Bilkent University",
  "Ankara University Medical School",
  "Hacettepe University Faculty of Medicine",
  "Istanbul University Faculty of Medicine",
  "Acıbadem University",
  "Yeditepe University",
  "Istanbul Medipol University",
  "Ankara City Hospital",
  "Istanbul University Hospital",
  "Hacettepe University Hospital",
  "Memorial Hospital",
  "Acıbadem Hospital",
  // Syria
  "University of Damascus",
  "University of Aleppo",
  "Tishreen University",
  "Al-Baath University",
  "University of Homs",
  "Damascus University Hospital",
  "Al-Mouassat University Hospital",
  "Tishreen University Hospital",
  // Yemen
  "Sana'a University",
  "University of Aden",
  "University of Science and Technology",
  "Al-Razi University",
  "Ibb University",
  "Taiz University",
  "Sana'a University Hospital",
  "Al-Thawra Hospital",
  "Al-Jumhuri Hospital",
  // Palestine
  "Birzeit University",
  "An-Najah National University",
  "Palestinian Technical University",
  "Al-Quds University",
  "Islamic University of Gaza",
  "Al-Azhar University - Gaza",
  "Palestine Polytechnic University",
  "Bethlehem University",
  "Al-Quds University Medical School",
  "An-Najah National University Hospital",
  "Al-Makassed Hospital",
  "Palestinian Red Crescent Society",
  "St. Joseph's Hospital",
  "Caritas Baby Hospital",
  // Morocco
  "Mohammed V University",
  "Hassan II University",
  "Cadi Ayyad University",
  "Ibn Tofail University",
  "Mohammed VI University of Health Sciences",
  "Al Akhawayn University",
  "University of Fez",
  "University of Rabat",
  "Ibn Sina University Hospital",
  "Cheikh Zaid Hospital",
  "Ibn Rochd University Hospital",
  // Algeria
  "University of Algiers",
  "University of Oran",
  "University of Constantine",
  "University of Tlemcen",
  "University of Blida",
  "University of Setif",
  "University of Annaba",
  "Mustapha Pasha Hospital",
  "University Hospital Center of Oran",
  "University Hospital Center of Constantine",
  // Tunisia
  "University of Tunis",
  "University of Sfax",
  "University of Monastir",
  "University of Carthage",
  "University of Gabes",
  "University of Gafsa",
  "Charles Nicolle Hospital",
  "Habib Bourguiba Hospital",
  "Fattouma Bourguiba University Hospital",
  // Libya
  "University of Tripoli",
  "University of Benghazi",
  "University of Misurata",
  "Al-Arab Medical University",
  "Tripoli Medical Center",
  "Benghazi Medical Center",
  "National Cancer Institute",
  // Sudan
  "University of Khartoum",
  "Sudan University of Science and Technology",
  "Al-Neelain University",
  "University of Gezira",
  "Ahfad University for Women",
  "Khartoum Teaching Hospital",
  "Soba University Hospital",
  "Al Shaab Teaching Hospital",
  // Research Centers & Institutes
  "King Abdullah International Medical Research Center",
  "King Faisal Specialist Hospital and Research Centre",
  "Qatar Biomedical Research Institute",
  "Kuwait Institute for Scientific Research",
  "National Research Centre Egypt",
  "Pasteur Institute of Iran",
  "Royan Institute",
  "Dasman Diabetes Institute",
  "Qatar National Research Fund",
  "King Abdullah University of Science and Technology",
  "KAUST",
].filter((org, index, self) => self.indexOf(org) === index);

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
                      const connectorWithFallback = connector as typeof connector & { fallback?: string };
                      if (connectorWithFallback.fallback) {
                        e.currentTarget.src = connectorWithFallback.fallback;
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

function DemoRequestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [orgSuggestions, setOrgSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const orgInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Formspree integration
    const formspreeEndpoint = "https://formspree.io/f/xqeazwzr";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Demo Request from OpenBioCure Website",
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          message: formData.message || "No additional message provided.",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", organization: "", role: "", message: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }

      // Mailto fallback (backup - uncomment if Formspree fails)
      /*
      const subject = encodeURIComponent("Demo Request - OpenBioCure");
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Organization: ${formData.organization}\n` +
        `Role: ${formData.role}\n\n` +
        `Message:\n${formData.message || "No additional message provided."}`
      );
      window.location.href = `mailto:info@openbiocure.ai?subject=${subject}&body=${body}`;
      
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
        setFormData({ name: "", email: "", organization: "", role: "", message: "" });
      }, 1000);
      */
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    // Autocomplete for organization field
    if (e.target.name === "organization") {
      if (value.length > 0) {
        const filtered = meOrganizations.filter(org =>
          org.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 10);
        setOrgSuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
        setSelectedIndex(-1);
      } else {
        setOrgSuggestions([]);
        setShowSuggestions(false);
      }
    }
  };

  const handleOrgSelect = (org: string) => {
    setFormData({
      ...formData,
      organization: org,
    });
    setShowSuggestions(false);
    setOrgSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "organization" && showSuggestions && orgSuggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < orgSuggestions.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        handleOrgSelect(orgSuggestions[selectedIndex]);
      } else if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        orgInputRef.current &&
        !orgInputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSuggestions]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-obc-dark-blue">Request a Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-obc-blue focus:border-obc-blue outline-none"
              placeholder="Ahmed Al-Rashid"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-obc-blue focus:border-obc-blue outline-none"
              placeholder="ahmed.alrashid@university.edu"
            />
          </div>

          <div className="relative">
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
              Organization/Institution <span className="text-red-500">*</span>
            </label>
            <input
              ref={orgInputRef}
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (formData.organization.length > 0 && orgSuggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-obc-blue focus:border-obc-blue outline-none"
              placeholder="University Hospital or Research Institution"
              autoComplete="off"
            />
            {showSuggestions && orgSuggestions.length > 0 && (
              <div
                ref={suggestionsRef}
                className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
              >
                {orgSuggestions.map((org, index) => (
                  <div
                    key={org}
                    onClick={() => handleOrgSelect(org)}
                    className={`px-4 py-2 cursor-pointer hover:bg-obc-blue/10 ${
                      index === selectedIndex ? "bg-obc-blue/20" : ""
                    } ${index === 0 ? "rounded-t-lg" : ""} ${
                      index === orgSuggestions.length - 1 ? "rounded-b-lg" : ""
                    }`}
                  >
                    {org}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Role/Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-obc-blue focus:border-obc-blue outline-none"
              placeholder="Research Director, Principal Investigator, etc."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-obc-blue focus:border-obc-blue outline-none resize-none"
              placeholder="Tell us about your research needs or any specific use cases you'd like to explore..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Thank you! Your demo request has been submitted. We'll be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              There was an error submitting your request. Please try again or email us directly at info@openbiocure.ai
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-obc-orange hover:bg-obc-orange/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Demo"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted by OpenBioCure regarding your demo request.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obc-bg font-sans">
      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
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
              <span className="text-xl font-bold text-obc-blue">OpenBioCure™</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-obc-blue transition-colors">Features</a>
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
                onClick={() => setIsDemoModalOpen(true)}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Data Source Connectors */}
      <ConnectorsCarousel />

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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-obc-blue to-obc-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Piloting?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            We're building our prototype and actively seeking pilot partners. If you're a university 
            hospital or research institution interested in exploring how AI-powered research tools 
            can transform your workflows, we'd love to hear from you.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-lg text-gray-100 mb-6">
              Email us at:
            </p>
            <Button 
              size="lg" 
              className="bg-obc-orange hover:bg-obc-orange/90 text-white text-lg px-8 py-6 rounded-lg"
              asChild
            >
              <a href="mailto:info@openbiocure.ai?subject=Interested in Piloting OpenBioCure">
                info@openbiocure.ai
                <ArrowRight className="ml-2 h-5 w-5" />
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
                <span className="text-lg font-bold">OpenBioCure™</span>
              </div>
              <p className="text-gray-300 text-sm">
                Democratizing access to cutting-edge biomedical research insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
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
            <p>© 2026 OpenBioCure™. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

