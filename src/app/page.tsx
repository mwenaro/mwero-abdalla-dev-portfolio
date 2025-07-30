"use client"
import { projects, skills } from '@/constants';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePerformanceMode, useReducedMotion } from '@/hooks/usePerformance';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isLowPerformance = usePerformanceMode();

  // Animation refs
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Component mount check
  useEffect(() => {
    setMounted(true);
  }, []);

 
  if (!mounted) return null;

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

  // Floating shapes animation - optimized for performance
  const FloatingShape = ({ delay = 0, duration = 3 }: { delay?: number; duration?: number }) => {
    if (shouldReduceMotion || isLowPerformance) {
      return (
        <div
          className="absolute pointer-events-none opacity-50"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <div className="w-4 h-4 rounded-full bg-blue-500/10 dark:bg-blue-400/20" />
        </div>
      );
    }

    return (
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut"
        }}
        style={{
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-blue-500/20 dark:bg-blue-400/30" />
      </motion.div>
    );
  };

  // Removed mouse parallax for simplicity and performance
  const mouseParallax = { x: 0, y: 0 };

  return (
    <motion.div 
      className="layout-container flex h-full grow flex-col min-h-screen transition-colors duration-500 relative overflow-hidden bg-portfolio-bg-primary text-portfolio-text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingShape delay={0} duration={4} />
        <FloatingShape delay={1} duration={5} />
        <FloatingShape delay={2} duration={3.5} />
        <FloatingShape delay={3} duration={4.5} />
        <FloatingShape delay={4} duration={3} />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10"
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)',
          ...mouseParallax
        }}
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)',
            'linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
            'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8 relative z-10">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          {/* Hero Section */}
          <motion.section 
            ref={heroRef}
            className="@container mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col gap-8 @[864px]:flex-row @[864px]:items-center">
              <motion.div 
                className="w-full @[480px]:min-w-[400px] @[864px]:w-1/2"
                variants={fadeInLeft}
              >
                <motion.div 
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-2xl overflow-hidden border-2 border-transparent relative group"
                  style={{
                    backgroundImage: 'url("/mwero-passport.png")',
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'var(--portfolio-accent)',
                    boxShadow: '0 25px 50px -12px var(--portfolio-accent)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Spinning border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, var(--portfolio-accent), transparent)`,
                      padding: '2px',
                      opacity: 0
                    }}
                    whileHover={{ 
                      opacity: 1,
                      rotate: 360 
                    }}
                    transition={{ 
                      opacity: { duration: 0.3 },
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <div className="w-full h-full rounded-xl bg-gray-900" />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col gap-6 @[864px]:w-1/2 @[864px]:pl-8"
                variants={fadeInRight}
              >
                <div className="flex flex-col gap-3">
                  <motion.h1 
                    className="text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl text-portfolio-text-primary"
                    variants={fadeInUp}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="inline-block"
                    >
                      Mwero Abdalla
                    </motion.span>
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-xl font-medium text-portfolio-accent"
                    variants={fadeInUp}
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                      className="inline-block overflow-hidden whitespace-nowrap"
                    >
                      Full-Stack Developer
                    </motion.span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg text-portfolio-text-secondary"
                    variants={fadeInUp}
                  >
                    Building digital experiences that are fast, accessible, and user-friendly.
                  </motion.p>
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer}
                >
                  <motion.div variants={scaleIn}>
                    <Link
                      href="#projects" 
                      className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white inline-block px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      View Projects
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <Link
                      href="/about"
                      className="border-portfolio-border hover:bg-portfolio-bg-secondary text-portfolio-text-primary hover:border-portfolio-accent inline-block px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border-2"
                    >
                      About Me
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section 
            ref={aboutRef}
            className="mb-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-portfolio-text-primary"
              variants={fadeInUp}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="p-6 rounded-xl relative overflow-hidden bg-portfolio-bg-secondary border border-portfolio-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, var(--portfolio-accent) 0%, transparent 50%), 
                                   radial-gradient(circle at 80% 20%, #8B5CF6 0%, transparent 50%), 
                                   radial-gradient(circle at 40% 40%, #06B6D4 0%, transparent 50%)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.p 
                className="text-lg leading-relaxed relative z-10 text-portfolio-text-secondary"
                variants={fadeInUp}
              >
                I&apos;m a full-stack developer with a passion for creating innovative and user-friendly web applications. 
                With expertise in both front-end and back-end technologies, I specialize in building performant, 
                scalable solutions that deliver exceptional user experiences. My approach combines clean code, 
                thoughtful architecture, and attention to detail to create products that people love to use.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            ref={skillsRef}
            className="mb-12"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-portfolio-text-primary"
              variants={fadeInUp}
            >
              Technical Skills
            </motion.h2>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer bg-portfolio-bg-secondary hover:bg-portfolio-accent text-portfolio-text-primary hover:text-white"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: '0 10px 25px -5px var(--portfolio-accent)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            id="projects" 
            ref={projectsRef}
            className="mb-12"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6 text-portfolio-text-primary"
              variants={fadeInUp}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-lg relative group bg-portfolio-bg-secondary border border-portfolio-border"
                  variants={scaleIn}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))`,
                      filter: 'blur(20px)',
                      transform: 'translate3d(0, 0, -1px)',
                    }}
                  />
                  
                  <motion.div 
                    className="w-full h-48 bg-center bg-no-repeat bg-cover relative overflow-hidden"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {/* Parallax overlay */}
                    <motion.div 
                      className="w-full h-full flex items-end p-4 bg-gradient-to-t from-gray-900/80 relative z-10"
                      whileHover={{ 
                        background: 'linear-gradient(to top, rgba(17, 24, 39, 0.9), rgba(59, 130, 246, 0.1))'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3 
                        className="text-xl font-bold text-white"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <p className="mb-4 text-portfolio-text-secondary">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex} 
                          className="text-xs px-2 py-1 rounded bg-portfolio-bg-secondary text-portfolio-accent border border-portfolio-border"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.4 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            className="p-8 rounded-xl text-center relative overflow-hidden bg-portfolio-bg-secondary border border-portfolio-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  `radial-gradient(circle at 0% 0%, var(--portfolio-accent) 0%, transparent 50%)`,
                  `radial-gradient(circle at 100% 100%, #8B5CF6 0%, transparent 50%)`,
                  `radial-gradient(circle at 0% 100%, #06B6D4 0%, transparent 50%)`,
                  `radial-gradient(circle at 100% 0%, #F59E0B 0%, transparent 50%)`,
                  `radial-gradient(circle at 0% 0%, var(--portfolio-accent) 0%, transparent 50%)`
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.h3 
              className="text-2xl font-bold mb-4 relative z-10 text-portfolio-text-primary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Interested in working together?
            </motion.h3>
            
            <motion.p 
              className="text-lg mb-6 relative z-10 text-portfolio-text-secondary"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I&apos;m currently available for freelance work and full-time positions.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white inline-block px-8 py-3 rounded-lg font-bold transition-all duration-300 relative z-10 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}