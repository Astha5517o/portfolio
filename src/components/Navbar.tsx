import React, { useState, useEffect } from 'react';
import {
  Search,
  FileText,
  Menu,
  X,
  Github,
  BookOpen,
  Award
} from 'lucide-react';

interface Props {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenSearch: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeSection,
  setActiveSection,
  onOpenSearch,
  onOpenCv
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'inspire', label: 'INSPIRE Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research Library' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'journal', label: 'Research Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2.5'
          : 'bg-[#F8F9FA]/90 backdrop-blur-sm border-b border-gray-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1B5E20] text-white flex items-center justify-center font-semibold text-sm shadow-sm group-hover:bg-[#134317] transition-colors">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#202124] text-sm sm:text-base tracking-tight">
                Astha
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20">
                Class 11 Science
              </span>
            </div>
            <p className="text-[11px] text-[#5F6368]">
              PM Shri Kendriya Vidyalaya Saraikhas, Punjab
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-0.5 bg-gray-100/80 p-1 rounded-lg border border-gray-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-white text-[#1B5E20] font-semibold shadow-xs border border-gray-200'
                    : 'text-[#5F6368] hover:text-[#202124] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-[#5F6368] hover:text-[#202124] hover:bg-gray-200 border border-gray-200 transition-colors"
            title="Search Projects & Research (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#2F5D8C]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline px-1 py-0.5 text-[10px] font-mono rounded bg-white text-[#5F6368] border border-gray-200">
              ⌘K
            </kbd>
          </button>

          {/* GitHub Direct Link */}
          <a
            href="https://github.com/Astha5517o"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-gray-200 text-[#202124] hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-[#202124]" />
            <span>GitHub</span>
          </a>

          {/* Download Dossier */}
          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-[#1B5E20] text-white hover:bg-[#134317] transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Academic Dossier</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-md border border-gray-200 bg-white text-[#202124]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-gray-200 bg-white px-4 py-3 space-y-2 mt-2 shadow-sm">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-left text-xs font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1B5E20]/10 text-[#1B5E20] font-semibold border border-[#1B5E20]/20'
                    : 'text-[#5F6368] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <a
              href="https://github.com/Astha5517o"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#5F6368] hover:text-[#202124]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Astha5517o</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
