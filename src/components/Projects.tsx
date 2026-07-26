import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  Layers,
  Search,
  Github,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Droplets,
  AlertCircle
} from 'lucide-react';

interface Props {
  onSelectProject: (project: Project) => void;
  onOpenReadme: (project: Project) => void;
}

export const Projects: React.FC<Props> = ({
  onSelectProject,
  onOpenReadme
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const visibleProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.myConcept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          03. Structured Research Proposals & Projects
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Engineering Proposals & GitHub Repositories
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Projects documented in standard engineering proposal structure, highlighting problem formulation, concept mechanics, limitations, and technology readiness levels (TRL).
        </p>
      </div>

      {/* Category & Search Controls */}
      <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['All', 'Environmental Engineering', 'Agricultural Innovation', 'Road Safety', 'Artificial Intelligence'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#1B5E20] text-white shadow-xs font-semibold'
                  : 'text-[#5F6368] hover:text-[#202124] hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search proposals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#1B5E20] text-[#202124]"
          />
        </div>
      </div>

      {/* Proposal Cards List */}
      <div className="space-y-6">
        {visibleProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Proposal Header Status & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded bg-gray-100 text-[#202124] border border-gray-200">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded ${
                      project.status === 'Research Stage'
                        ? 'bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20'
                        : project.status === 'Under Development'
                        ? 'bg-[#2F5D8C]/10 text-[#2F5D8C] border border-[#2F5D8C]/20'
                        : 'bg-amber-500/10 text-amber-800 border border-amber-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#5F6368]">
                    {project.technologyReadinessLevel}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-[#202124]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#2F5D8C]">
                      {project.tagline}
                    </p>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-gray-100 hover:bg-gray-200 text-[#202124] transition-colors border border-gray-200"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Problem Statement Summary */}
                <div className="p-3 rounded-lg bg-[#F8F9FA] border border-gray-100 mb-4 text-xs text-[#202124] space-y-1">
                  <span className="font-mono font-semibold text-[#1B5E20] block">
                    PROBLEM STATEMENT:
                  </span>
                  <p className="leading-relaxed text-[#5F6368]">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Concept Brief */}
                <div className="mb-4 text-xs text-[#202124] space-y-1">
                  <span className="font-mono font-semibold text-[#2F5D8C] block">
                    PROPOSED CONCEPT MECHANICS:
                  </span>
                  <p className="leading-relaxed">
                    {project.myConcept}
                  </p>
                </div>

                {/* Advantages & Limitations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100">
                    <span className="font-mono font-semibold text-[#1B5E20] block mb-1">
                      POSSIBLE ADVANTAGES:
                    </span>
                    <ul className="space-y-1 text-[#202124]">
                      {project.possibleAdvantages.slice(0, 3).map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B5E20] shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-100">
                    <span className="font-mono font-semibold text-amber-800 block mb-1">
                      CURRENT LIMITATIONS:
                    </span>
                    <ul className="space-y-1 text-[#202124]">
                      {project.currentLimitations.slice(0, 2).map((lim, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* UN SDGs */}
                {project.sdgAlignment && (
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    <span className="text-[11px] font-mono text-[#5F6368] mr-1">UN SDGs:</span>
                    {project.sdgAlignment.map((sdg, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-blue-50 text-[#2F5D8C] border border-blue-100 rounded">
                        {sdg}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-4 py-2 rounded-md font-medium bg-[#1B5E20] text-white hover:bg-[#134317] transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <span>Full Proposal Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenReadme(project)}
                  className="px-3.5 py-2 rounded-md font-medium bg-white text-[#202124] border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#2F5D8C]" />
                  <span>View Repository README</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
