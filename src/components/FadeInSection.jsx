import React, { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger as soon as 10% is visible
        rootMargin: "-10% 0px -10% 0px" // Shrink intersection bounds slightly to prevent jumping
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100 blur-0" 
          : "opacity-0 translate-y-20 scale-95 blur-md pointer-events-none"
      }`}
      style={{
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </div>
  );
}
