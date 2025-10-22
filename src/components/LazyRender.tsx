import { useState, useRef, useEffect, ReactNode, useCallback } from "react";

interface LazyRenderProps {
  children: ReactNode;
}

export function LazyRender({ children }: LazyRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observeElement = useCallback(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(currentElement);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  useEffect(() => {
    const cleanup = observeElement();

    return cleanup;
  }, [observeElement]);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: "300px" }} />}
    </div>
  );
}
