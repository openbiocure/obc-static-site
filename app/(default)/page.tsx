export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import ArchitectureDiagram from "@/components/architecture-diagram";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
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
        </div>
      </section>
    </>
  );
}
