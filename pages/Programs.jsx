import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, Heart, Users, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { programsData } from '../data/mock';

export const Programs = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const toggleProgram = (id) => {
    setExpandedProgram(expandedProgram === id ? null : id);
  };

  const iconMap = {
    BookOpen: BookOpen,
    Heart: Heart,
    Users: Users,
    Briefcase: Briefcase
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to create sustainable impact across education, 
            healthcare, empowerment, and skill development.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {programsData.map((program) => {
              const Icon = iconMap[program.icon];
              const isExpanded = expandedProgram === program.id;

              return (
                <Card key={program.id} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {program.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {program.shortDescription}
                      </p>

                      <div className="flex gap-6 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Beneficiaries</p>
                          <p className="text-2xl font-bold text-primary">
                            {program.stats.beneficiaries}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            {Object.keys(program.stats)[1].charAt(0).toUpperCase() + 
                             Object.keys(program.stats)[1].slice(1)}
                          </p>
                          <p className="text-2xl font-bold text-primary">
                            {program.stats[Object.keys(program.stats)[1]]}
                          </p>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mb-6 p-4 bg-gray-50 rounded-lg animate-fadeIn">
                          <p className="text-gray-700 leading-relaxed">
                            {program.fullDescription}
                          </p>
                        </div>
                      )}

                      <Button
                        onClick={() => toggleProgram(program.id)}
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary/5 group w-full md:w-auto"
                      >
                        {isExpanded ? 'Show Less' : 'Learn More'}
                        {isExpanded ? (
                          <ChevronUp className="ml-2 w-5 h-5" />
                        ) : (
                          <ChevronDown className="ml-2 w-5 h-5" />
                        )}
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Support a Program?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your contribution can directly impact lives. Choose to support any of our programs and be part of the change.
          </p>
          <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
            Donate to a Program
          </Button>
        </div>
      </section>
    </div>
  );
};
