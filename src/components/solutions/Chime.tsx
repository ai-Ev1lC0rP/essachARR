import React from 'react';
import { MessageSquare, Calendar, Zap, BarChart2, Globe, Shield, Power, Database } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Chime: React.FC = () => {
  const solutionData = {
    title: "Meet Chime",
    subtitle: "Your AI Social Media Assistant",
    description: "Your ultimate AI-powered social media assistant trained on thousands of data touchpoints across all major platforms.",
    
    stats: [
      { value: "3x", label: "more precise than standard AI tools" },
      { value: "GPT-5o", label: "latest in LLM technology" },
      { value: "13,582", label: "data-points integrated" },
      { value: "180ms", label: "average task completion time" }
    ],
    
    features: [
      {
        icon: Calendar,
        title: "Content Planning",
        description: "Create and manage comprehensive content calendars."
      },
      {
        icon: MessageSquare,
        title: "Engagement Management",
        description: "Handle comments and interactions effectively."
      },
      {
        icon: Globe,
        title: "Multi-Platform Support",
        description: "Create content for all major social platforms."
      },
      {
        icon: Shield,
        title: "Brand Voice Protection",
        description: "Maintain consistent brand messaging."
      },
      {
        icon: Power,
        title: "Automation Tools",
        description: "Streamline your social media workflow."
      },
      {
        icon: Database,
        title: "Content Library",
        description: "Access and manage your media assets."
      },
      {
        icon: Zap,
        title: "Quick Execution",
        description: "Execute 15,000+ social media tasks instantly."
      },
      {
        icon: BarChart2,
        title: "Smart Analytics",
        description: "Get data-driven insights for improvement."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Connect Accounts",
        description: "Link your social media platforms"
      },
      {
        number: "2",
        title: "Set Goals",
        description: "Define your social media objectives"
      },
      {
        number: "3",
        title: "Create Content",
        description: "Generate engaging posts and campaigns"
      },
      {
        number: "4",
        title: "Schedule",
        description: "Plan your content calendar"
      },
      {
        number: "5",
        title: "Analyze",
        description: "Track performance and optimize"
      }
    ],
    
    benefits: [
      {
        title: "Time Efficiency",
        description: "Automate social media tasks and save hours"
      },
      {
        title: "Consistent Quality",
        description: "Maintain high-quality content across platforms"
      },
      {
        title: "Data-Driven Strategy",
        description: "Make informed decisions with real-time analytics"
      },
      {
        title: "Brand Growth",
        description: "Expand your social media presence effectively"
      }
    ],
    
    ctaLink: "/pricing?helper=chime"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Chime;
