type AnimationDelay = 100 | 200 | 300 | 400 | 500 | 600;

export function getAnimationClasses(delay: AnimationDelay = 100) {
  return `animate animate-delay-${delay} animate-fade-up`;
}

// This function can be used to initialize the intersection observer for fallback
export function initializeAnimations() {
  if (typeof window !== 'undefined' && !('animationTimeline' in CSS)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }
  return () => {};
}
