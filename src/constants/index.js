import { dynamitegames, myvidster, artistsworld, dxc } from "../assets/images";
import {
  car,
  contact,
  css,
  cocos,
  estate,
  express,
  git,
  github,
  gsap,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  vercel,
  threejs,
  vue,
  vite,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: cocos,
    name: "Cocos",
    type: "Game Development",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Animation",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three Js",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Deployment",
  },
];

export const experiences = [
  {
    title: "Front End Cocos Developer",
    company_name: "Dynamite Games",
    icon: dynamitegames,
    iconBg: "#accbe1",
    points: [
      "Developed modular UI system with 25+ reusable components, reducing development time for new features by 35% and maintaining consistent user experience across games.",
      "Optimized rendering performance across game portfolios through efficient memory management, achieving 30% reductions in initial loading time.",
      "Collaborating with cross-functional teams including artist, game desginer, backend developer, producer, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "MyVidster",
    icon: myvidster,
    iconBg: "#b7e4c7",
    points: [
      "Revamped a cryptocurrency portfolio tracker using MERN stack, integrating real-time price data from multiple exchanges via RESTful APIs. Implemented secure user authentication, responsive charting for price trends, and automated alerts for price movements, resulting in a 40% increase in user engagement.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ArtistsWorld",
    icon: artistsworld,
    iconBg: "#a2d2ff",
    points: [
      "Experienced in developing scalable web applications with Vue.js to help pachinko machine stores in Japanese market, leveraging advanced features such as Vuex for state management, Vue Router for dynamic routing, and integrating RESTful APIs.",
      "Designed and implemented a store layout that increased sales by 20% in the second month.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#fbc3bc",
    points: [
      "Experienced in developing scalable web applications with Vue.js to help pachinko machine stores in Japanese market, leveraging advanced features such as Vuex for state management, Vue Router for dynamic routing, and integrating RESTful APIs.",
      "Assisted in managing 20+ VMs across hybrid cloud environment (VMware, AWS, Azure), contributing to system maintenance and implementing basic PowerShell automation scripts that reduced manual tasks by 15%.",
      "Collaborated on CI/CD pipeline maintenance using Jenkins and GitHub Actions for 5+ microservices, helping reduce deployment time by 30% and maintaining build process documentation.",
      "Improved automation scripts using Python and PowerShell for routine monitoring and server health checks, saving teamapproximately 5 hours weekly in manual operations.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ngthienhung277",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nuenhung/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
