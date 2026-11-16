// Replace draft content with your own verified experience before publishing.
export const profile = {
  name: 'Pakilai',
  upwork: 'https://www.upwork.com/', // Replace with your personal Upwork profile.
  github: 'https://github.com/pakilai07',
  email: '', // Add your real address to enable the email link.
};

export const experiences = [
  { period: 'EXPERIENCE 01', role: 'Your most recent role', company: 'Company / independent work', description: 'Add your role, the product you worked on, and the responsibilities you owned.', tags: ['Role', 'Responsibilities', 'Impact'] },
  { period: 'EXPERIENCE 02', role: 'Your previous role', company: 'Company / collaboration', description: 'Describe a previous role or collaboration. Explain what you delivered and how you worked with the team.', tags: ['Collaboration', 'Delivery', 'Learning'] },
  { period: 'EXPERIENCE 03', role: 'Another relevant experience', company: 'Company / personal project', description: 'Add another relevant experience, an open-source contribution, or an independent project.', tags: ['Foundation', 'Ownership', 'Growth'] },
];

export const stack = [
  { group: '01 / INTERFACE', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], symbol: '</>' },
  { group: '02 / LOGIC', title: 'Backend & data', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma'], symbol: '{ }' },
  { group: '03 / DELIVERY', title: 'Workflow', items: ['Git', 'GitHub', 'Vercel', 'Figma'], symbol: '↗' },
];

export const cases: { title: string; category: string; problem: string; responsibility: string; solution: string; outcome: string; demo?: string }[] = [
  { title: 'Your web application', category: 'WEB APPLICATION', problem: 'Describe the customer’s problem and who was affected.', responsibility: 'Specify the features and decisions you personally owned.', solution: 'Explain what you built and why you chose that approach.', outcome: 'Add a verified result, a working feature, or a reproducible check.' },
  { title: 'Your business website', category: 'WEBSITE DEVELOPMENT', problem: 'Explain what the existing website or process could not do.', responsibility: 'Clarify your contribution and the scope of the engagement.', solution: 'Describe how the design and development addressed the problem.', outcome: 'Link evidence or report a measured before-and-after result.' },
  { title: 'Your integration project', category: 'API & AUTOMATION', problem: 'Describe the manual task or disconnected systems.', responsibility: 'Explain which integration or workflow you implemented.', solution: 'Summarize the data flow, error handling, and technical approach.', outcome: 'Add verified time savings or demonstrate the completed workflow.' },
];

export const steps = [
  { title: 'Discuss your project', text: 'Send me a brief on Upwork with what you need and when you need it. We’ll discuss whether I can help.' },
  { title: 'Set the scope', text: 'We’ll agree on what I’ll deliver, the milestones, and the schedule before I start.' },
  { title: 'Review work in progress', text: 'I’ll share working demos and updates during development so you can try things and request changes.' },
  { title: 'Test and hand over', text: 'We’ll test the agreed features before launch. I’ll hand over the code and documentation so you can maintain the project.' },
];
