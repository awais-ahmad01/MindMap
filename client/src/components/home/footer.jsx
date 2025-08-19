
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
   
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          x: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="mx-auto text-center relative z-10">
        <motion.p
          className="text-base font-medium bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} MindMap. All rights reserved.
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center gap-2 mt-3"
          variants={itemVariants}
        >
          <span className="text-sm text-indigo-200">Made with</span>
          <motion.span
            className="text-red-400 text-lg"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ❤️
          </motion.span>
          <span className="text-sm text-indigo-200">by</span>
          <motion.span
            className="text-sm font-semibold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            Awais Ahmad
          </motion.span>
        </motion.div>

      
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;