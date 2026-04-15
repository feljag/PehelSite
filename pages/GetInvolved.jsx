import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Heart, Users, Handshake, CheckCircle2 } from 'lucide-react';
import { getInvolvedData } from '../data/mock';
import { toast } from 'sonner';

export const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contact: '',
    email: '',
    type: '',
    message: ''
  });

  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your interest! We will contact you soon.');
    setVolunteerForm({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for reaching out! Our team will get back to you shortly.');
    setPartnerForm({ organization: '', contact: '', email: '', type: '', message: '' });
  };

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    toast.success(`Redirecting to payment gateway for ₹${amount}...`);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you can give your time, resources, or expertise, every contribution creates meaningful impact.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="volunteer" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto">
              <TabsTrigger value="volunteer" className="flex flex-col items-center py-4 space-y-2">
                <Users className="w-6 h-6" />
                <span>Volunteer</span>
              </TabsTrigger>
              <TabsTrigger value="donate" className="flex flex-col items-center py-4 space-y-2">
                <Heart className="w-6 h-6" />
                <span>Donate</span>
              </TabsTrigger>
              <TabsTrigger value="partner" className="flex flex-col items-center py-4 space-y-2">
                <Handshake className="w-6 h-6" />
                <span>Partner</span>
              </TabsTrigger>
            </TabsList>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src={getInvolvedData.volunteer.image}
                    alt="Volunteers"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {getInvolvedData.volunteer.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {getInvolvedData.volunteer.description}
                    </p>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Opportunities:</h3>
                      <div className="space-y-2">
                        {getInvolvedData.volunteer.opportunities.map((opportunity, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Form</h3>
                    <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={volunteerForm.phone}
                          onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interest">Area of Interest *</Label>
                        <select
                          id="interest"
                          value={volunteerForm.interest}
                          onChange={(e) => setVolunteerForm({...volunteerForm, interest: e.target.value})}
                          required
                          className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select an area</option>
                          {getInvolvedData.volunteer.opportunities.map((opp, index) => (
                            <option key={index} value={opp}>{opp}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message">Why do you want to volunteer?</Label>
                        <Textarea
                          id="message"
                          value={volunteerForm.message}
                          onChange={(e) => setVolunteerForm({...volunteerForm, message: e.target.value})}
                          rows={4}
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Donate Tab */}
            <TabsContent value="donate">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src={getInvolvedData.donate.image}
                    alt="Donate"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {getInvolvedData.donate.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {getInvolvedData.donate.description}
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg space-y-3">
                      <h4 className="font-semibold text-gray-900">Impact of Your Donation:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">₹500</span>
                          <span>provides school supplies for a child for one year</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">₹1000</span>
                          <span>supports healthcare for one family</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">₹2500</span>
                          <span>funds skill training for one woman</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">₹5000</span>
                          <span>sponsors education for a child for one semester</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
                    <div className="space-y-6">
                      <div>
                        <Label className="mb-3 block">Select Amount</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {getInvolvedData.donate.amounts.map((amount) => (
                            <Button
                              key={amount}
                              variant={selectedAmount === amount ? 'default' : 'outline'}
                              className={selectedAmount === amount 
                                ? 'bg-primary hover:bg-primary/90' 
                                : 'border-2 border-gray-200 hover:border-primary'
                              }
                              onClick={() => {
                                setSelectedAmount(amount);
                                setCustomAmount('');
                              }}
                            >
                              ₹{amount}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
                        <Input
                          id="customAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="mt-1"
                        />
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Donation Amount:</span>
                          <span className="text-2xl font-bold text-primary">
                            ₹{customAmount || selectedAmount || 0}
                          </span>
                        </div>
                      </div>

                      <Button 
                        onClick={handleDonate}
                        className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                        disabled={!customAmount && !selectedAmount}
                      >
                        <Heart className="mr-2 w-5 h-5" />
                        Proceed to Payment
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        All donations are tax-deductible under Section 80G
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Partner Tab */}
            <TabsContent value="partner">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src={getInvolvedData.partner.image}
                    alt="Partnership"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {getInvolvedData.partner.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {getInvolvedData.partner.description}
                    </p>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Partnership Types:</h3>
                      <div className="space-y-2">
                        {getInvolvedData.partner.types.map((type, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Inquiry</h3>
                    <form onSubmit={handlePartnerSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="organization">Organization Name *</Label>
                        <Input
                          id="organization"
                          value={partnerForm.organization}
                          onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact">Contact Person *</Label>
                        <Input
                          id="contact"
                          value={partnerForm.contact}
                          onChange={(e) => setPartnerForm({...partnerForm, contact: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="partner-email">Email *</Label>
                        <Input
                          id="partner-email"
                          type="email"
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Partnership Type *</Label>
                        <select
                          id="type"
                          value={partnerForm.type}
                          onChange={(e) => setPartnerForm({...partnerForm, type: e.target.value})}
                          required
                          className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select partnership type</option>
                          {getInvolvedData.partner.types.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="partner-message">Tell us about your interest</Label>
                        <Textarea
                          id="partner-message"
                          value={partnerForm.message}
                          onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                          rows={4}
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};
