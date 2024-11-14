# Solution Template Usage Guide

This directory contains the SolutionTemplate component which provides a consistent structure for solution pages.

## How to Use

1. Create a new solution component in the solutions directory
2. Import the template:
```typescript
import SolutionTemplate from '../templates/SolutionTemplate';
```

3. Define your solution-specific data following the SolutionPageProps interface
4. Return the template with your data:
```typescript
return <SolutionTemplate {...solutionData} />;
```

## Props Interface

```typescript
interface SolutionPageProps {
  // Main content
  title: string;
  subtitle: string;
  description: string;
  
  // Features section
  features: Feature[];
  
  // Stats section
  stats: Stat[];
  
  // How it works steps (optional)
  steps?: Step[];
  
  // Additional sections data (optional)
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  
  // Route for CTA
  ctaLink: string;
}
```

## Example Implementation

See Lumi.tsx for a complete example of how to implement the template.
