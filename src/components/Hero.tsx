import React from 'react';
import { ASTHA_PROFILE } from '../data/portfolioData';
import {
  ArrowRight,
  BookOpen,
  Award,
  Github,
  FileText,
  ChevronDown,
  Compass,
  CheckCircle2,
  Code
} from 'lucide-react';

interface Props {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section
      id="overview"
      className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      {/* Student Affiliation Badge */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20">
          <Compass className="w-3.5 h-3.5 text-[#1B5E20]" />
          <span>Student Researcher • Class 11 Science</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#2F5D8C]/10 text-[#2F5D8C] border border-[#2F5D8C]/20">
          <Award className="w-3.5 h-3.5 text-[#2F5D8C]" />
          <span>INSPIRE Award Participant (Twice)</span>
        </span>
      </div>

      {/* Natural Greeting */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#202124] tracking-tight mb-4">
        {ASTHA_PROFILE.greeting}
      </h1>

      {/* Natural Introduction Tone */}
      <div className="space-y-4 max-w-3xl mb-8 text-base sm:text-lg text-[#202124] leading-relaxed font-normal">
        <p>
          {ASTHA_PROFILE.bioIntro}
        </p>
        <p className="text-[#5F6368]">
          {ASTHA_PROFILE.bioPhilosophy}
        </p>
      </div>

      {/* Key Academic & Institution Badges */}
      <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs mb-8 max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div>
          <span className="text-[#5F6368] font-mono block mb-0.5">INSTITUTION</span>
          <span className="font-semibold text-[#202124]">PM Shri Kendriya Vidyalaya Saraikhas</span>
        </div>
        <div>
          <span className="text-[#5F6368] font-mono block mb-0.5">ACADEMIC STREAM</span>
          <span className="font-semibold text-[#202124]">Class 11 Science (PCMB/CS)</span>
        </div>
        <div>
          <span className="text-[#5F6368] font-mono block mb-0.5">LOCATION</span>
          <span className="font-semibold text-[#202124]">Jalandhar, Punjab, India</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <button
          onClick={() => onNavigate('projects')}
          className="px-5 py-2.5 rounded-md font-medium text-xs bg-[#1B5E20] text-white hover:bg-[#134317] transition-colors shadow-xs flex items-center gap-2"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => onNavigate('research')}
          className="px-5 py-2.5 rounded-md font-medium text-xs bg-white text-[#202124] border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#2F5D8C]" />
          <span>Research Library</span>
        </button>

        <a
          href="https://github.com/Astha5517o"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md font-medium text-xs bg-white text-[#202124] border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <Github className="w-3.5 h-3.5 text-[#202124]" />
          <span>GitHub (Astha5517o)</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-start">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-1.5 text-xs text-[#5F6368] hover:text-[#202124] transition-colors"
        >
          <span>Read student background</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
