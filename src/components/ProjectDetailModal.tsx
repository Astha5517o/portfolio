import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  Github,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Droplets,
  ExternalLink
} from 'lucide-react';

interface Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenReadme: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<Props> = ({
  project,
  isOpen,
  onClose,
  onOpenReadme
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#1B5E20] uppercase">
              {project.category} • {project.technologyReadinessLevel}
            </span>
            <h2 className="text-lg font-bold text-[#202124]">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5 text-xs sm:text-sm text-[#202124] leading-relaxed">
          {/* Tagline */}
          <p className="text-xs font-semibold text-[#2F5D8C] pb-2 border-b border-gray-100">
            {project.tagline}
          </p>

          {/* Problem Statement */}
          <div className="p-4 rounded-lg bg-red-50/50 border border-red-100 space-y-1">
            <span className="font-mono font-bold text-red-900 text-xs block">
              1. PROBLEM STATEMENT
            </span>
            <p className="text-[#202124]">{project.problemStatement}</p>
          </div>

          {/* Background Research & Why it matters */}
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2 text-xs">
            <div>
              <span className="font-mono font-bold text-[#1B5E20] block mb-0.5">
                2. BACKGROUND RESEARCH
              </span>
              <p className="text-[#202124]">{project.backgroundResearch}</p>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <span className="font-mono font-bold text-[#2F5D8C] block mb-0.5">
                3. WHY THIS MATTERS
              </span>
              <p className="text-[#202124]">{project.whyItMatters}</p>
            </div>
          </div>

          {/* Existing Approaches vs My Concept */}
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs space-y-1">
              <span className="font-mono font-bold text-[#5F6368] block">
                4. EXISTING APPROACHES & LIMITATIONS
              </span>
              <p className="text-[#202124]">{project.existingApproaches}</p>
            </div>

            <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs space-y-1">
              <span className="font-mono font-bold text-[#1B5E20] block">
                5. PROPOSED CONCEPT & MECHANICS
              </span>
              <p className="text-[#202124]">{project.myConcept}</p>
            </div>
          </div>

          {/* Advantages vs Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <span className="font-mono font-bold text-[#1B5E20] block mb-2">
                POSSIBLE ADVANTAGES:
              </span>
              <ul className="space-y-1 text-[#202124]">
                {project.possibleAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B5E20] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-200">
              <span className="font-mono font-bold text-amber-900 block mb-2">
                CURRENT LIMITATIONS:
              </span>
              <ul className="space-y-1 text-[#202124]">
                {project.currentLimitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* References & SDGs */}
          <div className="p-4 rounded-lg bg-[#F8F9FA] border border-gray-200 text-xs space-y-2">
            <span className="font-mono font-bold text-[#202124] block">
              REFERENCES & UN SDG ALIGNMENT:
            </span>
            <ul className="list-disc pl-4 space-y-1 text-[#5F6368]">
              {project.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#202124] hover:underline font-mono"
            >
              <Github className="w-3.5 h-3.5 text-[#202124]" />
              <span>github.com/Astha5517o</span>
            </a>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenReadme(project)}
              className="px-3 py-1.5 rounded bg-gray-100 text-[#202124] border border-gray-200 hover:bg-gray-200 font-medium flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#2F5D8C]" />
              <span>README</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
