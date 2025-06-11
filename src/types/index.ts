import { IconType } from "react-icons";

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: IconType;
  color?: string;
};


export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: {
    overview: string;
    features: string[];
    technologies: string[];
    challenges: string[];
    screenshots: string[];
  };
};