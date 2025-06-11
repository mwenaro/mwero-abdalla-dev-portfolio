import { notFound } from "next/navigation";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/constants/projects";

export default async function ProjectDetails({ params }: {params: Promise < {id: unknown} >}) {
  const {id} = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#121417] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="flex items-center gap-2 text-[#a1abb5] hover:text-white mb-6 transition-colors"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div
              className="w-full h-64 md:h-96 rounded-lg bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-[#a1abb5] mb-6">
              {project.details.overview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#327fcc]/20 text-[#327fcc] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-md bg-[#2b3036] hover:bg-[#3a4149] text-white transition-colors"
                >
                  <FiGithub /> View Code
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-md bg-[#327fcc] hover:bg-[#3a8cd6] text-white transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Project Details Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1d2125] p-6 rounded-lg border border-[#2b3036]">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              {project.details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#327fcc] mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1d2125] p-6 rounded-lg border border-[#2b3036]">
            <h2 className="text-xl font-bold mb-4">Technologies</h2>
            <ul className="space-y-2">
              {project.details.technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#327fcc] mr-2">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges */}
        {project.details.challenges.length > 0 && (
          <div className="bg-[#1d2125] p-6 rounded-lg border border-[#2b3036] mb-12">
            <h2 className="text-xl font-bold mb-4">Challenges & Solutions</h2>
            <ul className="space-y-3">
              {project.details.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#327fcc] mr-2">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        {project.details.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.details.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="h-64 bg-center bg-cover bg-no-repeat rounded-lg border border-[#2b3036]"
                  style={{ backgroundImage: `url(${screenshot})` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
