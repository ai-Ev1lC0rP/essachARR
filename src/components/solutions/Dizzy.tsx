import React from 'react';
import { Palette, Globe, Clock, Shield, Power, Database, TrendingUp, Layout } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Dizzy: React.FC = () => {
  const solutionData = {
    title: "Meet Dizzy",
    subtitle: "Your creative AI assistant",
    description: "Whether you need captivating social media posts, innovative campaign ideas, or eye-catching graphics, Dizzy is equipped with the expertise to elevate your brand.",
    
    stats: [
      { value: "4x", label: "more innovative ideas compared to basic tools*" },
      { value: "GPT-5o", label: "powering Dizzy with advanced creative capabilities*" },
      { value: "19,564", label: "visual and content data-points for enhanced creativity*" },
      { value: "170ms", label: "average response time*" }
    ],
    
    features: [
      {
        icon: TrendingUp,
        title: "More creative than conventional tools",
        description: "Grounded in rich data and expert design knowledge."
      },
      {
        icon: Clock,
        title: "Always accessible",
        description: "Fast. High-quality output every time."
      },
      {
        icon: Globe,
        title: "Go global with ease",
        description: "Communicate visually in any language."
      },
      {
        icon: Shield,
        title: "Simple to use",
        description: "Ideal for beginners and experts alike."
      },
      {
        icon: Power,
        title: "Built-in power-ups",
        description: "Boost productivity with integrated tools."
      },
      {
        icon: Database,
        title: "Synapse AI Integration",
        description: "Share assets, link media, and apply brand knowledge effortlessly."
      },
      {
        icon: Palette,
        title: "Visual Content Design",
        description: "Transform ideas into stunning content that drives engagement."
      },
      {
        icon: Layout,
        title: "Multimedia Strategy",
        description: "Develop comprehensive content strategies aligned with your brand."
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Share Vision",
        description: "Tell Dizzy about your creative needs"
      },
      {
        number: "2",
        title: "Get Ideas",
        description: "Receive AI-generated creative concepts"
      },
      {
        number: "3",
        title: "Refine",
        description: "Fine-tune the creative direction"
      },
      {
        number: "4",
        title: "Create",
        description: "Generate polished visual content"
      },
      {
        number: "5",
        title: "Iterate",
        description: "Perfect your content with AI feedback"
      }
    ],
    
    benefits: [
      {
        title: "Time Savings",
        description: "Create content in minutes, not hours"
      },
      {
        title: "Brand Consistency",
        description: "Maintain visual coherence across all media"
      },
      {
        title: "Creative Freedom",
        description: "Explore endless creative possibilities"
      },
      {
        title: "Quality Output",
        description: "Professional-grade content every time"
      }
    ],
    
    ctaLink: "/pricing?helper=dizzy"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Dizzy;
