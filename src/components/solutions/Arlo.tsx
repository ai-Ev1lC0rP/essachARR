import React from 'react';
import { BarChart2, Globe, Clock, Shield, Power, Database, TrendingUp, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Arlo: React.FC = () => {
  const stats = [
    { value: "3x", label: "more precise results compared to standard AI models*" },
    { value: "GPT-5o", label: "leveraging the most advanced LLM in the market*" },
    { value: "30,102", label: "data-points analyzed for optimal output*" },
    { value: "160ms", label: "average response speed per query*" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Smarter than human analysts",
      description: "Equipped with unmatched data expertise."
    },
    {
      icon: Clock,
      title: "Instant availability",
      description: "Dependable, always accurate."
    },
    {
      icon: Globe,
      title: "Global reach",
      description: "Work in any major language."
    },
    {
      icon: Shield,
      title: "User-friendly for everyone",
      description: "No technical skills needed to start."
    },
    {
      icon: Power,
      title: "Power-ups",
      description: "Maximum automation and connectivity."
    },
    {
      icon: Database,
      title: "Synapse AI Integration",
      description: "Integrate websites, documents, and enrich performance with your insights."
    }
  ];

  const tasks = [
    "Arlo, calculate the ROI of our marketing campaign.",
    "Arlo, generate sales forecasts for Q4.",
    "Arlo, prepare a detailed profit and loss report.",
    "Arlo, create a comprehensive balance sheet.",
    "Arlo, evaluate our annual sales trend.",
    "Arlo, analyze the cost benefits of new supplier options."
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">Meet Arlo</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Your AI data analytics expert
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Harness cutting-edge analytics to deliver accurate ROI assessments, sales projections, and financial reporting, giving you the clarity to make strategic decisions.
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
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">What can Arlo do?</h2>
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
            <h2 className="text-3xl font-bold text-shr-800 mb-4">Data-Driven Success</h2>
            <p className="text-lg text-shr-700/80">Arlo's specialty? Identifying trends and patterns in complex data to inform strategic planning.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Streamlining financial models</h3>
              <p className="text-shr-700/70">Arlo blends deep analytical acumen with AI efficiency, converting raw data into strategic solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <BarChart2 className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Creating easy-to-read reports</h3>
              <p className="text-shr-700/70">Transform complex data into clear, actionable insights that drive business growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">Why choose SHR Technology?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Guarantee</h3>
              <p className="text-shr-700/70 mb-4">All SHR Technology products come with a 14-day money-back guarantee.</p>
              <Link to="/refund-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Read more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Support</h3>
              <p className="text-shr-700/70 mb-4">Our team is available 24/7 for any SHR Technology inquiries.</p>
              <Link to="/help" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Get assistance →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Privacy Commitment</h3>
              <p className="text-shr-700/70 mb-4">We prioritize your privacy. Review our comprehensive policies.</p>
              <Link to="/privacy-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Review privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-b from-shr-50/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Effortless data management is here</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            Your AI-driven data analyst, redefined.
          </p>
          <Link 
            to="/pricing?helper=arlo" 
            className="inline-block bg-gradient-to-r from-shr-primary to-shr-accent1 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-shr-primary/50"
          >
            Start now
          </Link>
          <p className="mt-4 text-sm text-shr-700/60">*14-day money-back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Arlo;
