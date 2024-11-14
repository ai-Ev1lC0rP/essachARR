import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import type { RenderResult } from '@testing-library/react';
import AnimatedSection from '../AnimatedSection';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveStyle(style: Record<string, any>): R;
    }
  }
}

describe('AnimatedSection', () => {
  let mockObserverCallback: IntersectionObserverCallback;
  let renderResult: RenderResult;
  
  beforeEach(() => {
    // Store the callback to trigger intersections
    (window.IntersectionObserver as jest.Mock).mockImplementation((callback) => {
      mockObserverCallback = callback;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
        takeRecords: () => []
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    renderResult?.unmount();
  });

  const simulateIntersection = (isIntersecting: boolean) => {
    act(() => {
      mockObserverCallback([
        {
          isIntersecting,
          boundingClientRect: {} as DOMRectReadOnly,
          intersectionRatio: isIntersecting ? 1 : 0,
          intersectionRect: {} as DOMRectReadOnly,
          rootBounds: null,
          target: document.createElement('div'),
          time: Date.now(),
        }
      ], {} as IntersectionObserver);
    });
  };

  it('renders children correctly', () => {
    renderResult = render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderResult = render(
      <AnimatedSection className="custom-class">
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(renderResult.container.firstChild).toHaveClass('custom-class');
  });

  it('applies transition styles', () => {
    renderResult = render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(renderResult.container.firstChild).toHaveClass('transition-all');
    expect(renderResult.container.firstChild).toHaveClass('duration-1000');
  });

  it('applies initial transform and updates on intersection', () => {
    renderResult = render(
      <AnimatedSection direction="left">
        <div>Test Content</div>
      </AnimatedSection>
    );

    // Initial state (not intersecting)
    expect(renderResult.container.firstChild).toHaveStyle({
      opacity: '0',
      transform: 'translateX(30px)'
    });

    // Simulate intersection
    simulateIntersection(true);

    // After intersection
    expect(renderResult.container.firstChild).toHaveStyle({
      opacity: '1',
      transform: 'translate(0)'
    });
  });

  it('applies delay when specified', () => {
    renderResult = render(
      <AnimatedSection delay={500}>
        <div>Test Content</div>
      </AnimatedSection>
    );
    expect(renderResult.container.firstChild).toHaveStyle({
      transitionDelay: '500ms'
    });
  });

  it('handles triggerOnce properly', () => {
    renderResult = render(
      <AnimatedSection triggerOnce={true}>
        <div>Test Content</div>
      </AnimatedSection>
    );

    // Simulate intersection
    simulateIntersection(true);

    expect(renderResult.container.firstChild).toHaveStyle({
      opacity: '1',
      transform: 'translate(0)'
    });

    // Simulate leaving viewport
    simulateIntersection(false);

    // Should still be visible due to triggerOnce
    expect(renderResult.container.firstChild).toHaveStyle({
      opacity: '1',
      transform: 'translate(0)'
    });
  });
});
