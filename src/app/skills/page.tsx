import { skillCategories } from "@/constants";
import { IconType } from "react-icons";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#121417] text-white py-8 px-4 sm:px-6 lg:px-40">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Skills</h1>
          <p className="text-[#a1abb5] max-w-2xl">
            A comprehensive overview of my technical and soft skills, showcasing
            my proficiency in various technologies and methodologies.
          </p>
        </section>

        {/* Skills Categories */}
        {skillCategories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-[#2b3036] pb-2">
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
  );
}

type SkillCardProps = {
  skill: string;
  icon: IconType;
  color?: string;
};

function SkillCard({ skill, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-[#3f4750] bg-[#1d2125] hover:bg-[#2b3036] transition-colors">
      <div className="text-2xl" style={{ color }}>
        <Icon />
      </div>
      <h3 className="font-medium">{skill}</h3>
    </div>
  );
}
