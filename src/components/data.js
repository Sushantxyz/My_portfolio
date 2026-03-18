
import cryptomation from "../assets/Crptomationpic.jpg";
import videohub from "../assets/videohub.jpg";
import ecart from "../assets/e-cartpic.jpg";
import blogapp from "../assets/blogapp.jpg";
import portfolio from "../assets/portfoliopic.jpg";
import taskmanagement from "../assets/Task_Management.png";

export const workData = [
  {
    projectName: "Blog-App(MERN STACK)",
    description: [
      "Full Stack Applications enabling users to create update and delete the Posts.",
      "Used optimization techniques, Code splitting, Image Lazy Loading.",
      "Jwt tokens for user security.",
      "Implimented Cloudinary as Media store.",
    ],
    projectLink: "https://blogapp-frontend-psi.vercel.app/",
    imgUrl: blogapp,
  },
  {
    projectName: "Task Management App",
    description: [
      "Full Stack Applications enabling users to create update and delete the Tasks.",
      "Implemented Drag and drop for seamless user experience.",
      "Jwt tokens for user security.",
    ],
    projectLink: "https://task-manager-blond-nine.vercel.app/",
    imgUrl: taskmanagement,
  },
  {
    projectName: "CryptoMation",
    description: [
      "Fetching data from Api and Displaying data.",
      "React Single Page WebApp.",
      "Jwt tokens for user security.",
      "Responsive Design.",
    ],
    projectLink: "https://cryptomation-psi.vercel.app",
    imgUrl: cryptomation,
  },
  {
    projectName: "E-cart",
    description: [
      "React Single Page WebApp.",
      "Utilizing Redux for creating E-cart, with real time data updation.",
      "Responsive Design.",
    ],
    projectLink: "https://videohub-beryl.vercel.app",
    imgUrl: ecart,
  },
  {
    projectName: "Video Hub",
    description: [
      "React Single Page WebApp for sharing and viewing videos.",
      "Utilizing Chakra-UI for creating beautiful and responsive website.",
      "Dual theme with beautiful Carousel.",
    ],
    projectLink: "https://blogapp-frontend-psi.vercel.app/",
    imgUrl: videohub,
  },
  {
    projectName: "PortFolio",
    description: [
      "Utlizing React's powerful libraries to produce beautiful animations.",
      "Website showcasing my work.",
      "Firebased powered Contact form.",
    ],
    projectLink: "https://my-portfolio-topaz-phi-91.vercel.app",
    imgUrl: portfolio,
  },
];

export const projectData = [
  {
    name: "Portfolio",
    technology: "Technology Used : React, Sass, Framer motion, FireBase",
    cname: "left pro",
  },
  {
    name: "Alaze",
    technology: "Technology Used : React & Sass",
    cname: "right pro",
  },
  {
    name: "CrpytoMation",
    technology: "Technology Used : React & ChakraUI",
    cname: "left pro",
  },
  {
    name: "Video Hub",
    technology: "Technology Used : React & ChakraUI",
    cname: "right pro",
  },
  {
    name: "E-cart",
    technology: "Technology Used : React & Redux",
    cname: "left pro",
  },
];
export const experience = [
  {
    name: "Codesis Technologies Pvt.Ltd",
    date: "May 2024 - Present",
    technology: "Technology Used : React, Next,js, Sass, TailwindCSS",
    roleResponsibility: [
      `Led small development teams to build scalable User and Admin dashboards, supporting platforms with 300K+ active users.`,

      `Contributed to 6+ dashboard projects across 3+ prop trading firms, supporting both gamified and standard platforms for 
  trader onboarding and evaluation.`,

      `Implemented multi-stage trader evaluation systems including demo trading phases, performance targets, and qualification stages.`,

      `Developed analytical dashboards to monitor trading plans, profits, expected returns, and other key performance insights.`,

      `Built risk management dashboards to track trading practices, flag rule violations, evaluate trader behavior, and assist in 
  payout decisions while processing millions of trades and large-scale trading data.`,

      `Worked on an AI-powered chat platform enabling document uploads and natural language queries to extract insights via a 
  conversational interface, collaborating with backend and AI teams.`,
    ],
    cname: "right pro",
  },
  {
    name: "Kalvin TechSol Pvt.Ltd",
    date: "Dec 2021 - April 2024",
    technology: "Technology Used : React, Node.js, Express.js, MongoDB",
    roleResponsibility: [`Developed backend APIs using Node.js, Express, and MongoDB for a healthcare platform, enabling seamless frontend 
integration and improving system communication.`,
      `
Built an interactive chatbot to capture user requirements and automatically recommend suitable technologies, estimated 
timelines, and project costs, while facilitating direct connection with project management`
    ],
    cname: "left pro",
  },
];