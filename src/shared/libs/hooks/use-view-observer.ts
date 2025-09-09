import { useEffect, useRef, useState } from "react";

export const useViewObserver = () => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return {
    isInView,
    observerRef,
  };
};
