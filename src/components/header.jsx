import { useState, useEffect } from 'react';
import { siteConfig } from '../data/config';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/usetheme.jsx';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="rounded-md px-3 py-2 font-mono text-sm font-medium text-text transition-colors hover:text-accent"
  >
    {children}
  </a>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToHash = (e, href) => {
    // allow normal behavior for external links
    if (!href || href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();

    // account for fixed header height
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    const offset = 12; // small gap under header
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const { theme } = useTheme();

  const logoSrc = theme === 'dark'
    ? '/assets/NB-logo/vector/default-monochrome-white.svg'
    : '/assets/NB-logo/vector/default-monochrome-black.svg';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
      ${
        isScrolled
          ? 'border-b border-panel-border bg-background/80 backdrop-blur-sm'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Left: Logo/Name using NB logo assets */}
        <a href="#" className="flex items-center text-lg font-bold text-heading">
          <img
            src={logoSrc}
            alt="Nigel Berewere logo"
            className="mr-3 w-10 h-10 object-contain"
          />
          <span>Nigel Berewere</span>
        </a>

        {/* Center: Desktop Nav */}
        <div className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={(e) => scrollToHash(e, link.href)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right: Socials & Theme Toggle */}
        <div className="hidden items-center space-x-4 md:flex">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-text transition-colors hover:text-accent"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-text transition-colors hover:text-accent"
          >
            <FiLinkedin size={20} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 rounded-md p-2 text-text transition-colors hover:bg-panel hover:text-accent"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX size={24} />
            ) : (
              <HiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute w-full border-b border-panel-border bg-background shadow-lg md:hidden">
          <div
            className="flex flex-col space-y-2 px-6 py-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToHash(e, link.href)}
                className="block rounded-md px-3 py-2 font-mono text-base font-medium text-text hover:bg-panel hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-text transition-colors hover:text-accent"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-text transition-colors hover:text-accent"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}