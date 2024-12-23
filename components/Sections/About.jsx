import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import SocialMedia from '@/components/SocialMedia';

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center py-12"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            variants={fadeInUp}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate developer with a keen interest in creating beautiful and functional web experiences. 
              My journey in web development has led me to work with modern technologies and frameworks, 
              always striving to build applications that not only look great but also provide exceptional user experience.
            </p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <motion.p
                className="text-gray-300 mb-4"
                variants={fadeInUp}
              >
              </motion.p>
              <SocialMedia />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
