import { motion } from 'framer-motion';

const Suggestions = ({ suggestions }) => {
  console.log('Suggestions:', suggestions);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
        delayChildren: 0.4,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.01,
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.h3 
        className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2"
        variants={itemVariants}
      >
        💡 Based on your recent entries...
      </motion.h3>
      <div className="space-y-3">
        {suggestions?.map((suggestion, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-orange-50/80 border border-amber-100/50 hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              x: 6,
              backgroundColor: "rgba(254, 243, 199, 0.6)"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="text-amber-500 text-lg mt-0.5 flex-shrink-0"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.span>
            <span className="text-gray-700 font-medium leading-relaxed">
              {suggestion}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


export default Suggestions;