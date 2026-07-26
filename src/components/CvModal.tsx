import React from 'react';
import { ASTHA_PROFILE, ACHIEVEMENTS, PROJECTS, RESEARCH_PAPERS, SKILLS } from '../data/portfolioData';
import { X, Printer, FileText } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#1B5E20]" />
            <div>
              <h3 className="font-bold text-sm text-[#202124]">Astha | Student Academic Dossier</h3>
              <p className="text-[11px] text-[#5F6368]">PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded bg-[#1B5E20] text-white font-medium text-xs hover:bg-[#134317] flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Document Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-[#202124] leading-relaxed">
          {/* Document Header */}
          <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#202124] mb-0.5">ASTHA</h1>
              <p className="text-[#1B5E20] font-semibold text-xs">
                Student Researcher & Engineering Enthusiast
              </p>
              <p className="text-xs text-[#5F6368] mt-1">
                Class 11 Science (Physics, Chemistry, Mathematics, Computer Science)
              </p>
              <p className="text-xs text-[#5F6368]">
                PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab, India
              </p>
            </div>

            <div className="text-left sm:text-right text-xs font-mono space-y-0.5 text-[#5F6368]">
              <p>Email: astha5517o@gmail.com</p>
              <p>GitHub: github.com/Astha5517o</p>
            </div>
          </div>

          {/* Background Narrative */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B5E20] mb-2 border-b border-gray-100 pb-1">
              Background & Approach
            </h2>
            <p className="text-[#202124]">
              {ASTHA_PROFILE.aboutText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B5E20] mb-2 border-b border-gray-100 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-[#202124]">Class 11 Science (PCMB / CS)</h3>
                <p className="text-[#5F6368]">PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab</p>
                <p className="text-xs text-[#5F6368] mt-0.5">Subjects: Physics, Chemistry, Mathematics, Computer Science</p>
              </div>
              <span className="font-mono text-[#1B5E20] font-bold text-xs shrink-0">2024 – Present</span>
            </div>
          </div>

          {/* INSPIRE Award & Recognitions */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B5E20] mb-2 border-b border-gray-100 pb-1">
              Academic Recognitions & INSPIRE Scheme
            </h2>
            <div className="space-y-3">
              {ACHIEVEMENTS.map(item => (
                <div key={item.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-[#202124]">{item.title}</h3>
                    <p className="text-[#2F5D8C] text-xs font-medium">{item.organization}</p>
                    <p className="text-xs text-[#5F6368] mt-0.5">{item.description}</p>
                  </div>
                  <span className="font-mono text-[#1B5E20] font-bold text-xs shrink-0 ml-4">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Proposals */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B5E20] mb-2 border-b border-gray-100 pb-1">
              Engineering Proposals & Repositories
            </h2>
            <div className="space-y-3">
              {PROJECTS.map(p => (
                <div key={p.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[#202124]">{p.title}</h3>
                    <span className="font-mono text-[#2F5D8C] text-xs">{p.status}</span>
                  </div>
                  <p className="text-[#5F6368] text-xs">{p.tagline}</p>
                  <p className="text-[#202124] text-xs mt-0.5">{p.myConcept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
          <span className="font-mono text-[#5F6368]">
            Verified Student Academic Record • Astha
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
