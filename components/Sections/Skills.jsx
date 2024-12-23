import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInFromLeft } from '@/utils/animations';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Three.js', level: 50 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 50 },
  { name: 'Tailwind CSS', level: 90 },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          variants={fadeInUp}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              variants={slideInFromLeft}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-violet-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
