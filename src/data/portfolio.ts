export const personalInfo = {
  name: "Sonu",
  role: "Full Stack Developer",
  subtitle: "I build scalable web applications with beautiful UIs",
  phone: "+91 9717572728",
  email: "develop.sonu@gmail.com", // Update with your actual email
  linkedin: "https://www.linkedin.com/in/sonu-a6465b22a", // Update with your actual LinkedIn
  github: "https://github.com/sonurajput9620", // Update with your actual GitHub
  portfolio: "https://dev-sonu-portfolio.netlify.app/", // Update with your actual portfolio
  resumeUrl: "/resume.pdf", // Add your resume PDF to public folder
  bio: "Full-stack developer with 4+ years of experience building scalable and secure enterprise-grade web applications. Proven expertise in Angular, React, Node.js, and TypeScript with hands-on contributions to projects in fintech, banking, and multi-tenant SaaS platforms. Strong problem-solver with experience integrating government APIs (UIDAI), video KYC, and secure payment gateways."
};

export const skills = {
  frontend: [
    { name: "Angular", level: 90 },
    { name: "React", level: 70 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "RxJS", level: 85 },
    { name: "Angular Material", level: 80 },
    { name: "Ionic", level: 70 },
    { name: "PrimeNG", level: 90 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 65 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 90 }
  ],
  databases: [
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 75 }
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Bitbucket", level: 90 },
    { name: "MongoDB Atlas", level: 75 },
    { name: "Postman", level: 90 },
    { name: "Jira", level: 80 },
    { name: "Confluence", level: 70 },
    { name: "MySQL Workbench", level: 80 }
  ]
};

export const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Mindrops Solution PVT LTD",
    duration: "May 2023 – Sep 2025",
    location: "Delhi, India",
    type: "Full-time",
    responsibilities: [
      "Implemented multi-view calendar (day/week/month) with drag-and-drop appointment management",
      "Integrated Azure authentication for user session handling",
      "Developed data visualization dashboard using charts and tables",
      "Built multi-tenant admin portal for business configuration"
    ],
    technologies: ["Angular", "TypeScript", "Azure", "RxJS", "Angular Material"]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Decimal Technology",
    duration: "June 2021 – April 2023",
    location: "Gurugram, India",
    type: "Full-time",
    responsibilities: [
      "Developed secure web applications for banking sector clients",
      "Integrated eKYC/vKYC using UIDAI APIs for Aadhaar validation",
      "Implemented banking solutions for account opening and credit card applications",
      "Integrated third-party payment gateways for transaction processing"
    ],
    technologies: ["Angular", "JavaScript", "Node.js", "MySQL", "Payment Gateways"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Appointment Booking System",
    description: "Created multi-tenant SaaS solution with admin/customer portals. Implemented staff/room scheduling with dynamic availability configurations and real-time appointment rescheduling.",
    longDescription: "A comprehensive appointment booking system designed for multiple businesses. Features include staff scheduling, room management, customer portal customization, and real-time calendar interface for appointment management.",
    image: "/project1.jpg", // Add project images to public folder
    technologies: ["Angular", "Node.js", "MongoDB", "Socket.io", "Angular Material"],
    features: [
      "Multi-tenant architecture",
      "Real-time scheduling",
      "Customer portal customization",
      "Staff and room management",
      "Drag-and-drop calendar interface"
    ],
    githubUrl: "https://github.com/yourprofile/appointment-system",
    liveUrl: "https://appointment-demo.com",
    category: "SaaS"
  },
  {
    id: 2,
    title: "Open Saving Account Platform",
    description: "Built account opening system for leading Indian bank with government API integrations for PAN/Aadhaar verification and video KYC implementation.",
    longDescription: "A secure banking platform for digital account opening with government API integrations, video KYC verification, and secure payment gateway integration for seamless customer onboarding.",
    image: "/project2.jpg",
    technologies: ["Angular", "Node.js", "MySQL", "UIDAI APIs", "Payment Gateway"],
    features: [
      "Government API integration",
      "Video KYC verification",
      "Secure payment processing",
      "Document verification",
      "Real-time status tracking"
    ],
    githubUrl: "https://github.com/yourprofile/banking-platform",
    liveUrl: "https://banking-demo.com",
    category: "FinTech"
  },
  {
    id: 3,
    title: "ATM Transaction Monitoring System",
    description: "Developed transaction tracking software with rewards points system, points-to-cash redemption module, and customer dashboard for transaction history.",
    longDescription: "A comprehensive ATM transaction monitoring system with integrated rewards program, allowing customers to earn and redeem points while providing detailed transaction analytics.",
    image: "/project3.jpg",
    technologies: ["Angular", "Express.js", "MySQL", "Chart.js", "Bootstrap"],
    features: [
      "Real-time transaction tracking",
      "Rewards points system",
      "Points-to-cash redemption",
      "Transaction analytics",
      "Customer dashboard"
    ],
    githubUrl: "https://github.com/yourprofile/atm-monitoring",
    liveUrl: "https://atm-demo.com",
    category: "FinTech"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "Indira Gandhi National Open University, Delhi",
    duration: "2018 - 2021",
    type: "Master's Degree"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Lingaya's Vidyapeeth, Haryana Faridabad",
    duration: "2015 - 2018",
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
