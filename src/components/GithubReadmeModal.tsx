import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { Project } from '../types';
import {
  X,
  Github,
  GitBranch,
  Copy,
  Check,
  BookOpen,
  Folder,
  ExternalLink
} from 'lucide-react';

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const GithubReadmeModal: React.FC<Props> = ({ project, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'readme' | 'files'>('readme');

  if (!isOpen) return null;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(`git clone ${project.githubUrl || 'https://github.com/Astha5517o'}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl rounded-xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-6">
        {/* Header Bar - Clean GitHub Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-[#202124]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#5F6368]">Astha5517o /</span>
                <span className="font-mono font-bold text-sm text-[#202124]">{project.id}</span>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/20 font-semibold">
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-[#5F6368]">{project.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-medium rounded bg-white text-[#202124] border border-gray-200 hover:bg-gray-50"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-gray-200 text-[#5F6368]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-2.5 border-b border-gray-200 bg-gray-50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3 text-[#5F6368]">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5 text-[#1B5E20]" />
              <span>main</span>
            </span>
            <span>Public Repository</span>
          </div>

          <button
            onClick={handleCopyClone}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-gray-200 text-[#202124] hover:bg-gray-50 font-mono text-[11px]"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#1B5E20]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Clone Command!' : `git clone ${project.id}`}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-gray-200 flex gap-4 text-xs font-medium bg-white">
          <button
            onClick={() => setActiveTab('readme')}
            className={`py-2.5 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'readme'
                ? 'border-[#1B5E20] text-[#1B5E20] font-bold'
                : 'border-transparent text-[#5F6368] hover:text-[#202124]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>README.md</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`py-2.5 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'files'
                ? 'border-[#1B5E20] text-[#1B5E20] font-bold'
                : 'border-transparent text-[#5F6368] hover:text-[#202124]'
            }`}
          >
            <Folder className="w-3.5 h-3.5" />
            <span>Repository Architecture</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {activeTab === 'readme' && (
            <div className="p-6 rounded-lg bg-[#F8F9FA] border border-gray-200 text-xs text-[#202124] leading-relaxed markdown-body">
              <Markdown>{project.readmeContent}</Markdown>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="p-6 rounded-lg bg-gray-900 text-gray-100 font-mono text-xs leading-relaxed">
              <div className="pb-2 mb-3 border-b border-gray-700 text-[#1B5E20] font-bold">
                Repository File Tree
              </div>
              <pre className="whitespace-pre-wrap text-emerald-300">
                {project.repoStructure}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-[#F8F9FA] flex items-center justify-between text-xs">
          <span className="font-mono text-[#5F6368]">
            MIT Academic License
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1B5E20] text-white font-medium hover:bg-[#134317]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
