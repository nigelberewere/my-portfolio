import { FiGithub, FiExternalLink } from 'react-icons/fi';
import DeviceFrame from './deviceframe';

export default function ProjectCard({ project, reverse, onProjectClick }) {
  const firstSolution = project.solution && project.solution.length ? project.solution[0].value : null;
  const truncate = (text, n = 180) => {
    if (!text) return '';
    return text.length > n ? text.slice(0, n).trim() + '…' : text;
  };

  // make Intern Connector (or any project with `largeInCard: true`) show a larger device column
  const isLargeCard = project.id === 'intern-connector' || project.largeInCard === true;
  const deviceColClasses = isLargeCard ? 'flex-1 flex items-center justify-center md:flex-none md:w-3/5 lg:w-3/5' : 'flex-1 flex items-center justify-center md:flex-none md:w-1/2 lg:w-2/5';
  const detailColClasses = isLargeCard ? 'flex-1 md:w-2/5 lg:w-2/5 flex flex-col justify-center' : 'flex-1 md:w-1/2 lg:w-3/5 flex flex-col justify-center';

  const content = (
    <div className={`flex flex-col gap-6 md:flex-row md:gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Device preview */}
      <div className={deviceColClasses}>
        <DeviceFrame
          type={project.device || 'macbook'}
          src={project.links?.demo || project.image}
          useIframe={Boolean(project.links?.demo)}
          title={project.title}
        />
      </div>

      {/* Details beside the device */}
      <div className={detailColClasses}>
        <h3 className="mb-2 text-2xl font-bold text-heading">{project.title}</h3>

        <p className="mb-3 text-text">{truncate(project.description, 220)}</p>

        {project.problem && (
          <div className="mb-3 rounded-md border border-panel-border bg-panel p-4 text-text">
            <h4 className="mb-1 font-mono text-sm font-semibold text-accent">Problem</h4>
            <p className="text-sm text-text/90">{truncate(project.problem, 220)}</p>
          </div>
        )}

        {firstSolution && (
          <div className="mb-3">
            <h4 className="mb-1 font-mono text-sm font-semibold text-accent">Solution</h4>
            <p className="text-sm text-text/90">{truncate(firstSolution, 240)}</p>
          </div>
        )}

        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-panel px-3 py-1 font-mono text-xs text-accent">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={onProjectClick} className="font-mono text-sm font-medium text-accent hover:underline">
            View Details
          </button>
          <div className="h-4 w-px bg-panel-border" />
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
              className="text-text transition-colors hover:text-accent"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: plain content without tile */}
      <div className="block md:hidden">{content}</div>

      {/* Desktop/tablet: tiled glass panel */}
      <div
        tabIndex={0}
        className="hidden md:block rounded-xl border border-panel-border bg-panel/60 backdrop-blur-md p-10 md:p-12 lg:p-14 transition-shadow transform-gpu transition-transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        {content}
      </div>
    </>
  );
}