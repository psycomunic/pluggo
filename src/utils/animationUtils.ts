
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
        
        // Add staggered animation to child elements with stagger class
        const staggerItems = entry.target.querySelectorAll('.stagger-item');
        if (staggerItems.length > 0) {
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translateY(0)';
            }, 100 * index);
          });
        }
      }
    });
  }, observerOptions);

  // Wait for DOM to be fully loaded
  setTimeout(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });
  }, 100);

  return () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};

// Utility to create staggered animations
export const getStaggeredDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};

// Function to add hover effects
export const addHoverEffects = (elementSelector: string, effectClass: string) => {
  const elements = document.querySelectorAll(elementSelector);
  
  elements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.classList.add(effectClass);
    });
    
    el.addEventListener('mouseleave', () => {
      el.classList.remove(effectClass);
    });
  });
  
  return () => {
    elements.forEach((el) => {
      el.removeEventListener('mouseenter', () => {});
      el.removeEventListener('mouseleave', () => {});
    });
  };
};

// Function to create a pulse effect on elements
export const addPulseEffect = (elementSelector: string) => {
  const elements = document.querySelectorAll(elementSelector);
  
  elements.forEach((el, index) => {
    // Stagger the animation start
    setTimeout(() => {
      el.classList.add('animate-pulse-subtle');
    }, index * 300);
  });
};

// Function to trigger animations on page load
export const triggerEntranceAnimations = () => {
  const animationClasses = [
    'fade-in',
    'slide-in-right',
    'scale-in',
    'zoom-in'
  ];
  
  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el, index) => {
    const animationType = el.getAttribute('data-animate');
    if (animationClasses.includes(animationType || '')) {
      setTimeout(() => {
        el.classList.add(animationType || '');
      }, index * 100);
    }
  });
};

// Function to add parallax effect to elements
export const addParallaxEffect = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.parallax');
    elements.forEach((el) => {
      const scrollPosition = window.scrollY;
      const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
      (el as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
