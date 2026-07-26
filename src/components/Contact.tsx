import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Download,
  CheckCircle2,
  MapPin,
  GraduationCap
} from 'lucide-react';

interface Props {
  onOpenCv: () => void;
}

export const Contact: React.FC<Props> = ({ onOpenCv }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Scholarship / University Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="mb-8 pb-4 border-b border-gray-200">
        <span className="text-xs font-mono font-medium text-[#1B5E20] uppercase tracking-wider block mb-1">
          09. Direct Academic Contact
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
          Contact & Academic Inquiries
        </h2>
        <p className="text-sm text-[#5F6368] mt-1">
          Open to connecting with university committees, scholarship programs, researchers, and scientific mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Information Panel */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs space-y-3 text-xs text-[#202124]">
            <h3 className="font-bold text-sm text-[#202124] pb-2 border-b border-gray-100">
              Direct Contact Channels
            </h3>

            <div className="flex items-start gap-3 pt-1">
              <Mail className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#5F6368] block font-mono text-[11px]">EMAIL</span>
                <a href="mailto:astha5517o@gmail.com" className="font-mono font-semibold text-[#202124] hover:underline">
                  astha5517o@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Github className="w-4 h-4 text-[#202124] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#5F6368] block font-mono text-[11px]">GITHUB</span>
                <a href="https://github.com/Astha5517o" target="_blank" rel="noopener noreferrer" className="font-mono font-semibold text-[#202124] hover:underline">
                  github.com/Astha5517o
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-[#2F5D8C] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#5F6368] block font-mono text-[11px]">INSTITUTION</span>
                <span className="font-semibold text-[#202124]">
                  PM Shri Kendriya Vidyalaya Saraikhas
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#5F6368] block font-mono text-[11px]">LOCATION</span>
                <span className="font-semibold text-[#202124]">
                  Jalandhar, Punjab, India
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F9FA] border border-gray-200 space-y-3 text-xs">
            <h4 className="font-bold text-[#202124]">Academic Dossier</h4>
            <p className="text-[#5F6368] leading-relaxed">
              Download complete academic record, INSPIRE scheme participation details, and research abstracts.
            </p>
            <button
              onClick={onOpenCv}
              className="w-full py-2.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Academic Dossier (PDF)</span>
            </button>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:col-span-7">
          <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#1B5E20] mx-auto" />
                <h3 className="text-lg font-bold text-[#202124]">Message Submitted</h3>
                <p className="text-xs text-[#5F6368]">
                  Thank you for your message, {formData.name}. Astha will review your inquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded bg-gray-100 text-[#202124] text-xs font-medium hover:bg-gray-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="text-base font-bold text-[#202124] mb-2">
                  Send Direct Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-[#202124] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-[#1B5E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#202124] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-[#1B5E20] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-[#202124] mb-1">
                      Organization / School
                    </label>
                    <input
                      type="text"
                      placeholder="University / Organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-[#1B5E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#202124] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-[#1B5E20] focus:outline-none"
                    >
                      <option>Scholarship / University Inquiry</option>
                      <option>Research Collaboration</option>
                      <option>Academic Mentorship</option>
                      <option>General Message</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-[#202124] mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Enter message details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:border-[#1B5E20] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded font-medium bg-[#1B5E20] text-white hover:bg-[#134317] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
