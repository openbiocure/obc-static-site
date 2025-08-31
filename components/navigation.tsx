import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/icon-obc.png"
                alt="OpenBioCure Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#00239c] via-[#001e62] to-[#e76900] bg-clip-text text-transparent">OpenBioCure</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-[#00239c] transition-colors">
              About
            </a>
            <a href="#architecture" className="text-gray-700 hover:text-[#00239c] transition-colors">
              Architecture
            </a>
            <a href="#agents" className="text-gray-700 hover:text-[#00239c] transition-colors">
              Agents
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#00239c] transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-gray-700 hover:text-[#00239c] transition-colors">
              Privacy
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/openbiocure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#00239c] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://platform.openbiocure.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Sign In
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 