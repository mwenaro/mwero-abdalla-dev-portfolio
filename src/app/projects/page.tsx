import { projects } from '@/constants/projects';
import { Project } from '@/types';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';


export default function ProjectsPage() {
  

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
                <h1 className="text-3xl md:text-4xl font-bold text-portfolio-text-primary">My Projects</h1>
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <p className="text-portfolio-text-muted max-w-2xl">
                  Explore a selection of my recent projects, showcasing my skills in full-stack development. 
                  Each project includes a brief description, technologies used, and links to live demos and repositories.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 bg-portfolio-accent hover:bg-portfolio-accent-hover rounded-lg text-white font-medium transition-all duration-300">
                  View All Projects
                </a>
                <Link href="/contact" className="px-6 py-3 bg-transparent border border-portfolio-border hover:bg-portfolio-bg-hover rounded-lg text-portfolio-text-primary font-medium transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-portfolio-bg-card border border-portfolio-border hover:border-portfolio-border-hover transition-all duration-300">
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
                className="text-xs px-2 py-1 rounded bg-portfolio-accent-light text-portfolio-accent"
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
        <p className="text-portfolio-text-muted mb-4">{project.description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-portfolio-bg-hover hover:bg-portfolio-border text-portfolio-text-primary transition-colors"
            >
              <FiGithub /> Code
            </Link>
          )}
          
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-portfolio-accent hover:bg-portfolio-accent-hover text-white transition-colors"
            >
              <FiExternalLink /> Live Demo
            </Link>
          )}
          
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-portfolio-border hover:bg-portfolio-bg-hover text-portfolio-text-primary transition-colors ml-auto"
          >
            Details <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}