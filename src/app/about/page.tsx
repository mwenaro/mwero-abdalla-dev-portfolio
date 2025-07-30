"use client"
import { education, experiences, skills } from "@/constants";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function AboutPage() {
  const { navigateWithLoading } = usePageTransition();
  
  // Animation refs
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [educationRef, educationInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="relative flex size-full min-h-screen flex-col bg-portfolio-bg-primary text-portfolio-text-primary overflow-x-hidden transition-colors duration-300"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ top: '60%', right: '15%' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ bottom: '20%', left: '20%' }}
        />
      </div>
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5 relative z-10">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <motion.section 
            ref={heroRef}
            className="@container mb-12"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="flex flex-col gap-8 @[864px]:flex-row @[864px]:items-center p-4">
              <motion.div 
                className="w-full @[480px]:min-w-[300px] @[864px]:w-2/5"
                variants={fadeInLeft}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-lg overflow-hidden border-2 border-transparent relative group"
                  style={{
                    backgroundImage: 'url("/mwero-passport.png")',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#3B82F6',
                    boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, #3B82F6, transparent)',
                      padding: '2px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-xl bg-gray-900" />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-6 @[864px]:w-3/5 @[864px]:pl-8"
                variants={fadeInRight}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col gap-3">
                  <motion.h1 
                    className="text-white text-4xl md:text-5xl font-bold leading-tight"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    About Me
                  </motion.h1>
                  <motion.div 
                    className="w-20 h-1 bg-blue-600 rounded"
                    initial={{ width: 0 }}
                    animate={heroInView ? { width: 80 } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.p 
                    className="text-portfolio-text-muted text-base md:text-lg leading-relaxed"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    I&apos;m a full-stack developer with 8+ years of experience creating innovative 
                    and user-friendly web applications. With expertise in both front-end and 
                    back-end technologies, I specialize in building performant, scalable 
                    solutions that deliver exceptional user experiences.
                  </motion.p>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-4 mt-2"
                  variants={staggerContainer}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div variants={scaleIn}>
                    <Link 
                      href="#experience" 
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      My Experience
                    </Link>
                  </motion.div>
                  <motion.div variants={scaleIn}>
                    <Link 
                      href="#skills" 
                      className="px-6 py-3 bg-transparent border border-gray-600 hover:bg-gray-800 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      View Skills
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            id="experience" 
            ref={experienceRef}
            className="mb-12"
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Professional Experience
            </motion.h2>
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-[40px_1fr] gap-x-4 px-4 group"
                  variants={fadeInLeft}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Z"></path>
                      </svg>
                    </motion.div>
                    {index !== experiences.length - 1 && (
                      <motion.div 
                        className="w-[2px] bg-portfolio-border h-full my-2"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      />
                    )}
                  </div>
                  <motion.div 
                    className="pb-6 group-last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="text-white text-xl font-bold leading-normal mb-1">
                      {exp.role} · {exp.company}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-3">{exp.period}</p>
                    <p className="text-portfolio-text-muted text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            id="skills" 
            ref={skillsRef}
            className="mb-12"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Technical Skills
            </motion.h2>
            <motion.div 
              className="flex gap-3 p-4 flex-wrap"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-x-2 rounded-xl bg-portfolio-bg-card hover:bg-portfolio-bg-hover px-4 py-2 transition-colors cursor-pointer"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    backgroundColor: '#4F46E5',
                    boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-white text-sm font-medium leading-normal">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            ref={educationRef}
            className="mb-12"
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-white text-2xl md:text-3xl font-bold leading-tight px-4 pb-4"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Education
            </motion.h2>
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-[40px_1fr] gap-x-4 px-4 group"
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ x: -10 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -180 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                      </svg>
                    </motion.div>
                    {index !== education.length - 1 && (
                      <motion.div 
                        className="w-[2px] bg-portfolio-border h-full my-2"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      />
                    )}
                  </div>
                  <motion.div 
                    className="pb-6 group-last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="text-portfolio-text-primary text-xl font-bold leading-normal mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-portfolio-accent text-sm font-medium mb-2">{edu.institution} · {edu.period}</p>
                    {edu.thesis && (
                      <p className="text-portfolio-text-muted text-sm mb-1">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                    {edu.honors && (
                      <p className="text-portfolio-text-muted text-sm">
                        <span className="font-medium">Honors:</span> {edu.honors}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            className="p-6 bg-portfolio-bg-card rounded-lg mt-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, #3B82F6 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, #8B5CF6 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 100%, #06B6D4 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 0%, #F59E0B 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, #3B82F6 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.h3 
              className="text-white text-xl font-bold mb-4 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s Work Together
            </motion.h3>
            
            <motion.p 
              className="text-portfolio-text-muted mb-6 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Interested in collaborating or have a project in mind? I&apos;m always open to discussing new opportunities.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={() => navigateWithLoading("/contact")}
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-all duration-300 transform hover:scale-105 relative z-10"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}