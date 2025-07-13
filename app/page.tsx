"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import ArchitectureDiagram from "@/components/architecture-diagram";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Simple intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-bounce-in animate-stagger-1">
              <span className="text-blue-600">Open</span>BioCure
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in animate-stagger-2">
              Advancing healthcare through innovative biotechnology solutions and collaborative research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-3">
              <Button size="lg" className="text-lg px-8 py-3 hover-lift glow-on-hover">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 hover-lift">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in animate-stagger-1">
              Transforming Healthcare Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in animate-stagger-2">
              Our platform brings together researchers, healthcare professionals, and technology innovators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-stagger-3 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Innovative Research</CardTitle>
                <CardDescription>
                  Cutting-edge biotechnology research and development for breakthrough healthcare solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-stagger-4 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle>Collaborative Platform</CardTitle>
                <CardDescription>
                  Connect with researchers and healthcare professionals worldwide to accelerate innovation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-up animate-stagger-5 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Technology Solutions</CardTitle>
                <CardDescription>
                  Advanced technology platforms and tools to support healthcare innovation and research.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium animate-bounce-in animate-stagger-1">
              Open Source Architecture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in animate-stagger-2">
              Built for Scale & Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-stagger-3">
              Our modular architecture combines SDK, DataLake, and Multi-Agent systems to create a powerful, 
              scalable platform for healthcare innovation.
            </p>
          </div>

          {/* Add the diagram here */}
          <div className="mb-16">
            <ArchitectureDiagram />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white animate-slide-up animate-stagger-3 hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle className="text-white">SDK Framework</CardTitle>
                <CardDescription className="text-blue-100">
                  Comprehensive development kit for building healthcare applications and integrations.
                </CardDescription>
              </CardHeader>
              <CardContent>
              <p>Connectors to the following sources:</p>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• PubMed</li>
                  <li>• Europe PMC</li>
                  <li>• ClinicalTrials.gov</li>
                  <li>• arXiv</li>
                  <li>• and more...</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600 to-green-700 text-white animate-slide-up animate-stagger-4 hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <CardTitle className="text-white">DataLake Platform</CardTitle>
                <CardDescription className="text-green-100">
                  Centralized data repository with advanced analytics and machine learning capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>• Petabyte-scale storage</li>
                  <li>• Real-time processing</li>
                  <li>• Advanced analytics</li>
                  <li>• Data governance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white animate-slide-up animate-stagger-5 hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 animate-scale-in">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-white">Multi-Agent System</CardTitle>
                <CardDescription className="text-purple-100">
                  Intelligent agents working together to solve complex healthcare challenges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-100">
                  <li>• Autonomous agents</li>
                  <li>• Collaborative learning</li>
                  <li>• Task orchestration</li>
                  <li>• Continuous improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-3 hover-lift glow-on-hover animate-pulse-slow">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium animate-bounce-in animate-stagger-1">
              AI Innovation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in animate-stagger-2">
              Our Intelligent Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-stagger-3">
              We're building advanced AI agents that revolutionize how healthcare professionals work, 
              from research automation to clinical decision support.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left animate-stagger-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 animate-fade-in animate-stagger-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 animate-scale-in">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Research Assistant Agent</h3>
                    <p className="text-gray-600">Automates literature reviews, data analysis, and hypothesis generation for biotechnology research.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in animate-stagger-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 animate-scale-in">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Clinical Decision Agent</h3>
                    <p className="text-gray-600">Provides real-time clinical insights and treatment recommendations based on patient data.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 animate-scale-in">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Data Analysis Agent</h3>
                    <p className="text-gray-600">Processes complex biological datasets and identifies patterns for drug discovery and development.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto hover-lift animate-pulse-slow">
                  Explore Our Agents
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right animate-stagger-4">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 hover-lift animate-float">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-scale-in">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="text-white">AI Agent Dashboard</CardTitle>
                      <CardDescription className="text-blue-100">Real-time monitoring and control</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 animate-fade-in animate-stagger-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Research Assistant</span>
                      <Badge variant="secondary" className="bg-green-500 text-white">Active</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-green-400 h-2 rounded-full animate-progress" 
                        style={{'--progress-width': '85%'} as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 animate-fade-in animate-stagger-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Clinical Decision</span>
                      <Badge variant="secondary" className="bg-blue-500 text-white">Learning</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full animate-progress" 
                        style={{'--progress-width': '67%'} as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 animate-fade-in">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Data Analysis</span>
                      <Badge variant="secondary" className="bg-purple-500 text-white">Processing</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-purple-400 h-2 rounded-full animate-progress" 
                        style={{'--progress-width': '92%'} as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in animate-stagger-1">
            Join the Future of Healthcare
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2">
            Be part of the revolution in biotechnology and healthcare innovation.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3 hover-lift animate-bounce-in animate-stagger-3 glow-on-hover">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in">OpenBioCure</h3>
            <p className="text-gray-400 mb-6 animate-fade-in animate-stagger-1">
              Advancing healthcare through innovative biotechnology solutions.
            </p>
            <div className="text-sm text-gray-500 animate-fade-in animate-stagger-2">
              © 2024 OpenBioCure. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 