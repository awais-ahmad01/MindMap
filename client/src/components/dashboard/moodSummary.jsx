import { motion } from 'framer-motion';

const MoodSummary = ({ moodSummary }) => {
  console.log('moodSummry:', moodSummary);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const moodEmojis = {
    Happy: "😊",
    Sad: "😢", 
    Angry: "😠",
    Anxious: "😰",
    Neutral: "😐",
    Excited: "🤩",
    Calm: "😌"
  };

  const moodColors = {
    Happy: "from-green-400 to-emerald-500",
    Sad: "from-blue-400 to-sky-500",
    Angry: "from-red-400 to-rose-500",
    Anxious: "from-yellow-400 to-amber-500",
    Neutral: "from-gray-400 to-slate-500",
    Excited: "from-purple-400 to-violet-500",
    Calm: "from-teal-400 to-cyan-500"
  };

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center border border-white/30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02,
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.h3 
        className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center justify-center gap-2"
        variants={itemVariants}
      >
        🎭 Mood Summary
      </motion.h3>
      <div className="space-y-4">
        {moodSummary && Object.entries(moodSummary)?.map(([mood, count], index) => (
          <motion.div 
            key={mood} 
            className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50/80 to-white/80 border border-gray-100/50 hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              x: 4,
              backgroundColor: "rgba(249, 250, 251, 0.9)"
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="text-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              >
                {moodEmojis[mood] || "😐"}
              </motion.span>
              <span className="font-medium text-gray-800">{mood}</span>
            </div>
            <motion.div 
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${moodColors[mood] || "from-gray-400 to-slate-500"} text-white font-semibold text-sm shadow-sm`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {count} times
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MoodSummary;