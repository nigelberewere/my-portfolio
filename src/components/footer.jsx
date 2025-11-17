import { siteConfig } from '../data/config';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-40 border-t border-panel-border">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-6 py-8 sm:flex-row">
        <div className="font-mono text-sm text-text">
          &copy; {new Date().getFullYear()} Nigel Berewere
        </div>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          {siteConfig.links?.github && (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text transition-colors hover:text-accent cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(siteConfig.links.github, '_blank', 'noopener,noreferrer');
              }}
            >
              <FaGithub size={20} />
            </a>
          )}
          {siteConfig.links?.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-text transition-colors hover:text-accent cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(siteConfig.links.linkedin, '_blank', 'noopener,noreferrer');
              }}
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {siteConfig.links?.twitter && (
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="text-text transition-colors hover:text-accent cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(siteConfig.links.twitter, '_blank', 'noopener,noreferrer');
              }}
            >
              <FaTwitter size={20} />
            </a>
          )}
          {siteConfig.links?.instagram && (
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-text transition-colors hover:text-accent cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(siteConfig.links.instagram, '_blank', 'noopener,noreferrer');
              }}
            >
              <FaInstagram size={20} />
            </a>
          )}
          {siteConfig.links?.facebook && (
            <a
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="text-text transition-colors hover:text-accent cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(siteConfig.links.facebook, '_blank', 'noopener,noreferrer');
              }}
            >
              <FaFacebook size={20} />
            </a>
          )}
          {siteConfig.email && (
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send Email"
              className="text-text transition-colors hover:text-accent pointer-events-auto"
            >
              <FaEnvelope size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}