/**
 * Homepage - Palaver Institute
 * 
 * Modern React implementation using component-based architecture.
 * Features all main sections as reusable, maintainable components.
 */

import { Navigation, Footer } from '@/components/layout';
import { Hero, About, Research, Team, Contact } from '@/components/sections';
import { ErrorBoundary } from '@/components/ui';

export default function Home() {
  return (
    <ErrorBoundary context="Homepage">
      <div className="min-h-screen">
        {/* Navigation */}
        <ErrorBoundary context="Navigation">
          <Navigation />
        </ErrorBoundary>

        {/* Main Content Sections */}
        <main>
          <ErrorBoundary context="Hero Section">
            <Hero />
          </ErrorBoundary>
          
          <ErrorBoundary context="About Section">
            <About />
          </ErrorBoundary>
          
          <ErrorBoundary context="Research Section">
            <Research />
          </ErrorBoundary>
          
          <ErrorBoundary context="Team Section">
            <Team />
          </ErrorBoundary>
          
          <ErrorBoundary context="Contact Section">
            <Contact />
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <ErrorBoundary context="Footer">
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}