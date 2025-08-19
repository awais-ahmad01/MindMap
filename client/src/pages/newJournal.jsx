
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createJournal } from "../store/actions/journal";
import { Loader } from '@mantine/core';
import { motion, AnimatePresence } from "framer-motion";

const NewJournal = () => {
  const dispatch = useDispatch();
  
  const { currentJournal, isloading } = useSelector((state) => state.journal);
  const { user } = useSelector(state => state.auth);
  
  const schema = yup.object({
    journalEntry: yup.string().required("Journal entry is required"),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      journalEntry: "",
    },
  });
  
  const onSubmit = (data) => {
    const userId = user?._id;
    dispatch(createJournal({ data, userId }));
  };

  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const responseVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 py-10 space-y-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="bg-white/80 backdrop-blur-sm w-full max-w-5xl p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
        variants={itemVariants}
        whileHover={{ y: -2 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          ✍️ New Journal Entry
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          variants={itemVariants}
        >
          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.textarea
              id="journalEntry"
              className="w-full p-4 border-2 border-gray-200 rounded-xl h-40 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm"
              placeholder="Write your journal entry here..."
              {...register("journalEntry")}
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            <AnimatePresence>
              {errors.journalEntry && (
                <motion.p 
                  className="text-red-500 text-sm mt-2 flex items-center gap-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-red-400">⚠️</span>
                  {errors.journalEntry.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            disabled={isloading}
          >
            {isloading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                ⏳
              </motion.div>
            ) : (
              "🔍"
            )}
            {isloading ? "Analyzing..." : "Analyze & Save Entry"}
          </motion.button>
        </motion.form>
      </motion.div>
      
      <motion.div 
        className="bg-white/80 backdrop-blur-sm w-full max-w-5xl p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
        variants={itemVariants}
        whileHover={{ y: -2 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          🤖 AI Response
        </motion.h1>
        
        <AnimatePresence mode="wait">
          {(!currentJournal && !isloading) && (
            <motion.div
              key="placeholder"
              variants={responseVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-6xl mb-4"
              >
                🤔
              </motion.div>
              <p className="text-gray-600 text-lg">
                Your AI-generated response will appear here after submission.
              </p>
            </motion.div>
          )}
          
          {isloading && (
            <motion.div
              key="loading"
              variants={responseVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mb-4"
              >
                <Loader color="indigo" size="lg" />
              </motion.div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gray-600 font-medium"
              >
                AI is analyzing your journal entry...
              </motion.p>
            </motion.div>
          )}
          
          {currentJournal && !isloading && (
            <motion.div
              key="result"
              variants={responseVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-xl border border-blue-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm font-medium text-blue-600 mb-1">Mood Label</p>
                  <p className="text-lg font-bold text-blue-800 flex items-center gap-2">
                    {currentJournal.moodEmoji} {currentJournal.moodLabel}
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-xl border border-emerald-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm font-medium text-emerald-600 mb-1">Sentiment Score</p>
                  <p className="text-lg font-bold text-emerald-800">
                    {currentJournal.sentimentScore}/10
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl border border-purple-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm font-medium text-purple-600 mb-1">Mood</p>
                  <p className="text-2xl">{currentJournal.moodEmoji}</p>
                </motion.div>
              </div>
              
              <motion.div
                className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-xl border border-amber-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  💡 AI Suggestions
                </h3>
                <ul className="space-y-3">
                  {currentJournal?.aiSuggestions?.map((suggestion, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-amber-700 bg-white/50 p-3 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-amber-500 mt-0.5">✨</span>
                      <span className="flex-1">{suggestion}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default NewJournal;