import { useState } from 'react';
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
import ProjectModal from './components/projectmodal';

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
          <meta name="description" content="Portfolio of Nigel Berewere, a Computer Science student and Full-Stack Developer from Zimbabwe. Specializes in Flutter, Firebase, React, and Java. Available for freelance and remote opportunities." />
          <meta name="keywords" content="Nigel Berewere, Full-Stack Developer, Flutter, Firebase, React, Java, Portfolio, Zimbabwe, Computer Science" />
          <meta name="author" content="Nigel Berewere" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nigelberewere.me/" />

          {/* Open Graph */}
          <meta property="og:title" content="Nigel Berewere — Full-Stack Developer & Computer Science Student" />
          <meta property="og:description" content="Portfolio of Nigel Berewere, Computer Science student and Full-Stack Developer from Zimbabwe." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nigelberewere.me/" />
          <meta property="og:image" content="https://nigelberewere.me/assets/images/og-image.png" />
          <meta property="og:image:width" content="1301" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nigel Berewere — Full-Stack Developer" />
          <meta name="twitter:description" content="Portfolio of Nigel Berewere, Computer Science student and Full-Stack Developer from Zimbabwe." />
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
          <OtherProjects onProjectClick={openModal} />
          <Contact />
        </main>
        <Footer />
        
        {modalProject && (
          <ProjectModal project={modalProject} onClose={closeModal} />
        )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;