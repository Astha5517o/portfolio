import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Diagrams', 'Prototype', 'Certificates'];

  const visibleItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          07. Engineering Visuals & Technical Schematics
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Diagrams & Lab Media
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Technical schematics, block diagrams, flowcharts, and prototype photographs.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-1.5 mb-6">
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-xs cursor-pointer hover:border-gray-300 transition-all"
          >
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1">
                <Maximize2 className="w-4 h-4" />
                <span>View Schematic</span>
              </div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-100 text-[#1B5E20] border border-gray-200 font-semibold">
                  {item.category}
                </span>
                <span className="font-mono text-[#5F6368] text-[11px]">{item.date}</span>
              </div>
              <h3 className="font-bold text-sm text-[#202124]">{item.title}</h3>
              <p className="text-xs text-[#5F6368] line-clamp-2">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative max-w-3xl w-full rounded-xl overflow-hidden border border-gray-300 bg-white text-[#202124]">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-[#F8F9FA] border-t border-gray-200 text-xs">
              <span className="font-mono text-[10px] text-[#1B5E20] font-bold uppercase">
                {activeItem.category}
              </span>
              <h3 className="text-base font-bold text-[#202124] mt-0.5">{activeItem.title}</h3>
              <p className="text-[#5F6368] mt-1">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
