import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small businesses just getting started",
      features: [
        "Basic marketing tools",
        "Analytics dashboard",
        "Up to 5 team members",
        "24/7 email support",
        "1 project"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      description: "Ideal for growing businesses with expanding needs",
      features: [
        "Advanced marketing tools",
        "Custom analytics",
        "Up to 15 team members",
        "Priority support",
        "5 projects",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Full marketing suite",
        "Advanced analytics & reporting",
        "Unlimited team members",
        "24/7 phone support",
        "Unlimited projects",
        "Custom integrations",
        "Dedicated account manager"
      ]
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
              <span className="block text-shr-800">Simple, Transparent</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with varying levels of support and capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-shr-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <div className="inline-flex px-4 py-1 rounded-full text-sm font-semibold bg-shr-primary text-white">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-shr-800">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-shr-800">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="ml-1 text-xl text-shr-700">/month</span>}
                  </div>
                  <p className="mt-4 text-sm text-shr-700">{plan.description}</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-shr-primary" />
                      </div>
                      <p className="ml-3 text-sm text-shr-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/get-started"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-shr-primary to-shr-accent1 text-white hover:shadow-lg hover:shadow-shr-primary/50'
                        : 'bg-shr-700/10 text-shr-700 hover:bg-shr-700/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
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

export default Pricing;
