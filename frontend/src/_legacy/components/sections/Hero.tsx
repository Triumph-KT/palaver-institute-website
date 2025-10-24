/**
 * Hero Section Component
 * 
 * The main hero section for the Palaver Institute homepage.
 * Features the primary value proposition with African-inspired gradient background.
 * 
 * @author Palaver Institute Development Team
 * @version 1.0.0
 */

import Link from 'next/link';
import { Brain } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-african-sunset">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Main hero content */}
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Text content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where African Minds Convene to Solve Global Challenges
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              The Palaver Institute is an act of epistemic independence. We center 
              indigenous African knowledge systems as sophisticated scientific frameworks 
              for understanding human intelligence and building ethical AI for Africa.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/research" 
                className="btn btn-primary bg-white text-palaver-orange-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Explore Research
              </Link>
              <Link 
                href="#contact" 
                className="btn btn-secondary border-2 border-white text-white hover:bg-white hover:text-palaver-orange-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              >
                Join the Palaver
              </Link>
            </div>
          </div>
          
          {/* Right column - Visual element */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main circular graphic */}
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                <Brain className="w-32 h-32 text-white" strokeWidth={1.5} />
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/15 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-white/25 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
