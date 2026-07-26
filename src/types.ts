export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'Concept Stage' | 'Research Stage' | 'Under Development' | 'Completed Concept';
  category: 'Environmental Engineering' | 'Artificial Intelligence' | 'Agricultural Innovation' | 'Road Safety';
  isInspireAward?: boolean;
  featured: boolean;
  coverImage: string;
  githubUrl?: string;
  paperUrl?: string;
  
  // Structured Scientific / Engineering Research Proposal Format
  problemStatement: string;
  backgroundResearch: string;
  whyItMatters: string;
  existingApproaches: string;
  myConcept: string;
  possibleAdvantages: string[];
  currentLimitations: string[];
  futureResearch?: string[];
  futureRoadmap?: string[];
  technologyReadinessLevel: string; // e.g., 'TRL 2 - Concept Formulated', 'TRL 3 - Proof of Concept'
  sdgAlignment: string[]; // e.g., ['SDG 6: Clean Water', 'SDG 11: Sustainable Cities']
  references: string[];
  
  // Legacy / UI compatibility fields
  problem: string;
  solution: string;
  innovationHighlights: string[];
  expectedImpact: string;
  researchSummary: string;
  developmentStage?: string;
  timeline: { date: string; title: string; description: string }[];
  galleryImages: { url: string; caption: string }[];
  readmeContent: string;
  repoStructure?: string;
  screenshots?: string[];
  developmentProgress?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  researchQuestion: string;
  methodology: string;
  conceptStage: string;
  keywords: string[];
  downloadUrl: string;
  lastUpdated: string;
  researchArea: 'Environmental Engineering' | 'Artificial Intelligence' | 'Agricultural Innovation' | 'Road Safety';
  sdgAlignment: string[];
  authors: string[];
  relatedProjectId?: string;
  pdfContentSummary: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Research' | 'Technical' | 'Engineering' | 'Academic';
  description: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: 'Academic' | 'INSPIRE Award' | 'Scouts & Guides' | 'Competition' | 'Sports';
  description: string;
  impactHighlight: string;
  certificateUrl?: string;
  badgeText: string;
  statusText?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'Academic' | 'Government Award' | 'Research Seminar' | 'Sports' | 'Scouts & Guides';
  previewUrl?: string;
  downloadUrl?: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Diagrams' | 'Schematics' | 'Certificates' | 'Prototype' | 'Blueprints';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  summary: string;
  category: 'Learning Notes' | 'Engineering Ideas' | 'Project Updates' | 'Books' | 'Experiments' | 'School Activities' | 'Scholarship Journey';
  topics: string[];
  content: string;
  author: string;
}

export interface InspireProject {
  id: string;
  title: string;
  description: string;
  status: string; // 'INSPIRE Award Participant'
  projectArea: string; // 'Agricultural Innovation', 'Road Safety'
  conceptDetails: string[];
  diagramType: string;
}
