export interface MobileScreen {
  id: string;
  number: string;
  name: string;
  label: string;
  title: string;
  description: string;
  accentColor?: string;
  image?: string;
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
  name: string;
  category: string;
  label: string;
  year: string;
  desc: string;
  theme: 'student' | 'featured' | 'website' | 'system';
  platform: 'Mobile App' | 'Web' | 'Mobile App + Web';
  featured?: boolean;
  thumbnail?: string;
  images?: string[];
  tags?: string[];
  role: string;
  tools: string[];
  clientOrContext: string;
  timeline: string;

  externalLinks: {
    figma?: string;
    github?: string;
    googlePlay?: string;
    behance?: string;
    liveWebsite?: string;
    projectLink?: string;
  };

  mobileScreens?: MobileScreen[];
  webShowcase?: WebShowcaseSection[];

  overview: {
    headline?: string;
    whatItIs: string;
    problemOrPurpose: string;
    myRole: string;
    contributionsOrImprovements?: string[];
    keyDecisions?: string[];
  };
}

export const projectsList: ProjectData[] = [
  // =========================================================
  // 01 — SALA APP
  // =========================================================
  {
    slug: 'sala-app',
    name: 'SALA APP',
    category: 'SCHOOL MANAGEMENT — MOBILE & WEB SYSTEM',
    label: 'SALA',
    year: '2026',

    desc: 'A full school management ecosystem I designed across two platforms — a student-facing mobile app and a web-based admin system for managing students, grades, attendance, and school operations.',

    theme: 'student',
    platform: 'Mobile App + Web',
    featured: true,
    thumbnail: '/sala-web-dashboard.png',

    tags: [
      'MOBILE APP',
      'WEB SYSTEM',
      'STUDENT EXPERIENCE',
      'EDUCATION',
      'UI DESIGN'
    ],

    role: 'UX/UI Designer',
    tools: ['Figma'],
    clientOrContext: 'School Management System',
    timeline: 'Product Design',

    externalLinks: {
      googlePlay: 'https://play.google.com/store/apps/details?id=co.sala.salademo&hl=en',
      liveWebsite: 'https://www.sala.tech/'
    },

    mobileScreens: [
      {
        id: 'home',
        number: '01',
        name: 'Home',
        label: 'HOME',
        title: 'Student Home Dashboard',
        description:
          'A central starting point that gives students quick access to their most important academic information and everyday actions.',
        accentColor: '#10b981'
      },

      {
        id: 'timetable',
        number: '02',
        name: 'Timetable',
        label: 'TIMETABLE',
        title: 'Daily & Weekly Timetable',
        description:
          'A clear schedule view that helps students check their classes, subjects, times, and upcoming lessons.',
        accentColor: '#3b82f6'
      },

      {
        id: 'grades',
        number: '03',
        name: 'Grades',
        label: 'GRADES',
        title: 'Grades & Academic Results',
        description:
          'A structured view for students to review their academic results and understand their performance across subjects.',
        accentColor: '#8b5cf6'
      },

      {
        id: 'homework',
        number: '04',
        name: 'Homework',
        label: 'HOMEWORK',
        title: 'Homework & Assignments',
        description:
          'A dedicated space for students to check assigned homework, upcoming work, and assignment information.',
        accentColor: '#f59e0b'
      },

      {
        id: 'profile',
        number: '05',
        name: 'Profile',
        label: 'PROFILE',
        title: 'Student Profile',
        description:
          'A personal student area containing profile information and important account details.',
        accentColor: '#06b6d4'
      },

      {
        id: 'attendance',
        number: '06',
        name: 'Attendance',
        label: 'ATTENDANCE',
        title: 'Attendance Overview',
        description:
          'A simple way for students to review their attendance records and stay aware of their attendance status.',
        accentColor: '#10b981'
      },

      {
        id: 'behavior',
        number: '07',
        name: 'Behavior',
        label: 'BEHAVIOR',
        title: 'Student Behavior',
        description:
          'A dedicated area for viewing student behavior records within the school management experience.',
        accentColor: '#6366f1'
      },

      {
        id: 'tuition',
        number: '08',
        name: 'Tuition',
        label: 'TUITION',
        title: 'Tuition & Fee Information',
        description:
          'A student-facing view for accessing tuition and fee-related information in one place.',
        accentColor: '#ec4899'
      },

      {
        id: 'resources',
        number: '09',
        name: 'Resources',
        label: 'RESOURCES',
        title: 'School Resources',
        description:
          'A space for students to access school-provided resources and important academic documents.',
        accentColor: '#f97316'
      },

      {
        id: 'notifications',
        number: '10',
        name: 'Notifications',
        label: 'NOTIFICATIONS',
        title: 'School Notifications',
        description:
          'A centralized notification area for important school updates and student-related announcements.',
        accentColor: '#14b8a6'
      }
    ],

    webShowcase: [
      {
        id: 'web-dashboard',
        title: 'SALA SMS — Web-Based School Management System',
        caption: 'WEB SYSTEM',
        description:
          'The web system is the institutional backbone of SALA — built for administrators and teachers. It centralizes student enrollment, attendance tracking, grade recording, homework assignment, timetable scheduling, behavior monitoring, fee management, and school-wide announcements into one structured platform. Admins get a real-time dashboard overview of school metrics, at-risk student flags, enrollment trends, and operational data — giving institutions full visibility and control from a single interface.',
        badge: '02 / WEB SYSTEM'
      }
    ],

    overview: {
      headline: 'One ecosystem. Two platforms. The full school experience.',
      whatItIs:
        'SALA is a school management ecosystem I designed across two platforms. The mobile app gives students direct access to their timetable, grades, attendance, and school services. The web system is the admin and teacher-facing side — managing student records, academic data, and day-to-day school operations.',

      problemOrPurpose:
        'Schools often rely on disconnected tools — spreadsheets for grades, paper registers for attendance, and phone calls for announcements. SALA brings both the student experience and the management backend into one cohesive, intentional product.',

      myRole:
        'UX/UI Designer responsible for the full product — designing both the student mobile app and the web-based admin system, including information architecture, screen layouts, interaction patterns, and visual system.',

      contributionsOrImprovements: [
        'Designed the complete student-facing mobile experience across 10 core screens.',
        'Designed the web-based admin system for student, grade, and attendance management.',
        'Built a consistent visual system shared across both mobile and web surfaces.',
        'Structured information flows so both students and admins get what they need quickly.'
      ],

      keyDecisions: [
        'Mobile-first for students — Web-first for admin — both sharing a unified visual language.',
        'Separated concerns clearly: students see only their own data; admins manage all of it.',
        'Kept navigation minimal on mobile and structured on web to match each context.',
        'Designed for scalability — the system can grow to include more modules without redesign.'
      ]
    }
  },


  // =========================================================
  // 02 — HR MANAGEMENT SYSTEM APP
  // =========================================================
  {
    slug: 'hr-management-app',
    name: 'HR MANAGEMENT SYSTEM APP',
    category: 'HR MOBILE APP',
    label: 'HR SYSTEM',
    year: '2026',

    desc: 'A mobile HR management app designed for employee self-service, real-time GPS attendance check-in, leave requests, and workplace task tracking.',

    theme: 'featured',
    platform: 'Mobile App',
    thumbnail: '/hr-home.png',

    tags: [
      'MOBILE APP',
      'HR SYSTEM',
      'ATTENDANCE & GPS',
      'EMPLOYEE EXPERIENCE',
      'UI DESIGN'
    ],

    role: 'UX/UI Designer',
    tools: ['Figma'],
    clientOrContext: 'HR & Workforce Management Concept',
    timeline: 'Product Design',

    externalLinks: {
      figma: 'https://www.figma.com/design/4K66md7AFL1Rxm2GJQkjVf/HR-Tech?node-id=0-1&t=pht89KCHcoH03QiK-1',
      behance: 'https://www.behance.net/gallery/238087955/HR-Management-System'
    },

    mobileScreens: [
      {
        id: 'signin',
        number: '01',
        name: 'Sign In',
        label: 'SIGN IN',
        title: 'Employee Authentication',
        description:
          'Clean authentication interface featuring email/password sign-in and Google single sign-on integration.',
        accentColor: '#2563eb',
        image: '/hr-signin.png'
      },

      {
        id: 'dashboard',
        number: '02',
        name: 'Attendance Home',
        label: 'DASHBOARD',
        title: 'Today Attendance Dashboard',
        description:
          'Home dashboard with weekly date picker, real-time check-in/out timestamps (8:00 AM – 5:00 PM), and monthly attendance stats.',
        accentColor: '#2563eb',
        image: '/hr-home.png'
      },

      {
        id: 'checkin',
        number: '03',
        name: 'Clock In',
        label: 'CLOCK IN',
        title: 'One-Tap Clock In Interface',
        description:
          'Centralized check-in screen with dynamic clock, Phnom Penh geolocation detection, and 10-hour working time counter.',
        accentColor: '#4f46e5',
        image: '/hr-checkin.png'
      },

      {
        id: 'confirm-modal',
        number: '04',
        name: 'Confirmation',
        label: 'CONFIRMATION',
        title: 'Attendance Confirmation Flow',
        description:
          'Guided bottom sheet modal for instant attendance verification before logging entry into the HR system.',
        accentColor: '#2563eb',
        image: '/hr-confirm-modal.png'
      },

      {
        id: 'location',
        number: '05',
        name: 'GPS Location',
        label: 'LOCATION',
        title: 'GPS Geofencing Verification',
        description:
          'Interactive map location confirmation with 1.5 km accuracy ensuring employees verify their work address.',
        accentColor: '#3b82f6',
        image: '/hr-location.png'
      },

      {
        id: 'category',
        number: '06',
        name: 'Categories',
        label: 'CATEGORIES',
        title: 'Quick Actions & Service Hub',
        description:
          'Centralized directory for Overtime, Leave, Permission, Calendar, Meeting Room booking, and KPI tracking.',
        accentColor: '#2563eb',
        image: '/hr-category.png'
      },

      {
        id: 'kpi',
        number: '07',
        name: 'KPI & Trends',
        label: 'PERFORMANCE',
        title: 'KPI & Monthly Performance Trends',
        description:
          'Performance dashboard tracking quarterly attendance rate (98%), task completion (18/20), and performance score (9/10).',
        accentColor: '#2563eb',
        image: '/hr-kpi.png'
      },

      {
        id: 'leaderboard',
        number: '08',
        name: 'Leaderboard',
        label: 'LEADERBOARD',
        title: 'Department & Employee Leaderboard',
        description:
          'Gamified ranking podium featuring monthly and 3-month employee performance scores across departments.',
        accentColor: '#f59e0b',
        image: '/hr-leaderboard.png'
      },

      {
        id: 'training',
        number: '09',
        name: 'Training',
        label: 'TRAINING',
        title: 'Popular Lessons & Video Training',
        description:
          'Interactive learning hub featuring video lessons, course durations, and professional development modules.',
        accentColor: '#3b82f6',
        image: '/hr-training.png'
      },

      {
        id: 'profile',
        number: '10',
        name: 'Profile',
        label: 'PROFILE',
        title: 'Employee Profile & Preferences',
        description:
          'Personal profile area for managing employee information, notification preferences, language settings, and security.',
        accentColor: '#111827',
        image: '/hr-profile.png'
      }
    ],

    overview: {
      headline: 'Streamlining everyday workforce operations into intuitive mobile self-service.',

      whatItIs:
        'HR Management System App is a mobile experience designed around common employee self-service tasks such as attendance tracking, GPS clock-in, leave management, payroll, and employee records.',

      problemOrPurpose:
        'Navigating enterprise HR portals on the go is often complex. This app simplifies daily check-in/out, GPS location verification, and employee records into a fast, mobile-friendly interface.',

      myRole:
        'UX/UI Designer — Designed user flows, mobile wireframes, high-fidelity UI screens in Figma, and reusable design components.',

      contributionsOrImprovements: [
        'Designed one-tap GPS clock-in flow with geofence address verification.',
        'Created attendance dashboard with calendar selector and monthly statistics.',
        'Designed authentication flow with Google SSO and credential sign-in.',
        'Built reusable mobile component patterns for cards, modals, and status tags.'
      ],

      keyDecisions: [
        'One-Tap Attendance — Made daily check-in and check-out the primary action on the mobile home screen.',
        'GPS Verification — Added visual map confirmation to ensure accurate work location check-ins.',
        'Scannable Statistics — Organized monthly attendance into clear present, absent, and late metric badges.',
        'Modular UI Architecture — Built consistent components that scale across employee self-service features.'
      ]
    }
  },


  // =========================================================
  // 03 — SPEAKNEWS
  // =========================================================
  {
    slug: 'speaknews',
    name: 'SPEAK NEWS',
    category: 'WEB UX AUDIT & REDESIGN',
    label: 'SPEAKNEWS',
    year: '2025',

    desc: 'A comprehensive UX audit and editorial web redesign transforming an existing news website into an intuitive, high-clarity reading experience with streamlined content discovery.',

    theme: 'website',
    platform: 'Web',
    thumbnail: '/speaknews-homepage.png',

    tags: [
      'UX AUDIT',
      'WEB REDESIGN',
      'INFORMATION ARCHITECTURE',
      'EDITORIAL UI',
      'DESIGN SYSTEM'
    ],

    role: 'Lead UX/UI Designer',
    tools: ['Figma'],
    clientOrContext: 'Independent UX Case Study',
    timeline: 'Completed (2025)',

    externalLinks: {
      liveWebsite: 'https://speak-news.com.kh/'
    },

    webShowcase: [
      {
        id: 'homepage',
        title: 'Homepage & Newsfeed Architecture',
        caption: 'Clear Story Hierarchy & Content Prioritization',
        description:
          'Redesigned the primary newsfeed with structured headline tiers, category badges, and scannable visual modules that accelerate story discovery without overwhelming readers.',
        badge: 'HOMEPAGE REDESIGN'
      },

      {
        id: 'article',
        title: 'Editorial Long-Form Reading Canvas',
        caption: 'Optimized Measure, Typography & White Space',
        description:
          'Crafted a distraction-free article layout featuring calibrated line lengths, harmonious editorial type scales, and structured sub-elements for effortless deep reading.',
        badge: 'ARTICLE EXPERIENCE'
      },

      {
        id: 'footer-navigation',
        title: 'Navigation Infrastructure & Footer Taxonomy',
        caption: 'Structured Content Indexing & Global Access',
        description:
          'Re-architected the site taxonomy and global footer into categorized hubs, providing immediate access to topical archives, publisher information, and key resources.',
        badge: 'SITE ARCHITECTURE'
      }
    ],

    overview: {
      headline: 'Transforming a news website into a cleaner, reader-first experience.',

      whatItIs:
        'SpeakNews is a web UX/UI redesign project focused on auditing an existing news website and improving how users discover, scan, and read news content.',

      problemOrPurpose:
        'The existing website suffered from cluttered layouts, weak hierarchy, and difficult navigation. The redesign addresses these issues through clearer content structure, intentional spacing, and improved typography.',

      myRole:
        'UX/UI Designer — Conducted the UX audit, identified usability issues, restructured page layouts in Figma, and created a consistent visual system.',

      contributionsOrImprovements: [
        'Audited the existing website to identify UX and UI pain points.',
        'Reorganized site navigation and content hierarchy.',
        'Redesigned homepage, article reading view, and footer layouts.',
        'Refined typography, spacing, and component consistency.',
        'Ensured layouts adapt cleanly across desktop and mobile.'
      ],

      keyDecisions: [
        'Prioritize clarity — Removed visual clutter so news content takes center stage.',
        'Strengthen hierarchy — Created distinct visual tiers between lead stories and secondary feeds.',
        'Improve readability — Optimized font scaling, line height, and spacing for comfortable reading.',
        'Unified visual system — Built reusable UI components for a consistent experience across pages.',
      ]
    }
  },


  // =========================================================
  // 04 — RENTFLOW
  // =========================================================
  {
    slug: 'rentflow',
    name: 'RENTFLOW',
    category: 'ROOM RENTAL MANAGEMENT SYSTEM',
    label: 'RENTFLOW',
    year: '2026',

    desc: 'A full-stack Room Rental Management System developed for my university final project at RUPP ITE, featuring Super Admin and Owner workspaces with dual-currency (USD/KHR) support.',

    theme: 'system',
    platform: 'Web',
    thumbnail: '/rentflow-owner.png',

    tags: [
      'FULL-STACK SYSTEM',
      'ROOM RENTAL MANAGEMENT',
      'RUPP ITE FINAL PROJECT',
      'REACT & LARAVEL',
      'DUAL CURRENCY (USD/KHR)'
    ],

    role: 'System Designer & Developer',
    tools: [
      'React',
      'TypeScript',
      'Vite',
      'Laravel',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'REST APIs',
      'Figma'
    ],

    clientOrContext: 'RUPP ITE Final Project',
    timeline: '2026',

    externalLinks: {
      github: 'https://github.com/Dinorith/RMS-last-version'
    },

    webShowcase: [
      {
        id: 'landing-page',
        title: 'Public Landing Page',
        caption: 'Product Overview & Onboarding',
        description:
          'Marketing landing page showcasing rental platform features, pricing tiers, and landlord onboarding.',
        badge: 'LANDING PAGE'
      },

      {
        id: 'superadmin-console',
        title: 'Super Admin Console',
        caption: 'Platform Oversight & Telemetry',
        description:
          'Centralized console for managing registered landlords, monitoring total rooms, live occupancy, and global revenue.',
        badge: 'SUPER ADMIN'
      },

      {
        id: 'owner-dashboard',
        title: 'Property Owner Dashboard',
        caption: 'Property Overview & Operations',
        description:
          'Operational dashboard for tracking room occupancy, overdue payment alerts, monthly income, and invoice generation.',
        badge: 'OWNER DASHBOARD'
      }
    ],

    overview: {
      headline: 'Turning everyday rental management into one connected system.',

      whatItIs:
        'RentFlow is a full-stack Room Rental Management System developed as my RUPP ITE final project. It centralizes properties, rooms, tenants, contracts, invoices, and utilities into one platform.',

      problemOrPurpose:
        'Managing rental rooms manually makes tracking leases, payments, and utilities tedious. RentFlow simplifies operations with dedicated Super Admin and Property Owner dashboards.',

      myRole:
        'System Designer & Developer — Designed and implemented the full-stack system across React, Laravel, and MySQL.',

      contributionsOrImprovements: [
        'Built role-based workspaces for Super Admins and Property Owners.',
        'Implemented room inventory, tenant records, and lease contracts.',
        'Developed automated invoicing with electricity/water utility tracking.',
        'Integrated dual-currency support for USD and Cambodian Riel (KHR).',
        'Created tenant portal for viewing invoices and submitting payment proof.'
      ],

      keyDecisions: [
        'Separate Workspaces — Clearly divided platform administration from property operations.',
        'Dual Currency (USD/KHR) — Supported both USD and Cambodian Riel with live exchange rates.',
        'Connected Rental Lifecycle — Linked rooms, contracts, utilities, and payments into a single workflow.',
        'RESTful API Architecture — Separated the React frontend from the Laravel backend for scalability.'
      ]
    }
  }
];