import { TypeAnimation } from 'react-type-animation';
import { useCallback, useMemo, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FiArrowDown } from 'react-icons/fi';

const particlesConfig = {
  fpsLimit: 60,
  particles: {
    number: {
      // increase number so pattern is visible on large screens
      value: 60,
      density: { enable: true, area: 1000 },
    },
    color: { value: '#00ffc6' },
    shape: { type: ['circle'] },
    opacity: {
      // higher opacity for more visible particles
      value: 0.65,
      random: { enable: true, minimumValue: 0.2 },
      animation: { enable: false },
    },
    size: {
      // slightly larger sizes
      value: { min: 1, max: 4 },
      random: { enable: true, minimumValue: 0.8 },
      animation: { enable: false },
    },
    links: {
      enable: true,
      distance: 140,
      color: '#00ffc6',
      // make connecting lines more visible
      opacity: 0.12,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
      attract: { enable: false },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: { enable: true, mode: 'bubble' },
      onClick: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      bubble: { distance: 140, size: 8, duration: 2, opacity: 0.9 },
      repulse: { distance: 120, duration: 0.6 },
    },
  },
  detectRetina: true,
};

export default function Hero() {
  const [particleColor, setParticleColor] = useState('#00ffc6');

  const particlesInit = useCallback(async (engine) => {
    // Load the full tsparticles engine so all features are available
    await loadFull(engine);
  }, []);
  // Watch for theme changes by observing the `data-theme` attribute on <html>
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const updateColor = () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      const heading = getComputedStyle(root).getPropertyValue('--color-heading').trim();
      const accent = getComputedStyle(root).getPropertyValue('--color-accent').trim();
      setParticleColor(isLight ? (heading || accent || '#007a5f') : '#00ffc6');
    };

    updateColor();
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          updateColor();
        }
      }
    });
    obs.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  const particleOptions = useMemo(() => ({
    ...particlesConfig,
    particles: {
      ...particlesConfig.particles,
      color: { value: particleColor },
      links: { ...particlesConfig.particles.links, color: particleColor },
    },
  }), [particleColor]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
    >
      {/* Particle Background (only background) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0 z-0"
      />

      <div className="z-10 flex flex-col items-center px-6">
        <div className="w-full max-w-3xl p-6 relative">
          {/* --- SEO FIX START --- */}
          {/* Visible to crawlers and screen readers, hidden visually */}
          <h1 className="sr-only">Nigel Berewere - Full-Stack Developer (Java, Flutter, React)</h1>
          {/* --- SEO FIX END --- */}

          <div className="grid place-items-center">
            {/* Invisible placeholder to reserve space for the longest text + cursor */}
            <span className="invisible col-start-1 row-start-1 font-mono font-bold text-2xl md:text-4xl">
              &gt; full-stack developer (html, css, js, java, flutter)|
            </span>

            <TypeAnimation
              sequence={[
                "> hi, i'm Nigel Berewere",
                2000,
                "> full-stack developer (html, css, js, java, flutter)",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="col-start-1 row-start-1 font-mono font-bold text-2xl text-accent md:text-4xl"
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>

        {/* Lottie animation: keyboard with hands typing. */}
        {/* Drop the animation JSON at public/assets/lottie/keyboard-typing.json */}
        {/** Load at runtime so missing file won't break the build. */}
        {/** Accessible: aria-hidden since it's decorative; screen readers already have the sr-only H1. */}
        {/** Size: responsive container. */}
        <div className="mt-6 w-full flex justify-center">
          <div className="w-full max-w-md">
            {/** animationData is loaded in effect below and stored in state */}
            {/** If not available, this area will simply be empty */}
            {/** The fetch is done in an effect so build doesn't require the file */}
            {/** See the useEffect above for loading logic */}
            {/** Render Lottie when animationData is present */}
            {typeof window !== 'undefined' && (
              <AnimationLoader />
            )}
          </div>
        </div>

        <p className="mt-6 max-w-xl text-lg text-text md:text-xl">
          I build reliable web and mobile applications from concept to launch.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="flex w-full items-center justify-center rounded-md border border-accent bg-accent px-6 py-3 font-mono text-lg font-bold text-background transition-all hover:bg-accent-hover hover:shadow-lg sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="flex w-full items-center justify-center rounded-md border border-panel-border bg-panel px-6 py-3 font-mono text-lg font-bold text-accent transition-all hover:border-accent hover:shadow-lg sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down to about section"
      >
        <FiArrowDown size={24} className="text-accent" />
      </a>
    </section>
  );
}

// Small helper component to fetch and render the local animation JSON at runtime.
function AnimationLoader() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Fetch the exact filename the user provided. Use encodeURI to handle spaces.
    const url = encodeURI('/assets/lottie/Typing Guy.json');

    (async () => {
      try {
        const r = await fetch(url);
        if (!r.ok) throw new Error('Animation not found: ' + r.status);
        const json = await r.json();
        if (mounted) setAnimationData(json);
      } catch (err) {
        // Log to console to help debugging; do not throw (animation is optional)
        console.warn('Lottie animation failed to load:', err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      aria-hidden={true}
    />
  );
}