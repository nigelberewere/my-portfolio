import { useState } from 'react';
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
    </ThemeProvider>
  );
}

export default App;