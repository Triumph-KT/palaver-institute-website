/**
 * Team Section Component
 * 
 * Displays information about the fellowship network and strategic partnerships.
 * Features the founding fellows, fellowship program, and university partnerships.
 */

import React from 'react';
import { Card } from '@/components/ui';
import { GraduationCap, Users, Building2 } from 'lucide-react';

interface TeamCardData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const teamCards: TeamCardData[] = [
  {
    id: 'founding-fellows',
    icon: GraduationCap,
    title: 'Founding Fellows',
    description: 'Our 2025 Cameroon cohort: 10 exceptional researchers across Philosophy, Linguistics, Economics, Education, Anthropology, Sociology, and Medicine who validated our model with world-class scholarship.',
  },
  {
    id: 'fellowship-network',
    icon: Users,
    title: 'Fellowship Network',
    description: 'Highly selective 6-month fellowship program for Master\'s and PhD-level African researchers. Two cohorts annually across five continental hubs create a prestigious pan-African research network.',
  },
  {
    id: 'strategic-partnerships',
    icon: Building2,
    title: 'Strategic Partnerships',
    description: 'Collaborations with leading African universities: University of Buea (Cameroon), University of Ghana, University of Rwanda, University of Cape Town, and Mohammed VI Polytechnic (Morocco).',
  },
];

interface TeamCardProps {
  card: TeamCardData;
}

const TeamCard: React.FC<TeamCardProps> = ({ card }) => {
  const Icon = card.icon;

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full text-center"
      hoverable
      padding="lg"
    >
      <Card.Header className="text-center">
        {/* Icon */}
        <div className="mx-auto w-20 h-20 bg-palaver-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-palaver-blue-200 transition-colors duration-300">
          <Icon className="w-10 h-10 text-palaver-blue-600" />
        </div>
        
        <Card.Title level={3} className="text-gray-900 mb-4">
          {card.title}
        </Card.Title>
      </Card.Header>

      <Card.Content>
        <Card.Description className="text-gray-600 leading-relaxed">
          {card.description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fellowship & Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building a continental network of exceptional African researchers and scholars.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamCards.map((card) => (
            <TeamCard key={card.id} card={card} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Network
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're building the intellectual infrastructure for African independence. 
              Our fellowship program is highly selective, bringing together the continent's 
              brightest minds to tackle humanity's greatest challenges through indigenous 
              African frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-palaver-blue-500 hover:bg-palaver-blue-600 text-white px-6 py-3 font-semibold rounded-lg transition-colors duration-200"
              >
                Apply for Fellowship
              </a>
              <a
                href="/team"
                className="inline-flex items-center justify-center border-2 border-palaver-blue-500 text-palaver-blue-500 hover:bg-palaver-blue-50 px-6 py-3 font-semibold rounded-lg transition-colors duration-200"
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
