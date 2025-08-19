
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="mt-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10  relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
     
      <motion.div
        className="absolute top-10 right-20 w-40 h-40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="w-full sm:w-1/2 mb-10 sm:mb-0 relative z-10">
        <div className="flex flex-col space-y-3 px-2 sm:px-4 md:px-10 lg:px-20">
          {[
            "Your Private Space",
            "to reflect, grow and",
            "feel better -",
            "powered by AI."
          ].map((text, index) => (
            <motion.h1
              key={index}
              className="font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
              variants={textVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {text}
            </motion.h1>
          ))}
        </div>

        <motion.div 
          className="px-2 sm:px-4 md:px-10 lg:px-20 mt-8"
          variants={textVariants}
        >
          <Link to='/login'>
            <motion.button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg border border-indigo-500/20 cursor-pointer relative overflow-hidden"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
             
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "200%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                🚀 Get Started
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="w-full sm:w-1/2 flex justify-center sm:justify-end px-2 sm:px-4 md:px-10 lg:px-20 relative z-10"
        variants={imageVariants}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
          }}
          className="relative"
        >
         
          <motion.div
            className="absolute inset-0  rounded-3xl blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src="/images/journalling.png"
            alt="Hero Image"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain relative z-10 drop-shadow-2xl"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection
