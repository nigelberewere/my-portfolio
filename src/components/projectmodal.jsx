import { useEffect } from 'react';
import DeviceFrame from './deviceframe';
import Prism from 'prismjs';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import '../prism-theme.css'; // Import custom Prism theme

export default function ProjectModal({ project, onClose }) {
  // Handle keyboard escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Highlight code snippets
    Prism.highlightAll();

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const renderContent = (content) => {
    if (content.type === 'text') {
      return <p className="mb-4 text-text">{content.value}</p>;
    }
    if (content.type === 'code') {
      return (
        <div className="my-4 overflow-hidden rounded-md">
          <pre>
            <code className={`language-${content.lang}`}>{content.value}</code>
          </pre>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-panel-border bg-panel shadow-2xl"
        onClick={handleModalClick}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-panel-border p-4">
          <h2 className="text-2xl font-bold text-heading">{project.title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-text transition-colors hover:bg-background hover:text-accent"
            aria-label="Close project details"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="mb-6 flex justify-center">
            <DeviceFrame
              type={project.device || 'macbook'}
              src={project.links?.demo || project.image}
              useIframe={Boolean(project.links?.demo)}
              title={project.title}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background px-3 py-1 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert mt-6 max-w-none">
            <h3 className="font-mono text-lg font-bold text-accent">
              Problem
            </h3>
            <p>{project.problem}</p>

            <h3 className="mt-6 font-mono text-lg font-bold text-accent">
              Solution
            </h3>
            {/* Render dynamic solution content */}
            {project.solution.map((item, index) => (
              <div key={index}>{renderContent(item)}</div>
            ))}

            <h3 className="mt-6 font-mono text-lg font-bold text-accent">
              Impact
            </h3>
            <p>{project.impact}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-shrink-0 items-center justify-end space-x-4 border-t border-panel-border p-4">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-panel-border bg-background px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub />
              <span>Repository</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-accent bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}