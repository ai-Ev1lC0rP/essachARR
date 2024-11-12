import React from 'react';
import { ShoppingBag, CreditCard, Box, Truck, BarChart, Users, Settings, Globe } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const Commerce: React.FC = () => {
  const solutionData = {
    title: "Commerce Suite",
    subtitle: "Complete E-commerce Solutions",
    description: "A comprehensive e-commerce platform that helps businesses sell online with powerful tools for inventory management, payments, shipping, and analytics.",
    
    features: [
      {
        icon: ShoppingBag,
        title: "Product Management",
        description: "Easy-to-use tools for managing products, variants, and inventory."
      },
      {
        icon: CreditCard,
        title: "Secure Payments",
        description: "Multiple payment options with advanced security features."
      },
      {
        icon: Box,
        title: "Inventory Control",
        description: "Real-time inventory tracking and management system."
      },
      {
        icon: Truck,
        title: "Shipping Integration",
        description: "Seamless integration with major shipping providers."
      },
      {
        icon: BarChart,
        title: "Sales Analytics",
        description: "Detailed reporting and analytics for business growth."
      },
      {
        icon: Users,
        title: "Customer Management",
        description: "Comprehensive CRM tools for customer relationships."
      },
      {
        icon: Settings,
        title: "Store Customization",
        description: "Flexible customization options for your online store."
      },
      {
        icon: Globe,
        title: "Multi-channel Selling",
        description: "Sell across multiple platforms and marketplaces."
      }
    ],
    
    stats: [
      {
        value: "2x",
        label: "Increase in Sales"
      },
      {
        value: "50%",
        label: "Reduced Operating Costs"
      },
      {
        value: "99.9%",
        label: "Platform Uptime"
      },
      {
        value: "24/7",
        label: "Customer Support"
      }
    ],
    
    steps: [
      {
        number: "1",
        title: "Store Setup",
        description: "Quick and easy setup of your online store."
      },
      {
        number: "2",
        title: "Product Upload",
        description: "Add your products with detailed information."
      },
      {
        number: "3",
        title: "Payment Configuration",
        description: "Set up secure payment methods and shipping."
      },
      {
        number: "4",
        title: "Store Launch",
        description: "Launch your store and start selling online."
      },
      {
        number: "5",
        title: "Growth & Optimization",
        description: "Monitor performance and optimize for growth."
      }
    ],
    
    benefits: [
      {
        title: "Increased Revenue",
        description: "Boost sales with powerful e-commerce tools and features."
      },
      {
        title: "Operational Efficiency",
        description: "Streamline operations with automated workflows."
      },
      {
        title: "Global Reach",
        description: "Expand your business to new markets worldwide."
      },
      {
        title: "Customer Satisfaction",
        description: "Provide excellent shopping experiences to customers."
      }
    ],
    
    ctaLink: "/pricing?solution=commerce"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default Commerce;
