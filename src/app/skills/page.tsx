import { skillCategories } from "@/constants";
import { IconType } from "react-icons";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-portfolio-bg-primary text-portfolio-text-primary py-8 px-4 sm:px-6 lg:px-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="@container mb-12">
          <div className="flex flex-col gap-8 @[864px]:flex-row @[864px]:items-center">
            <div className="w-full @[480px]:min-w-[300px] @[864px]:w-2/5">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                style={{
                  backgroundImage: 'url("/mwero-passport.png")',
                }}
              />
            </div>
            <div className="flex flex-col gap-6 @[864px]:w-3/5 @[864px]:pl-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h1>
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <p className="text-portfolio-text-muted max-w-2xl">
                  A comprehensive overview of my technical and soft skills, showcasing
                  my proficiency in various technologies and methodologies that I use to create
                  exceptional digital experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#skills-overview" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300">
                  Explore Skills
                </a>
                <Link href="/projects" className="px-6 py-3 bg-transparent border border-gray-600 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Categories */}
        <div id="skills-overview">
          {skillCategories.map((category) => (
            <section key={category.title} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b border-portfolio-border pb-2">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

type SkillCardProps = {
  skill: string;
  icon: IconType;
  color?: string;
};

function SkillCard({ skill, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-portfolio-border bg-portfolio-bg-card hover:bg-portfolio-bg-hover transition-colors">
      <div className="text-2xl" style={{ color }}>
        <Icon />
      </div>
      <h3 className="font-medium">{skill}</h3>
    </div>
  );
}
