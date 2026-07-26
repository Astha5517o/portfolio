import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Research', 'Technical', 'Engineering', 'Academic'];

  const visibleSkills = SKILLS.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          07. Academic & Technical Competencies
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Skills & Technical Expertise
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Scientific research methodology, basic hardware circuit prototyping, CAD drafting, and software development.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-[#1B5E20] text-white font-semibold'
                : 'bg-white text-[#5F6368] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#202124]">
                {skill.name}
              </span>
              <span className="px-2 py-0.5 font-mono text-[10px] rounded bg-gray-100 text-[#2F5D8C] border border-gray-200">
                {skill.category}
              </span>
            </div>

            <p className="text-xs text-[#5F6368] leading-relaxed">
              {skill.description}
            </p>

            {/* Simple Clean Progress Bar */}
            <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full bg-[#1B5E20] rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
