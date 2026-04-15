import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import { storiesData } from '../data/mock';

export const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Education', 'Healthcare', 'Women Empowerment', 'Skill Development'];

  const filteredStories = selectedCategory === 'All' 
    ? storiesData 
    : storiesData.filter(story => story.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories of transformation, hope, and resilience from the communities we serve.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'border-2 border-gray-200 hover:border-primary hover:text-primary'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white border-0">
                      {story.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(story.date)}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {story.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {story.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {story.content}
                    </p>
                    
                    <div className="flex items-start space-x-2 p-4 bg-primary/5 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Impact</p>
                        <p className="text-sm text-gray-700">{story.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Stories Delivered to Your Inbox
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to receive monthly updates on our impact, new programs, and inspiring stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                />
                <Button className="bg-primary hover:bg-primary/90 px-8 py-3 group">
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
