import React from 'react';
import { Brain, Globe, Clock, Shield, Power, Database } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Daria: React.FC = () => {
  const solutionData = {
    title: "Meet Daria",
    subtitle: "Your AI-powered content creator",
    description: "Whether it's shaping engaging Instagram captions or scripting dynamic video ads, Daria transforms ideas into compelling narratives that captivate and convert.",
    
    stats: [
      { value: "4x", label: "more targeted output compared to general AI models*" },
      { value: "GPT-5o", label: "unleashing the most advanced natural language understanding to date*" },
      { value: "50,423", label: "unique data-points utilized for superior performance*" },
      { value: "170ms", label: "average response time per request*" }
    ],
    
    features: [
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
        description: "Integrate files, websites, and enrich Daria's expertise with your insights."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Share Your Task",
        description: "Tell Daria what content you need"
      },
      {
        number: "2",
        title: "Review Output",
        description: "Get instant, high-quality content"
      },
      {
        number: "3",
        title: "Refine",
        description: "Make adjustments if needed"
      },
      {
        number: "4",
        title: "Publish",
        description: "Share your content confidently"
      },
      {
        number: "5",
        title: "Analyze",
        description: "Track performance and iterate"
      }
    ],
    
    benefits: [
      {
        title: "Time Savings",
        description: "Create content in minutes instead of hours"
      },
      {
        title: "Consistent Quality",
        description: "Maintain high standards across all content"
      },
      {
        title: "Brand Voice",
        description: "Keep your messaging consistent and on-brand"
      },
      {
        title: "Scale Effortlessly",
        description: "Create content for multiple channels simultaneously"
      }
    ],
    
    ctaLink: "/pricing?helper=Daria"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Daria;
