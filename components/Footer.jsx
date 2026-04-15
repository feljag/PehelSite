import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { contactData } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_community-uplift-16/artifacts/08wmpfdm_jagranPahalLogo.jpg"
                alt="Jagran Pehel Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-white">Jagran Pehel</span>
            </div>
            <p className="text-sm mb-4">
              Empowering communities and transforming lives through education, healthcare, and sustainable development.
            </p>
            <div className="flex space-x-3">
              {contactData.socialMedia.map((social) => {
                const Icon = social.platform === 'Facebook' ? Facebook :
                            social.platform === 'Twitter' ? Twitter :
                            social.platform === 'Instagram' ? Instagram : Linkedin;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/stories" className="hover:text-primary transition-colors">Impact Stories</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Education for All</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Healthcare Access</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Women Empowerment</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Skill Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{contactData.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">
                  {contactData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} Jagran Pehel. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>for the community</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
