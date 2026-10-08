export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface BioFact {
  label: string;
  value: string;
}

export const processItems: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Get close to the brief, the people, and the conditions around the problem.',
  },
  {
    number: '02',
    title: 'RESEARCH',
    description: 'Look for patterns in what people need, do, and struggle with.',
  },
  {
    number: '03',
    title: 'DEFINE',
    description: 'Turn the signal into a focused problem and a useful direction.',
  },
  {
    number: '04',
    title: 'DESIGN',
    description: 'Shape the experience from structure to visual language.',
  },
  {
    number: '05',
    title: 'PROTOTYPE',
    description: 'Make ideas tangible enough to question, test, and improve.',
  },
  {
    number: '06',
    title: 'TEST',
    description: 'Learn from real use and refine what matters most.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'WHAT TOOLS DO YOU USE?',
    answer:
      'Figma is at the centre of my process, with FigJam, Framer, Notion, and Adobe tools supporting the work. The tool follows the problem.',
  },
  {
    question: 'HOW LONG DOES A PROJECT TAKE?',
    answer:
      'It depends on the scope and how quickly we can make decisions together. We will agree on clear milestones before the work begins.',
  },
  {
    question: 'DO YOU WORK WITH DEVELOPERS?',
    answer:
      'Yes. I value close collaboration with developers and prepare thoughtful, practical handoffs that keep the intent intact.',
  },
  {
    question: 'CAN I HIRE YOU?',
    answer:
      'I am available for selected projects. Send a short note about what you are making and where you need design support.',
  },
  {
    question: 'WHAT DO YOU NEED TO START?',
    answer:
      'A little context goes a long way: the challenge, the people it affects, what you have tried, and what a good outcome would mean.',
  },
];

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'CLARITY',
    description: 'Make the next step obvious.',
  },
  {
    number: '02',
    title: 'FUNCTION',
    description: 'Design should solve a real problem.',
  },
  {
    number: '03',
    title: 'DETAIL',
    description: 'Small decisions create meaningful experiences.',
  },
];

export const toolsList: string[] = [
  'FIGMA',
  'FRAMER',
  'FIGJAM',
  'JIRA',
  'NOTION',
  'PHOTOSHOP',
  'ILLUSTRATOR',
];

export const skillsList: string[] = [
  'UX RESEARCH',
  'WIREFRAMING',
  'PROTOTYPING',
  'DESIGN SYSTEMS',
  'INTERACTION DESIGN',
  'RESPONSIVE DESIGN',
];

export const bioFacts: BioFact[] = [
  { label: 'NAME', value: 'SOTHEARITH' },
  { label: 'ROLE', value: 'UI/UX DESIGNER' },
  { label: 'LOCATION', value: 'CAMBODIA' },
  { label: 'FOCUS', value: 'WEB · MOBILE · DIGITAL SYSTEMS' },
];

export const aboutData = {
  heading: "I LIKE\nMAKING\nCOMPLICATED\nTHINGS SIMPLE.",
  description:
    "I'm Sothearith, a UI/UX designer focused on creating digital products that are clear, useful, and intentional. I work from Cambodia, partnering with people who care about making things better.",
};
