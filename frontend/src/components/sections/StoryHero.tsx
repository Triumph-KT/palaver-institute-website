/**
 * Story Hero Section Component
 * 
 * Hero section specifically for the story page.
 * Features the founding story introduction.
 */

import React from 'react';

export function StoryHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-palaver-blue-600 to-palaver-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Founding Story
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            From Vision to Proof of Concept: How a Cameroonian undergraduate student's 
            conviction became a validated model for African intellectual sovereignty.
          </p>
        </div>
      </div>
    </section>
  );
}
