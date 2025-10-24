/**
 * Team Page - Palaver Institute
 * 
 * Modern React implementation of the team page.
 * Features founder profile and team structure.
 */

import { Navigation, Footer } from '@/components/layout';
import { Contact } from '@/components/sections';
import { TeamHero } from '@/components/sections/TeamHero';
import { TeamContent } from '@/components/sections/TeamContent';
import { FoundingFellows } from '@/components/sections/FoundingFellows';
import { ErrorBoundary } from '@/components/ui';

export default function Team() {
  return (
    <ErrorBoundary context="Team Page">
      <div className="min-h-screen">
        {/* Navigation */}
        <ErrorBoundary context="Navigation">
          <Navigation />
        </ErrorBoundary>

        {/* Main Content */}
        <main>
          <ErrorBoundary context="Team Hero">
            <TeamHero />
          </ErrorBoundary>
          
          <ErrorBoundary context="Team Content">
            <TeamContent />
          </ErrorBoundary>
          
          <ErrorBoundary context="Founding Fellows">
            <FoundingFellows />
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