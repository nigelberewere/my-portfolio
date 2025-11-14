import AnimatedSection from './AnimatedSection';
import { skills } from '../data/skills.jsx';
import { skillsParticles } from '../data/particlesPresets';

const levelLabel = (value) => {
  if (value >= 90) return 'Expert';
  if (value >= 75) return 'Advanced';
  if (value >= 50) return 'Intermediate';
  return 'Familiar';
};

const SkillBar = ({ skill }) => (
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
        className="h-full rounded-full bg-accent transition-all duration-1000"
        style={{ width: `${skill.level}%` }}
        aria-hidden
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <AnimatedSection id="skills" particlesOptions={skillsParticles}>
      <h2 className="section-heading">Skills</h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </AnimatedSection>
  );
}