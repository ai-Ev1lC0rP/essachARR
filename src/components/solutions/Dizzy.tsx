import React from 'react';
import { Palette, Globe, Clock, Shield, Power, Database, TrendingUp, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dizzy: React.FC = () => {
  const stats = [
    { value: "4x", label: "more innovative ideas compared to basic tools*" },
    { value: "GPT-5o", label: "powering Dizzy with advanced creative capabilities*" },
    { value: "19,564", label: "visual and content data-points for enhanced creativity*" },
    { value: "170ms", label: "average response time*" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "More creative than conventional tools",
      description: "Grounded in rich data and expert design knowledge."
    },
    {
      icon: Clock,
      title: "Always accessible",
      description: "Fast. High-quality output every time."
    },
    {
      icon: Globe,
      title: "Go global with ease",
      description: "Communicate visually in any language."
    },
    {
      icon: Shield,
      title: "Simple to use",
      description: "Ideal for beginners and experts alike."
    },
    {
      icon: Power,
      title: "Built-in power-ups",
      description: "Boost productivity with integrated tools."
    },
    {
      icon: Database,
      title: "Synapse AI Integration",
      description: "Share assets, link media, and apply brand knowledge effortlessly."
    }
  ];

  const tasks = [
    "Dizzy, design a carousel for our new product launch.",
    "Dizzy, create a series of animated posts for our brand campaign.",
    "Dizzy, suggest a theme for our next big ad campaign.",
    "Dizzy, put together a visual content calendar.",
    "Dizzy, write and design a teaser for our new video ad.",
    "Dizzy, create dynamic, interactive presentations."
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-shr-50/30 to-shr-100/20">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="block text-shr-800">Meet Dizzy</span>
              <span className="block bg-gradient-to-r from-shr-primary to-shr-accent1 bg-clip-text text-transparent">
                Your creative AI assistant
              </span>
            </h1>
            <p className="mt-6 text-lg text-shr-700/80 max-w-2xl mx-auto">
              Whether you need captivating social media posts, innovative campaign ideas, or eye-catching graphics, Dizzy is equipped with the expertise to elevate your brand.
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
          <h2 className="text-3xl font-bold text-center text-shr-800 mb-12">What can Dizzy do?</h2>
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
            <h2 className="text-3xl font-bold text-shr-800 mb-4">Creative Excellence at its Core</h2>
            <p className="text-lg text-shr-700/80">Dizzy's specialty? Seamlessly blending visuals and text for impactful storytelling.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Palette className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">🎭 Designing on-brand visual content</h3>
              <p className="text-shr-700/70">Transform your ideas into visually stunning content that captures attention and drives engagement.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Layout className="h-8 w-8 text-shr-primary mb-4" />
              <h3 className="text-xl font-semibold text-shr-800 mb-2">📑 Crafting detailed multimedia strategies</h3>
              <p className="text-shr-700/70">Develop comprehensive content strategies that align with your brand's vision and goals.</p>
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
              <p className="text-shr-700/70 mb-4">Every SHR Technology product comes with a 14-day money-back guarantee.</p>
              <Link to="/refund-policy" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Read more →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Support</h3>
              <p className="text-shr-700/70 mb-4">Our support team is available 24/7 for any assistance.</p>
              <Link to="/help" className="text-shr-primary hover:text-shr-accent1 transition-colors duration-300">
                Learn More →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-shr-800 mb-2">Privacy</h3>
              <p className="text-shr-700/70 mb-4">We value your privacy. Review our comprehensive privacy policy.</p>
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
          <h2 className="text-3xl font-bold text-shr-800 mb-6">Say goodbye to creative blocks</h2>
          <p className="text-lg text-shr-700/80 mb-8 max-w-2xl mx-auto">
            Your multimedia creative expert.
          </p>
          <Link 
            to="/pricing?helper=dizzy" 
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

export default Dizzy;
