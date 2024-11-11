import React from 'react';
import { Layers, Target, TrendingUp, Megaphone, BarChart, Users, Mail, Share2 } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Marketing: React.FC = () => {
  const solutionData = {
    title: "Marketing Solutions",
    subtitle: "Elevate Your Marketing Strategy",
    description: "Comprehensive marketing tools and solutions to help your business reach new heights with data-driven strategies and AI-powered optimization.",
    
    features: [
      {
        icon: Target,
        title: "Audience Targeting",
        description: "Precise audience segmentation and targeting capabilities for maximum campaign effectiveness."
      },
      {
        icon: TrendingUp,
        title: "Campaign Analytics",
        description: "Real-time performance tracking and analytics to optimize your marketing efforts."
      },
      {
        icon: Megaphone,
        title: "Multi-channel Marketing",
        description: "Seamlessly manage campaigns across email, social media, and digital advertising."
      },
      {
        icon: BarChart,
        title: "ROI Tracking",
        description: "Advanced ROI tracking and reporting to measure campaign success."
      },
      {
        icon: Users,
        title: "Customer Insights",
        description: "Deep customer behavior analysis and segmentation capabilities."
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Powerful email marketing tools with automation and personalization."
      },
      {
        icon: Share2,
        title: "Social Integration",
        description: "Integrated social media marketing tools and analytics."
      },
      {
        icon: Layers,
        title: "Content Management",
        description: "Centralized content management and distribution system."
      }
    ],
    
    stats: [
      {
        value: "45%",
        label: "Average Increase in Campaign ROI"
      },
      {
        value: "2.5x",
        label: "Higher Engagement Rates"
      },
      {
        value: "60%",
        label: "Time Saved on Campaign Management"
      },
      {
        value: "3x",
        label: "Increase in Qualified Leads"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Strategy Development",
        description: "Define your marketing goals and develop a comprehensive strategy."
      },
      {
        number: "2",
        title: "Campaign Setup",
        description: "Set up and configure your marketing campaigns across channels."
      },
      {
        number: "3",
        title: "Audience Targeting",
        description: "Define and segment your target audience for precise targeting."
      },
      {
        number: "4",
        title: "Launch & Monitor",
        description: "Launch campaigns and monitor performance in real-time."
      },
      {
        number: "5",
        title: "Optimize & Scale",
        description: "Analyze results and optimize campaigns for better performance."
      }
    ],
    
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Streamline your marketing operations with automated workflows and integrated tools."
      },
      {
        title: "Better ROI",
        description: "Maximize your marketing budget with data-driven decision making and optimization."
      },
      {
        title: "Enhanced Targeting",
        description: "Reach the right audience with precise segmentation and targeting capabilities."
      },
      {
        title: "Actionable Insights",
        description: "Get deep insights into campaign performance and customer behavior."
      }
    ],
    
    ctaLink: "/pricing?solution=marketing"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Marketing;
