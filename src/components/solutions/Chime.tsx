import React from 'react';

const Chime = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Meet Chime
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Your ultimate AI-powered social media assistant trained on thousands of data touchpoints across all major platforms.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p className="text-gray-400">Create campaigns, strategize posts, and craft engaging content across all platforms.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Instant Execution</h3>
            <p className="text-gray-400">Execute 15,000+ social media tasks instantly with unmatched speed and accuracy.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
            <p className="text-gray-400">Get data-driven insights and recommendations to improve your social media presence.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">3x</div>
              <div className="text-gray-400">more precise than standard AI tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">GPT-5o</div>
              <div className="text-gray-400">latest in LLM technology</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">13,582</div>
              <div className="text-gray-400">data-points integrated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">180ms</div>
              <div className="text-gray-400">average task completion time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What can Chime do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Social Media Management</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Create content calendars</li>
              <li>• Write viral TikTok scripts</li>
              <li>• Generate engaging LinkedIn posts</li>
              <li>• Manage comments and interactions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Multi-language support</li>
              <li>• Brand voice customization</li>
              <li>• Real-time analytics</li>
              <li>• Integration capabilities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your social media?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of brands using Chime to revolutionize their social media presence.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <p className="mt-4 text-sm">14-day money-back guarantee included</p>
        </div>
      </div>
    </div>
  );
};

export default Chime;
