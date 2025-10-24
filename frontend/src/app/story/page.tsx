/**
 * Story Page - Palaver Institute
 * 
 * Modern React implementation of the founding story page.
 * Features timeline components and reusable sections.
 */

import { Navigation, Footer } from '@/components/layout';
import { Contact } from '@/components/sections';
import { StoryHero } from '@/components/sections/StoryHero';
import { StoryContent } from '@/components/sections/StoryContent';
import { ErrorBoundary } from '@/components/ui';

export default function Story() {
  return (
    <ErrorBoundary context="Story Page">
      <div className="min-h-screen">
        {/* Navigation */}
        <ErrorBoundary context="Navigation">
          <Navigation />
        </ErrorBoundary>

        {/* Main Content */}
        <main>
          <ErrorBoundary context="Story Hero">
            <StoryHero />
          </ErrorBoundary>
          
          <ErrorBoundary context="Story Content">
            <StoryContent />
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