import { Project, ResearchPaper, Skill, Achievement, CertificateItem, GalleryItem, JournalEntry, InspireProject } from '../types';

export const ASTHA_PROFILE = {
  name: 'Astha',
  school: 'PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab, India',
  grade: 'Class 11 Science (Physics, Chemistry, Mathematics, Computer Science)',
  location: 'Jalandhar, Punjab, India',
  greeting: "Hi, I'm Astha.",
  bioIntro: "I enjoy exploring environmental engineering, artificial intelligence and practical innovation through research and project development.",
  bioPhilosophy: "My work focuses on understanding everyday problems and designing thoughtful solutions that could contribute to cleaner, safer and more sustainable communities.",
  aboutText: `I am currently studying in Class 11 Science (Physics, Chemistry, Mathematics, Computer Science) at PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar, Punjab, India.

Ever since I began asking how everyday systems work, curiosity has guided my exploration into environmental engineering, artificial intelligence, scientific research, sustainability, problem solving, and technology.

Living in Punjab, I have observed challenges ranging from agricultural water management and soil health to urban monsoon drain blockages and road safety during foggy winter nights. Rather than treating science as just textbook theory, I enjoy documenting ideas, formulating research questions, and developing early-stage concepts that address real-world community issues.`,
  interests: [
    'Environmental Engineering',
    'Artificial Intelligence',
    'Scientific Research',
    'Sustainability',
    'Problem Solving',
    'Technology'
  ],
  githubUrl: 'https://github.com/Astha5517o'
};

