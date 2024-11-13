import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface Stat {
  value: string;
  label: string;
}

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update current section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: Feature[] = [
    {
      title: "Global Reach, Local Impact",
      description: "Connect with agents who understand your local market dynamics",
      icon: Globe,
      color: "bg-shr-accent1"
    },
    {
      title: "Verified Agents",
      description: "Work with pre-vetted professionals who deliver results",
      icon: Users,
      color: "bg-shr-primary"
    },
    {
      title: "Growth Focused",
      description: "Scale your business with data-driven strategies",
      icon: TrendingUp,
      color: "bg-shr-accent2"
    }
  ];

  const stats: Stat[] = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "2500+", label: "Active Agents" },
    { value: "150+", label: "Local Markets" },
    { value: "45M+", label: "Revenue Generated" }
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
              <Link to="/" className="text-2xl font-bold gradient-text">
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
      <section id="hero" className="section-spacing pt-32">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-shr-secondary/30 text-shr-700">
                <Sparkles className="h-4 w-4 mr-2" />
                New: AI-Powered Agent Matching
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block text-shr-800 mb-2">Transform Your</span>
              <span className="gradient-text">Local Business</span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-xl mx-auto lg:mx-0">
              Connect with verified marketing agents who understand your local market and help your business grow. Start scaling your presence today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/get-started" className="px-8 py-4 bg-gradient-to-r from-shr-primary to-shr-accent1 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/demo" className="px-8 py-4 border-2 border-shr-700 text-shr-700 rounded-lg font-medium hover:bg-shr-700 hover:text-white transition-all duration-300">
                Watch Demo
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section-spacing">
        <AnimatedSection direction="up" className="bg-gradient-to-r from-shr-primary to-shr-accent1 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 200} direction="up">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-shr-secondary">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section id="features" className="section-spacing bg-white">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-shr-800">Why Choose SHR-Technology?</h2>
            <p className="mt-4 text-lg text-shr-700/70">
              We connect local businesses with the right marketing agents to drive growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={feature.title}
                delay={index * 200}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className={`absolute top-0 left-0 w-full h-1 ${feature.color} rounded-t-xl transition-all duration-300 group-hover:h-2`} />
                  <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${feature.color} text-white mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-shr-800 mb-2">{feature.title}</h3>
                  <p className="text-shr-700/70">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-spacing">
        <AnimatedSection direction="up" className="bg-gradient-to-r from-shr-primary to-shr-accent1">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to grow your business?</span>
                <span className="block text-shr-secondary">Start your journey today.</span>
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Join thousands of successful local businesses already using SHR-Technology.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-shrink-0 gap-4">
              <Link to="/get-started" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-shr-primary hover:bg-shr-secondary transition-all duration-300 font-medium">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-shr-secondary/20">
        <AnimatedSection className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
        </AnimatedSection>
      </footer>
    </div>
  );
};

export default Homepage;
