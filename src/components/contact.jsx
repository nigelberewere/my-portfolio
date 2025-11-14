import AnimatedSection from './AnimatedSection';
import ContactForm from './ContactForm';
import { contactParticles } from '../data/particlesPresets';

export default function Contact() {
  return (
    <AnimatedSection id="contact" particlesOptions={contactParticles}>
      <h2 className="section-heading">Get In Touch</h2>
      <p className="mx-auto mb-10 max-w-lg text-center text-lg">
        I'm currently open to new opportunities and collaborations. Whether you
        have a project in mind, a question, or just want to connect, feel free
        to reach out.
      </p>
      <div className="mx-auto max-w-xl rounded-md border border-panel-border bg-panel p-6 md:p-8">
        <ContactForm />
      </div>
    </AnimatedSection>
  );
}