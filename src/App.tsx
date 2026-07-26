import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { InspireAwardSection } from './components/InspireAwardSection';
import { Projects } from './components/Projects';
import { ResearchLibrary } from './components/ResearchLibrary';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { PhotoGallery } from './components/PhotoGallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { GithubReadmeModal } from './components/GithubReadmeModal';
import { CommandPalette } from './components/CommandPalette';
import { CvModal } from './components/CvModal';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Modals
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<Project | null>(null);
  const [selectedProjectForReadme, setSelectedProjectForReadme] = useState<Project | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cvOpen, setCvOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative font-sans bg-[#F8F9FA] text-[#202124] selection:bg-[#1B5E20] selection:text-white">
      {/* Clean Technical Grid Background */}
      <InteractiveBackground />

      {/* Header Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCv={() => setCvOpen(true)}
      />

      {/* Main Page Content */}
      <main className="relative z-10 space-y-4">
        <Hero onNavigate={handleNavigate} />
        <About />
        <InspireAwardSection />
        <Projects
          onSelectProject={(p) => setSelectedProjectForDetail(p)}
          onOpenReadme={(p) => setSelectedProjectForReadme(p)}
        />
        <ResearchLibrary />
        <Certificates />
        <Achievements />
        <Skills />
        <PhotoGallery />
        <Blog />
        <Contact onOpenCv={() => setCvOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProjectForDetail}
        isOpen={!!selectedProjectForDetail}
        onClose={() => setSelectedProjectForDetail(null)}
        onOpenReadme={(p) => {
          setSelectedProjectForDetail(null);
          setSelectedProjectForReadme(p);
        }}
      />

      {selectedProjectForReadme && (
        <GithubReadmeModal
          project={selectedProjectForReadme}
          isOpen={!!selectedProjectForReadme}
          onClose={() => setSelectedProjectForReadme(null)}
        />
      )}

      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <CvModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
      />
    </div>
  );
}
