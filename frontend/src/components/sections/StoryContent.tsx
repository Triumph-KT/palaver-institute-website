/**
 * Story Content Component
 * 
 * Main content for the story page featuring the timeline of Palaver Institute's founding.
 * Uses modern React patterns with proper component structure.
 */

import React from 'react';
import { Lightbulb, Brain, Target, Rocket, Award, Globe } from 'lucide-react';

interface TimelineItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  date: string;
  location: string;
  content: React.ReactNode;
}

const timelineItems: TimelineItem[] = [
  {
    id: 'genesis',
    icon: Lightbulb,
    title: 'The Genesis: A Critical Gap Identified',
    date: 'Early 2025',
    location: 'Dartmouth College, New Hampshire',
    content: (
      <div className="space-y-4">
        <p>
          The Palaver Institute began not as an institution, but as a conviction held by{' '}
          <strong>Triumph Kia Teh</strong>, a Cameroonian senior majoring in Computer Science 
          and Mathematics at Dartmouth College. As an aspiring AI researcher with dreams of 
          building beneficial artificial intelligence for Africa, Triumph recognized a profound 
          limitation in dominant AI paradigms.
        </p>
        <p>
          These Western-developed models relied on massive, decontextualized datasets and 
          optimization metrics that systematically failed to capture the nuances of human 
          intelligence as understood and practiced in diverse cultural settings—particularly 
          in African contexts.
        </p>
        <blockquote className="border-l-4 border-palaver-orange-500 pl-6 py-4 bg-palaver-orange-50 rounded-r-lg">
          <p className="text-palaver-orange-900 italic leading-relaxed">
            "I realized that truly effective, ethical, and explainable AI for Africa could 
            not be built without first undertaking a foundational epistemological inquiry 
            into indigenous models of human intelligence."
          </p>
          <cite className="text-palaver-orange-700 font-medium">— Triumph Kia Teh, Founder</cite>
        </blockquote>
      </div>
    ),
  },
  {
    id: 'conviction',
    icon: Brain,
    title: 'The Conviction: Indigenous Knowledge as Science',
    date: 'Spring 2025',
    location: 'Dartmouth College',
    content: (
      <div className="space-y-4">
        <p>
          Rather than treating African epistemologies as cultural artifacts to be studied, 
          Triumph proposed centering them as sophisticated scientific frameworks for understanding 
          complex systems. This represented a fundamental epistemic shift: <strong>indigenous 
          knowledge as foundational science, not supplementary wisdom.</strong>
        </p>
        <p>
          The conviction crystallized around a simple but revolutionary premise: before building 
          AI systems for African contexts, researchers must first understand how intelligence 
          operates within indigenous African knowledge systems.
        </p>
      </div>
    ),
  },
  {
    id: 'vision',
    icon: Target,
    title: 'The Vision: Intellectual Sovereignty Through Research',
    date: 'March 2025',
    location: 'Conceptual Development',
    content: (
      <div className="space-y-4">
        <p>
          The vision expanded beyond individual research to institutional transformation: 
          creating a pan-African research institute that would operate with complete 
          intellectual, financial, and technological sovereignty.
        </p>
        <p>
          <strong>Core Principles Established:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Indigenous African epistemologies as rigorous scientific frameworks</li>
          <li>Research that serves Africa first, the world second</li>
          <li>Financial independence through innovative funding models</li>
          <li>Technological sovereignty through African-built infrastructure</li>
          <li>Pan-African collaboration across linguistic and national boundaries</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'pilot',
    icon: Rocket,
    title: 'The Pilot: Proof of Concept in Cameroon',
    date: 'Summer 2025',
    location: 'University of Buea, Cameroon',
    content: (
      <div className="space-y-4">
        <p>
          To validate the model, Triumph designed and executed a pilot program in Cameroon 
          during the summer of 2025. The pilot brought together <strong>10 exceptional 
          researchers</strong> across 8 fields for intensive collaborative research.
        </p>
        <div className="bg-palaver-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-palaver-blue-900 mb-3">Pilot Results:</h4>
          <ul className="space-y-1 text-palaver-blue-800">
            <li>• 10 fellows across Philosophy, Linguistics, Economics, Education, Anthropology, Sociology, and Medicine</li>
            <li>• 250+ pages of world-class interdisciplinary research</li>
            <li>• Total program cost: Under $1,000 USD</li>
            <li>• 100% completion rate with exceptional quality</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'validation',
    icon: Award,
    title: 'The Validation: Model Proven',
    date: 'Late 2025',
    location: 'Cameroon Results',
    content: (
      <div className="space-y-4">
        <p>
          The Cameroon pilot exceeded all expectations, producing scholarship that rivaled 
          work from well-funded Western institutions while operating on a fraction of the budget. 
          More importantly, the research demonstrated the power of centering indigenous African 
          frameworks in rigorous academic inquiry.
        </p>
        <p>
          The pilot proved three critical hypotheses:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>African researchers could produce world-class interdisciplinary work when given intellectual freedom</li>
          <li>Indigenous epistemologies could serve as rigorous frameworks for modern research</li>
          <li>The model could operate sustainably with minimal external funding</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'expansion',
    icon: Globe,
    title: 'The Expansion: Continental Vision',
    date: '2026 and Beyond',
    location: 'Pan-African Network',
    content: (
      <div className="space-y-4">
        <p>
          With the model validated, the Palaver Institute is expanding across the continent. 
          The vision: <strong>five continental hubs</strong> supporting a network of African 
          researchers, directors, and alumni working to decolonize knowledge production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-palaver-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-palaver-purple-900 mb-2">Immediate Goals</h4>
            <ul className="text-sm text-palaver-purple-800 space-y-1">
              <li>• 8 Research Directors recruited</li>
              <li>• 50+ Fellows per year</li>
              <li>• 5 Continental Hubs established</li>
            </ul>
          </div>
          <div className="bg-palaver-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-palaver-orange-900 mb-2">Long-term Vision</h4>
            <ul className="text-sm text-palaver-orange-800 space-y-1">
              <li>• Intellectual sovereignty for Africa</li>
              <li>• Indigenous AI systems</li>
              <li>• Decolonized research paradigms</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export function StoryContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-palaver-orange-500 via-palaver-blue-500 to-palaver-purple-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div key={item.id} className="relative">
                  {/* Timeline marker */}
                  <div className="absolute left-0 w-16 h-16 bg-white border-4 border-palaver-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-palaver-orange-600" />
                  </div>
                  
                  {/* Timeline content */}
                  <div className="ml-24">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                      
                      {/* Header */}
                      <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600">
                          <span className="font-medium text-palaver-orange-600">{item.date}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="prose prose-lg max-w-none text-gray-700">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-palaver-orange-500 to-palaver-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Be Part of the Story
            </h3>
            <p className="text-xl mb-8 opacity-90">
              The Palaver Institute story is just beginning. Join us in building 
              intellectual sovereignty for Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-palaver-orange-500 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg transition-colors duration-200"
              >
                Get Involved
              </a>
              <a
                href="/team"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-palaver-blue-500 px-8 py-3 font-semibold rounded-lg transition-colors duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
