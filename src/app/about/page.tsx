import { education, experiences, skills } from "@/constants";
import Link from "next/link";

export default function AboutPage() {
 

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121417] overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <section className="flex flex-col gap-6 p-4 mb-8">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              About Me
            </h1>
            <p className="text-[#a1abb5] text-base md:text-lg leading-relaxed">
              I'm a full-stack developer with 8+ years of experience creating innovative 
              and user-friendly web applications. With expertise in both front-end and 
              back-end technologies, I specialize in building performant, scalable 
              solutions that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link href="#experience" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors">
                My Experience
              </Link>
              <Link href="#skills" className="px-6 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 rounded-md text-white font-medium transition-colors">
                View Skills
              </Link>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="grid grid-cols-[40px_1fr] gap-x-4 px-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Z"></path>
                      </svg>
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="w-[2px] bg-[#3f4750] h-full my-2"></div>
                    )}
                  </div>
                  <div className="pb-6 group-last:pb-0">
                    <h3 className="text-white text-xl font-bold leading-normal mb-1">
                      {exp.role} · {exp.company}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-3">{exp.period}</p>
                    <p className="text-[#a1abb5] text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4">
              Technical Skills
            </h2>
            <div className="flex gap-3 p-4 flex-wrap">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] hover:bg-[#3a4149] px-4 py-2 transition-colors"
                >
                  <p className="text-white text-sm font-medium leading-normal">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="grid grid-cols-[40px_1fr] gap-x-4 px-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                      </svg>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-[2px] bg-[#3f4750] h-full my-2"></div>
                    )}
                  </div>
                  <div className="pb-6 group-last:pb-0">
                    <h3 className="text-white text-xl font-bold leading-normal mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mb-2">{edu.institution} · {edu.period}</p>
                    {edu.thesis && (
                      <p className="text-[#a1abb5] text-sm mb-1">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                    {edu.honors && (
                      <p className="text-[#a1abb5] text-sm">
                        <span className="font-medium">Honors:</span> {edu.honors}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="p-6 bg-[#1e2227] rounded-lg mt-8">
            <h3 className="text-white text-xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-[#a1abb5] mb-6">
              Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}