import React from 'react';
import { ShoppingBag, Globe, Clock, Shield, Power, Database, TrendingUp, FileText } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Nova: React.FC = () => {
  const solutionData = {
    title: "Meet Nova",
    subtitle: "Your eCommerce AI specialist",
    description: "The premier AI assistant crafted to amplify your eCommerce business, trained on thousands of top-performing online store models.",
    
    stats: [
      { value: "3x", label: "more effective performance compared to basic AI tools*" },
      { value: "GPT-5o", label: "driven by the latest LLM technology available*" },
      { value: "22,345", label: "unique data-points utilized for superior outcomes*" },
      { value: "180ms", label: "average response time*" }
    ],
    
    features: [
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
      },
      {
        icon: ShoppingBag,
        title: "Product Collection Curation",
        description: "Merge analytical precision with creative ingenuity for store dominance."
      },
      {
        icon: FileText,
        title: "High-Conversion Content",
        description: "Transform product listings into compelling narratives that drive sales."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Connect Store",
        description: "Link your eCommerce platform to Nova"
      },
      {
        number: "2",
        title: "Set Goals",
        description: "Define your optimization targets"
      },
      {
        number: "3",
        title: "Get Insights",
        description: "Receive AI-powered recommendations"
      },
      {
        number: "4",
        title: "Implement",
        description: "Apply optimizations with one click"
      },
      {
        number: "5",
        title: "Monitor",
        description: "Track performance improvements"
      }
    ],
    
    benefits: [
      {
        title: "Time Savings",
        description: "Automate repetitive eCommerce tasks"
      },
      {
        title: "Higher Conversions",
        description: "Optimize product listings for better sales"
      },
      {
        title: "Data-Driven",
        description: "Make decisions based on real analytics"
      },
      {
        title: "Scalable Growth",
        description: "Easily manage expanding product lines"
      }
    ],
    
    ctaLink: "/pricing?helper=nova"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Nova;