export const INSPIRE_PROJECTS: InspireProject[] = [
  {
    id: 'inspire-soil-moisture',
    title: 'Underground Soil Moisture Detection System',
    description: 'A concept developed to help farmers monitor soil moisture levels. The system detects underground moisture conditions and alerts farmers when irrigation may be needed, supporting efficient water use and healthier crop management.',
    status: 'INSPIRE Award Participant',
    projectArea: 'Agricultural Innovation',
    conceptDetails: [
      'Monitors sub-surface volumetric water content using capacitive sensing probes.',
      'Alerts farmers when soil moisture drops below field capacity thresholds.',
      'Reduces unnecessary groundwater extraction in agricultural zones.',
      'Designed to operate on low-power solar or battery power for rural fields.'
    ],
    diagramType: 'Capacitive Sub-Surface Probe & Microcontroller Alert Circuit'
  },
  {
    id: 'inspire-headlight-dimmer',
    title: 'Automatic Vehicle Headlight Dimming Concept',
    description: 'A concept aimed at improving road safety by automatically reducing headlight glare from oncoming vehicles, helping drivers maintain better visibility during night-time travel.',
    status: 'INSPIRE Award Participant',
    projectArea: 'Road Safety',
    conceptDetails: [
      'Detects light intensity from oncoming high-beam vehicle headlights.',
      'Automatically toggles internal relay/circuit from high beam to low beam.',
      'Restores high beam once oncoming vehicle passes, preventing driver distraction.',
      'Addresses night-time glare hazards during winter fog conditions in Northern India.'
    ],
    diagramType: 'Optical Sensor Circuit & Relayed Beam Controller'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'mg-ecodrain-shield',
    title: 'MG EcoDrain Shield',
    tagline: 'Bio-Inspired Multi-Tiered Stormwater Filtration Concept',
    status: 'Research Stage',
    category: 'Environmental Engineering',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/Astha5517o/MG-EcoDrain-Shield',
    paperUrl: '#research',
    
    problemStatement: 'Urban municipal channels in Punjab suffer from severe blockages during monsoon rains due to unmanaged polythene waste, organic leaves, and agricultural silt. Standard flat drain grates quickly seal shut, causing localized flash flooding and directing un-filtered micro-particulates into river bodies.',
    backgroundResearch: 'Surveyed 42 municipal drainage sites in Jalandhar district. Literature review indicates that 80% of urban drain blockages occur at the primary inlet interface due to planar surface sealing. Furthermore, rice husk waste from local paddy fields presents an underutilized biochar opportunity for heavy metal and oil adsorption.',
    whyItMatters: 'Stormwater flooding damages local road infrastructure and contaminates groundwater recharge zones. Preventing solid debris entry at the drain inlet preserves municipal drainage capacity and protects downstream aquatic ecosystems.',
    existingApproaches: 'Existing solutions rely on manual cleaning by municipal workers after flooding occurs, or heavy iron grates that allow fine micro-plastics and silt to pass freely into storm mains.',
    myConcept: 'A retrofittable multi-stage filtration unit combining a 45-degree deflected primary grate, a hydro-cyclonic vortex sediment chamber, and a bio-filter cartridge made from activated rice-husk biochar and coconut coir.',
    possibleAdvantages: [
      'Operates passively without external electrical power.',
      'Utilizes abundant agricultural bio-waste (rice husk and coir) as filtration media.',
      '45° angled deflectors prevent flat plastic bags from vacuum-sealing the drain opening.',
      'Modular design retrofits into standard municipal drain boxes.'
    ],
    currentLimitations: [
      'Requires periodic manual emptying of the sediment collection tray after major storms.',
      'Biochar filter cartridges need replacement every 6 months depending on runoff oil content.',
      'High-velocity flood flows require further hydrodynamic testing in larger flume channels.'
    ],
    futureRoadmap: [
      'Construct a full-scale 1:1 physical test rig for flume channel water flow benchmarking.',
      'Partner with school environment clubs to test localized runoff water quality before and after filtration.',
      'Refine CAD specs into open-hardware documentation for municipal consideration.'
    ],
    technologyReadinessLevel: 'TRL 3 - Proof of Concept & Laboratory Flume Model',
    sdgAlignment: ['UN SDG 6: Clean Water and Sanitation', 'UN SDG 11: Sustainable Cities and Communities'],
    references: [
      'Central Pollution Control Board (CPCB) India - Municipal Solid Waste Management Guidelines.',
      'Bureau of Indian Standards (BIS) - IS 1172: Basic Requirements for Water Supply, Drainage and Sanitation.',
      'UN Environment Programme (UNEP) - Global Environmental Outlook on Regional Water Resources.'
    ],
    
    // Legacy fields
    problem: 'Urban drainage blockages cause monsoon flooding and water contamination.',
    solution: 'Multi-stage hydro-mechanical drain insert with agricultural biochar filtration.',
    innovationHighlights: [
      'Zero-power passive hydrodynamic design',
      'Uses agricultural rice husk bio-waste',
      '45° angled deflector prevents plastic bag sealing'
    ],
    expectedImpact: 'Reduces surface drain blockages and filters urban runoff prior to municipal discharge.',
    researchSummary: 'Benchmarked in 1:4 laboratory water flow trials with turbidity reduction measurements.',
    developmentStage: 'TRL 3 - Proof of Concept & CAD Modeling',
    timeline: [
      { date: '2024', title: 'Field Survey & Problem Identification', description: 'Documented drain clogging patterns across local municipal areas in Punjab.' },
      { date: '2024', title: 'INSPIRE Award Proposal', description: 'Submitted hydro-filtration concept for national science competition evaluation.' },
      { date: '2025', title: 'CAD & 1:4 Scale Testing', description: 'Constructed CAD assembly and lab water flow test channel.' }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800', caption: 'Stormwater Hydrodynamics & Sedimentation Schematic' }
    ],
    readmeContent: `# MG EcoDrain Shield 🌧️

> **Bio-Inspired Multi-Tiered Stormwater Filtration Concept**  
> *Developer: Astha (Class 11 Science, PM Shri Kendriya Vidyalaya Saraikhas)*

---

## 📌 Concept Overview
The **MG EcoDrain Shield** is a passive, modular filtration system designed to reduce roadside drain blockages and trap urban particulates before they reach municipal waterways.

---

## 🔬 Research & Principles
- **Primary Deflection Grate**: 45° inclined bars prevent plastic bags from sealing the inlet.
- **Sediment Settling Chamber**: Reduces fluid velocity, allowing sand and silt to settle.
- **Bio-Filter Cartridge**: Uses activated rice husk biochar and coir fiber to absorb hydrocarbons.

---

## 📂 Repository Contents
- \`docs/\`: Research notes and schematic diagrams.
- \`cad/\`: 3D CAD geometry specifications (.STEP / .STL).
- \`data/\`: Laboratory water testing logs.
`
  },
  {
    id: 'soil-moisture-detection',
    title: 'Underground Soil Moisture Detection System',
    tagline: 'Agricultural Soil Health & Precision Irrigation Alert Concept',
    status: 'Concept Stage',
    category: 'Agricultural Innovation',
    isInspireAward: true,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200',
    paperUrl: '#research',
    
    problemStatement: 'Farmers in agricultural regions often rely on visual soil inspection or rigid watering schedules. Over-irrigation leads to groundwater depletion and nutrient leaching, while under-irrigation stresses crops during critical growth stages.',
    backgroundResearch: 'Investigated sub-surface soil moisture dynamics across local crop fields in Punjab. Capacitive sensing offers higher corrosion resistance compared to resistive soil pins when buried long-term in moist soil.',
    whyItMatters: 'Agriculture accounts for over 80% of groundwater extraction in Northern India. Simple, affordable moisture detection tools empower smallholder farmers to make informed watering decisions.',
    existingApproaches: 'Commercial soil sensors are often expensive, targeted at industrial farms, or require complex internet infrastructure unsuitable for basic farm setups.',
    myConcept: 'A sub-surface capacitive soil probe paired with a low-power microcontroller that triggers visual or audible alerts when soil moisture drops below pre-calibrated crop thresholds.',
    possibleAdvantages: [
      'Corrosion-resistant capacitive probe design for long underground lifespan.',
      'Simple threshold indicator interface accessible to farmers without smartphone connectivity.',
      'Low power consumption capable of operating on small solar cells.',
      'Encourages water conservation in regions facing declining water tables.'
    ],
    currentLimitations: [
      'Sensors require calibration based on specific soil types (clay, loam, sand).',
      'Underground wiring must be protected against agricultural tillage equipment.',
      'Currently evaluated in controlled potted soil conditions.'
    ],
    futureRoadmap: [
      'Calibrate moisture thresholds for major regional crops (wheat, paddy, vegetables).',
      'Explore wireless radio signal transmission to a household receiver unit.',
      'Conduct field trials in school botanical garden plots.'
    ],
    technologyReadinessLevel: 'TRL 2 - Technology Concept Formulated & INSPIRE Award Participant',
    sdgAlignment: ['UN SDG 2: Zero Hunger', 'UN SDG 6: Clean Water and Sanitation', 'UN SDG 12: Responsible Consumption'],
    references: [
      'Indian Council of Agricultural Research (ICAR) - Soil Health Management Manual.',
      'FAO Water Reports - Irrigation Water Management Guidelines.'
    ],
    
    problem: 'Uncontrolled agricultural irrigation causes groundwater table depletion.',
    solution: 'Capacitive sub-surface moisture sensor with farmer alert module.',
    innovationHighlights: [
      'INSPIRE Award Participant concept',
      'Corrosion-resistant capacitive sensing methodology',
      'Designed for simple, accessible farm deployment'
    ],
    expectedImpact: 'Helps farmers optimize irrigation timing and conserve agricultural water resources.',
    researchSummary: 'Formulated circuit schematic and calibrated prototype in laboratory soil samples.',
    developmentStage: 'TRL 2 - Concept Stage (INSPIRE Award Participant)',
    timeline: [
      { date: '2023', title: 'Problem Discovery', description: 'Studied agricultural water use practices and soil moisture variation.' },
      { date: '2024', title: 'INSPIRE Award Selection', description: 'Selected under DST INSPIRE Award scheme for agricultural innovation.' }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800', caption: 'Soil Moisture Circuit Diagram & Probe Placement' }
    ],
    readmeContent: `# Underground Soil Moisture Detection System 🌾

> **INSPIRE Award Participant Project**  
> *Developer: Astha (Class 11 Science)*

Concept developed to help farmers monitor sub-surface soil moisture conditions and irrigate efficiently.
`
  },
  {
    id: 'vehicle-headlight-dimmer',
    title: 'Automatic Vehicle Headlight Dimming Concept',
    tagline: 'Automotive Night-Time Road Safety & Glare Reduction Scheme',
    status: 'Concept Stage',
    category: 'Road Safety',
    isInspireAward: true,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=1200',
    paperUrl: '#research',
    
    problemStatement: 'Night-time driving on unlit or two-lane highways presents severe glare hazards when drivers forget or fail to dim high-beam headlights for oncoming vehicles. In dense winter fog conditions across Northern India, high-beam glare causes temporary blindness and leads to serious collisions.',
    backgroundResearch: 'Analyzed traffic accident statistics related to night-time glare on highway corridors. Optical light sensors placed behind windscreen glass can detect directional high-beam intensity from oncoming traffic.',
    whyItMatters: 'Glare-induced temporary blindness lasts 2 to 7 seconds, during which a vehicle moving at 60 km/h travels over 30 to 100 meters without clear driver visibility.',
    existingApproaches: 'High-end luxury vehicles include camera-based matrix headlights, but standard passenger cars and older commercial trucks lack automatic dimming features.',
    myConcept: 'An aftermarket optical sensor circuit that detects oncoming headlight intensity and automatically toggles the vehicle headlight relay from high-beam to low-beam until the oncoming vehicle passes.',
    possibleAdvantages: [
      'Affordable circuit design that can be retrofitted onto standard headlight wiring.',
      'Reduces driver distraction and manual switching effort during long night trips.',
      'Prevents glare-related temporary blindness on narrow two-lane roads.',
      'Uses optical filtering to distinguish oncoming headlights from ambient streetlights.'
    ],
    currentLimitations: [
      'Streetlights or reflective road signs may occasionally trigger false dimming if sensor sensitivity is not tuned.',
      'Requires precise optical shielding to detect light only from the forward oncoming lane.',
      'Tested using breadboard optical circuits and simulated LED headlights.'
    ],
    futureRoadmap: [
      'Incorporate pulse-width modulation (PWM) for smooth beam transition.',
      'Test optical filter lenses to reduce sensitivity to yellow streetlamps.',
      'Document circuit schematics for open DIY automotive enthusiast review.'
    ],
    technologyReadinessLevel: 'TRL 2 - Technology Concept Formulated & INSPIRE Award Participant',
    sdgAlignment: ['UN SDG 3: Good Health and Well-being', 'UN SDG 9: Industry, Innovation and Infrastructure'],
    references: [
      'Ministry of Road Transport and Highways (MoRTH) India - Road Accidents in India Report.',
      'Society of Automotive Engineers (SAE) - Automotive Lighting Safety Standards.'
    ],
    
    problem: 'High-beam headlight glare causes night-time driving hazards on two-lane roads.',
    solution: 'Light-sensing relay circuit that automatically dims high beams when oncoming traffic is detected.',
    innovationHighlights: [
      'INSPIRE Award Participant concept',
      'Optical sensing for directional headlight detection',
      'Focuses on affordable road safety for everyday vehicles'
    ],
    expectedImpact: 'Improves driver visibility and reduces glare-related accidents during night travel.',
    researchSummary: 'Designed optical sensing circuit and tested light threshold response in lab environment.',
    developmentStage: 'TRL 2 - Concept Stage (INSPIRE Award Participant)',
    timeline: [
      { date: '2024', title: 'Road Safety Analysis', description: 'Investigated night-time highway glare accidents during winter fog seasons.' },
      { date: '2024', title: 'INSPIRE Award Selection', description: 'Selected under DST INSPIRE Award scheme for road safety innovation.' }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800', caption: 'Headlight Auto-Dimmer Circuit Schematic' }
    ],
    readmeContent: `# Automatic Vehicle Headlight Dimming Concept 🚘

> **INSPIRE Award Participant Project**  
> *Developer: Astha (Class 11 Science)*

A road safety concept engineered to reduce high-beam glare from oncoming vehicles during night travel.
`
  },
  {
    id: 'curioverse',
    title: 'CurioVerse',
    tagline: 'Interactive STEM Learning & Science Exploration Platform',
    status: 'Under Development',
    category: 'Artificial Intelligence',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/Astha5517o/CurioVerse',
    paperUrl: '#research',
    
    problemStatement: 'High school science education often relies on memorizing textbook formulas without visualizing underlying physical mechanics or interconnections between physics, chemistry, and mathematics.',
    backgroundResearch: 'Assessed science study habits among high school peers. Interactive visual node graphs and step-by-step problem breakdowns significantly improve conceptual understanding compared to static text.',
    whyItMatters: 'Fostering genuine scientific curiosity requires tools that encourage students to ask "why" and explore how fundamental concepts connect across disciplines.',
    existingApproaches: 'Standard online learning portals are often behind expensive paywalls or present rigid video lectures without interactive concept exploration.',
    myConcept: 'An open-source web platform featuring interactive concept maps, science experiment notes, and guided step-by-step breakdowns of high school STEM topics.',
    possibleAdvantages: [
      'Interactive visual graphs mapping connections between scientific principles.',
      'Organized specifically around high school science and mathematics curricula.',
      'Lightweight web interface accessible on school computers and mobile devices.',
      'Encourages self-directed curiosity and active problem solving.'
    ],
    currentLimitations: [
      'Currently covers selected topics in Class 11 Physics and Chemistry.',
      'Requires further content expansion across mathematics and computer science modules.',
      'Under active development.'
    ],
    futureRoadmap: [
      'Expand interactive physics simulation widgets for mechanics and optics.',
      'Add open study notes for high school science competitions.',
      'Gather feedback from peer student testing.'
    ],
    technologyReadinessLevel: 'TRL 3 - Functional Software Prototype Under Development',
    sdgAlignment: ['UN SDG 4: Quality Education'],
    references: [
      'NCERT High School Science Curriculum Guidelines.',
      'UNESCO - Digital Technologies in Science Pedagogy.'
    ],
    
    problem: 'Abstract science concepts are difficult to visualize without interactive tools.',
    solution: 'Interactive STEM platform with concept maps and visual problem breakdowns.',
    innovationHighlights: [
      'Interactive concept graph visualizer',
      'Open educational content for high school students',
      'Designed for accessible web exploration'
    ],
    expectedImpact: 'Helps high school students explore science concepts through visual curiosity.',
    researchSummary: 'Developed web architecture and mapped foundational Class 11 physics concepts.',
    developmentStage: 'TRL 3 - Under Development',
    timeline: [
      { date: '2025', title: 'Platform Design', description: 'Mapped high school science topics into interconnected concept nodes.' },
      { date: '2025', title: 'Prototype Development', description: 'Built interactive React web interface for concept visualization.' }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', caption: 'CurioVerse STEM Concept Graph Interface' }
    ],
    readmeContent: `# CurioVerse 🌐

> **Interactive STEM Learning Platform**  
> *Developer: Astha (Class 11 Science)*

An open-source learning tool designed to help high school students explore science concepts visually.
`
  },
  {
    id: 'aegix',
    title: 'AEGIX',
    tagline: 'Adaptive Edge AI Environmental Telemetry Concept',
    status: 'Research Stage',
    category: 'Artificial Intelligence',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/Astha5517o/AEGIX',
    paperUrl: '#research',
    
    problemStatement: 'Remote environmental monitoring sensors deployed in rural areas often suffer from sensor drift, data noise, or communication disruptions due to unstable internet connectivity.',
    backgroundResearch: 'Explored lightweight machine learning algorithms suitable for edge microcontrollers. Edge anomaly detection allows sensors to filter erroneous readings locally before transmitting summary data.',
    whyItMatters: 'Accurate environmental data (air quality, water flow, temperature) is essential for climate research and local disaster warnings.',
    existingApproaches: 'Most monitoring networks transmit raw data continuously to cloud servers, leading to high bandwidth usage and system failure when offline.',
    myConcept: 'An edge AI framework that runs lightweight anomaly detection algorithms directly on microcontroller gateways, logging telemetry locally and flagging anomalous sensor spikes.',
    possibleAdvantages: [
      'Operates offline without constant internet connection.',
      'Reduces data transmission bandwidth requirements.',
      'Identifies sensor drift and physical tampering in real time.'
    ],
    currentLimitations: [
      'Microcontroller memory limitations constrain algorithm complexity.',
      'Tested primarily on simulated sensor datasets.'
    ],
    futureRoadmap: [
      'Test algorithm on physical ESP32 microcontroller hardware with actual sensors.',
      'Integrate with the MG EcoDrain telemetry monitoring concept.'
    ],
    technologyReadinessLevel: 'TRL 2 - Algorithmic Research & Simulation',
    sdgAlignment: ['UN SDG 9: Industry, Innovation and Infrastructure', 'UN SDG 13: Climate Action'],
    references: [
      'IEEE Transactions on Industrial Informatics - Edge Computing in Environmental Monitoring.'
    ],
    
    problem: 'Remote environmental sensors produce noisy data and require constant cloud connectivity.',
    solution: 'Lightweight edge AI anomaly detector for microcontroller sensor gateways.',
    innovationHighlights: [
      'Edge-first processing architecture',
      'Low memory footprint for microcontrollers',
      'Offline telemetry logging'
    ],
    expectedImpact: 'Improves environmental sensor data reliability in remote deployments.',
    researchSummary: 'Simulated lightweight anomaly detection algorithms on sample environmental sensor streams.',
    developmentStage: 'TRL 2 - Research Stage',
    timeline: [
      { date: '2025', title: 'Algorithmic Exploration', description: 'Researched lightweight anomaly detection methods for low-power hardware.' }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', caption: 'AEGIX Edge Telemetry Architecture' }
    ],
    readmeContent: `# AEGIX 🛡️

> **Adaptive Edge AI Environmental Telemetry Concept**  
> *Developer: Astha (Class 11 Science)*

A research concept exploring lightweight edge processing for environmental sensors.
`
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-ecodrain-2025',
    title: 'Passive Multi-Tiered Hydro-Mechanical Filtration for Urban Stormwater Drain Inlets',
    abstract: 'Urban monsoon runoff in developing regions carries severe sediment and solid waste loads that rapidly block traditional municipal drainage grates. This paper details the concept, mathematical fluid considerations, and initial 1:4 laboratory flume testing of a retrofittable drain inlet filtration assembly (MG EcoDrain Shield). By incorporating a 45-degree deflected primary grate, a hydro-cyclonic sediment settling chamber, and an agricultural biochar filter cartridge, the system aims to reduce surface drain blockages and capture runoff particulates passively without electrical power.',
    researchQuestion: 'How can hydrodynamic geometry and agricultural bio-waste media be combined into a zero-power retrofittable drain inlet to prevent surface clogging and improve stormwater quality?',
    methodology: 'Conducted field surveys of 42 municipal drain sites in Jalandhar, Punjab. Formulated 3D CAD geometries and evaluated fluid flow velocity, sediment drop-out rates, and turbidity changes across a 1:4 scale laboratory flume channel.',
    conceptStage: 'Concept & Laboratory Bench Testing Stage',
    keywords: ['Stormwater Management', 'Drain Inlet Filtration', 'Hydrodynamics', 'Biochar Adsorption', 'Environmental Engineering'],
    downloadUrl: '#download-ecodrain-paper',
    lastUpdated: '2025',
    researchArea: 'Environmental Engineering',
    sdgAlignment: ['UN SDG 6: Clean Water and Sanitation', 'UN SDG 11: Sustainable Cities'],
    authors: ['Astha (Student Researcher, Class 11 Science)'],
    relatedProjectId: 'mg-ecodrain-shield',
    pdfContentSummary: `STUDENT RESEARCH PAPER ARCHIVE
Title: Passive Multi-Tiered Hydro-Mechanical Filtration for Urban Stormwater Drain Inlets
Author: Astha | Class 11 Science, PM Shri Kendriya Vidyalaya Saraikhas

1. INTRODUCTION & OBJECTIVE
Urban drainage channels in Punjab experience severe blockages during monsoon precipitation due to plastic bags and agricultural silt. The objective of this study was to design a non-powered, low-cost filtration device retrofittable into standard drain boxes.

2. METHODOLOGY & OBSERVATIONS
- Surveyed 42 drain clogging sites.
- Designed 45° angled deflector bars to prevent plastic bag vacuum sealing.
- Benchmarked 1:4 scale model in laboratory flume channel.

3. CONCLUSION & FUTURE WORK
The concept demonstrates the feasibility of utilizing agricultural rice-husk biochar for urban water management.`
  },
  {
    id: 'paper-soil-moisture-2024',
    title: 'Sub-Surface Capacitive Soil Moisture Monitoring for Smallholder Agricultural Precision',
    abstract: 'Agricultural water conservation is critical in regions facing declining groundwater tables. This paper outlines the design concept and circuit calibration of a sub-surface capacitive soil moisture detection system developed under the DST INSPIRE Award scheme. Capacitive sensing avoids electrode corrosion associated with resistive soil probes, providing a reliable method to alert farmers when soil moisture drops below field capacity.',
    researchQuestion: 'Can low-cost capacitive sub-surface probes provide reliable moisture threshold alerts for smallholder farmers without requiring complex internet infrastructure?',
    methodology: 'Calibrated capacitive sensor output voltages across dry, field-capacity, and saturated soil samples (clay loam soil from Punjab). Formulated simple microcontroller threshold logic to trigger visual LED alerts.',
    conceptStage: 'INSPIRE Award Concept & Circuit Prototype Stage',
    keywords: ['Agricultural Innovation', 'Soil Moisture', 'Capacitive Sensing', 'Water Conservation', 'INSPIRE Award'],
    downloadUrl: '#download-soil-paper',
    lastUpdated: '2024',
    researchArea: 'Agricultural Innovation',
    sdgAlignment: ['UN SDG 2: Zero Hunger', 'UN SDG 6: Clean Water and Sanitation'],
    authors: ['Astha (Student Innovator, INSPIRE Award Participant)'],
    relatedProjectId: 'soil-moisture-detection',
    pdfContentSummary: `STUDENT RESEARCH PAPER ARCHIVE
Title: Sub-Surface Capacitive Soil Moisture Monitoring for Smallholder Agricultural Precision
Author: Astha | INSPIRE Award Participant

1. BACKGROUND
Over-irrigation in Punjab depletes underground aquifers. This project proposes a sub-surface capacitive moisture sensor to guide irrigation timing.

2. CIRCUIT & TESTING
Capacitive probe output was logged against gravimetric soil moisture content in lab soil pots. Simple threshold logic triggers farmer alerts.`
  },
  {
    id: 'paper-headlight-dimmer-2024',
    title: 'Automated Optical High-Beam Glare Reduction Scheme for Highway Safety',
    abstract: 'Night-time road safety on unlit two-lane highways is severely impacted by high-beam headlight glare from oncoming vehicles. Developed for the DST INSPIRE Award scheme, this concept explores an optical sensor circuit mounted behind the windscreen to automatically toggle headlights to low-beam upon detecting oncoming light intensity, restoring high-beam once the vehicle passes.',
    researchQuestion: 'What optical threshold parameters allow an aftermarket circuit to reliably distinguish oncoming vehicle headlights from ambient road lighting to reduce high-beam glare?',
    methodology: 'Constructed optical breadboard circuits using light-dependent resistors and directional optical tubes. Measured response times and threshold sensitivities under simulated headlight conditions.',
    conceptStage: 'INSPIRE Award Concept Stage',
    keywords: ['Road Safety', 'Automotive Engineering', 'Optical Sensing', 'INSPIRE Award'],
    downloadUrl: '#download-dimmer-paper',
    lastUpdated: '2024',
    researchArea: 'Road Safety',
    sdgAlignment: ['UN SDG 3: Good Health and Well-being', 'UN SDG 9: Infrastructure'],
    authors: ['Astha (Student Innovator, INSPIRE Award Participant)'],
    relatedProjectId: 'vehicle-headlight-dimmer',
    pdfContentSummary: `STUDENT RESEARCH PAPER ARCHIVE
Title: Automated Optical High-Beam Glare Reduction Scheme for Highway Safety
Author: Astha | INSPIRE Award Participant

1. PROBLEM
High-beam glare during night driving causes temporary driver blindness and accidents on narrow roads.

2. PROPOSED CIRCUIT
An optical sensor circuit detects oncoming high-beam light intensity and triggers a relay to temporarily switch headlights to low beam.`
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'class-11-topper',
    year: '2025 - Present',
    title: 'Class 11 Science Academic Topper',
    organization: 'PM Shri Kendriya Vidyalaya Saraikhas, Jalandhar',
    category: 'Academic',
    description: 'Secured 1st rank in Class 11 Science stream across Physics, Chemistry, Mathematics, and Computer Science.',
    impactHighlight: 'School Academic Distinction',
    badgeText: 'Academic Distinction',
    statusText: 'Verified School Merit'
  },
  {
    id: 'cbse-10-performer',
    year: '2024',
    title: 'CBSE Class 10 Top Academic Performer',
    organization: 'Central Board of Secondary Education (CBSE)',
    category: 'Academic',
    description: 'Achieved outstanding academic standing in CBSE Class 10 Board Examinations with top performance in Science and Mathematics.',
    impactHighlight: 'Top Board Performance',
    badgeText: 'Board Merit',
    statusText: 'Verified CBSE Standing'
  },
  {
    id: 'rajya-puraskar',
    year: '2025',
    title: 'Rajya Puraskar (Governor’s Scout/Guide Distinction)',
    organization: 'Bharat Scouts and Guides & Governor of Punjab',
    category: 'Scouts & Guides',
    description: 'Awarded prestigious state distinction for exemplary discipline, community service, environmental initiatives, and youth leadership.',
    impactHighlight: 'State Governor Honor',
    badgeText: 'Governor Distinction',
    statusText: 'State Youth Award'
  },
  {
    id: 'inspire-award-twice',
    year: '2023 & 2024',
    title: 'INSPIRE Award Participant (Twice)',
    organization: 'Department of Science & Technology (DST), Govt. of India',
    category: 'INSPIRE Award',
    description: 'Selected twice under the national INSPIRE Award scheme for developing the Underground Soil Moisture Detection System and Automatic Vehicle Headlight Dimming Concept.',
    impactHighlight: 'Selected Twice for DST Scheme',
    badgeText: 'DST Govt Scheme',
    statusText: 'Twice Selected'
  },
  {
    id: 'seminar-plastic-recycle',
    year: '2024',
    title: 'Silver Medal / Seminar Presentation on "Reduce, Reuse and Recycle Plastic"',
    organization: 'Regional Science & Environmental Seminar',
    category: 'Competition',
    description: 'Presented research on localized plastic waste management and community recycling frameworks, earning Silver Medal recognition.',
    impactHighlight: 'Silver Medalist',
    badgeText: 'Silver Medal',
    statusText: 'Environmental Seminar'
  },
  {
    id: 'boxing-silver-1',
    year: '2024',
    title: 'Silver Medal - Boxing',
    organization: 'School / District Sports Competition',
    category: 'Sports',
    description: 'Earned Silver Medal in competitive boxing, demonstrating physical discipline, focus, and athletic perseverance.',
    impactHighlight: 'Silver Medalist',
    badgeText: 'Silver Medal',
    statusText: 'Sports Award'
  },
  {
    id: 'boxing-silver-2',
    year: '2023',
    title: 'Silver Medal - Boxing',
    organization: 'Regional Youth Sports Meet',
    category: 'Sports',
    description: 'Awarded Silver Medal in regional youth boxing tournament.',
    impactHighlight: 'Silver Medalist',
    badgeText: 'Silver Medal',
    statusText: 'Sports Award'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-inspire-1',
    title: 'INSPIRE Award Participation Certificate - Soil Moisture Project',
    organization: 'Department of Science & Technology (DST), Govt. of India',
    date: '2023',
    description: 'Official certificate for participating in the DST INSPIRE Award MANAK scheme with agricultural innovation concept.',
    category: 'Government Award',
    previewUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=600',
    downloadUrl: '#download-cert-inspire-1'
  },
  {
    id: 'cert-inspire-2',
    title: 'INSPIRE Award Participation Certificate - Headlight Dimmer Concept',
    organization: 'Department of Science & Technology (DST), Govt. of India',
    date: '2024',
    description: 'Official certificate for selection under DST INSPIRE scheme for road safety headlight dimming project.',
    category: 'Government Award',
    previewUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=600',
    downloadUrl: '#download-cert-inspire-2'
  },
  {
    id: 'cert-rajya-puraskar',
    title: 'Rajya Puraskar Certificate',
    organization: 'Bharat Scouts and Guides',
    date: '2025',
    description: 'State Level Scout/Guide distinction certificate issued for outstanding community service and discipline.',
    category: 'Scouts & Guides',
    previewUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600',
    downloadUrl: '#download-cert-rajya'
  },
  {
    id: 'cert-seminar-plastic',
    title: 'Silver Medal Certificate - Seminar on Plastic Recycling',
    organization: 'Regional Environmental Science Forum',
    date: '2024',
    description: 'Award certificate for paper and presentation on "Reduce, Reuse and Recycle Plastic".',
    category: 'Research Seminar',
    previewUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600',
    downloadUrl: '#download-cert-seminar'
  },
  {
    id: 'cert-boxing-1',
    title: 'Silver Medal Certificate - Boxing Tournament',
    organization: 'District Youth Sports Association',
    date: '2024',
    description: 'Certificate of Merit for securing Silver Medal in Boxing.',
    category: 'Sports',
    previewUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cert-placeholder-future',
    title: 'Upcoming Science & Research Certification',
    organization: 'PM Shri Kendriya Vidyalaya / Academic Body',
    date: '2026',
    description: 'Placeholder for upcoming Class 12 Science research certifications and paper submissions.',
    category: 'Academic',
    isPlaceholder: true
  }
];

