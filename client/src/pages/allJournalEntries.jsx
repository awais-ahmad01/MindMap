
import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import JournalEntryDetailsModal from "./journalEntryDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllJournals } from "../store/actions/journal";
import { motion, AnimatePresence, stagger } from "framer-motion";

const moodColors = {
  Happy: "bg-gradient-to-r from-green-100 to-emerald-50 text-green-700 border-green-200",
  Anxious: "bg-gradient-to-r from-yellow-100 to-amber-50 text-yellow-700 border-yellow-200",
  Sad: "bg-gradient-to-r from-blue-100 to-sky-50 text-blue-700 border-blue-200",
  Angry: "bg-gradient-to-r from-red-100 to-rose-50 text-red-700 border-red-200",
  Neutral: "bg-gradient-to-r from-gray-100 to-slate-50 text-gray-700 border-gray-200",
};

const AllJournalEntries = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { journals } = useSelector((state) => state.journal);
  
  console.log('user:', user);
  console.log("journals:", journals);
  
  useEffect(() => {
    const userId = user?._id;
    dispatch(getAllJournals(userId));
  }, [dispatch]);
  
  const handleViewDetails = (entry) => {
    setSelectedEntry(entry);
    open();
  };

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  const moodBadgeVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="px-4 sm:px-6 py-16 max-w-6xl mx-auto min-h-screen "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3"
        variants={itemVariants}
      >
        📖 All Journal Entries
      </motion.h2>
      
      <AnimatePresence>
        {journals?.length === 0 ? (
          <motion.div 
            className="text-center text-gray-600 mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-white/20 shadow-lg"
            variants={emptyStateVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-6xl mb-6"
            >
              📝
            </motion.div>
            <motion.p 
              className="text-xl mb-2 font-semibold text-gray-700"
              variants={itemVariants}
            >
              No journal entries found.
            </motion.p>
            <motion.p 
              className="text-base text-gray-500"
              variants={itemVariants}
            >
              Start writing your thoughts and track your mood!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {journals.map((entry, index) => (
              <motion.div
                key={entry?._id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                layout
                custom={index}
              >
                <motion.div 
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="text-sm text-gray-500 flex items-center gap-2 font-medium"
                    variants={itemVariants}
                  >
                    <span className="text-blue-500">📅</span>
                    {new Date(entry?.createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </motion.span>
                  
                  <motion.span
                    className={`px-4 py-2 rounded-full text-xs font-semibold border ${
                      moodColors[entry?.moodLabel] || "bg-gradient-to-r from-gray-100 to-slate-50 text-gray-800 border-gray-200"
                    } shadow-sm`}
                    variants={moodBadgeVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    {entry?.moodLabel}
                  </motion.span>
                </motion.div>
                
                <motion.div 
                  className="mt-4 text-gray-800 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  {entry?.content?.length > 120
                    ? `${entry?.content.slice(0, 120)}...`
                    : entry?.content}
                </motion.div>
                
                <motion.div 
                  className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <div className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                      <span className="text-indigo-500">🎯</span>
                      Sentiment Score: {entry?.sentimentScore?.toFixed(1)} / 10
                    </div>
                  </motion.div>
                  
                  <motion.button
                    className="text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
                    onClick={() => handleViewDetails(entry)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>👁️</span>
                    View Details
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <JournalEntryDetailsModal
        opened={opened}
        onClose={close}
        entry={selectedEntry}
      />
    </motion.div>
  );
};

export default AllJournalEntries;