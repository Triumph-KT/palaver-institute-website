/**
 * Research Section Component
 * 
 * Displays the three research schools and their specialized labs.
 * Features interactive cards with icons and tags.
 */

import React from 'react';
import { Card } from '@/components/ui';
import { Brain, Cpu, Gamepad2 } from 'lucide-react';

interface ResearchSchool {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  labName: string;
  description: string;
  tags: string[];
  isflagship?: boolean;
}

const researchSchools: ResearchSchool[] = [
  {
    id: 'human-systems',
    icon: Brain,
    title: 'School of Human Systems',
    labName: 'Indigenous Intelligence Lab (Flagship)',
    description: 'Our flagship lab decolonizes the study of human cognition by building the world\'s most comprehensive research on non-Western models of intelligence. This ethical foundation guides all our future AI work—we cannot build just AI without first understanding African cognition.',
    tags: ['Flagship Lab', 'Cameroon Pilot', 'Pan-African'],
    isflagship: true,
  },
  {
    id: 'sovereign-systems',
    icon: Cpu,
    title: 'School of Sovereign Systems',
    labName: 'Sovereign Hardware Lab',
    description: 'Achieving technological independence by designing and fabricating African-built computational infrastructure. Our goal: custom servers, specialized AI chips, and data center hardware owned by Africa, for Africa.',
    tags: ['Tech Sovereignty', 'Rwanda 2026', 'Hardware'],
  },
  {
    id: 'social-dynamics',
    icon: Gamepad2,
    title: 'School of Social Dynamics',
    labName: 'Gamification Lab',
    description: 'Transform wicked problems into complex interactive models. We gamify difficult disciplines—from astrophysics to understanding colonialism—to uncover novel solutions and create revolutionary educational tools.',
    tags: ['Innovation', 'Education', 'Problem-Solving'],
  },
];

interface ResearchCardProps {
  school: ResearchSchool;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ school }) => {
  const Icon = school.icon;

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
      hoverable
      padding="lg"
    >
      <Card.Header className="text-center">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 bg-palaver-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-palaver-orange-200 transition-colors duration-300">
          <Icon className="w-8 h-8 text-palaver-orange-600" />
        </div>
        
        {/* Title and Lab Name */}
        <div>
          <Card.Title level={3} className="text-gray-900 mb-2">
            {school.title}
          </Card.Title>
          <h4 className={`text-lg font-semibold mb-4 ${
            school.isflagship ? 'text-palaver-orange-600' : 'text-palaver-blue-600'
          }`}>
            {school.labName}
          </h4>
        </div>
      </Card.Header>

      <Card.Content>
        <Card.Description className="text-gray-600 leading-relaxed mb-6">
          {school.description}
        </Card.Description>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {school.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                school.isflagship
                  ? 'bg-palaver-orange-100 text-palaver-orange-700'
                  : 'bg-palaver-blue-100 text-palaver-blue-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
};

export function Research() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Research Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Three Schools of research, each containing specialized Labs, addressing humanity's 
            greatest challenges through indigenous African frameworks.
          </p>
        </div>

        {/* Research Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchSchools.map((school) => (
            <ResearchCard key={school.id} school={school} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in joining our research community?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-palaver-orange-500 hover:bg-palaver-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
