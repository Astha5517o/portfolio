import React, { useState } from 'react';
import { RESEARCH_PAPERS } from '../data/portfolioData';
import { ResearchPaper } from '../types';
import {
  BookOpen,
  FileText,
  Search,
  Tag,
  Calendar,
  Copy,
  Check,
  Eye,
  X,
  Globe,
  Award
} from 'lucide-react';

export const ResearchLibrary: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [copiedBib, setCopiedBib] = useState<string | null>(null);

  const visiblePapers = RESEARCH_PAPERS.filter((paper) => {
    return selectedArea === 'All' || paper.researchArea === selectedArea;
  });

  const handleCopyBibtex = (paper: ResearchPaper) => {
    const bibtex = `@article{astha2025${paper.id.replace(/-/g, '')},
  title={${paper.title}},
  author={${paper.authors.join(' and ')}},
  institution={PM Shri Kendriya Vidyalaya Saraikhas},
  year={${paper.lastUpdated}},
  note={Student Research Archive}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBib(paper.id);
    setTimeout(() => setCopiedBib(null), 2000);
  };

  return (
    <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          04. Student Scientific Research Archive
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Research Papers & Concept Manuscripts
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Formatted research archives documenting problem formulations, methodology, and preliminary lab results across environmental and road safety engineering.
        </p>
      </div>

      {/* Area Filters */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8">
        {['All', 'Environmental Engineering', 'Agricultural Innovation', 'Road Safety'].map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedArea === area
                ? 'bg-[#1B5E20] text-white shadow-xs font-semibold'
                : 'bg-white text-[#5F6368] hover:text-[#202124] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Research Paper List */}
      <div className="space-y-6">
        {visiblePapers.map((paper) => (
          <div
            key={paper.id}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20">
                  {paper.researchArea}
                </span>
                <span className="text-xs font-mono text-[#5F6368]">
                  {paper.conceptStage} • {paper.lastUpdated}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#202124] mb-2 leading-snug">
                {paper.title}
              </h3>

              {/* Author */}
              <p className="text-xs font-medium text-[#2F5D8C] mb-4">
                Author: {paper.authors.join(', ')}
              </p>

              {/* Abstract */}
              <div className="p-4 rounded-lg bg-[#F8F9FA] border border-gray-100 mb-4 space-y-2 text-xs text-[#202124]">
                <span className="font-mono font-semibold text-[#1B5E20] block">
                  ABSTRACT:
                </span>
                <p className="leading-relaxed text-[#5F6368]">
                  {paper.abstract}
                </p>
              </div>

              {/* Research Question & Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="font-mono font-semibold text-[#2F5D8C] block mb-1">
                    RESEARCH QUESTION:
                  </span>
                  <p className="text-[#202124] leading-relaxed">
                    {paper.researchQuestion}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="font-mono font-semibold text-[#1B5E20] block mb-1">
                    METHODOLOGY:
                  </span>
                  <p className="text-[#202124] leading-relaxed">
                    {paper.methodology}
                  </p>
                </div>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-[11px] font-mono text-[#5F6368]">Keywords:</span>
                {paper.keywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-gray-100 text-[#202124] rounded border border-gray-200">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPaper(paper)}
                  className="px-4 py-2 rounded-md font-medium bg-[#1B5E20] text-white hover:bg-[#134317] transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Full Paper Archive</span>
                </button>

                <button
                  onClick={() => handleCopyBibtex(paper)}
                  className="px-3 py-2 rounded-md font-mono bg-white text-[#202124] border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1"
                  title="Copy BibTeX Citation"
                >
                  {copiedBib === paper.id ? (
                    <Check className="w-3.5 h-3.5 text-[#1B5E20]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>BibTeX</span>
                </button>
              </div>

              <span className="text-xs font-mono text-[#5F6368]">
                PM Shri Kendriya Vidyalaya Archive
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Document Viewer Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#1B5E20]" />
                <span className="font-bold text-sm text-[#202124]">
                  Student Research Archive Viewer
                </span>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-[#202124] leading-relaxed">
              <div className="pb-4 border-b border-gray-200 text-center">
                <h2 className="text-lg font-bold text-[#202124] mb-1">
                  {selectedPaper.title}
                </h2>
                <p className="text-xs text-[#2F5D8C] font-semibold">
                  {selectedPaper.authors.join(', ')}
                </p>
                <p className="text-[11px] font-mono text-[#5F6368] mt-1">
                  PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab • {selectedPaper.lastUpdated}
                </p>
              </div>

              <div className="p-4 rounded bg-[#F8F9FA] border border-gray-200 text-xs">
                <span className="font-mono font-bold text-[#1B5E20] block mb-1">ABSTRACT</span>
                <p className="text-[#202124]">{selectedPaper.abstract}</p>
              </div>

              <div className="whitespace-pre-line text-xs font-mono text-[#202124] leading-relaxed p-4 bg-gray-50 rounded border border-gray-200">
                {selectedPaper.pdfContentSummary}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
              <span className="font-mono text-[#5F6368]">
                Open Access Research Archive
              </span>
              <button
                onClick={() => setSelectedPaper(null)}
                className="px-4 py-1.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
