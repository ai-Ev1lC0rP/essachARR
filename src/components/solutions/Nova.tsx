import React from 'react';
import { ShoppingBag, Globe, Clock, Shield, Power, Database, TrendingUp, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Nova: React.FC = () => {
  const stats = [
    { value: "3x", label: "more effective performance compared to basic AI tools*" },
    { value: "GPT-5o", label: "driven by the latest LLM technology available*" },
    { value: "22,345", label: "unique data-points utilized for superior outcomes*" },
    { value: "180ms", label: "average response time*" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Smarter than standard tools",
      description: "Built on expansive data and expertise."
    },
    {
      icon: Clock,
      title: "Always reliable",
      description: "Quick. High-quality output guaranteed."
    },
    {
      icon: Globe,
      title: "Global capabilities",
      description: "Work in multiple languages with ease."
    },
    {
      icon: Shield,
      title: "Easy for anyone to use",
      description: "No technical expertise required."
    },
    {
      icon: Power,
      title: "Enhanced with power-ups",
      description: "Increased productivity through integrations."
    },
    {
      icon: Database,
      title: "Synapse AI Integration",
      description: "Connect files, websites, and share vital data seamlessly."
    }
  ];

  const tasks = [
    "Nova, design a landing page for our latest product.",
    "Nova, generate descriptions for a new product line.",
    "Nova, find trending products for next quarter.",
    "Nova, optimize our current product listings.",
    "Nova, write a customer testimonial for our new line of eco-friendly products.",
    "Nova, calculate profit margins for the latest product collection."
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">Meet Nova</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Your eCommerce AI specialist
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              The premier AI assistant crafted to amplify your eCommerce business, trained on thousands of top-performing online store models.
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
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">What can Nova do?</h2>
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

      {/* Expertise Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shr-800 mb-4">Conversion Optimization at its Core</h2>
            <p className="text-lg text-shr-700/80">Nova's specialty? Unveiling eCommerce secrets that drive success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ShoppingBag className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Curating top-selling product collections</h3>
              <p className="text-shr-700/70">Nova merges analytical precision with creative ingenuity, ensuring your online store dominates.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Crafting high-conversion content</h3>
              <p className="text-shr-700/70">Transform your product listings into compelling narratives that drive sales.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Why SHR Technology?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Guarantee</h3>
              <p className="text-shr-700/70 mb-4">SHR Technology products come with a 14-day money-back assurance.</p>
              <Link to="/refund-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Learn more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Support</h3>
              <p className="text-shr-700/70 mb-4">Our support team is available 24/7 for any questions.</p>
              <Link to="/help" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Contact us →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Privacy First</h3>
              <p className="text-shr-700/70 mb-4">We take data privacy seriously. Review our policies.</p>
              <Link to="/privacy-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Say goodbye to manual eCommerce labor</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            Your eCommerce AI specialist.
          </p>
          <Link 
            to="/pricing?helper=nova" 
            className="inline-block bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50"
          >
            Get started
          </Link>
          <p className="mt-4 text-sm text-shr-700/60">*14-day money-back guarantee included</p>
        </div>
      </div>
    </div>
  );
};

export default Nova;
