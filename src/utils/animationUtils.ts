
// Utility function to handle scroll animations
export const observeScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};

// Utility to create staggered animations
export const getStaggeredDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};
