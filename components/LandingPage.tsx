import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const meOrganizations = [
  "King Saud University", "King Abdulaziz University", "King Fahd University of Petroleum and Minerals",
  "King Abdullah University of Science and Technology (KAUST)", "United Arab Emirates University",
  "Khalifa University", "Qatar University", "Weill Cornell Medicine - Qatar", "Kuwait University",
  "University of Bahrain", "Sultan Qaboos University", "University of Jordan",
  "American University of Beirut", "Cairo University", "Ain Shams University",
  "Alexandria University", "American University in Cairo", "Istanbul University",
  "Ankara University", "Hacettepe University", "Middle East Technical University",
  "University of Damascus", "Sana'a University", "Birzeit University",
  "Mohammed V University", "University of Algiers", "University of Tunis",
];

export default function LandingPage() {
  const [signupForm, setSignupForm] = useState({ email: "", organization: "" });
  const [isSignupSubmitting, setIsSignupSubmitting] = useState(false);
  const [signupStatus, setSignupStatus] = useState<"idle" | "success" | "error">("idle");
  const [orgSuggestions, setOrgSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const orgInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignupSubmitting(true);
    setSignupStatus("idle");

    const formspreeEndpoint = "https://formspree.io/f/xqeazwzr";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Pilot Signup Request from OpenBioCure Website",
          email: signupForm.email,
          organization: signupForm.organization,
          _replyto: signupForm.email,
        }),
      });

      if (response.ok) {
        setSignupStatus("success");
        setSignupForm({ email: "", organization: "" });
        setShowSuggestions(false);
        setOrgSuggestions([]);
        setTimeout(() => {
          setSignupStatus("idle");
        }, 3000);
      } else {
        setSignupStatus("error");
      }
    } catch (error) {
      setSignupStatus("error");
    } finally {
      setIsSignupSubmitting(false);
    }
  };

  const handleOrgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSignupForm({ ...signupForm, organization: value });

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
  };

  const handleOrgSelect = (org: string) => {
    setSignupForm({ ...signupForm, organization: org });
    setShowSuggestions(false);
    setOrgSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleOrgKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showSuggestions && orgSuggestions.length > 0) {
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

  return (
    <div className="min-h-screen bg-obc-bg font-sans">
      {/* What is OpenBioCure */}
      <section className="py-8 bg-obc-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/icon-obc.png" 
                alt="OpenBioCure Logo" 
                className="h-16 w-16 rounded-full"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-obc-dark-blue mb-4">
              What is OpenBioCure?
            </h2>
            <div className="text-lg text-gray-700 max-w-3xl mx-auto">
              <p>
                OpenBioCure is an AI powered research platform built for biomedical discovery. It transforms vast volumes of scientific literature into ready to use insights, so answers are available instantly.
              </p>
              <p className="mt-3">
                Designed to feel familiar from the first click, OpenBioCure keeps the simplicity of a scholar style search while revealing deeper connections. Researchers can quickly explore diseases, drugs, and biomarkers and see how they relate, all in one clear view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup CTA */}
      <section id="signup" className="py-10 bg-gradient-to-br from-obc-blue via-obc-dark-blue to-obc-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Join Our Free Pilot Program
            </h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              We're inviting universities and research institutions to participate in our preview release.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              required
              value={signupForm.email}
              onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
              placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-obc-orange focus:border-obc-orange"
              disabled={isSignupSubmitting}
            />
            <div className="relative flex-1">
              <input
                ref={orgInputRef}
                type="text"
                required
                value={signupForm.organization}
                onChange={handleOrgChange}
                onKeyDown={handleOrgKeyDown}
                onFocus={() => {
                  if (signupForm.organization.length > 0 && orgSuggestions.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
                    placeholder="Your University/Organization"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-obc-orange focus:border-obc-orange"
                disabled={isSignupSubmitting}
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
            <Button
              type="submit"
                  className="bg-obc-orange hover:bg-obc-orange/90 text-white px-8 py-3 rounded-lg flex items-center justify-center whitespace-nowrap h-[48px]"
              disabled={isSignupSubmitting}
            >
                  {isSignupSubmitting ? "Submitting..." : "Submit"}
            </Button>
              </div>

          {signupStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  Thank you! We'll be in touch soon with next steps.
                </div>
              )}
              
          {signupStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                  There was an error submitting your request. Please try again or email us at info@openbiocure.ai
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obc-dark-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/icon-obc.png" 
                alt="OpenBioCure Logo" 
                className="h-6 w-6"
              />
              <span className="text-lg font-bold">OpenBioCure™</span>
            </div>
            <p className="text-sm text-gray-300">
              © 2026 OpenBioCure™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
