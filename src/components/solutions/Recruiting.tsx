import React from 'react';
import { Users, CheckCircle, BarChart2, Brain } from 'lucide-react';

const Recruiting: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Content Analysis",
      description: "Our AI analyzes your job descriptions, identifying key skills and qualifications to ensure comprehensive coverage."
    },
    {
      icon: CheckCircle,
      title: "Language Optimization",
      description: "Leveraging advanced NLP, we refine your job postings for clarity, conciseness, and impact."
    },
    {
      icon: Users,
      title: "Target Audience Insights",
      description: "Our AI provides data-driven recommendations to tailor your postings to your ideal candidates."
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Gain valuable insights with real-time metrics on application rates, engagement, and conversion."
    }
  ];

  const benefits = [
    {
      title: "Time Efficiency",
      description: "Reduce the time spent crafting job postings by up to 70%"
    },
    {
      title: "Quality Enhancement",
      description: "Ensure consistently high-quality, compelling job descriptions"
    },
    {
      title: "Increased Reach",
      description: "Optimize your postings for better visibility and candidate attraction"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed choices based on real-time performance analytics"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Input Requirements",
      description: "Input your initial job description and requirements"
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our AI analyzes and optimizes the content, suggesting improvements"
    },
    {
      number: "3",
      title: "Review & Approve",
      description: "Review and approve the enhanced job posting"
    },
    {
      number: "4",
      title: "Publish & Track",
      description: "Publish and track performance with our integrated analytics"
    },
    {
      number: "5",
      title: "Optimize",
      description: "Receive ongoing optimization suggestions based on real-time data"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">AI-Powered</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Recruiting Coordinator Agency
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Revolutionize your hiring process with intelligent job posting assistance powered by cutting-edge AI technology.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
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

      {/* Benefits Section */}
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

      {/* How It Works Section */}
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

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Ready to Transform Your Hiring Process?</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            Join the future of recruitment with our AI-powered solution.
          </p>
          <button className="bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
