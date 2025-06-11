import { SkillCategory } from "@/types";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiAmazon,
  SiFigma,
  SiTrello,
} from "react-icons/si";

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description:
      "Developed scalable web applications using React and Node.js, led a team of 5 developers, and improved system performance by 40%.",
  },
  {
    role: "Software Engineer",
    company: "Creative Solutions Co.",
    period: "2018 - 2020",
    description:
      "Implemented RESTful APIs and optimized database queries, reducing response times by 30%.",
  },
  {
    role: "Junior Developer",
    company: "Startup X",
    period: "2016 - 2018",
    description:
      "Contributed to front-end development and participated in agile development cycles.",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "SQL",
  "MongoDB",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "GraphQL",
  "AWS",
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2016",
    thesis: "Machine Learning Applications in Web Security",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    period: "2010 - 2014",
    honors: "Graduated with Honors",
  },
];

export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    image: "/ecommerce-project.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Social Media App",
    description:
      "A social media application with user profiles, posts, and real-time updates using WebSockets.",
    image: "/social-media-project.jpg",
    tags: ["React", "Firebase", "Real-time DB"],
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity app with project organization, task assignment, and progress tracking.",
    image: "/task-manager-project.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const skills2 = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "GraphQL",
  "AWS",
  "Docker",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Back-End Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "AWS", icon: SiAmazon, color: "#232F3E" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Project Management",
    skills: [{ name: "Agile Methodologies", icon: SiTrello, color: "#0079BF" }],
  },
];
