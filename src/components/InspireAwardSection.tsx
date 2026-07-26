import React from 'react';
import { INSPIRE_PROJECTS } from '../data/portfolioData';
import { Award, Compass, Cpu, Droplets, Car, CheckCircle2, FileText } from 'lucide-react';

export const InspireAwardSection: React.FC = () => {
  return (
    <section id="inspire" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider">
            02. Department of Science & Technology Scheme
          </span>
          <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20">
            Selected Twice
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          INSPIRE Award Proposals & Concepts
        </h2>
        <p className="text-sm text-[#5F6368] mt-1 max-w-2xl">
          Selected twice under the Innovation in Science Pursuit for Inspired Research (INSPIRE) Award MANAK Scheme by the Department of Science and Technology (DST), Government of India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INSPIRE_PROJECTS.map((project) => {
          const isSoil = project.id.includes('soil');
          return (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-medium border ${
                    isSoil
                      ? 'bg-[#1B5E20]/10 text-[#1B5E20] border-[#1B5E20]/20'
                      : 'bg-[#2F5D8C]/10 text-[#2F5D8C] border-[#2F5D8C]/20'
                  }`}>
                    {isSoil ? <Droplets className="w-3.5 h-3.5" /> : <Car className="w-3.5 h-3.5" />}
                    <span>{project.projectArea}</span>
                  </span>

                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-gray-100 text-[#5F6368] border border-gray-200">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#202124] mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Details */}
                <div className="space-y-2 mb-4 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-mono font-medium text-[#202124] uppercase tracking-wider block">
                    Concept Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#202124]">
                    {project.conceptDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isSoil ? 'text-[#1B5E20]' : 'text-[#2F5D8C]'
                        }`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Schematic Label */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#5F6368]">
                <span className="font-mono text-[11px] flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-gray-400" />
                  {project.diagramType}
                </span>
                <span className="font-semibold text-[#1B5E20]">DST INSPIRE Scheme</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
