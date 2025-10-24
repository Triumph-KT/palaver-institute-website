/**
 * Team Content Component
 * 
 * Main content for the team page featuring founder profile and team structure.
 */

import React from 'react';
import { Card } from '@/components/ui';
import { User, Lightbulb, Target, Users, Globe, Award } from 'lucide-react';

interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const founderAchievements: Achievement[] = [
  { icon: Lightbulb, text: 'Conceived the Indigenous Intelligence Lab framework' },
  { icon: Target, text: 'Designed and executed the successful Cameroon pilot' },
  { icon: Users, text: 'Mentored 10 founding fellows across 8 academic disciplines' },
  { icon: Globe, text: 'Established partnerships with 5 African universities' },
  { icon: Award, text: 'Validated the model with under $1,000 investment' },
];

interface TeamStructureItem {
  title: string;
  description: string;
  status: string;
  count?: number;
}

const teamStructure: TeamStructureItem[] = [
  {
    title: 'Research Directors',
    description: 'Senior academics leading specialized research labs across three schools',
    status: 'Recruiting',
    count: 8,
  },
  {
    title: 'Current Fellows',
    description: 'Active researchers in the 6-month intensive fellowship program',
    status: 'In Progress',
    count: 10,
  },
  {
    title: 'Alumni Network',
    description: 'Former fellows continuing to contribute to the African research ecosystem',
    status: 'Growing',
    count: 10,
  },
  {
    title: 'University Partners',
    description: 'Collaborating institutions across the African continent',
    status: 'Active',
    count: 5,
  },
];

export function TeamContent() {
  return (
    <div className="space-y-20">
      
      {/* Founding Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Founding Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The core team that transformed a vision into a validated model for African intellectual sovereignty.
            </p>
          </div>

          {/* Founder Profile */}
          <Card className="max-w-5xl mx-auto" padding="lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Founder Image */}
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 bg-palaver-orange-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <User className="w-16 h-16 text-palaver-orange-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Triumph Kia Teh</h3>
                  <h4 className="text-lg font-semibold text-palaver-orange-600">
                    Founder & Principal Investigator
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Computer Science & Mathematics</p>
                    <p>Dartmouth College</p>
                    <p>Cameroonian</p>
                  </div>
                </div>
              </div>

              {/* Founder Bio */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Triumph is the visionary founder who conceived and personally funded the Palaver Institute. 
                  As a senior Computer Science and Mathematics major at Dartmouth College, he identified 
                  the critical gap between Western AI paradigms and African epistemologies. Using savings 
                  from his AI research internship, he invested under $1,000 to launch the groundbreaking 
                  Cameroon pilot study.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  His conviction that "truly effective, ethical, and explainable AI for Africa could 
                  not be built without first understanding indigenous models of human intelligence" 
                  drove him to create what has become a validated model for decolonized research. 
                  Triumph provides intellectual leadership, strategic vision, and detailed mentorship 
                  to all Institute fellows.
                </p>

                {/* Achievements */}
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founderAchievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-palaver-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-palaver-orange-600" />
                          </div>
                          <span className="text-sm text-gray-700">{achievement.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-palaver-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Team Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Building a continental network of researchers, directors, and partners 
              committed to African intellectual sovereignty.
            </p>
          </div>

          {/* Team Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamStructure.map((item) => (
              <Card key={item.title} padding="lg" className="text-center hover:shadow-lg transition-shadow duration-300">
                <Card.Header>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Card.Title level={3} className="text-gray-900">
                      {item.title}
                    </Card.Title>
                    {item.count && (
                      <span className="text-3xl font-bold text-palaver-orange-500">
                        {item.count}
                      </span>
                    )}
                  </div>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    item.status === 'Active' ? 'bg-success-100 text-success-700' :
                    item.status === 'Recruiting' ? 'bg-warning-100 text-warning-700' :
                    item.status === 'In Progress' ? 'bg-palaver-blue-100 text-palaver-blue-700' :
                    'bg-palaver-orange-100 text-palaver-orange-700'
                  }`}>
                    {item.status}
                  </span>
                </Card.Header>
                
                <Card.Content>
                  <Card.Description className="leading-relaxed">
                    {item.description}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're actively recruiting exceptional researchers, directors, and partners 
                who share our commitment to building intellectual sovereignty for Africa 
                through indigenous-centered research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-palaver-orange-500 hover:bg-palaver-orange-600 text-white px-8 py-3 font-semibold rounded-lg transition-colors duration-200"
                >
                  Apply to Join
                </a>
                <a
                  href="/#research"
                  className="inline-flex items-center justify-center border-2 border-palaver-orange-500 text-palaver-orange-500 hover:bg-palaver-orange-50 px-8 py-3 font-semibold rounded-lg transition-colors duration-200"
                >
                  Learn About Our Research
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
