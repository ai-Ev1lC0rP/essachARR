import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedSection from '../AnimatedSection';

describe('AnimatedSection', () => {
  it('renders children correctly', () => {
    render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedSection className="custom-class">
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies transition styles', () => {
    const { container } = render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(container.firstChild).toHaveClass('transition-all');
    expect(container.firstChild).toHaveClass('duration-1000');
  });

  it('applies direction-specific transform', () => {
    const { container } = render(
      <AnimatedSection direction="left">
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(container.firstChild).toHaveStyle({
      transform: 'translateX(30px)',
      opacity: '0'
    });
  });

  it('applies delay when specified', () => {
    const { container } = render(
      <AnimatedSection delay={500}>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(container.firstChild).toHaveStyle({
      transitionDelay: '500ms'
    });
  });
});
