// Particle presets for different sections

export const aboutParticles = {
  fpsLimit: 60,
  particles: {
    number: { value: 30, density: { enable: true, area: 800 } },
    color: { value: '#7dd3fc' },
    shape: { type: 'circle' },
    opacity: { value: 0.35, random: true },
    size: { value: { min: 1, max: 6 }, random: true },
    move: { enable: true, speed: 0.6, outModes: { default: 'out' } },
    links: { enable: false },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: { onHover: { enable: true, mode: 'bubble' } },
    modes: { bubble: { distance: 120, size: 8, duration: 2 } },
  },
  detectRetina: true,
};

export const skillsParticles = {
  fpsLimit: 60,
  particles: {
    number: { value: 45, density: { enable: true, area: 900 } },
    color: { value: '#f472b6' },
    shape: { type: 'circle' },
    opacity: { value: 0.2 },
    size: { value: { min: 0.8, max: 3 } },
    links: { enable: true, distance: 140, color: '#f472b6', opacity: 0.08, width: 1 },
    move: { enable: true, speed: 0.9, random: true, outModes: { default: 'out' } },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: { onHover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 100 } },
  },
  detectRetina: true,
};

export const projectsParticles = {
  fpsLimit: 60,
  particles: {
    number: { value: 22, density: { enable: true, area: 800 } },
    color: { value: '#fde68a' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: { min: 1, max: 5 }, random: true },
    links: { enable: false },
    move: { enable: true, speed: 0.5, outModes: { default: 'out' } },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: { onHover: { enable: false }, onClick: { enable: true, mode: 'push' } },
    modes: { push: { quantity: 4 } },
  },
  detectRetina: true,
};

export const contactParticles = {
  fpsLimit: 60,
  particles: {
    number: { value: 12 },
    color: { value: '#a78bfa' },
    shape: { type: 'circle' },
    opacity: { value: 0.18 },
    size: { value: { min: 1, max: 4 } },
    links: { enable: true, distance: 160, color: '#a78bfa', opacity: 0.06, width: 1 },
    move: { enable: true, speed: 0.4 },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: { onHover: { enable: true, mode: 'bubble' } },
    modes: { bubble: { distance: 120, size: 8 } },
  },
  detectRetina: true,
};
