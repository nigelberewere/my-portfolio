import AnimatedSection from './AnimatedSection';
import { otherProjects } from '../data/projects.js';
import { FiGithub } from 'react-icons/fi';

export default function OtherProjects({ onProjectClick }) {
  return (
    <AnimatedSection id="other-projects" className="py-20 md:py-28">
      <h2 className="section-heading">Other Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <AnimatedSection
            key={project.id}
            className="scroll-animate flex h-full"
          >
            <div className="flex w-full flex-col justify-between rounded-md border border-panel-border bg-panel p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent">
              <div>
                <h3 className="mb-2 text-xl font-bold text-heading">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-text">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text transition-colors hover:text-accent"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-accent hover:underline"
                    >
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}