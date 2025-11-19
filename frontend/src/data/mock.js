// Mock data for Kashish Arora's Portfolio
export const personalInfo = {
  name: "Kashish Arora",
  title: "Salesforce Business Analyst",
  bio: "Salesforce Business Analyst managing multiple projects across different Salesforce Clouds. I handle end-to-end client communication, build strong working relationships, and coordinate effectively with cross-functional teams. I use various project-management tools to track delivery and ensure alignment. I’ve led discovery workshops, contributed to technical solutioning, and translated requirements into clear, actionable user stories.",
  email: "kashisharora.er@gmail.com",
  phone: "+91-8290424089",
  linkedin: "https://linkedin.com/in/kashisharorasalesforce",
  // resumeUrl: "/resume.pdf",
  resumeUrl: "https://drive.google.com/file/d/1Ad-xjDxxvFwtF3jivk6QKmvJj2j9fXcW/view?usp=drivesdk",
  calendlyUrl: "https://calendly.com/kashisharora"
};

export const skills = {
  technical: [
    "Salesforce (Admin, Sales Cloud, Service Cloud)",
    "Reports & Dashboards",
    "API & Integration",
    "AppExchange",
    "Data Migration",
    "SQL",
    "HTML/CSS",
    "JIRA",
    "ZOHO Projects",
    "Miro",
    "Lucidchart",
    "Figma"
  ],
  projectManagement: [
    "Agile Methodologies (Scrum, Kanban)",
    "Requirements Engineering",
    "Stakeholder Management", 
    "Business Process Optimization",
    "User Story Writing",
    "Discovery Workshops",
    "Project Documentation",
    "Sprint Planning & Execution",
    "Risk Management",
    "Quality Assurance",
    "Change Management",
    "Resource Planning"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Cyntexa Labs",
    role: "Business Analyst",
    duration: "March 2024 - Present",
    location: "Office",
    achievements: [
      "Led requirement-gathering and discovery sessions to identify business challenges and define solution approaches",
"Designed end-to-end process flows, data models, and functional specifications for onboarding, loan lifecycle journeys, deduplication logic, and operational workflows",
"Created detailed user stories, BRDs, training guides, UAT scenarios, and post-deployment documentation",
"Collaborated with cross-functional teams (10+ members) to ensure seamless sprint planning, execution, and release management",
"Supported multiple projects simultaneously, managing stakeholder expectations and maintaining clear communication"
      ]
  },
  {
    id: 2,
    company: "Binario Technologies",
    role: "Software Engineer Intern",
    duration: "July 2023 - August 2023",
    location: "Hybrid",
    achievements: [
      "Collaborated with development and UX/UI teams to optimize web interfaces",
      "Created client-facing mock-ups and interactive prototypes using Figma",
      "Improved user experience through data-driven design decisions"
    ]
  }
];

export const education = [
  {
    degree: "BTech in Electronics and Communication",
    institution: "Swami Keshwanand Institute Of Technology",
    duration: "2020-2024",
    type: "Bachelor's Degree"
  },
  {
    degree: "XII (Higher Secondary)",
    institution: "Shivalik Children's Academy, Sriganganagar",
    duration: "2019-2020",
    type: "High School"
  }
];

export const certifications = [
  "Generative AI Mastermind",
  "Salesforce AI Associate",
  "Business Analysis and Process Management (Coursera)",
  "Jira Fundamentals & Work Management (Atlassian)",
  "MS Excel Certification (JP Morgan Chase)",
  "Prompt Engineering for ChatGPT (Simplilearn)",
  "SQL Certification (Simplilearn)",
  "Beginner's Guide to Agile in Jira (Atlassian)"
];

export const projects = [
  {
    id: 1,
    title: "Loan Provider System Implementation",
    duration: "Octiber 2024 - May 2025",
    tags: ["Salesforce FSC", "Experience Cloud", "Client Communication", "UX Design"],
    problem: "Financial services client needed dual Experience Cloud portals to serve different customer segments with complex data flows and user journeys.",
    approach: "Led coordination between development and UX teams, authored comprehensive BRD, created process maps, and designed end-to-end user flows with custom email templates.",
    outcome: "Prepared feature lists and user stories, dividing processes into multiple phases and milestones to ensure timely delivery.Created the project plan and coordinated a cross-functional team, fostering collaboration and improving delivery efficiency.Conducted in-person client workshops to provide solution understanding and enhance stakeholder engagement.",
    metrics: {
      "User Satisfaction": "88%"
      
    },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Public Grant Application and Case Management Enhancement",
    duration: "July 2025 - Present",
    tags: ["Sales Cloud", "Project Management", "Agile",],
    problem: "Enterprise client had fragmented sales processes across multiple systems, leading to data silos and reduced productivity.",
    approach: "Facilitated discovery workshops, authored detailed user stories, defined custom matching algorithms, and managed sprint planning with cross-functional teams.",
    outcome: "-Collaborated with business stakeholders to finalize requirements for application form functionality, case handling enhancements, and automation triggers.Coordinated with Salesforce developers and technical leads on the design and development of LWC components to ensure usability, scalability, and compliance with best practices.",
    metrics: {
      "Productivity Increase": "35%"

    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Customer Account Creation & Duplicate Management",
    duration: "June 2024 - September 2024",
    tags: ["Sales Cloud", "Project Documentation", "Business Analysis"],
    problem: "Client have disaggregate data and wants to avoid the deduplicacy in new account creation and  wants a intuitive UI for New account creation and an approval process.",
    approach: "Analyzed existing account creation gaps and identified root causes of duplicate and inconsistent customer records.",
    outcome: "Delivered pixel-perfect wireframes that guided successful portal development, improved user adoption by 80%, and established design patterns reused across multiple client projects. Established standardized naming and address conventions to ensure consistent account creation",
    metrics: {
      "User Adoption": "80%"

    },
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
  }
];

export const services = [
  {
    id: 1,
    title: "Salesforce Implementation",
    description: "End-to-end Salesforce implementation with custom workflows, integrations, and user training.",
    features: ["Custom Configuration", "Data Migration", "User Training", "Integration Setup"],
    icon: "Settings"
  },
  {
    id: 2,
    title: "Business Process Optimization",
    description: "Analyze and optimize your business processes using Agile methodologies and modern tools.",
    features: ["Process Analysis", "Workflow Design", "Documentation", "Change Management"],
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "AI-Powered Training",
    description: "Train your team on AI tools, prompt engineering, and modern business analysis techniques.",
    features: ["ChatGPT Training", "Prompt Engineering", "AI Workshops", "Custom Solutions"],
    icon: "Brain"
  }
];
