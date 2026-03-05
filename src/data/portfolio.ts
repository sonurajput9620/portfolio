export const personalInfo = {
  name: "Sonu",
  role: "Senior Software Engineer • Full-Stack Developer",
  subtitle: "I build scalable enterprise web applications with AI-powered development",
  phone: "+91 9717572728",
  email: "develop.sonu@gmail.com",
  linkedin: "https://www.linkedin.com/in/sonu-a6465b22a",
  github: "https://github.com/sonurajput9620",
  portfolio: "https://dev-sonu-portfolio.netlify.app/",
  resumeUrl: "/Sonu Resume.pdf",
  bio: "Results-driven Full-Stack Engineer with 5 years of experience architecting scalable enterprise web applications across fintech, banking, and healthcare verticals. Currently driving a mission-critical AngularJS → Angular 19 migration for Optum (UnitedHealth Group) at HCL Technologies. Proven track record of integrating government APIs (UIDAI), video KYC, secure payment gateways, and AI-assisted development workflows that dramatically accelerate delivery timelines."
};

export const skills = {
  frontend: [
    { name: "Angular (2–19)", level: 95 },
    { name: "AngularJS", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "RxJS", level: 90 },
    { name: "NgRx", level: 85 },
    { name: "Redux Toolkit", level: 80 },
    { name: "Angular Material", level: 90 },
    { name: "PrimeNG", level: 90 },
    { name: "PrimeFlex", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Ionic", level: 75 },
    { name: "Bootstrap", level: 85 },
    { name: "Micro-Frontend (Module Federation)", level: 80 },
    { name: "Shadcn", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "TypeScript", level: 95 },
    { name: "REST APIs", level: 95 },
    { name: "Microservices Architecture", level: 85 },
    { name: "Socket.io", level: 80 },
    { name: "Multer", level: 80 },
    { name: "Axios", level: 85 }
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "Sequelize ORM", level: 80 },
    { name: "Mongoose", level: 85 },
    { name: "Prisma", level: 80 }
  ],
  aiTools: [
    { name: "AI-Powered Development", level: 90 },
    { name: "Cursor", level: 90 },
    { name: "Lovable", level: 85 },
    { name: "GitHub Copilot", level: 90 },
    { name: "Prompt Engineering", level: 85 },
    { name: "LLM Integration", level: 80 },
    { name: "AI Code Review & Documentation", level: 85 },
    { name: "AI Workflow Automation", level: 80 }
  ],
  devOps: [
    { name: "Git/GitHub", level: 95 },
    { name: "Bitbucket", level: 90 },
    { name: "CI/CD Pipelines (Azure DevOps)", level: 85 },
    { name: "GitHub Actions", level: 85 },
    { name: "Postman", level: 90 },
    { name: "Jira", level: 85 },
    { name: "Agile/Scrum", level: 85 }
  ]
};

export const experiences = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Prophecy Technology (Deployed at HCL Technologies)",
    duration: "Oct 2025 – Present",
    location: "Remote",
    type: "Full-time",
    client: "Optum (UnitedHealth Group)",
    project: "SubroPoint - Healthcare Subrogation Platform",
    responsibilities: [
      "Leading high-impact AngularJS → Angular 19 migration for SubroPoint, Optum's enterprise subrogation management platform",
      "Architected component-by-component migration strategy ensuring zero-downtime transition with full backward compatibility",
      "Leveraged AI-powered development tools (Cursor, GitHub Copilot) to accelerate migration velocity by 60%",
      "Introduced modern Angular best practices — standalone components, signals, lazy loading, and OnPush change detection",
      "Reduced bundle size by 35% and improved page load performance significantly",
      "Collaborated cross-functionally with HCL engineering teams and Optum product stakeholders",
      "Championed AI adoption within the team, improving overall team productivity by 40%"
    ],
    technologies: ["Angular 19", "AngularJS", "TypeScript", "Azure", "AI-Powered Development", "Cursor", "GitHub Copilot", "Agile/Scrum"]
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Mindrops Solution Pvt. Ltd.",
    duration: "May 2023 – Sep 2025",
    location: "Delhi, India",
    type: "Full-time",
    responsibilities: [
      "Pioneered AI-powered development workflows using Cursor and Lovable, achieving 80% boost in API development productivity",
      "Engineered a multi-tenant Appointment Booking SaaS on Azure with distinct Admin and Customer modules",
      "Implemented sophisticated drag-and-drop calendar (day/week/month views) improving scheduling efficiency by 70%",
      "Built executive-grade data analytics dashboard with real-time charts and KPI tables",
      "Enhanced stakeholder data visibility by 60%, enabling faster business decisions",
      "Mentored junior developers on Angular architecture patterns, RxJS observables, and AI-assisted development",
      "Established team-wide coding consistency standards"
    ],
    technologies: ["Angular", "Node.js", "MongoDB", "TypeScript", "Express.js", "Azure", "Cursor", "Lovable", "RxJS", "Angular Material"]
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    company: "Decimal Technologies",
    duration: "June 2021 – April 2023",
    location: "Gurugram, India",
    type: "Full-time",
    responsibilities: [
      "Delivered secure, compliant web applications for leading Indian banking institutions",
      "Integrated eKYC & vKYC modules using UIDAI government APIs for Aadhaar validation",
      "Slashed manual verification effort by 90% and accelerated customer onboarding by 3x",
      "Executed complex Angular v9 → v14 framework upgrade, resolving 200+ deprecation issues",
      "Improved runtime performance by 45% and ensured long-term maintainability",
      "Integrated PCI-compliant payment gateway and third-party video KYC portal",
      "Built digital savings account opening platform for a leading national bank"
    ],
    technologies: ["Angular", "JavaScript", "Node.js", "MySQL", "Express.js", "TypeScript", "Payment Gateways", "UIDAI APIs", "GitHub CI/CD"]
  }
];

