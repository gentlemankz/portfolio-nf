import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/shynggys-zhakenuly?originalSubdomain=kz',
    color: '#0077B5'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/shynggys_zhakenuly/',
    color: '#E1306C'
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com/c/ShynggysZhakenuly',
    color: '#FF0000'
  }
];

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  whileHover: { 
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  whileTap: { scale: 0.9 }
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function SocialMedia() {
  return (
    <motion.div
      className="flex justify-center gap-6 mt-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors"
          variants={iconVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          style={{ display: 'inline-block' }}
        >
          <motion.div
            whileHover={{ 
              backgroundColor: social.color,
              transition: { duration: 0.2 }
            }}
            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <social.icon size={24} />
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
}
