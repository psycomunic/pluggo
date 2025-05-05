
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
      const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
      (el as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Function to add 3D tilt effect similar to Apple.com
export const addTiltEffect = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const element = el as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (centerY - y) / 20;
      const tiltY = (x - centerX) / 20;
      
      element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      element.style.transition = 'transform 0.1s linear';
    });
    
    el.addEventListener('mouseleave', () => {
      const element = el as HTMLElement;
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      element.style.transition = 'transform 0.5s ease';
    });
  });
  
  return () => {
    elements.forEach((el) => {
      el.removeEventListener('mousemove', () => {});
      el.removeEventListener('mouseleave', () => {});
    });
  };
};

// Add smooth scrolling effect
export const addSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
};

// Add Apple-like glass effect to elements
export const addGlassEffect = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    const element = el as HTMLElement;
    element.style.backdropFilter = 'blur(10px)';
    element.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    element.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
  });
};
