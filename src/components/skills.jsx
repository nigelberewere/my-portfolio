import AnimatedSection from './AnimatedSection';
import { skills } from '../data/skills.jsx';
import { skillsParticles } from '../data/particlesPresets';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js';
import { useMemo } from 'react';

const levelLabel = (value) => {
  if (value >= 90) return 'Expert';
  if (value >= 75) return 'Advanced';
  if (value >= 50) return 'Intermediate';
  return 'Familiar';
};

const SkillBar = ({ skill, active, index }) => (
  <div className="w-full">
    <div className="mb-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-accent">{skill.icon}</span>
        <span className="font-mono font-semibold text-heading">{skill.name}</span>
      </div>
      <span className="inline-flex items-center gap-2 rounded-full bg-panel px-3 py-1 text-sm font-mono text-text">
        <span className="font-semibold">{levelLabel(skill.level)}</span>
      </span>
    </div>

    <div className="h-3 w-full overflow-hidden rounded-full bg-panel">
      <div
        className="h-full rounded-full bg-accent relative overflow-hidden origin-left"
        style={{
          width: `${skill.level}%`,
          transformOrigin: 'left',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 1400ms cubic-bezier(.2,.8,.2,1) ${index * 120}ms`,
        }}
        aria-hidden
      >
        <div className="skill-fill-wave absolute inset-0 pointer-events-none" />
      </div>
    </div>
  </div>
);

export default function Skills() {
  // Observe the skills grid and trigger the fill animation once when visible
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  // compute active state per skill only when visible to avoid reflows
  const active = useMemo(() => isVisible, [isVisible]);

  return (
    <AnimatedSection id="skills" particlesOptions={skillsParticles}>
      <h2 className="section-heading">Skills</h2>
      <div ref={ref} className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} active={active} index={i} />
        ))}
      </div>
    </AnimatedSection>
  );
}