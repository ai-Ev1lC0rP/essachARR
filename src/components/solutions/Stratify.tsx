import React from 'react';
import { 
  MessageSquare, 
  Bot, 
  Zap, 
  FileText, 
  Target, 
  Brain,
  Globe2,
  Clock
} from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Stratify: React.FC = () => {
  const solutionData = {
    title: "Stratify",
    subtitle: "AI-Driven Sales Strategist",
    description: "Meet Stratify, the AI-driven sales strategist designed by SHR-Technology.com. Stratify is a groundbreaking AI tool that empowers sales teams to exceed targets with sharp strategies and seamless execution.",
    
    stats: [
      {
        value: "GPT-4o",
        label: "Advanced AI Architecture"
      },
      {
        value: "190ms",
        label: "Average Response Time"
      },
      {
        value: "18,743+",
        label: "Unique Data Points"
      },
      {
        value: "100+",
        label: "Languages Supported"
      }
    ],
    
    features: [
      {
        icon: Bot,
        title: "Comprehensive Sales Automation",
        description: "Manages the entire sales cycle, from initial outreach to contract generation, streamlining processes and enhancing productivity."
      },
      {
        icon: FileText,
        title: "Script & Proposal Crafting",
        description: "Design and customize cold call scripts, cold emails, and proposals that align with your brand's voice."
      },
      {
        icon: Target,
        title: "Strategic Guidance",
        description: "Utilize data-driven insights for negotiation tactics, client follow-ups, and winning proposals."
      },
      {
        icon: Brain,
        title: "Brain AI Integration",
        description: "Seamlessly access your brand's files and strategic information through Brain AI integration."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Data Analysis",
        description: "Analyze trends and patterns in your sales data"
      },
      {
        number: "2",
        title: "Strategy Creation",
        description: "Develop personalized sales strategies"
      },
      {
        number: "3",
        title: "Content Generation",
        description: "Create customized sales materials"
      },
      {
        number: "4",
        title: "Execution",
        description: "Implement strategies with real-time optimization"
      },
      {
        number: "5",
        title: "Performance Tracking",
        description: "Monitor and adjust for optimal results"
      }
    ],
    
    benefits: [
      {
        title: "24/7 Availability",
        description: "Work with Stratify around the clock to keep your sales cycle active and uninterrupted."
      },
      {
        title: "Intuitive Interface",
        description: "User-friendly platform accessible for sales teams with all levels of tech expertise."
      },
      {
        title: "High ROI",
        description: "Every feature is designed to drive increased conversions and build long-term client relationships."
      },
      {
        title: "Global Reach",
        description: "Communicate fluently in over 100 languages, perfect for global sales teams."
      }
    ],
    
    ctaLink: "/pricing?helper=stratify"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Stratify;
