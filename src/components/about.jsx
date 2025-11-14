import AnimatedSection from './AnimatedSection';
import { aboutParticles } from '../data/particlesPresets';
import { TypeAnimation } from 'react-type-animation';
import { siteConfig } from '../data/config';

export default function About() {
  const aboutText = `I\u2019m Nigel Berewere, a Full-Stack Developer based in Zimbabwe.\n
I build web and mobile apps using HTML, CSS, JavaScript, Java, Flutter (Dart), and Firebase.\n
Notable projects: School Portal (student management), Intern↔Company Connector, Numbers (personal finance app), and Project & Staff Manager.\n
I care about clean architecture, accessibility, and performant UX. I enjoy collaborating on real-world solutions and publishing maintainable code.`;

  return (
    <AnimatedSection id="about" particlesOptions={aboutParticles}>
      <h2 className="section-heading">About Me</h2>

      <div className="flex flex-col items-center gap-8">
        {/* Terminal-like window */}
        <div className="w-full max-w-3xl rounded-lg border border-panel-border bg-panel text-text shadow-lg">
          {/* Window header (Linux-style) */}
          <div className="flex items-center gap-3 border-b border-panel-border px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500 shadow-inner" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-inner" />
              <span className="h-3 w-3 rounded-full bg-green-500 shadow-inner" />
            </div>
            <div className="ml-3 text-sm font-mono text-panel-border/80">user@linux:~</div>
            <div className="ml-auto mr-2 text-sm font-mono text-panel-border/70">bash</div>
          </div>

          {/* Terminal content area */}
          <div className="p-6">
            <TypeAnimation
              sequence={[aboutText, 1000]}
              wrapper="pre"
              cursor={true}
              speed={40}
              className="whitespace-pre-wrap font-mono text-sm leading-relaxed"
            />

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-accent bg-accent px-4 py-2 font-mono text-sm font-semibold text-background transition-all hover:bg-accent-hover"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}