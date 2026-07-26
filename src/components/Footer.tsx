import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-4 sm:px-6 lg:px-8 z-10 text-xs text-[#202124]">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-100">
          <div>
            <span className="font-bold text-sm text-[#202124] block mb-1">Astha</span>
            <p className="text-[#5F6368] leading-relaxed">
              Student Researcher & Engineering Enthusiast studying in Class 11 Science at PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab, India.
            </p>
          </div>

          <div>
            <span className="font-mono font-bold text-xs text-[#1B5E20] uppercase tracking-wider block mb-2">
              Sections
            </span>
            <div className="grid grid-cols-2 gap-1 text-[#5F6368]">
              {['overview', 'about', 'inspire', 'projects', 'research', 'certificates', 'achievements', 'journal', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="text-left hover:text-[#202124] capitalize py-0.5"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono font-bold text-xs text-[#2F5D8C] uppercase tracking-wider block mb-2">
              Repositories & Contact
            </span>
            <div className="space-y-1.5 text-[#5F6368]">
              <a
                href="https://github.com/Astha5517o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#202124]"
              >
                <Github className="w-3.5 h-3.5 text-[#202124]" />
                <span>github.com/Astha5517o</span>
              </a>
              <a
                href="mailto:astha5517o@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#202124]"
              >
                <Mail className="w-3.5 h-3.5 text-[#1B5E20]" />
                <span>astha5517o@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#5F6368]">
          <p>© {new Date().getFullYear()} Astha. PM Shri Kendriya Vidyalaya Saraikhas, Punjab, India.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded border border-gray-200 bg-gray-50 text-[#202124] hover:bg-gray-100"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
