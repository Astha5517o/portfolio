import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Achievement } from '../types';
import { Award, ShieldCheck, CheckCircle2, Eye, X, GraduationCap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          06. Authentic Academic & Competition Record
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Academic Honors & Recognitions
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Honest, documented list of school academic achievements, DST government scheme selections, Governor distinctions, and sports medals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-100 text-[#202124] border border-gray-200 font-medium">
                  {item.category}
                </span>
                <span className="font-mono text-[#5F6368]">{item.year}</span>
              </div>

              <h3 className="text-base font-bold text-[#202124] mb-1 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs font-medium text-[#2F5D8C] mb-2">
                {item.organization}
              </p>

              <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1B5E20] flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                {item.impactHighlight}
              </span>

              {item.certificateUrl && (
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-[#2F5D8C] hover:underline font-mono text-[11px] flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Record</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative max-w-lg w-full rounded-xl bg-white border border-gray-300 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
              <div>
                <h3 className="font-bold text-sm text-[#202124]">{selectedItem.title}</h3>
                <p className="text-xs text-[#5F6368]">{selectedItem.organization}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#202124] mb-4 leading-relaxed">
              {selectedItem.description}
            </p>

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full py-2 rounded bg-[#1B5E20] text-white font-medium text-xs hover:bg-[#134317]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
