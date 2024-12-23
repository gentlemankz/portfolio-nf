import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: '3D Portfolio',
    description: 'A modern portfolio website built with Next.js, Three.js, and TailwindCSS featuring interactive 3D elements and smooth animations.',
    tags: ['Next.js', 'Three.js', 'TailwindCSS', 'Framer Motion'],
    link: '#',
    github: 'https://github.com/ShynggysZh/Portfolio'
  },
  {
    title: 'nFactorial Todo List',
    description: 'A feature-rich todo list application developed during nFactorial programming school. Includes task management, categories, and local storage.',
    tags: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    link: 'https://todo-list-nfactorial.vercel.app/',
    github: 'https://github.com/ShynggysZh/todo-list-nfactorial'
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-violet-600/20" />
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-sm bg-violet-600/20 text-violet-300 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
