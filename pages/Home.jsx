import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroData, impactStats, programsData, testimonialsData } from '../data/mock';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroData.tagline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {heroData.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group">
                  Donate Now
                  <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg group">
                  Volunteer
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src={heroData.heroImage}
                alt="Community empowerment"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Building Hope, Creating Change
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2010, Jagran Pehel has been at the forefront of community empowerment, 
              working tirelessly to bridge gaps in education, healthcare, and livelihood opportunities. 
              Every initiative we undertake is driven by our commitment to create sustainable, lasting impact.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 group">
                Learn Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to address the root causes of inequality and create pathways to prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.map((program) => {
              const Icon = program.icon === 'BookOpen' ? BookOpen :
                          program.icon === 'Heart' ? Heart :
                          program.icon === 'Users' ? Users : Briefcase;
              return (
                <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.shortDescription}
                    </p>
                    <div className="flex justify-between items-center pt-2 text-sm">
                      <span className="text-primary font-semibold">{program.stats.beneficiaries}</span>
                      <Link to="/programs" className="text-gray-900 hover:text-primary font-medium flex items-center group/link">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button className="bg-primary hover:bg-primary/90 px-8">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of Change
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be the Change You Want to See
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your support can transform lives. Join us in our mission to create equal opportunities for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                Get Involved
              </Button>
            </Link>
            <Link to="/stories">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Read Impact Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