export const projects = [
  {
    id: 1,
    title: "SubroPoint — Healthcare Subrogation Platform",
    description: "Modernizing a large-scale AngularJS enterprise application to Angular 19 for Optum (UnitedHealth Group), introducing signals, standalone components, and modern state management for a future-proof architecture.",
    longDescription: "A mission-critical AngularJS → Angular 19 migration for SubroPoint, Optum's enterprise subrogation management platform serving thousands of healthcare professionals. Architected component-by-component migration strategy ensuring zero-downtime transition with full backward compatibility during phased rollout across production environments.",
    image: "/project1.jpg",
    technologies: ["AngularJS", "Angular 19", "TypeScript", "Azure", "Cursor", "GitHub Copilot", "HCL/Optum"],
    features: [
      "Zero-downtime AngularJS to Angular 19 migration",
      "Standalone components & signals implementation",
      "35% bundle size reduction",
      "AI-assisted test coverage automation",
      "Improved code reliability for healthcare workflows"
    ],
    company: "Prophecy Technology (Deployed at HCL Technologies)",
    client: "Optum (UnitedHealth Group)",
    category: "Healthcare"
  },
  {
    id: 2,
    title: "Appointment Booking System (SaaS)",
    description: "Developed a white-label multi-tenant SaaS platform supporting appointment scheduling across diverse business verticals with fully customizable customer portals, staff management, and room scheduling.",
    longDescription: "A comprehensive multi-tenant appointment booking system designed for diverse business verticals. Features admin tooling for staff, rooms, and exam management with dynamic weekly availability, absence handling, and real-time conflict detection.",
    image: "/project2.jpg",
    technologies: ["Angular", "Node.js", "MongoDB", "TypeScript", "Express.js", "Azure"],
    features: [
      "Multi-tenant white-label architecture",
      "Drag-and-drop calendar interface (day/week/month)",
      "Staff and room management with dynamic availability",
      "Real-time conflict detection",
      "Customer portal customization",
      "70% improvement in scheduling efficiency"
    ],
    company: "Mindrops Solution Pvt. Ltd.",
    category: "SaaS"
  },
  {
    id: 3,
    title: "Open Savings Account — Banking Platform",
    description: "Built a digital savings account opening journey for a top-tier national bank with UIDAI/PAN validation, video KYC integration, and secure payment processing using government APIs.",
    longDescription: "A secure banking platform for digital account opening with government API integrations (UIDAI), video KYC verification, and secure payment gateway integration. Implemented GitHub Actions CI/CD pipeline for automated testing and zero-downtime deployments across staging and production environments.",
    image: "/project3.jpg",
    technologies: ["Angular", "Node.js", "MySQL", "TypeScript", "Express.js", "UIDAI APIs", "GitHub CI/CD"],
    features: [
      "UIDAI & PAN validation integration",
      "Video KYC verification",
      "Secure payment gateway integration",
      "Automated CI/CD pipeline (GitHub Actions)",
      "Zero-downtime deployments",
      "90% reduction in manual verification"
    ],
    company: "Decimal Technologies",
    client: "Leading National Bank",
    category: "FinTech"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Indira Gandhi National Open University, Delhi",
    duration: "2021 – 2023",
    type: "Master's Degree"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Lingaya's Vidyapeeth, Faridabad, Haryana",
    duration: "2018 – 2021",
    type: "Bachelor's Degree"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sonu-a6465b22a",
    icon: "LinkedIn"
  },
  {
    name: "GitHub",
    url: "https://github.com/sonurajput9620",
    icon: "Github"
  },
  {
    name: "Email",
    url: "develop.sonu@gmail.com",
    icon: "Mail"
  }
];
