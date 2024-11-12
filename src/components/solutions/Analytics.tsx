import React from 'react';
import { BarChart, PieChart, LineChart, TrendingUp, Database, Search, Zap, Brain } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Analytics: React.FC = () => {
  const solutionData = {
    title: "Analytics Platform",
    subtitle: "Data-Driven Decision Making",
    description: "Transform your business data into actionable insights with our comprehensive analytics platform powered by advanced AI and machine learning.",
    
    features: [
      {
        icon: BarChart,
        title: "Advanced Reporting",
        description: "Customizable dashboards and reports for deep business insights."
      },
      {
        icon: PieChart,
        title: "Data Visualization",
        description: "Interactive charts and graphs for clear data representation."
      },
      {
        icon: LineChart,
        title: "Predictive Analytics",
        description: "AI-powered forecasting and trend analysis capabilities."
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Real-time monitoring of key performance indicators."
      },
      {
        icon: Database,
        title: "Data Integration",
        description: "Seamless integration with multiple data sources and formats."
      },
      {
        icon: Search,
        title: "Advanced Search",
        description: "Powerful search and filtering capabilities for data analysis."
      },
      {
        icon: Zap,
        title: "Real-time Processing",
        description: "Instant data processing and analysis capabilities."
      },
      {
        icon: Brain,
        title: "AI Insights",
        description: "Machine learning-powered insights and recommendations."
      }
    ],
    
    stats: [
      {
        value: "85%",
        label: "Faster Data Analysis"
      },
      {
        value: "3x",
        label: "More Accurate Predictions"
      },
      {
        value: "50%",
        label: "Reduction in Decision Time"
      },
      {
        value: "95%",
        label: "Data Processing Accuracy"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Data Integration",
        description: "Connect and integrate your data sources seamlessly."
      },
      {
        number: "2",
        title: "Data Processing",
        description: "Clean, process, and prepare data for analysis."
      },
      {
        number: "3",
        title: "Analysis Setup",
        description: "Configure analytics models and dashboards."
      },
      {
        number: "4",
        title: "Insight Generation",
        description: "Generate actionable insights from your data."
      },
      {
        number: "5",
        title: "Optimization",
        description: "Continuously optimize and refine analytics models."
      }
    ],
    
    benefits: [
      {
        title: "Data-Driven Decisions",
        description: "Make informed decisions based on accurate data and insights."
      },
      {
        title: "Improved Efficiency",
        description: "Streamline data analysis and reporting processes."
      },
      {
        title: "Predictive Power",
        description: "Anticipate trends and make proactive business decisions."
      },
      {
        title: "Complete Visibility",
        description: "Get a 360-degree view of your business performance."
      }
    ],
    
    ctaLink: "/pricing?solution=analytics"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Analytics;
