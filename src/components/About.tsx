import React from 'react';
import { ASTHA_PROFILE } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  BookOpen,
  Compass,
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          01. Background & Academic Context
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          About Astha
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column - Academic Overview */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3.5 pb-3 border-b border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 border border-[#1B5E20]/20 flex items-center justify-center text-[#1B5E20] shrink-0 font-bold font-mono text-lg">
                A
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">Astha</h3>
                <p className="text-xs text-[#5F6368]">Student Researcher & Engineering Enthusiast</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-[#202124]">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">School</span>
                  <span className="text-[#5F6368]">PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#2F5D8C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Academic Stream</span>
                  <span className="text-[#5F6368]">Class 11 Science (Physics, Chemistry, Mathematics, CS)</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Location</span>
                  <span className="text-[#5F6368]">Jalandhar, Punjab, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Interests Tag Box */}
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
            <span className="text-xs font-mono font-medium text-[#2F5D8C] uppercase tracking-wider block mb-2">
              Core Academic Interests
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ASTHA_PROFILE.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded bg-gray-100 text-[#202124] border border-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Written Narrative */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-gray-200 shadow-xs space-y-4 text-sm sm:text-base text-[#202124] leading-relaxed">
            <h3 className="text-lg font-bold text-[#202124] flex items-center gap-2 pb-3 border-b border-gray-100">
              <Compass className="w-5 h-5 text-[#1B5E20]" />
              <span>Student Background & Approach</span>
            </h3>

            {ASTHA_PROFILE.aboutText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#202124]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Academic Principles */}
          <div className="p-6 rounded-xl bg-[#F8F9FA] border border-gray-200 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#1B5E20] uppercase tracking-wider">
              Research & Academic Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#202124]">
              <div className="flex items-start gap-2 p-2.5 bg-white rounded border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Evidence-Based</span>
                  <span className="text-[#5F6368]">Documenting observations, data logs, and literature references.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 bg-white rounded border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#2F5D8C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Humble Learning</span>
                  <span className="text-[#5F6368]">Recognizing limitations and evaluating next research steps.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 bg-white rounded border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Community Focus</span>
                  <span className="text-[#5F6368]">Addressing agricultural water, urban drains, and local road safety.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 bg-white rounded border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#2F5D8C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Open Science</span>
                  <span className="text-[#5F6368]">Sharing project code and research summaries on GitHub.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
