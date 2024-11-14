import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2, Target, Award, Sparkles, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlights: string[] = [
    "Over 60 years of combined industry experience",
    "Highly scalable and fDariable product implementation",
    "Solutions for organizations of all sizes",
    "Ability to address both complex, granular problems and foundational needs"
  ];

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
              <span className="block text-shr-800">Who We Are and</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                What We Do
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Identity Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building2 className="h-6 w-6 text-shr-primary" />
                <h2 className="text-2xl font-bold text-shr-800">Our Identity</h2>
              </div>
              <p className="text-lg text-shr-700/80 leading-relaxed">
                SHR Intelligence is a pioneering enterprise empowerment company, specializing in dynamic SaaS technology platforms.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-6 w-6 text-shr-primary" />
                <h2 className="text-2xl font-bold text-shr-800">Our Mission</h2>
              </div>
              <p className="text-lg text-shr-700/80 leading-relaxed">
                We are dedicated to providing scalable, adaptive solutions that revolutionize how businesses operate and grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="py-16 bg-gradient-to-r from-shr-primary to-shr-accent1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="h-8 w-8 text-white" />
              <h2 className="text-3xl font-bold text-white">What Sets Us Apart</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex items-start space-x-4">
                <Sparkles className="h-6 w-6 text-shr-secondary flex-shrink-0" />
                <p className="text-white text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shr-800">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-4">Robust Foundation</h3>
              <p className="text-shr-700/70">A robust foundation tailored to your specific needs</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-4">Feature-Rich Environment</h3>
              <p className="text-shr-700/70">A feature-rich environment that adapts seamlessly to your business requirements</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-4">Scalable Starter Kits</h3>
              <p className="text-shr-700/70">Scalable starter kits designed to enhance and accelerate your business operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="py-16 bg-gradient-to-r from-shr-primary to-shr-accent1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              At SHR Intelligence, we are committed to empowering your enterprise with cutting-edge technology that evolves with your needs, ensuring you stay ahead in today's dynamic business landscape.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-shr-primary to-shr-accent1 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your business with our dynamic SaaS solutions?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact SHR Intelligence today and unlock your organization's full potential.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-shr-primary hover:bg-shr-secondary transition-all duration-300 font-medium">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

export default About;
