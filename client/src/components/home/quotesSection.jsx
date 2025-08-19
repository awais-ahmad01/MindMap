

import { motion } from "framer-motion";

const QuotesSection = () => {
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      className="quotes-section relative overflow-hidden pb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
     
      <motion.div
        className="absolute top-20 left-20 text-6xl text-indigo-200/30 font-serif"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        "
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-6xl text-indigo-200/30 font-serif transform rotate-180"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        "
      </motion.div>

      <div className="w-full p-10 text-center relative z-10">
        <motion.div
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative inline-block"
        >
          <motion.p 
            className="italic text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent font-medium tracking-wider relative z-10"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
          >
            "Your mind matters. Take care of it."
          </motion.p>
          
         
        </motion.div>

       
      </div>
    </motion.section>
  );
};


export default QuotesSection;
