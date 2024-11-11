import React from 'react';
import { Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types for solution page data
interface Feature {
  icon: Icon;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface SolutionPageProps {
  // Main content
  title: string;
  subtitle: string;
  description: string;
  
  // Features section
  features: Feature[];
  
  // Stats section
  stats: Stat[];
  
  // How it works steps
  steps?: Step[];
  
  // Additional sections data
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  
  // Route for CTA
  ctaLink: string;
}

/**
 * Solution Page Template
 * 
 * This template provides a consistent structure for solution pages.
 * To use this template:
 * 1. Import and rename this component
 * 2. Define your solution-specific data
 * 3. Customize sections as needed while maintaining the overall structure
 * 4. Add any additional sections specific to your solution
 */
const SolutionTemplate: React.FC<SolutionPageProps> = ({
  title,
  subtitle,
  description,
  features,
  stats,
  steps,
  benefits,
  ctaLink
}) => {
  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">{title}</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                {subtitle}
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              {description}
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

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-shr-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* How It Works Section (Optional) */}
      {steps && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step) => (
                <div key={step.title} className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-shr-primary text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-shr-800 mb-2 mt-4">{step.title}</h3>
                  <p className="text-shr-700/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section (Optional) */}
      {benefits && (
        <div className="py-16 bg-gradient-to-b from-white to-shr-50/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-shr-800 mb-2">{benefit.title}</h3>
                  <p className="text-shr-700/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            Transform your business with our powerful solution.
          </p>
          <Link 
            to={ctaLink}
            className="inline-block bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50"
          >
            Get Started
          </Link>
          <p className="mt-4 text-sm text-shr-700/60">*14-day money-back guarantee included</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionTemplate;
