import React, { useState } from 'react';
import { JOURNAL_ENTRIES } from '../data/portfolioData';
import { JournalEntry } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import Markdown from 'react-markdown';

export const Blog: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Learning Notes',
    'Engineering Ideas',
    'Project Updates',
    'Books',
    'Experiments',
    'School Activities',
    'Scholarship Journey'
  ];

  const visibleEntries = JOURNAL_ENTRIES.filter(
    (e) => selectedCategory === 'All' || e.category === selectedCategory
  );

  return (
    <section id="journal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          08. Student Field Notes & Reflections
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Research Journal
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Documenting learning notes, engineering ideas, experiments, school activities, and scholarship application reflections.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-[#1B5E20] text-white font-semibold'
                : 'bg-white text-[#5F6368] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Journal Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleEntries.map((entry) => (
          <div
            key={entry.id}
            onClick={() => setSelectedEntry(entry)}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2 py-0.5 font-mono text-[10px] rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20 font-semibold">
                  {entry.category}
                </span>
                <span className="font-mono text-[#5F6368] text-[11px]">
                  {entry.date} • {entry.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#202124] mb-2 leading-snug hover:text-[#1B5E20] transition-colors">
                {entry.title}
              </h3>

              <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                {entry.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {entry.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-mono bg-gray-100 text-[#202124] rounded border border-gray-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-[#1B5E20]">
              <span>Read Journal Entry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Entry Viewer Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1B5E20] uppercase">
                  {selectedEntry.category}
                </span>
                <h3 className="font-bold text-sm text-[#202124]">{selectedEntry.title}</h3>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-[#202124] leading-relaxed">
              <div className="text-xs text-[#5F6368] font-mono pb-3 border-b border-gray-100">
                Written by {selectedEntry.author} on {selectedEntry.date} • Class 11 Science
              </div>

              <div className="markdown-body">
                <Markdown>{selectedEntry.content}</Markdown>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
              <span className="font-mono text-[#5F6368]">
                Student Research Journal
              </span>
              <button
                onClick={() => setSelectedEntry(null)}
                className="px-4 py-1.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
