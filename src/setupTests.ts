import '@testing-library/jest-dom';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
  takeRecords: () => [],
});

window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
window.scrollTo = jest.fn();

// Extend window interface to avoid TypeScript errors
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
  }
}
