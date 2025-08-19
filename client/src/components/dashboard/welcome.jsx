import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div 
        className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/30 relative overflow-hidden"
        whileHover={{ 
          scale: 1.01,
          y: -4,
          boxShadow: "0 30px 60px -12px rgba(99, 102, 241, 0.3)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative z-10">
          <motion.div
            className="flex items-center gap-3 mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span
              className="text-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Welcome back, {user?.username}!
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-gray-600 text-lg font-medium flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="text-indigo-500">📊</span>
            Here's how you've been feeling lately.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSection;