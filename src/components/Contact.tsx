import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                SHR-Technology
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/solutions" className="text-shr-700 hover:text-shr-primary transition-colors duration-300">Solutions</Link>
              <Link to="/pricing" className="text-shr-700 hover:text-shr-primary transition-colors duration-300">Pricing</Link>
              <Link to="/about" className="text-shr-700 hover:text-shr-primary transition-colors duration-300">About</Link>
              <Link to="/contact" className="text-shr-700 hover:text-shr-primary transition-colors duration-300">Contact</Link>
              <Link to="/get-started" className="bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-shr-700 hover:text-shr-primary transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/solutions" className="block w-full text-left px-3 py-2 text-shr-700 hover:text-shr-primary transition-colors duration-300">Solutions</Link>
              <Link to="/pricing" className="block w-full text-left px-3 py-2 text-shr-700 hover:text-shr-primary transition-colors duration-300">Pricing</Link>
              <Link to="/about" className="block w-full text-left px-3 py-2 text-shr-700 hover:text-shr-primary transition-colors duration-300">About</Link>
              <Link to="/contact" className="block w-full text-left px-3 py-2 text-shr-700 hover:text-shr-primary transition-colors duration-300">Contact</Link>
              <Link to="/get-started" className="block w-full text-left px-3 py-2 bg-gradient-to-r from-shr-primary to-shr-accent1 text-white rounded-lg hover:scale-105 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">Get in Touch</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Have questions about our solutions? Ready to start your journey with SHR-Technology? We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-shr-800 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-shr-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-shr-800">Email</p>
                    <a href="mailto:support@shr-technology.com" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">
                      support@shr-technology.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-shr-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-shr-800">Phone</p>
                    <a href="tel:+1.515.783.3439" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-shr-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-shr-800">Office</p>
                    <p className="text-shr-700/70">
                      123 Business Avenue<br />
                      Tech District<br />
                      Innovation City, IC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-shr-800 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-shr-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-shr-200 focus:ring-2 focus:ring-shr-primary focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-shr-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-shr-200 focus:ring-2 focus:ring-shr-primary focus:border-transparent outline-none transition-all duration-300"
                    placeholder="support@shr-technology.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-shr-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-shr-200 focus:ring-2 focus:ring-shr-primary focus:border-transparent outline-none transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-shr-primary/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-shr-secondary/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-shr-800 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/solutions/marketing" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Marketing</Link></li>
                <li><Link to="/solutions/analytics" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Analytics</Link></li>
                <li><Link to="/solutions/commerce" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Commerce</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-shr-800 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/docs" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Documentation</Link></li>
                <li><Link to="/guides" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Guides</Link></li>
                <li><Link to="/contact" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-shr-800 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/about" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">About</Link></li>
                <li><Link to="/blog" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Blog</Link></li>
                <li><Link to="/careers" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-shr-800 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link to="/privacy" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Privacy</Link></li>
                <li><Link to="/terms" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-shr-secondary/20 pt-8">
            <p className="text-center text-shr-700/70">
              &copy; 2024 SHR-Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
