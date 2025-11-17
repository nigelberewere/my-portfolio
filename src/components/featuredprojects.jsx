import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/projects.js';

export default function FeaturedProjects({ onProjectClick }) {
  return (
    <AnimatedSection id="projects">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <AnimatedSection key={project.id}>
            <ProjectCard
              project={project}
              reverse={index % 2 !== 0}
              onProjectClick={() => onProjectClick(project)}
            />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}