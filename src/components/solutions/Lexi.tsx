import React from 'react';
import { Brain, Globe, Clock, Shield, Power, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lexi: React.FC = () => {
  const stats = [
    { value: "4x", label: "more targeted output compared to general AI models*" },
    { value: "GPT-5o", label: "unleashing the most advanced natural language understanding to date*" },
    { value: "50,423", label: "unique data-points utilized for superior performance*" },
    { value: "170ms", label: "average response time per request*" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Smarter than human experts",
      description: "Fueled by unmatched data points and experience."
    },
    {
      icon: Clock,
      title: "Reliable & Instant",
      description: "Consistently high-quality output with rapid response times."
    },
    {
      icon: Globe,
      title: "Go global effortlessly",
      description: "Create content in any major language."
    },
    {
      icon: Shield,
      title: "User-friendly for all",
      description: "An interface designed to make content creation enjoyable and straightforward."
    },
    {
      icon: Power,
      title: "Power-ups",
      description: "Amplified automation and connection to external tools."
    },
    {
      icon: Database,
      title: "Synapse AI brain",
      description: "Integrate files, websites, and enrich Lexi's expertise with your insights."
    }
  ];

  const tasks = [
    "Lexi, draft a tweet to promote our flash sale.",
    "Lexi, compose an email welcoming new subscribers.",
    "Lexi, I need a script for a 30-second product video.",
    "Lexi, create a landing page for our new app launch.",
    "Lexi, write a blog post about productivity tips for entrepreneurs.",
    "Lexi, create an advertorial for our eco-friendly skincare line."
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">Meet Lexi</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Your AI-powered content creator
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Whether it's shaping engaging Instagram captions or scripting dynamic video ads, Lexi transforms ideas into compelling narratives that captivate and convert.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-shr-primary mb-2">{stat.value}</div>
                <p className="text-shr-700/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tasks Showcase */}
      <div className="py-16 bg-gradient-to-b from-white to-shr-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">What can Lexi do?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tasks.map((task) => (
              <div key={task} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-shr-700 font-medium">{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-shr-primary text-white mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-shr-800 mb-2">{feature.title}</h3>
                <p className="text-shr-700/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Why users trust Synapse AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Guarantee</h3>
              <p className="text-shr-700/70 mb-4">Every Synapse AI product comes with a 14-day money-back guarantee.</p>
              <Link to="/refund-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Explore further →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Support</h3>
              <p className="text-shr-700/70 mb-4">Our support team is available 24/7 to help with any Synapse questions.</p>
              <Link to="/help" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Find out more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Privacy Matters</h3>
              <p className="text-shr-700/70 mb-4">Committed to protecting your data. Learn more about our policies.</p>
              <Link to="/privacy-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Experience hassle-free copywriting like never before</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            That's Lexi. Your all-in-one copywriting partner, reimagined with AI.
          </p>
          <Link 
            to="/pricing?helper=lexi" 
            className="inline-block bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50"
          >
            Get started now
          </Link>
          <p className="mt-4 text-sm text-shr-700/60">*14-day money-back guarantee included</p>
        </div>
      </div>
    </div>
  );
};

export default Lexi;
