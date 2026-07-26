import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { Award, Download, Eye, ExternalLink, Plus, FileCheck, CheckCircle2, Upload } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          05. Verified Certificates & Honors
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Certificates & Official Records
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Verified academic certificates, government scheme participation records, and seminar awards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${
              cert.isPlaceholder
                ? 'bg-dashed border-2 border-gray-300 bg-gray-50/50'
                : 'bg-white border-gray-200 shadow-xs hover:border-gray-300'
            }`}
          >
            {cert.isPlaceholder ? (
              <div className="flex flex-col items-center justify-center text-center py-8 space-y-3">
                <div className="p-3 rounded-full bg-gray-200 text-gray-500">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#202124]">{cert.title}</h3>
                  <p className="text-xs text-[#5F6368] mt-1">{cert.description}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-200 text-[#5F6368]">
                  Upcoming Certification Placeholder
                </span>
              </div>
            ) : (
              <div>
                {/* Certificate Preview Image */}
                {cert.previewUrl && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="aspect-video rounded-lg overflow-hidden border border-gray-200 mb-4 bg-gray-100 cursor-pointer group relative"
                  >
                    <img
                      src={cert.previewUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                      <Eye className="w-4 h-4" />
                      <span>Preview Certificate</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20 font-medium">
                    {cert.category}
                  </span>
                  <span className="font-mono text-[#5F6368]">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#202124] mb-1 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-[#2F5D8C] mb-2">
                  {cert.organization}
                </p>

                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Footer Buttons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-[#1B5E20] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.downloadUrl || '#'}
                    onClick={(e) => {
                      if (!cert.downloadUrl || cert.downloadUrl.startsWith('#')) {
                        e.preventDefault();
                        setSelectedCert(cert);
                      }
                    }}
                    className="text-[#5F6368] hover:text-[#202124] font-mono flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#1B5E20]" />
                <span className="font-bold text-sm text-[#202124]">
                  {selectedCert.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded hover:bg-gray-200 text-[#5F6368]"
              >
                ✕
              </button>
            </div>

            <div className="p-6 text-xs text-[#202124] space-y-4">
              {selectedCert.previewUrl && (
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                  <img
                    src={selectedCert.previewUrl}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="space-y-1">
                <p className="font-bold text-sm">{selectedCert.organization}</p>
                <p className="text-[#5F6368]">{selectedCert.description}</p>
                <p className="font-mono text-[11px] text-[#1B5E20] pt-2">
                  Issued: {selectedCert.date} • Verified Record
                </p>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
              <span className="font-mono text-[#5F6368]">
                PM Shri Kendriya Vidyalaya Student Record
              </span>
              <button
                onClick={() => setSelectedCert(null)}
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
