import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

export default function AnimatedSection({ id, children, className = '', particlesOptions = null }) {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleNode = useMemo(() => {
    if (!particlesOptions) return null;
    return (
      <Particles
        id={id ? `particles-${id}` : 'particles'}
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
    );
  }, [particlesOptions, particlesInit, id]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative scroll-animate ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {particleNode}
      <div className="relative z-10">{children}</div>
    </section>
  );
}