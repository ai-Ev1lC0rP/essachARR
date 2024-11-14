import React from 'react';
import { BarChart2, Globe, Clock, Shield, Power, Database, TrendingUp, FileText } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Arlo: React.FC = () => {
  const solutionData = {
    title: "Meet Arlo",
    subtitle: "Your AI data analytics expert",
    description: "Harness cutting-edge analytics to deliver accurate ROI assessments, sales projections, and financial reporting, giving you the clarity to make strategic decisions.",
    
    stats: [
      { value: "3x", label: "more precise results compared to standard AI models*" },
      { value: "GPT-5o", label: "leveraging the most advanced LLM in the market*" },
      { value: "30,102", label: "data-points analyzed for optimal output*" },
      { value: "160ms", label: "average response speed per query*" }
    ],
    
    features: [
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
      },
      {
        icon: FileText,
        title: "Streamlined Financial Models",
        description: "Convert raw data into strategic solutions with deep analytical acumen."
      },
      {
        icon: BarChart2,
        title: "Clear Reporting",
        description: "Transform complex data into actionable insights for growth."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Connect Data",
        description: "Link your data sources to Arlo"
      },
      {
        number: "2",
        title: "Define Goals",
        description: "Set your analytical objectives"
      },
      {
        number: "3",
        title: "Get Analysis",
        description: "Receive AI-powered insights"
      },
      {
        number: "4",
        title: "Take Action",
        description: "Implement data-driven decisions"
      },
      {
        number: "5",
        title: "Track Results",
        description: "Monitor performance metrics"
      }
    ],
    
    benefits: [
      {
        title: "Time Efficiency",
        description: "Automate complex data analysis tasks"
      },
      {
        title: "Accurate Insights",
        description: "Get precise, reliable analytics"
      },
      {
        title: "Strategic Planning",
        description: "Make informed business decisions"
      },
      {
        title: "Scalable Analysis",
        description: "Handle growing data volumes effortlessly"
      }
    ],
    
    ctaLink: "/pricing?helper=arlo"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Arlo;
