import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { useRouter } from 'next/navigation';

export default function Gallup() {
  const router = useRouter();

  return (
    <motion.section
      id="gallup"
      className=" text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.button
          onClick={() => router.push('/dashboard')}
          className="px-8 py-4 bg-violet-600 text-white rounded-xl 
                   hover:bg-violet-700 transition-colors duration-300
                   text-lg font-semibold shadow-lg
                   border border-violet-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Gallup Results
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
