export interface MobileScreen {
  id: string;
  number: string;
  name: string;
  label: string;
  title: string;
  description: string;
  accentColor?: string;
}

export interface WebShowcaseSection {
  id: string;
  title: string;
  caption: string;
  description: string;
  badge: string;
}

export interface ProjectData {
  slug: string;
  name: string; // Project title
  category: string; // Project type
  label: string;
  year: string;
  desc: string; // Description
  theme: 'student' | 'featured' | 'website' | 'system';
  platform: 'Mobile App' | 'Web';
  featured?: boolean; // Featured status
  thumbnail?: string; // Project thumbnail image URL
  images?: string[]; // Gallery or showcase images
  tags?: string[]; // Technologies / tags
  role: string;
  tools: string[]; // Technologies / tools used
  clientOrContext: string;
  timeline: string;
  externalLinks: {
    googlePlay?: string; // Play Store link
    behance?: string; // Behance / case study link
    liveWebsite?: string; // Project link
    projectLink?: string; // Reusable alias for project link
  };
  mobileScreens?: MobileScreen[]; // UI screen gallery (mobile)
  webShowcase?: WebShowcaseSection[]; // UI screen gallery (web)
  overview: {
    whatItIs: string;
    problemOrPurpose: string;
    myRole: string;
    contributionsOrImprovements: string[];
    keyDecisions?: string[];
  };
}

