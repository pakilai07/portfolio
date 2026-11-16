// Source: Patrick's Upwork profile, read on 2026-11-16. No employment dates or metrics supplied.
export const profile = {
  name: 'Patrick Lai',
  upwork: 'https://www.upwork.com/freelancers/~01f362eba5eb38d117',
  github: 'https://github.com/patricklai8715',
  email: 'pakilai0715@gmail.com',
};
export const experiences = [
  { company: 'Freelance', role: 'Freelance Web Developer', description: 'Web applications, Shopify themes, and workflow integrations with n8n, Zapier, or custom APIs.' },
  { company: 'JD', role: 'Front-End Developer', description: 'Front-end engineering experience at JD, working on established products.' },
  { company: 'SHEIN', role: 'Front-End Developer', description: 'Front-end engineering experience at SHEIN. My portfolio includes its global e-commerce experience for desktop and PWA.' },
  { company: 'uCloudlink', role: 'Front-End Developer', description: 'Previous front-end development role at uCloudlink.' },
];
export const gallery = [
  { title: 'SHEIN Global Fast-fashion E-commerce (PC & PWA)', image: '/images/shein.jpg', tags: ['Vue.js', 'Node.js', 'ExpressJS', 'SCSS'] },
  { title: 'Human Resources Management System', image: '/images/hr-management.jpg', tags: ['React', 'Next.js', 'OpenAPI', 'Tailwind CSS'] },
];
export const stack = [
  { group: '01 / INTERFACE', title: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], symbol: '</>' },
  { group: '02 / WEB PLATFORMS', title: 'Web Platforms', items: ['Node.js', 'ExpressJS', 'Shopify Liquid', 'WordPress'], symbol: '{ }' },
  { group: '03 / AUTOMATION', title: 'Automation', items: ['Python', 'n8n', 'Zapier', 'Make', 'Custom APIs'], symbol: '↗' },
];
export const cases: { title: string; category: string; problem: string; responsibility: string; solution: string; outcome: string; demo?: string }[] = [
  { title: 'Your Web Application', category: 'WEB APPLICATION', problem: 'Describe the customer’s problem and who was affected.', responsibility: 'Specify the features and decisions you personally owned.', solution: 'Explain what you built and why you chose that approach.', outcome: 'Add a verified result, a working feature, or a reproducible check.' },
  { title: 'Your Business Website', category: 'WEBSITE DEVELOPMENT', problem: 'Explain what the existing website or process could not do.', responsibility: 'Clarify your contribution and the scope of the engagement.', solution: 'Describe how the design and development addressed the problem.', outcome: 'Link evidence or report a measured before-and-after result.' },
  { title: 'Your Integration Project', category: 'API & AUTOMATION', problem: 'Describe the manual task or disconnected systems.', responsibility: 'Explain which integration or workflow you implemented.', solution: 'Summarize the data flow, error handling, and technical approach.', outcome: 'Add verified time savings or demonstrate the completed workflow.' },
];

export const steps = [
  { title: 'Discovery', text: 'I review your Figma designs, requirements, or existing codebase, and we align on scope, timeline, and success criteria for the finished work.' },
  { title: 'Build', text: 'I break the work into small milestones and share working previews. You can test each feature and provide feedback early, while changes are still easy to make.' },
  { title: 'Quality', text: 'I build responsive interfaces with reusable components and test key user journeys across the browsers and screen sizes your customers use. For automations, I also validate edge cases such as missing data or connected service failures.' },
  { title: 'Delivery', text: 'I hand over the code and setup notes, walk you through the changes, and agree with you on any post-launch support you may need.' },
];