export const SKILLS: Skill[] = [
  { name: 'Scientific Research & Literature Review', level: 92, category: 'Research', description: 'Formulating research questions, reviewing scientific literature, and documenting findings' },
  { name: 'Problem Solving & Concept Formulation', level: 95, category: 'Research', description: 'Deconstructing real-world community issues into testable engineering concepts' },
  { name: 'Environmental Fluid Mechanics Principles', level: 88, category: 'Engineering', description: 'Understanding fluid flow, sedimentation, and bio-filtration principles' },
  { name: 'Basic Circuit Design & Sensor Prototyping', level: 85, category: 'Technical', description: 'Working with capacitive sensors, light sensors, microcontrollers, and breadboard circuits' },
  { name: 'Artificial Intelligence & Machine Learning Fundamentals', level: 82, category: 'Technical', description: 'Exploring machine learning concepts, prompt logic, and edge telemetry models' },
  { name: '3D CAD Geometry Modeling (Basic)', level: 80, category: 'Engineering', description: 'Drafting 3D component specs for filtration units and sensor enclosures' },
  { name: 'Scientific Communication & Seminar Writing', level: 88, category: 'Academic', description: 'Writing research summaries, abstracts, and presenting to science jury panels' },
  { name: 'Web Development (React / TypeScript / Tailwind)', level: 86, category: 'Technical', description: 'Building clean, accessible documentation and research portals' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'MG EcoDrain Shield Filtration Schematic',
    category: 'Schematics',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
    caption: 'Multi-stage hydrodynamic vortex and biochar filter chamber design.',
    date: '2025'
  },
  {
    id: 'gallery-2',
    title: 'Soil Moisture Sensor Circuit Diagram',
    category: 'Diagrams',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800',
    caption: 'Sub-surface capacitive probe circuit schematic for agricultural soil monitoring.',
    date: '2024'
  },
  {
    id: 'gallery-3',
    title: 'Automatic Headlight Dimmer Optical Diagram',
    category: 'Diagrams',
    imageUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800',
    caption: 'Light-dependent optical sensing circuit layout for glare reduction.',
    date: '2024'
  },
  {
    id: 'gallery-4',
    title: 'CurioVerse STEM Concept Mapping',
    category: 'Blueprints',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    caption: 'Interconnected node network mapping Class 11 Physics & Chemistry topics.',
    date: '2025'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'entry-1',
    title: 'Field Observations on Drain Clogging During Monsoon Rain in Jalandhar',
    slug: 'field-observations-drain-clogging-jalandhar',
    date: 'July 14, 2025',
    readTime: '5 min read',
    category: 'Experiments',
    summary: 'Observations recorded while examining municipal drain inlets in Jalandhar during monsoon rains, highlighting how plastic debris creates surface seals over grates.',
    topics: ['Environmental Engineering', 'Field Survey', 'Monsoon Runoff', 'Observations'],
    author: 'Astha',
    content: `During heavy monsoon downpours in Jalandhar, roads often experience waterlogging within 20 to 30 minutes. Walking near local municipal drain grates, I observed that flooding was not necessarily caused by an inadequate underground pipe diameter.

### Key Field Observation
The primary issue is surface sealing: thin plastic bags and organic leaves float over flat drain grates, creating a water-tight seal under gravity and fluid suction. 

### Initial Takeaway
An angled inlet deflector (e.g. 45 degrees) prevents flat plastic sheets from sealing the entire grate surface, allowing water to enter through lower angled slots even when debris settles on top.`
  },
  {
    id: 'entry-2',
    title: 'Understanding Capacitive Soil Moisture Sensing for Agricultural Water Conservation',
    slug: 'capacitive-soil-moisture-sensing-agriculture',
    date: 'May 20, 2025',
    readTime: '4 min read',
    category: 'Engineering Ideas',
    summary: 'Notes on why capacitive moisture probes outperform resistive probes for long-term sub-surface soil monitoring in agricultural fields.',
    topics: ['Agricultural Innovation', 'Sensors', 'Soil Health', 'INSPIRE Award'],
    author: 'Astha',
    content: `When exploring soil moisture detection for the INSPIRE Award scheme, my initial experiments used cheap resistive sensor pins.

### The Corrosion Problem
In moist soil, applying a direct current across exposed metal pins leads to rapid electrolysis and metal oxidation within a few days, rendering sensor readings inaccurate.

### The Capacitive Advantage
Capacitive soil sensors measure dielectric permittivity rather than direct electrical conductivity. By coating the circuit trace in protective solder mask, the probe avoids direct metal-soil contact, extending sensor lifespan underground.`
  },
  {
    id: 'entry-3',
    title: 'My Experience Presenting on Plastic Reduction and Recycling Principles',
    slug: 'presenting-plastic-reduction-recycle-seminar',
    date: 'November 10, 2024',
    readTime: '4 min read',
    category: 'School Activities',
    summary: 'Reflections on preparing and delivering a seminar presentation on "Reduce, Reuse and Recycle Plastic" that earned a Silver Medal recognition.',
    topics: ['Plastic Waste', 'Environment', 'School Seminar', 'Silver Medal'],
    author: 'Astha',
    content: `Participating in the regional environmental seminar on plastic reduction was an invaluable opportunity to organize thoughts on municipal waste management.

### Focusing on Local Action
Rather than discussing global plastic statistics in abstract terms, my presentation focused on practical school and household waste segregation models relevant to Jalandhar. 

Presenting data clearly and answering questions from the judging panel helped me appreciate the importance of clear scientific communication.`
  },
  {
    id: 'entry-4',
    title: 'Reflections on Preparing for International Scholarship and University Applications',
    slug: 'reflections-scholarship-university-applications',
    date: 'January 05, 2026',
    readTime: '6 min read',
    category: 'Scholarship Journey',
    summary: 'Documenting the journey of a Class 11 Science student from Punjab learning how to document research, build an honest portfolio, and prepare for higher education.',
    topics: ['Scholarship Journey', 'Research Portfolio', 'Class 11', 'Future Goals'],
    author: 'Astha',
    content: `As a Class 11 Science student at PM Shri Kendriya Vidyalaya Saraikhas, applying for future international scholarships and university programs requires consistency in documenting work.

### Staying Genuine and Evidence-Based
The most important lesson I have learned is to avoid inflated claims. Scholarship reviewers and professors value honesty, documented evidence, clear research questions, and genuine curiosity over artificial titles or superficial metrics.

I hope this website serves as a clear, transparent archive of my learning journey.`
  }
];
