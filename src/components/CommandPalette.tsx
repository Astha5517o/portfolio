import React, { useState, useEffect } from 'react';
import { PROJECTS, RESEARCH_PAPERS, JOURNAL_ENTRIES } from '../data/portfolioData';
import { Search, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const CommandPalette: React.FC<Props> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPapers = RESEARCH_PAPERS.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-xl rounded-xl border border-gray-300 bg-white shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search className="w-4 h-4 text-[#1B5E20]" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, research proposals, certificates, or journal..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm focus:outline-none placeholder-gray-400 text-[#202124]"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-100 text-[#5F6368] border border-gray-200">
            ESC
          </kbd>
        </div>

        {/* Search Results */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4 text-xs">
          {/* Quick Sections */}
          <div>
            <p className="font-mono text-[10px] uppercase text-[#1B5E20] mb-2 font-bold">Quick Navigation</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {['overview', 'about', 'inspire', 'projects', 'research', 'certificates', 'achievements', 'journal', 'contact'].map(sec => (
                <button
                  key={sec}
                  onClick={() => handleSelect(sec)}
                  className="p-2 rounded bg-gray-50 border border-gray-200 hover:bg-gray-100 text-left capitalize font-medium text-[#202124] flex items-center justify-between"
                >
                  <span>{sec}</span>
                  <ArrowRight className="w-3 h-3 text-[#1B5E20]" />
                </button>
              ))}
            </div>
          </div>

          {/* Projects Match */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase text-[#1B5E20] mb-2 font-bold">Engineering Proposals ({filteredProjects.length})</p>
              <div className="space-y-1">
                {filteredProjects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect('projects')}
                    className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 hover:bg-gray-100 text-left flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-[#202124] text-xs">{p.title}</p>
                      <p className="text-[11px] text-[#5F6368]">{p.tagline}</p>
                    </div>
                    <Layers className="w-3.5 h-3.5 text-[#2F5D8C]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Match */}
          {filteredPapers.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase text-[#1B5E20] mb-2 font-bold">Research Papers ({filteredPapers.length})</p>
              <div className="space-y-1">
                {filteredPapers.map(r => (
                  <button
                    key={r.id}
                    onClick={() => handleSelect('research')}
                    className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 hover:bg-gray-100 text-left flex items-center justify-between"
                  >
                    <div>
                      <p className="font-bold text-[#202124] text-xs line-clamp-1">{r.title}</p>
                      <p className="text-[11px] text-[#5F6368]">{r.researchArea}</p>
                    </div>
                    <BookOpen className="w-3.5 h-3.5 text-[#1B5E20]" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
