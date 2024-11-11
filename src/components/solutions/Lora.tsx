import React from 'react';
import { 
  Mail,
  Clock,
  Globe,
  MessageSquare,
  BarChart,
  Zap,
  Brain,
  Settings
} from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Lora: React.FC = () => {
  const solutionData = {
    title: "Meet Lora",
    subtitle: "Your Premier AI Email Marketing Assistant",
    description: "Elevate your email marketing strategy with Lora, an intuitive and powerful AI designed to leverage top industry practices. From compelling welcome sequences to optimized re-engagement campaigns, Lora ensures every email resonates and drives conversions.",
    
    stats: [
      {
        value: "GPT-4o",
        label: "advanced AI engine"
      },
      {
        value: "17,654",
        label: "data points for email crafting"
      },
      {
        value: "190ms",
        label: "average response time"
      },
      {
        value: "100+",
        label: "supported languages"
      }
    ],
    
    features: [
      {
        icon: Mail,
        title: "Automated Campaigns",
        description: "Handle the full spectrum of email campaigns, from planning to content drafting and precise scheduling"
      },
      {
        icon: MessageSquare,
        title: "Personalized Sequences",
        description: "Design and deploy customized email flows like welcome series, follow-ups, and special promotions"
      },
      {
        icon: BarChart,
        title: "Strategic Insights",
        description: "Get data-driven recommendations for subject lines, content structure, and optimal sending schedules"
      },
      {
        icon: Brain,
        title: "Brain AI Integration",
        description: "Access your brand's core knowledge through seamless integration with SHR Technology's Brain AI"
      },
      {
        icon: Clock,
        title: "24/7 Availability",
        description: "Always on and ready to assist with your email marketing needs at any time"
      },
      {
        icon: Globe,
        title: "Multilingual Support",
        description: "Communicate and execute tasks in over 100 languages for global brand reach"
      },
      {
        icon: Zap,
        title: "Rapid Execution",
        description: "Lightning-fast response times ensure your requests are completed in moments"
      },
      {
        icon: Settings,
        title: "Power-Up Enhancements",
        description: "Optimize workflows with unique power-ups and seamless platform integrations"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Draft Welcome Emails",
        description: "Create engaging welcome sequences for new sign-ups"
      },
      {
        number: "2",
        title: "Cart Recovery",
        description: "Set up abandoned cart sequences for high-value items"
      },
      {
        number: "3",
        title: "Follow-up Flow",
        description: "Design post-purchase follow-up sequences"
      },
      {
        number: "4",
        title: "Optimize",
        description: "Refine subject lines and content for better open rates"
      },
      {
        number: "5",
        title: "Analyze",
        description: "Track performance and adapt based on engagement analytics"
      }
    ],
    
    benefits: [
      {
        title: "Subject Line Mastery",
        description: "Create compelling subject lines that dramatically improve open rates"
      },
      {
        title: "Brand Consistency",
        description: "Maintain authentic brand voice across all email communications"
      },
      {
        title: "Continuous Learning",
        description: "Adapt and improve based on engagement analytics and performance data"
      },
      {
        title: "Time Efficiency",
        description: "Streamline email marketing processes to focus on strategic goals"
      }
    ],
    
    ctaLink: "/pricing?helper=lora"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Lora;
