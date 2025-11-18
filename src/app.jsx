import { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './hooks/usetheme.jsx';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import FeaturedProjects from './components/featuredprojects';
import OtherProjects from './components/otherprojects';
import Contact from './components/contact';
import Footer from './components/footer';
// Lazy load the heavy modal component (code-split until needed)
const ProjectModal = lazy(() => import('./components/projectmodal'));

function App() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <ThemeProvider>
      <>
        <Helmet>
          <title>Nigel Berewere — Full-Stack Developer & Computer Science Student</title>
          <meta name="description" content="Full‑stack developer building web & mobile apps with Flutter, React, Firebase, and Java. Open to freelance and remote opportunities." />
          <meta name="keywords" content="Nigel Berewere, Full-Stack Developer, Flutter, Firebase, React, Java, Portfolio, Zimbabwe, Computer Science" />
          <meta name="author" content="Nigel Berewere" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nigelberewere.me/" />
          {/* Favicon (NB logo assets) */}
          <link rel="icon" type="image/svg+xml" href="/assets/NB-logo/vector/default-monochrome.svg" />
          <link rel="apple-touch-icon" href="/assets/NB-logo/profile.png" sizes="192x192" />

          {/* Open Graph */}
          <meta property="og:title" content="Nigel Berewere — Full-Stack Developer & Computer Science Student" />
          <meta property="og:description" content="Full‑stack developer building web & mobile apps with Flutter, React, Firebase, and Java." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nigelberewere.me/" />
          <meta property="og:image" content="https://nigelberewere.me/assets/images/og-image.png" />
          <meta property="og:image:width" content="1301" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nigel Berewere — Full-Stack Developer" />
          <meta name="twitter:description" content="Full‑stack developer building web & mobile apps with Flutter, React, Firebase, and Java." />
          <meta name="twitter:image" content="https://nigelberewere.me/assets/images/og-image.png" />

          {/* Structured data (JSON-LD) */}
          <script type="application/ld+json">{
            `{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nigel Berewere",
              "url": "https://nigelberewere.me/",
              "jobTitle": "Full-Stack Developer",
              "sameAs": [
                "https://github.com/nigelberewere",
                "https://www.linkedin.com/in/nigelberewere/"
              ]
            }`
          }</script>
        </Helmet>

        <div className="flex min-h-screen flex-col bg-background text-text">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects onProjectClick={openModal} />
          <OtherProjects />
          <Contact />
        </main>
        <Footer />
        
        {modalProject && (
          <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">Loading...</div>}>
            <ProjectModal project={modalProject} onClose={closeModal} />
          </Suspense>
        )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;