import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInFromLeft } from '@/utils/animations';

export default function Contact() {
  return (
    <motion.section
      id="contact"
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
          Get In Touch
        </motion.h2>
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          variants={slideInFromLeft}
        >
          <form className="space-y-6">
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 
                         text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 
                         text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 
                         text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-violet-600 text-white rounded-md px-4 py-2 hover:bg-violet-700 
                       transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
