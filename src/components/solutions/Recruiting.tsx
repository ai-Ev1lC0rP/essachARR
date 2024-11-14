import React from 'react';
import { Users, CheckCircle, BarChart2, Brain } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Recruiting: React.FC = () => {
  const solutionData = {
    title: "AI-Powered",
    subtitle: "Recruiting Coordinator Agency",
    description: "Revolutionize your hiring process with intelligent job posting assistance powered by cutting-edge AI technology.",
    
    features: [
      {
        icon: Brain,
        title: "Smart Content Analysis",
        description: "Our AI analyzes your job descriptions, identifying key skills and qualifications to ensure comprehensive coverage."
      },
      {
        icon: CheckCircle,
        title: "Language Optimization",
        description: "Leveraging advanced NLP, we refine your job postings for clarity, conciseness, and impact."
      },
      {
        icon: Users,
        title: "Target Audience Insights",
        description: "Our AI provides data-driven recommendations to tailor your postings to your ideal candidates."
      },
      {
        icon: BarChart2,
        title: "Performance Tracking",
        description: "Gain valuable insights with real-time metrics on application rates, engagement, and conversion."
      }
    ],
    
    stats: [
      {
        value: "70%",
        label: "reduction in time spent crafting job postings"
      },
      {
        value: "2x",
        label: "increase in qualified applicants"
      },
      {
        value: "95%",
        label: "accuracy in skill matching"
      },
      {
        value: "24/7",
        label: "continuous optimization and tracking"
      }
    ],
    
    benefits: [
      {
        title: "Time Efficiency",
        description: "Reduce the time spent crafting job postings by up to 70%"
      },
      {
        title: "Quality Enhancement",
        description: "Ensure consistently high-quality, compelling job descriptions"
      },
      {
        title: "Increased Reach",
        description: "Optimize your postings for better visibility and candidate attraction"
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed choices based on real-time performance analytics"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Input Requirements",
        description: "Input your initial job description and requirements"
      },
      {
        number: "2",
        title: "AI Analysis",
        description: "Our AI analyzes and optimizes the content, suggesting improvements"
      },
      {
        number: "3",
        title: "Review & Approve",
        description: "Review and approve the enhanced job posting"
      },
      {
        number: "4",
        title: "Publish & Track",
        description: "Publish and track performance with our integrated analytics"
      },
      {
        number: "5",
        title: "Optimize",
        description: "Receive ongoing optimization suggestions based on real-time data"
      }
    ],
    
    ctaLink: "/pricing?helper=recruiting"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Recruiting;