export const projectsList: ProjectData[] = [
  {
    slug: 'sala-app',
    name: 'SALA APP',
    category: 'CAMPUS & ACADEMIC MOBILE APP',
    label: 'SALA',
    year: '2026',
    desc: 'A student-first academic companion mobile experience that unifies campus schedules, grades, attendance, and coursework into one pocket ecosystem.',
    theme: 'student',
    platform: 'Mobile App',
    tags: ['CAMPUS UX', 'MOBILE APP', 'ACADEMIC PORTAL'],
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'FigJam', 'Protopie', 'Illustrator'],
    clientOrContext: 'Higher Education Digital Experience',
    timeline: '12 Weeks',
    externalLinks: {
      googlePlay: 'https://play.google.com/store/apps',
      behance: 'https://www.behance.net/',
    },
    mobileScreens: [
      {
        id: 'home',
        number: '01',
        name: 'Home',
        label: 'HOME',
        title: 'Central Student Hub & Day View',
        description: 'Instant overview of live upcoming lectures, digital student pass, and quick shortcuts to everyday campus actions.',
        accentColor: '#10b981',
      },
      {
        id: 'timetable',
        number: '02',
        name: 'Timetable',
        label: 'TIMETABLE',
        title: 'Weekly Interactive Schedule',
        description: 'Dynamic day-by-day lecture timeline with venue room badges, faculty avatars, and real-time live class pulse alerts.',
        accentColor: '#3b82f6',
      },
      {
        id: 'grades',
        number: '03',
        name: 'Grades',
        label: 'GRADES',
        title: 'Academic Performance & GPA',
        description: 'Visual cumulative GPA radial progress indicator, semester-by-semester credit audit, and letter grade performance cards.',
        accentColor: '#8b5cf6',
      },
      {
        id: 'homework',
        number: '04',
        name: 'Homework',
        label: 'HOMEWORK',
        title: 'Assignments & Deliverables Tracker',
        description: 'Priority-sorted assignment cards with progress checklists, deadline countdowns, and direct digital submission upload.',
        accentColor: '#f59e0b',
      },
      {
        id: 'profile',
        number: '05',
        name: 'Profile',
        label: 'PROFILE',
        title: 'Digital Student ID & Credentials',
        description: 'NFC-enabled campus identity card with barcode scanner, major details, emergency contacts, and personalized academic stats.',
        accentColor: '#06b6d4',
      },
      {
        id: 'attendance',
        number: '06',
        name: 'Attendance',
        label: 'ATTENDANCE',
        title: 'Smart Geo/Beacon Check-in',
        description: 'Contactless lecture check-in with attendance percentage metrics, monthly presence calendar, and excuse request filing.',
        accentColor: '#10b981',
      },
      {
        id: 'materials',
        number: '07',
        name: 'Materials',
        label: 'MATERIALS',
        title: 'Course Materials & Cloud Drive',
        description: 'Structured repository for lecture slides, syllabus documents, recorded audio-video lectures, and offline document storage.',
        accentColor: '#6366f1',
      },
      {
        id: 'exams',
        number: '08',
        name: 'Exams',
        label: 'EXAMS',
        title: 'Exam Schedule & Hall Pass',
        description: 'Exam date countdown, assigned hall seating numbers, dynamic verification QR code, and permitted exam item lists.',
        accentColor: '#ec4899',
      },
      {
        id: 'notifications',
        number: '09',
        name: 'Alerts',
        label: 'NOTIFICATIONS',
        title: 'Campus Announcements & Alerts',
        description: 'Prioritized urgent push alerts for classroom venue changes, scholarship deadlines, and university library reminders.',
        accentColor: '#f97316',
      },
      {
        id: 'community',
        number: '10',
        name: 'Community',
        label: 'COMMUNITY',
        title: 'Student Forum & Study Groups',
        description: 'Peer collaborative study circles, campus cafeteria live queue estimation, and extracurricular campus club events.',
        accentColor: '#14b8a6',
      },
    ],
    overview: {
      whatItIs: 'Sala App is a comprehensive academic companion mobile application engineered for modern university and high school students. It unifies fragmented educational portals—scheduling, coursework submissions, grading, attendance tracking, and campus notices—into one intuitive pocket experience.',
      problemOrPurpose: 'Students frequently struggle with 4 to 6 disparate institutional portals: clunky timetable viewers, complex homework sites, paper identity cards, and buried email notices. Sala App replaces this administrative friction with an instant, human-centered mobile interface.',
      myRole: 'Lead Product & UX/UI Designer. I led user interviews with 24 undergraduate students, synthesized journey pain points, defined information hierarchy, designed the 10-screen high-fidelity mobile prototype, and created the component design system.',
      contributionsOrImprovements: [
        'Designed a 1-tap "Today at a Glance" home architecture reducing daily schedule lookup time from 35s to under 3s.',
        'Engineered an interactive 10-screen flow connecting academic performance, homework deadlines, and smart attendance.',
        'Created a tactile, high-contrast visual style with clear color-coded subject taxonomy.',
        'Implemented accessible tap targets (minimum 48px) and WCAG AA compliant typography for bright outdoor campus viewing.',
      ],
      keyDecisions: [
        'Organized daily priorities into a single dashboard stream: immediate lecture, next deadline, and attendance status.',
        'Adopted a vibrant emerald and electric cobalt color system reflecting focus, clarity, and campus vibrancy.',
        'Included offline-first caching for lecture rooms and student ID passes when campus Wi-Fi is spotty.',
      ],
    },
  },
  {
    slug: 'hr-management-app',
    name: 'HR MANAGEMENT SYSTEM APP',
    category: 'ENTERPRISE MOBILE APP',
    label: 'HR SYSTEM',
    year: '2026',
    desc: 'An enterprise mobile HR management application empowering employees with self-service attendance, leave requests, payroll slips, and team directories.',
    theme: 'featured',
    platform: 'Mobile App',
    tags: ['ENTERPRISE MOBILE', 'HR SYSTEM', 'SELF-SERVICE'],
    role: 'Lead Mobile Product Designer',
    tools: ['Figma', 'Tokens Studio', 'Protopie', 'Notion'],
    clientOrContext: 'Enterprise Workforce Management Platform',
    timeline: '14 Weeks',
    externalLinks: {
      googlePlay: 'https://play.google.com/store/apps',
      behance: 'https://www.behance.net/',
    },
    mobileScreens: [
      {
        id: 'dashboard',
        number: '01',
        name: 'Dashboard',
        label: 'DASHBOARD',
        title: 'Employee Self-Service Hub',
        description: 'Instant punch clock status, remaining annual leave balance, next payday countdown, and real-time team notices.',
        accentColor: '#2563eb',
      },
      {
        id: 'attendance',
        number: '02',
        name: 'Attendance',
        label: 'ATTENDANCE',
        title: 'GPS Geo-Fence Check-In',
        description: 'Verified office beacon geofence check-in, real-time clock-in/out button, and daily working hours counter.',
        accentColor: '#10b981',
      },
      {
        id: 'leave',
        number: '03',
        name: 'Leave',
        label: 'LEAVE',
        title: 'Time-Off & Leave Balances',
        description: 'Annual leave, sick leave, and compensatory time tracking with 1-tap instant time-off request submission.',
        accentColor: '#8b5cf6',
      },
      {
        id: 'payroll',
        number: '04',
        name: 'Payroll',
        label: 'PAYSLIPS',
        title: 'Digital Salary Slips & Tax',
        description: 'Net take-home salary breakdown, tax withholdings, employer benefits, and encrypted PDF payslip downloads.',
        accentColor: '#059669',
      },
      {
        id: 'directory',
        number: '05',
        name: 'Directory',
        label: 'DIRECTORY',
        title: 'Company Directory & Teams',
        description: 'Searchable organization directory with department filters, reporting managers, and direct call/Slack links.',
        accentColor: '#06b6d4',
      },
      {
        id: 'shifts',
        number: '06',
        name: 'Roster',
        label: 'SHIFTS',
        title: 'Shift Roster & Overtime',
        description: 'Weekly work schedule calendar with morning/evening shifts, shift-swap requests, and overtime hour logging.',
        accentColor: '#f59e0b',
      },
      {
        id: 'performance',
        number: '07',
        name: 'Goals',
        label: 'PERFORMANCE',
        title: 'KPI Goals & 360 Reviews',
        description: 'Quarterly milestone progress bars, performance review schedule, peer reviews, and manager check-in notes.',
        accentColor: '#ec4899',
      },
      {
        id: 'claims',
        number: '08',
        name: 'Claims',
        label: 'EXPENSES',
        title: 'Expense Claims & Receipts',
        description: 'Smart receipt camera scanner, expense categorization, policy validation, and real-time manager approval tracker.',
        accentColor: '#f97316',
      },
      {
        id: 'announcements',
        number: '09',
        name: 'Announcements',
        label: 'NOTICES',
        title: 'Company Townhalls & News',
        description: 'Official leadership broadcasts, company policy updates, holiday notices, and team achievements feed.',
        accentColor: '#3b82f6',
      },
      {
        id: 'profile',
        number: '10',
        name: 'Profile',
        label: 'PROFILE',
        title: 'Employee ID & Digital Badge',
        description: 'NFC/QR digital company badge, employment contract details, tax identification, and emergency contacts.',
        accentColor: '#111827',
      },
    ],
    overview: {
      whatItIs: 'HR Management System App is an enterprise-grade mobile application designed to simplify workforce operations and employee self-service. It brings clock-in attendance, leave requests, payroll access, expense claims, and organizational directories directly to every employee\'s smartphone.',
      problemOrPurpose: 'Traditional enterprise HR software relies on outdated desktop intranets requiring VPN connections and complex multi-page approval forms. Employees struggled to perform simple daily actions—such as checking their leave balance or submitting an urgent sick note—leading to administrative bottlenecks and over 300 monthly HR support tickets.',
      myRole: 'Lead Mobile Product Designer. Conducted discovery interviews with 15 HR managers, shift supervisors, and field employees; defined end-to-end user flows for self-service actions; created high-density yet friendly mobile UI screens; and established the enterprise mobile design system.',
      contributionsOrImprovements: [
        'Designed a 2-tap GPS mobile clock-in mechanism that reduced time-clock errors and eliminated physical punch-card hardware.',
        'Created a transparent leave management flow with live balance calculation and instant manager push notifications, cutting leave approval time from 48 hours to 2 hours.',
        'Streamlined payslip viewing with biometric FaceID security, giving employees instant access to historical earnings and tax withholdings.',
        'Architected a modular 10-screen enterprise mobile interface optimized for both office staff and deskless/shift workers.',
      ],
      keyDecisions: [
        'Grouped daily urgent actions (Clock-in, Leave, Payslip) into high-priority dashboard cards to eliminate deep menu navigation.',
        'Adopted a clean, trust-inspiring cobalt and slate aesthetic over sterile corporate intranet blues.',
        'Built biometric authentication safeguards around sensitive payroll and personal documentation.',
      ],
    },
  },
  {
    slug: 'speaknews',
    name: 'SPEAKNEWS',
    category: 'WEB PROJECT',
    label: 'SPEAKNEWS',
    year: '2026',
    desc: 'An editorial, audio-first news platform engineered for effortless reading, ambient listening, and intelligent journalism.',
    theme: 'website',
    platform: 'Web',
    tags: ['EDITORIAL WEB', 'AUDIO UX', 'TYPOGRAPHY'],
    role: 'Lead UI/UX & Web Designer',
    tools: ['Figma', 'Framer', 'Next.js', 'Tailwind CSS'],
    clientOrContext: 'Digital Media & Audio Journalism Platform',
    timeline: '10 Weeks',
    externalLinks: {
      liveWebsite: 'https://speaknews.example.com',
      behance: 'https://www.behance.net/',
    },
    webShowcase: [
      {
        id: 'hero-editorial',
        title: 'Editorial Homepage & Daily Audio Digest',
        caption: 'Desktop 1440px Canvas — Live Breaking News & Waveform Stream',
        description: 'A contemporary asymmetrical layout that puts breaking investigations alongside an ambient live audio player. Readers can choose between deep reading or instant 4-minute morning briefs.',
        badge: 'HOMEPAGE EXPERIENCE',
      },
      {
        id: 'article-reader',
        title: 'Distraction-Free Deep Reading & Synced Narration',
        caption: 'Article Canvas — 720px Optimized Measure with Interactive Audio Scrubber',
        description: 'Bespoke editorial typography with synchronized audio narration highlights. As the audio journalist speaks, the corresponding text gently highlights for effortless immersion.',
        badge: 'READER EXPERIENCE',
      },
      {
        id: 'audio-hub',
        title: 'Curated Audio Room & Thematic Playlists',
        caption: 'Discovery Hub — Categorized Briefings & Investigative Podcasts',
        description: 'A modular audio portal featuring topic filter chips (Tech, Global Affairs, Design, Economics), variable playback speeds (1.0x to 2.0x), and offline bookmarking queues.',
        badge: 'AUDIO NEWSROOM',
      },
      {
        id: 'design-system',
        title: 'Adaptive Layout & High-Legibility Typography',
        caption: 'Responsive Architecture — Multi-Column Desktop to Seamless Mobile Grid',
        description: 'Strict WCAG AAA contrast ratios, optical sizing for long-form essays, and fluid component breakpoints that ensure zero layout shifts during media streaming.',
        badge: 'DESIGN SYSTEM & SYSTEM',
      },
    ],
    overview: {
      whatItIs: 'SpeakNews is an innovative web platform that redefines how busy professionals consume investigative journalism. It combines the visual authority of traditional broadsheet newspapers with the convenience of podcast-style audio narration.',
      problemOrPurpose: 'Modern digital readers struggle with information overload, cluttered web advertising, and limited time for 2,000-word deep-dives. SpeakNews bridges the gap between text and audio, allowing users to start reading on desktop and seamlessly switch to listening on the move.',
      myRole: 'Lead UI/UX Designer. Responsible for audience research, information architecture, editorial typography hierarchy, responsive web layout design, and design system handover.',
      contributionsOrImprovements: [
        'Conceived and designed the synchronized text-and-audio reader interface that increased session completion by 48%.',
        'Eliminated visual clutter with a disciplined black-and-white editorial aesthetic accented by electric cobalt blue highlights.',
        'Designed a persistent, non-intrusive floating audio dock that maintains playback uninterrupted across site navigation.',
        'Standardized 32 custom responsive web components built for fluid responsiveness from 390px to 1920px viewports.',
      ],
      keyDecisions: [
        'Opted for an editorial serif display paired with clean monospaced metadata for journalistic credibility.',
        'Prioritized a top-level persistent audio player bar that never obstructs reading content or navigation links.',
        'Designed modular content cards with clear time-to-read and audio-duration indicators on every single article preview.',
      ],
    },
  },
  {
    slug: 'school-management-system',
    name: 'SCHOOL MANAGEMENT SYSTEM',
    category: 'WEB APP & DESIGN SYSTEM',
    label: 'SCHOOL SYSTEM',
    year: '2026',
    desc: 'An enterprise web platform and modular design system engineered for academic administration, student records, and staff workflows.',
    theme: 'system',
    platform: 'Web',
    tags: ['DESIGN SYSTEM', 'ENTERPRISE UX', 'DATA TABLES'],
    role: 'Lead UX/UI Designer & Design System Architect',
    tools: ['Figma', 'Tokens Studio', 'Tailwind CSS', 'React', 'Storybook'],
    clientOrContext: 'Enterprise Education Ecosystem',
    timeline: '16 Weeks',
    externalLinks: {
      liveWebsite: 'https://sms-portal.example.com',
      behance: 'https://www.behance.net/',
    },
    webShowcase: [
      {
        id: 'admin-dashboard',
        title: 'Central Administrative Operations Dashboard',
        caption: 'Desktop 1440px — Real-time Campus Metrics, Attendance & Faculty Workflows',
        description: 'A high-density executive command center delivering live attendance percentages, automated tuition collection status, enrollment rosters, and faculty workload analytics at a single glance.',
        badge: 'ADMIN PORTAL',
      },
      {
        id: 'design-system-spec',
        title: 'Modular Web Component Design System & Tokens',
        caption: 'Design Tokens & UI Kit — 80+ Accessible Enterprise Components',
        description: 'Engineered a scalable design system containing data tables with multi-filter sorting, status badges, contextual flyout modals, input validation states, and strict WCAG AAA contrast tokens for low eye-strain during 8-hour staff shifts.',
        badge: 'DESIGN SYSTEM & TOKENS',
      },
      {
        id: 'student-directory',
        title: 'High-Density Student Directory & Academic Gradebook',
        caption: 'Data Grid View — Inline Batch Grading, Transcript Generation & Parent Sync',
        description: 'Advanced tabular interface equipped with keyboard shortcuts, multi-column freezing, bulk status updates, and one-click official PDF transcript generation that reduced grading time by 75%.',
        badge: 'GRADEBOOK & RECORDS',
      },
      {
        id: 'schedule-matrix',
        title: 'Interactive Timetable & Room Conflict Engine',
        caption: 'Scheduling Grid — Drag-and-drop Lecture Allocation with Auto Conflict Alerts',
        description: 'A visual schedule coordinator that instantly alerts registrars to room double-bookings or instructor schedule overlaps, saving dozens of administrative hours each semester.',
        badge: 'SCHEDULING ENGINE',
      },
    ],
    overview: {
      whatItIs: 'School Management System is an enterprise-grade cloud web application and unified design system built to orchestrate end-to-end academic operations for schools and universities—from admissions and student rosters to grading, attendance, and faculty scheduling.',
      problemOrPurpose: 'Prior to the redesign, school staff, teachers, and registrars struggled with 4 outdated legacy software tools plagued by clunky interfaces, inconsistent table controls, and high cognitive load. Teachers spent an average of 6 hours every week manually entering duplicate data across disconnected platforms.',
      myRole: 'Lead Product Designer & Design System Lead. I conducted field interviews with 18 teachers, registrars, and campus administrators; architected the multi-tier design system token hierarchy; designed over 80+ reusable Figma web components; and partnered with engineering to implement pixel-perfect React UI components.',
      contributionsOrImprovements: [
        'Built a complete 80+ component web design system with full token governance, reducing UI production time for new modules by 60%.',
        'Designed high-density data tables featuring sticky headers, inline quick-editing, and customizable column sorting.',
        'Slashed administrative grade-entry and report-card generation cycle time from 4 days down to under 30 minutes.',
        'Standardized clear status taxonomy and accessible color tokens (Emerald for Present/Paid, Amber for Pending, Rose for Deficient, Cobalt for Active).',
      ],
      keyDecisions: [
        'Adopted a high-density, low-glare neutral slate palette specifically tailored for staff working across multi-monitor office setups.',
        'Prioritized keyboard-first data entry shortcuts across all student table grids to accommodate high-volume administrative typing.',
        'Established modular role-based dashboard views that declutter the interface depending on whether the user is a teacher, registrar, or principal.',
      ],
    },
  },
];
