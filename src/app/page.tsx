"use client"
import { Button } from '@/components/ui/button';
import { projects, skills } from '@/constants';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  // Check for saved theme preference on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
    setMounted(true);
  }, []);

 
  if (!mounted) return null;

  return (
    <div className={`layout-container flex h-full grow flex-col min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle Button */}
      <Button 
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </Button>

      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          {/* Hero Section */}
          <section className="@container mb-12">
            <div className="flex flex-col gap-8 @[864px]:flex-row @[864px]:items-center">
              <div className="w-full @[480px]:min-w-[400px] @[864px]:w-1/2">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                  style={{
                    backgroundImage: 'url("/mwero-passport.png")',
                  }}
                >
                  {/* Fallback if image doesn't load */}
                  {/* <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <span className="text-lg">Mwero Abdalla</span>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-6 @[864px]:w-1/2 @[864px]:pl-8">
                <div className="flex flex-col gap-3">
                  <h1 className={`text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Mwero Abdalla
                  </h1>
                  <h2 className={`text-xl font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Full-Stack Developer
                  </h2>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Building digital experiences that are fast, accessible, and user-friendly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#projects" 
                    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/about" 
                    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${darkMode ? 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white' : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900'}`}
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I&apos;m a full-stack developer with a passion for creating innovative and user-friendly web applications. 
                With expertise in both front-end and back-end technologies, I specialize in building performant, 
                scalable solutions that deliver exceptional user experiences. My approach combines clean code, 
                thoughtful architecture, and attention to detail to create products that people love to use.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div 
                    className="w-full h-48 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className={`w-full h-full flex items-end p-4 bg-gradient-to-t ${darkMode ? 'from-gray-900/80' : 'from-gray-900/60'}`}>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className={`p-8 rounded-xl text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Interested in working together?
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I&apos;m currently available for freelance work and full-time positions.
            </p>
            <Link
              href="/contact" 
              className={`inline-block px-8 py-3 rounded-lg font-bold transition-all duration-300 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            >
              Get In Touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}