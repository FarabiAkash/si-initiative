export const portfolioItem = {
  id: 1,
  img: p1,
  name: "SmartHealth Connect",
  type: "HealthTech",
  desc:
    "SmartHealth Connect is a powerful app designed for doctors and caregivers to monitor, record, and communicate with patients. It features secure data sharing, appointment tracking, and an intuitive interface for efficient healthcare management.",

  productionReleases: {
    appStore: 'https://link-to-app-store.com',
    googlePlay: 'https://link-to-google-play.com',
    website: ""
  },
  
  coreFeatures: [
    {
        title: "Secure Data Sharing",
        description:"Easily share patient data with authorized healthcare providers through encrypted channels."
    },
    {
        title: "Adolescent Care Pathways",
        description:"Guides young people with confidential, accurate, and appropriate directions with care."
    },
    {
        title: "Vitals Monitoring",
        description:"Embedded within the SuSastho platform for unified and easy access."
    },
  ],

  summary: {
    projectTitle: "SmartHealth Connect",
    client: "HealthSync Innovations",
    duration: "6 Months",
    platform: "iOS / Android",
    techStack: "Flutter, Node.js, MongoDB",
    projectStatus: "Live on App Store & Play Store",
  },

  technologyStack: [
    {
      title: "Frontend",
      items: ["Flutter"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      items: ["MongoDB"],
    },
    {
      title: "Other Tools",
      items: ["JWT Auth", "API Integration", "Firebase Notifications"],
    },
  ],
};
