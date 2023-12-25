import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  alphagpt,
  api,
  appwrite,
  bandbuddy,
  contact,
  css,
  docker,
  express,
  figma,
  firebase,
  git,
  github,
  html,
  hulu,
  java,
  javascript,
  linkedin,
  medium,
  mongodb,
  motion,
  mui,
  mysql,
  nextjs,
  nodejs,
  python,
  react,
  redux,
  revedor,
  sanity,
  sass,
  strapi,
  supabase,
  svelte,
  tailwindcss,
  typescript,
  webflow,
  whatsapp,
  infinity,
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
    imageUrl: java,
    name: "Java",
    type: "core",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "core/backend",
  },
  {
    imageUrl: svelte,
    name: "Svelte",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: svelte,
    name: "Sveltkit.js",
    type: "Frontend",
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
    imageUrl: mysql,
    name: "Mysql",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "PaaS",
  },
  {
    imageUrl: supabase,
    name: "Supabase",
    type: "BaaS",
  },
  {
    imageUrl: appwrite,
    name: "Appwrite",
    type: "BaaS",
  },
  {
    imageUrl: sanity,
    name: "Sanity.io",
    type: "CMS",
  },
  {
    imageUrl: strapi,
    name: "Strapi",
    type: "CMS",
  },
  {
    imageUrl: webflow,
    name: "Webflow",
    type: "CMS",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "PaaS",
  },
  {
    imageUrl: motion,
    name: "Framer Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
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
    imageUrl: figma,
    name: "figma",
    type: "Frontend",
  },
  {
    imageUrl: api,
    name: "Restful API",
    type: "backend",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Appwrite",
    icon: appwrite,
    iconBg: "#fbc3bc",
    date: "May 2023 - August 2023",
    points: [
      "Secured an internship at Appwrite through the competitive GitHub Octernship Program, standing out among 1500+ applicants.",
      "Implemented various services, including Storage, Database, and Authentication, using Svelte and SvelteKit in collaboration with Appwrite's backend-as-a-service platform.",
      "Improved the Appwrite Console by integrating internationalization for enhanced accessibility and user experience.",
      "Collaborated closely with a diverse, global remote team spanning various regions and backgrounds.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Revedor",
    icon: revedor,
    iconBg: "#a2d2ff",
    date: "March 2022 - May 2023",
    points: [
      "Built and managed web applications using React.js and related technologies.",
      "As a proactive lead, I led design and front-end development, making substantial contributions to the creation of client products.",
      "Engaged in code reviews, offering constructive feedback to fellow developers for continuous improvement.",
      "Implemented responsive design and ensured cross-browser compatibility for optimal user experience.",
      "Championed innovation through collaborative efforts, driving the design and development of new applications. Successfully established new sub-brands for the organization.",
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
    link: "https://github.com/goswamianshuman",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/goswamianshuman",
  },
];

export const projects = [
  {
    iconUrl: infinity,
    theme: "btn-back-purple",
    name: "Infinote",
    description:
      "Experience seamless collaboration and productivity with INFINOTE – a fullstack Notion replica powered by Next.js, Appwrite, and shadcn-ui, Connect your thoughts, files, and strategies in a unified space.",
    link: "https://noteinfi.vercel.app/",
  },
  {
    iconUrl: bandbuddy,
    theme: "btn-back-blue",
    name: "Bandbuddy.ai",
    description:
      "One of the applications I developed while working at Revedor, where I honed my skills in designing and implementing innovative solutions.",
    link: "https://bandbuddy.ai/",
  },
  {
    iconUrl: whatsapp,
    theme: "btn-back-green",
    name: "Whatsapp Clone",
    description: `Created a full-stack replica of the popular discussion platform 'WhatsApp', empowering users to engage in conversations and discussions seamlessly.`,
    link: "https://github.com/goswamianshuman/whatsappClone",
  },
  {
    iconUrl: alphagpt,
    theme: "btn-back-red",
    name: "Alpha gpt",
    description:
      "Developed a ChatGPT clone using the OpenAI API, providing a dynamic and interactive platform that facilitated seamless conversations.",
    link: "https://github.com/goswamianshuman/AlphaGPT",
  },
  {
    iconUrl: hulu,
    theme: "btn-back-pink",
    name: "HULU Clone",
    description:
      "Built a Hulu clone using the TMDB API, presenting a user-friendly platform where users can effortlessly discover and access a diverse array of the latest content.",
    link: "https://github.com/goswamianshuman/hulu",
  },
  {
    iconUrl: medium,
    theme: "btn-back-yellow",
    name: "Medium Clone",
    description:
      "Developed a full-stack clone of Medium, incorporating the use of Sanity and integrating a comment feature into the blogs, enhancing the overall user experience and interaction.",
    link: "https://github.com/goswamianshuman/Medium_Clone",
  },
];

export const blogs = [
  {
    title:
      "Building Your Notion Replica: A Quick Guide (using Next.js, Appwrite, and Shadcn-ui)",
    des: "Hey, fellow tech enthusiasts! 🚀 Get ready to embark on a coding journey with me... ",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--06jD-F5e--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xdle6zm4qikuv9lh93us.jpg",
    tags: ["next.js", "appwrite", "shadcn-ui"],
    href: "https://dev.to/goswamianshuman/building-your-notion-replica-a-quick-guide-using-nextjs-appwrite-and-shadcn-ui-35po",
  },
  {
    title: "Jamstack Development: Revolutionizing Web Development",
    des: "Hey, devs! 🚀 Welcome to the tech era where new innovations pop up every day! 🌐... ",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--LcTaedj6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wcnims5z0zo37emugjir.png",
    tags: ["javascript", "jamstack", "buildinpublic"],
    href: "https://dev.to/goswamianshuman/jamstack-development-revolutionizing-web-development-3npc",
  },
];
