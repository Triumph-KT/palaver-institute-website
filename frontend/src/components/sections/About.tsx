/**
 * About Section Component
 * 
 * Displays the Palaver Institute mission, philosophy, and key statistics.
 * Features animated counters and responsive design.
 */

'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, duration / steps);
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-palaver-orange-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export function About() {
  return (
    <section id="about" className="py-20 bg-palaver-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Palaver Institute
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building the intellectual infrastructure for African independence through 
            indigenous-centered research and pan-African collaboration.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Palaver Institute exists to decolonize the study of human intelligence by 
                centering indigenous African epistemologies as sophisticated scientific frameworks. 
                We conduct foundational research that bridges traditional wisdom with modern inquiry, 
                creating knowledge that serves Africa first and the world second.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Philosophy
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-palaver-orange-600">Indigenous Knowledge is Foundational Science:</strong>{' '}
                  African epistemologies are not cultural artifacts—they are rigorous, 
                  field-tested frameworks for understanding complex systems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-palaver-blue-600">Sovereignty Precedes Prosperity:</strong>{' '}
                  Intellectual sovereignty must come before economic sovereignty. We build 
                  institutions that are financially, technologically, and intellectually independent.
                </p>
              </div>
            </div>

            {/* Proven Success */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proven Success
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our 2025 Cameroon pilot validated the model: 10 fellows across 8 fields 
                produced 250+ pages of world-class research for under $1,000 USD, proving 
                that African researchers can produce exceptional interdisciplinary scholarship 
                when given intellectual freedom.
              </p>
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Our Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <StatItem number={10} label="Founding Fellows" />
                <StatItem number={250} label="Pages Research" suffix="+" />
                <StatItem number={5} label="Continental Hubs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
