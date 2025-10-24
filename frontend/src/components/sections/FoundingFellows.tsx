/**
 * Founding Fellows Section Component
 * 
 * Displays detailed information about the 10 founding fellows from the 2025 Cameroon cohort.
 * Features individual fellow cards with their research areas and contributions.
 */

import React from 'react';
import { Card } from '@/components/ui';
import { Brain, Languages, TrendingUp, GraduationCap, Users, UserCheck, Stethoscope } from 'lucide-react';

interface Fellow {
  name: string;
  field: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  status: string;
  isRecruiting?: boolean;
}

const foundingFellows: Fellow[] = [
  {
    name: 'Stephen Fabrice Fanwong',
    field: 'Philosophy Fellow',
    icon: Brain,
    description: 'Produced exemplary philosophical analysis exploring indigenous African epistemologies and their applications to understanding human intelligence within cultural contexts.',
    status: 'Distinction-Level Work'
  },
  {
    name: 'Fouedjio Aaron Lagloire',
    field: 'Linguistics Fellow',
    icon: Languages,
    description: 'Conducted foundational linguistic research examining how language structures reflect and shape indigenous models of intelligence and cognition.',
    status: 'Foundational Research'
  },
  {
    name: 'Bryan Kai',
    field: 'Economics Fellow',
    icon: TrendingUp,
    description: 'Delivered outstanding economic analysis exploring the intersection of traditional economic systems and indigenous approaches to problem-solving and resource allocation.',
    status: 'Exemplary Work'
  },
  {
    name: 'Nestor D. Nji',
    field: 'Education Fellow',
    icon: GraduationCap,
    description: 'Produced particularly exemplary research on indigenous educational methodologies and their implications for understanding culturally-grounded intelligence development.',
    status: 'Exemplary Work'
  },
  {
    name: 'Ndikaka Basil Ngala',
    field: 'Anthropology Fellow',
    icon: Users,
    description: 'Contributed valuable anthropological insights into cultural practices and social structures that embody indigenous intelligence frameworks.',
    status: 'Valuable Contributions'
  },
  {
    name: 'Daudu Ananias & Kumo Walters Nshom',
    field: 'Sociology Fellows (Co-authored)',
    icon: UserCheck,
    description: 'Delivered outstanding sociological analysis of community-based intelligence and collective problem-solving approaches within African societies.',
    status: 'Outstanding Content'
  },
  {
    name: 'Medicine Fellow',
    field: 'Currently Recruiting',
    icon: Stethoscope,
    description: 'We are actively recruiting a medical researcher to join our founding cohort and contribute expertise on indigenous approaches to health, healing, and the intersection of physical and cognitive well-being.',
    status: 'Open Position',
    isRecruiting: true
  }
];

export function FoundingFellows() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Founding Fellows (2025 Cameroon Cohort)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ten exceptional researchers who validated our model with world-class interdisciplinary scholarship.
          </p>
        </div>

        {/* Fellows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundingFellows.map((fellow) => {
            const Icon = fellow.icon;
            
            return (
              <Card 
                key={fellow.name} 
                padding="lg" 
                className={`h-full text-center transition-all duration-300 hover:-translate-y-2 ${
                  fellow.isRecruiting 
                    ? 'border-dashed border-2 border-palaver-orange-300 bg-palaver-orange-50' 
                    : 'hover:shadow-xl'
                }`}
              >
                <Card.Header className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    fellow.isRecruiting 
                      ? 'bg-palaver-orange-100' 
                      : 'bg-palaver-purple-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      fellow.isRecruiting 
                        ? 'text-palaver-orange-600' 
                        : 'text-palaver-purple-600'
                    }`} />
                  </div>
                  
                  <Card.Title level={4} className="text-gray-900 mb-2">
                    {fellow.name}
                  </Card.Title>
                  
                  <h5 className={`text-sm font-semibold mb-4 ${
                    fellow.isRecruiting 
                      ? 'text-palaver-orange-600' 
                      : 'text-palaver-purple-600'
                  }`}>
                    {fellow.field}
                  </h5>
                </Card.Header>

                <Card.Content>
                  <Card.Description className="leading-relaxed mb-6">
                    {fellow.description}
                  </Card.Description>

                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    fellow.status === 'Distinction-Level Work' ? 'bg-success-100 text-success-700' :
                    fellow.status === 'Exemplary Work' ? 'bg-palaver-blue-100 text-palaver-blue-700' :
                    fellow.status === 'Outstanding Content' ? 'bg-palaver-purple-100 text-palaver-purple-700' :
                    fellow.status === 'Open Position' ? 'bg-warning-100 text-warning-700' :
                    'bg-palaver-orange-100 text-palaver-orange-700'
                  }`}>
                    {fellow.status}
                  </span>
                </Card.Content>
              </Card>
            );
          })}
        </div>

        {/* Additional Note */}
        <div className="mt-16 text-center">
          <div className="bg-palaver-cream-100 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              <strong>Additional Research:</strong> A Psychology MS student is currently completing 
              a 25-page French-language paper on indigenous human intelligence, ensuring the Palaver 
              vision of cross-Africa reach is built from the pilot's foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
