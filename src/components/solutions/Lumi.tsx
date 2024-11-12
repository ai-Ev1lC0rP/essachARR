import React from 'react';
import { 
  Brain, 
  Clock, 
  Dumbbell, 
  MessageSquare, 
  Calendar, 
  Utensils, 
  Book, 
  Zap 
} from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Lumi: React.FC = () => {
  const solutionData = {
    title: "Meet Lumi",
    subtitle: "Your AI Personal Development Assistant",
    description: "Your reliable companion for personal growth. Whether you're planning meals, organizing study schedules, or designing workout routines, Lumi is here to elevate your journey towards self-improvement. Always available, always supportive.",
    
    stats: [
      {
        value: "3x",
        label: "more effective than standard AI tools"
      },
      {
        value: "GPT-5o",
        label: "latest in advanced LLM technology"
      },
      {
        value: "30,487",
        label: "additional data-points for optimal guidance"
      },
      {
        value: "180ms",
        label: "average response time"
      }
    ],
    
    features: [
      {
        icon: Utensils,
        title: "Meal Planning",
        description: "Create high-protein meal plans and energy-boosting nutrition guides tailored to your goals"
      },
      {
        icon: Book,
        title: "Study Scheduling",
        description: "Build effective study routines with active recall techniques for optimal learning"
      },
      {
        icon: Dumbbell,
        title: "Fitness Programs",
        description: "Design personalized workout plans for muscle gain and overall fitness improvement"
      },
      {
        icon: Calendar,
        title: "Life Balance",
        description: "Create balanced schedules that integrate all aspects of your personal development"
      },
      {
        icon: Brain,
        title: "Adaptive Learning",
        description: "Uses advanced AI to adapt personal growth plans based on your needs and progress"
      },
      {
        icon: Clock,
        title: "24/7 Availability",
        description: "Always ready to assist with your personal development needs within seconds"
      },
      {
        icon: MessageSquare,
        title: "Personalized Support",
        description: "Understands your preferences and goals for tailored guidance"
      },
      {
        icon: Zap,
        title: "Quick Results",
        description: "Efficient and effective solutions for rapid personal growth"
      }
    ],
    
    benefits: [
      {
        title: "Intelligent Guidance",
        description: "Lumi provides answers tailored to your unique needs and growth path"
      },
      {
        title: "Seamless Integration",
        description: "Integrates with your resources and daily routine for precise assistance"
      },
      {
        title: "Continuous Enhancement",
        description: "Learns from your feedback to provide increasingly personalized support"
      },
      {
        title: "Comprehensive Support",
        description: "From nutrition to fitness to study habits, Lumi covers all aspects of personal development"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Share Your Goals",
        description: "Tell Lumi about your personal development objectives"
      },
      {
        number: "2",
        title: "Get Tailored Plans",
        description: "Receive customized strategies for your specific needs"
      },
      {
        number: "3",
        title: "Track Progress",
        description: "Monitor your advancement with Lumi's insights"
      },
      {
        number: "4",
        title: "Adapt & Improve",
        description: "Adjust plans based on your feedback and results"
      },
      {
        number: "5",
        title: "Achieve Goals",
        description: "Reach your personal development targets effectively"
      }
    ],
    
    ctaLink: "/pricing?helper=lumi"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Lumi;
