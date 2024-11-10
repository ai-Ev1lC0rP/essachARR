import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Layers, BarChart, ShoppingBag, Users, Pen, BarChart2, Store, Palette, MessageSquare } from 'lucide-react';

const Solutions: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Marketing Solutions",
      description: "Powerful tools to enhance your marketing strategies and reach.",
      icon: Layers,
      link: "/solutions/marketing"
    },
    {
      title: "Analytics Platform",
      description: "Data-driven insights to make informed business decisions.",
      icon: BarChart,
      link: "/solutions/analytics"
    },
    {
      title: "Commerce Suite",
      description: "Complete e-commerce solutions for modern businesses.",
      icon: ShoppingBag,
      link: "/solutions/commerce"
    },
    {
      title: "AI-Powered Recruiting",
      description: "Revolutionize your hiring process with intelligent job posting assistance.",
      icon: Users,
      link: "/solutions/recruiting"
    },
    {
      title: "Lexi AI Copywriter",
      description: "Transform ideas into compelling narratives with AI-powered content creation.",
      icon: Pen,
      link: "/solutions/lexi"
    },
    {
      title: "Arlo Data Analytics",
      description: "Your dedicated AI data analyst for accurate insights and strategic decisions.",
      icon: BarChart2,
      link: "/solutions/arlo"
    },
    {
      title: "Nova eCommerce AI",
      description: "Amplify your online store with AI-powered optimization and insights.",
      icon: Store,
      link: "/solutions/nova"
    },
    {
      title: "Dizzy Creative AI",
      description: "Your creative AI assistant for visual storytelling and multimedia magic.",
      icon: Palette,
      link: "/solutions/dizzy"
    },
    {
      title: "Chime Social Media AI",
      description: "Your ultimate AI-powered social media assistant for seamless content management.",
      icon: MessageSquare,
      link: "/solutions/chime"
    }
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
              <span className="block text-shr-800">Powerful Solutions for</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Discover our comprehensive suite of solutions designed to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="group relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-shr-primary rounded-t-xl transition-all duration-300 group-hover:h-2" />
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-shr-primary text-white mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-shr-800 mb-2">{solution.title}</h3>
                <p className="text-shr-700/70">{solution.description}</p>
              </Link>
            ))}
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
                <li><Link to="/solutions/recruiting" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">AI Recruiting</Link></li>
                <li><Link to="/solutions/lexi" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Lexi AI</Link></li>
                <li><Link to="/solutions/arlo" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Arlo Analytics</Link></li>
                <li><Link to="/solutions/nova" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Nova eCommerce</Link></li>
                <li><Link to="/solutions/dizzy" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Dizzy Creative</Link></li>
                <li><Link to="/solutions/chime" className="text-shr-700/70 hover:text-shr-primary transition-colors duration-300">Chime Social</Link></li>
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

export default Solutions;
