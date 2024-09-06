import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cyber Security Analysis and Design",
    company_name: "NASSCOM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
     "Designing and implementing effective cybersecurity measures to protect against emerging threats.",
     "Applying knowledge of industry best practices and trends, including [insert specific frameworks or standards, e.g. NIST, ISO 27001.",
     "Commitment to staying current with the evolving cybersecurity landscape, including [insert specific areas of focus, e.g. cloud security, artificial intelligence, etc.",
    ],
  },
  {
    title: "Fundamentals of digital Marketing",
    company_name: "GOOGLE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Proven understanding of digital marketing fundamentals, including search, display, email, social, mobile, e-commerce, and data analysis. Skilled in creating effective campaigns, data-driven decision making, and Google Ads/Analytics.",
    ],
  },
  {
    title: "Java with data structure",
    company_name: "NPTEL",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "It enhances problem-solving skills by providing efficient ways to store and manipulate data. Additionally, it boosts career prospects as it's a highly sought-after skill in the industry. Moreover, it lays a strong foundation for further learning, making it easier to adapt to advanced topics like algorithms and machine learning.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "META",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 -May 2025 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
 
  {
    topic : "Advanced",
    ans : ["HTML" , "CSS","JavaScript","Java","MySql","React.js"]
  },
  {
    topic : "Intermediate",
    ans : ["C" , "C++","Node.js","Figma"]
  },
  {
    topic : "Familiar",
    ans : ["MongoDB"]
  }

];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
