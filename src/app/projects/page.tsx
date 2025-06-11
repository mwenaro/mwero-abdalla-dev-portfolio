import { projects } from '@/constants/projects';
import { Project } from '@/types';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';


export default function ProjectsPage() {
  

  return (
    <div className="min-h-screen bg-[#121417] text-white py-8 px-4 sm:px-6 lg:px-40">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-[#a1abb5] max-w-2xl">
            Explore a selection of my recent projects, showcasing my skills in full-stack development. 
            Each project includes a brief description, technologies used, and links to live demos and repositories.
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-[#1d2125] border border-[#2b3036] hover:border-[#327fcc] transition-all duration-300">
      {/* Project Image */}
      <div 
        className="w-full h-48 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded bg-[#327fcc]/20 text-[#327fcc]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-[#a1abb5] mb-4">{project.description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#2b3036] hover:bg-[#3a4149] text-white transition-colors"
            >
              <FiGithub /> Code
            </Link>
          )}
          
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#327fcc] hover:bg-[#3a8cd6] text-white transition-colors"
            >
              <FiExternalLink /> Live Demo
            </Link>
          )}
          
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#3f4750] hover:bg-[#2b3036] text-white transition-colors ml-auto"
          >
            Details <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}