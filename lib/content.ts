// Replace draft content with your own verified experience before publishing.
export const profile = {
  name: 'Pakilai',
  upwork: 'https://www.upwork.com/', // Replace with your personal Upwork profile.
  github: 'https://github.com/pakilai07',
  email: '', // Add your real address to enable the email link.
};

export const experiences = [
  { period: 'EXPERIENCE 01', role: 'Your most recent role', company: 'Company / independent work', description: 'Add your role, the product you worked on, and the responsibilities you owned.', tags: ['Role', 'Responsibilities', 'Impact'] },
  { period: 'EXPERIENCE 02', role: 'An earlier chapter', company: 'Company / collaboration', description: 'Describe a previous role or collaboration. Explain what you delivered and how you worked with the team.', tags: ['Collaboration', 'Delivery', 'Learning'] },
  { period: 'EXPERIENCE 03', role: 'Where it started', company: 'Company / personal project', description: 'Add another relevant experience, an open-source contribution, or an independent project.', tags: ['Foundation', 'Ownership', 'Growth'] },
];

export const stack = [
  { group: '01 / INTERFACE', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], symbol: '</>' },
  { group: '02 / LOGIC', title: 'Backend & data', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma'], symbol: '{ }' },
  { group: '03 / DELIVERY', title: 'Workflow', items: ['Git', 'GitHub', 'Vercel', 'Figma'], symbol: '↗' },
];

export const cases: { title: string; category: string; problem: string; responsibility: string; solution: string; outcome: string; demo?: string }[] = [
  { title: 'Your web application', category: 'WEB APPLICATION', problem: 'Describe the customer’s problem and who was affected.', responsibility: 'Specify the features and decisions you personally owned.', solution: 'Explain the implementation and the reasons behind key choices.', outcome: 'Add a verified result, a working feature, or a reproducible check.' },
  { title: 'Your business website', category: 'WEBSITE DEVELOPMENT', problem: 'Explain what the existing website or process could not do.', responsibility: 'Clarify your contribution and the scope of the engagement.', solution: 'Describe how the design and development addressed the problem.', outcome: 'Link evidence or report a measured before-and-after result.' },
  { title: 'Your integration project', category: 'API & AUTOMATION', problem: 'Describe the manual task or disconnected systems.', responsibility: 'Explain which integration or workflow you implemented.', solution: 'Summarize the data flow, error handling, and technical approach.', outcome: 'Add verified time savings or demonstrate the completed workflow.' },
];

export const steps = [
  { title: 'Start with a conversation.', text: 'Share your goals, current challenges, and timeline through Upwork. We’ll work out whether the project is a good fit.' },
  { title: 'Agree on the plan.', text: 'Define the scope, deliverables, and milestones before development begins. You’ll know what to expect.' },
  { title: 'Build. Review. Refine.', text: 'Follow progress through working demos and regular updates. Give feedback while there’s room to act on it.' },
  { title: 'Launch with a handoff.', text: 'Review the finished work, test the agreed scope, and receive the code and documentation you need to move forward.' },
];
