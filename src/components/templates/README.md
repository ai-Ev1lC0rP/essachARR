# Solution Page Templates

This directory contains templates for creating new solution pages in the SHR Technology platform.

## Available Templates

### SolutionTemplate.tsx

A base template for creating solution pages with a consistent structure and styling. This template includes:

- Hero section with title and description
- Stats section for key metrics
- Features grid
- Optional "How It Works" section
- Optional Benefits section
- Call-to-Action section

## Usage

1. Create a new solution component in `src/components/solutions/`
2. Import and use the template structure:

```tsx
import React from 'react';
import { MessageSquare /* import other icons */ } from 'lucide-react';
import SolutionTemplate from '../templates/SolutionTemplate';

const YourSolution: React.FC = () => {
  // Define your solution's data
  const solutionData = {
    title: "Your Solution",
    subtitle: "Your Compelling Subtitle",
    description: "Your detailed solution description...",
    
    features: [
      {
        icon: MessageSquare,
        title: "Feature 1",
        description: "Feature description..."
      },
      // Add more features...
    ],
    
    stats: [
      {
        value: "3x",
        label: "Improvement metric"
      },
      // Add more stats...
    ],
    
    // Optional sections
    steps: [
      {
        number: "1",
        title: "Step 1",
        description: "Step description..."
      },
      // Add more steps...
    ],
    
    benefits: [
      {
        title: "Benefit 1",
        description: "Benefit description..."
      },
      // Add more benefits...
    ],
    
    ctaLink: "/pricing?helper=yoursolution"
  };

  return <SolutionTemplate {...solutionData} />;
};

export default YourSolution;
```

## Template Structure

The template uses TypeScript interfaces to ensure type safety:

```typescript
interface Feature {
  icon: Icon;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface SolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  stats: Stat[];
  steps?: Step[];
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  ctaLink: string;
}
```

## Best Practices

1. **Consistency**: Follow the established pattern for solution pages
2. **Icons**: Use Lucide icons to maintain visual consistency
3. **Styling**: Use the provided Tailwind classes for consistent styling
4. **TypeScript**: Leverage the provided interfaces for type safety
5. **Optional Sections**: Include steps and benefits sections only if relevant to your solution

## Customization

While the template provides a consistent structure, you can customize it by:

1. Adding new sections specific to your solution
2. Modifying the layout of existing sections
3. Adding custom styling classes
4. Extending the TypeScript interfaces for additional properties

Remember to maintain consistency with the overall design system while making customizations.
