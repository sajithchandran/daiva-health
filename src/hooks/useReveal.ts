import { useEffect, useState } from 'react';

// Returns a callback ref and whether that element has scrolled into view (latches once true).
// A callback ref (rather than useRef) starts observing whenever the element attaches,
// including content that hydrates later inside a Suspense boundary.
export function useReveal<T extends Element>() {
  const [element, setElement] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!element || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, visible]);

  return [setElement, visible] as const;
}
