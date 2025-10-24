/**
 * Team Hero Section Component
 * 
 * Hero section for the team page.
 */

import React from 'react';

export function TeamHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-palaver-purple-600 to-palaver-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Meet the visionary leaders and dedicated researchers building the 
            intellectual infrastructure for African independence.
          </p>
        </div>
      </div>
    </section>
  );
}