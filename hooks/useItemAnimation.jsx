import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const useItemAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // Ensure ref is available

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => controls.start("visible")); // Ensure it's executed properly
          } else {
            requestAnimationFrame(() => controls.start("hidden"));
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]); // Depend on `controls` to avoid stale closures

  return { ref, controls };
};

export default useItemAnimation;
