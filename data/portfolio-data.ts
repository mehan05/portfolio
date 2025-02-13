import { Github, Mail, Twitter, Linkedin } from "lucide-react"
import type { Project, Skill, SocialLink, ProfileInfo } from "@/types/portfolio"

export const profileInfo: ProfileInfo = {
  name: "MEHAN M",
  role: "Aspiring Full Stack & Web3  Developer",
  bio: "I’m a third-year Computer Science student specialising in Information Science and Engineeringwith a strong passion for blockchain technology. I am experienced in building full-stack applications on the Ethereum chain and am skilled in developing scalable Full-Stack web applications. I am constantly learning, and I aim to learn new technologies and innovative and impactful solutions",
  avatar: "/image.jpg",
}

export const skills: Skill[] = [
  { name: "React", logo: "/logos/react.svg", category: "Frontend" },
  { name: "Next.js", logo: "/logos/nextjs.svg", category: "Frontend" },
  { name: "TypeScript", logo: "/logos/typescript.svg", category: "Language" },
  { name: "JavaScript", logo: "/logos/typescript.svg", category: "Language" },
  { name: "Node.js", logo: "/logos/nodejs.svg", category: "Backend" },
  { name: "Express.js", logo: "/logos/nodejs.svg", category: "Backend" },
  { name: "MongoDb", logo: "/logos/nodejs.svg", category: "Backend" },
  { name: "Prisma", logo: "/logos/nodejs.svg", category: "ORM" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg", category: "Styling" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg", category: "Database" },
  { name: "Solidity", logo: "/logos/postgresql.svg", category: "Database" },
  { name: "Hardhat", logo: "/logos/postgresql.svg", category: "Database" },
  { name: "Rust", logo: "/logos/postgresql.svg", category: "Database" },
  { name: "Anchor", logo: "/logos/postgresql.svg", category: "Database" },
];


export const projects: Project[] = [
  {
    title: "Job_assist",
    description: "Building a full-stack web application like LinkedIn requires several key features, including user authentication, profiles, connections, job postings, , and more. Below is a high-level breakdown of how you can build it using Next.js, Node.js, PostgreSQL, Prisma, WebSockets, and Tailwind CSS.",
    link: "https://job-assist.vercel.app/",
    technologies: ["React", "TypeScript", "Node.js","Next.js","UI Libraries","Tailwind CSS","PostgereSQL","Prisma"],
    image: "/job_assist.png",
  },
  {
    title: "NFT Gallery",
    description: "NFT Gallery is a visually stunning platform to showcase, explore, and manage your digital collectibles. Display your NFT collection in a sleek, customizable gallery with seamless browsing and sharing features. 🚀🎨",
    link: "https://github.com/mehan05/NFT_Gallery",
    technologies: ["React", "Tailwind CSS", "Openzeppelin Contracts","Solidity","Ethereum","Hardhat","Pinata","IPFS"],
    image: "/nft_gallery.png",
  },
  {
    title: "Recipe Selling Platform With Web3 Payment Integration",
    description: "A Recipe Selling Platform allows chefs, home cooks to sell and buy exclusive recipes. Users can purchase recipes using Web3 payments using  Ethereum chain, and unlock premium content.",
    link: "https://recipe-client-8512.onrender.com/",
    technologies: ["Node.js", "React", "Express.js","MongoDB","Ether.js","Tailwindcss"],
    image: "/recipe_selling.png",
  }
]

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    url: "mehanmehan6@gmail.com",
    icon: Mail,
  },
  {
    platform: "GitHub",
    url: "https://github.com/mehan05",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/mehan05/",
    icon: Linkedin,
  },
  {
    platform: "Twitter",
    url: "https://x.com/mehan_05",
    icon: Twitter,
  },
]

