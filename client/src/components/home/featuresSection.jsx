// // FeaturesSection.jsx
// import { FaPenFancy, FaLock, FaCalendarAlt, FaChartLine } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const features = [
//   {
//     title: "Write Daily Journals",
//     icon: <FaPenFancy className="text-indigo-600 text-3xl" />,
//     description: "Capture your thoughts and emotions in a secure, private journal.",
//     link: '/login'
//   },
//   // {
//   //   title: "Privacy First",
//   //   icon: <FaLock className="text-indigo-600 text-3xl" />,
//   //   description: "Your journal is private by default. Only you can view or edit it.",
//   // },
//   {
//     title: "Track Your Journey",
//     icon: <FaCalendarAlt className="text-indigo-600 text-3xl" />,
//     description: "Reflect on past entries and visualize your emotional growth.",
//      link: '/login'
//   },
//   {
//     title: "Insightful Stats",
//     icon: <FaChartLine className="text-indigo-600 text-3xl" />,
//     description: "Analyze writing patterns and moods over time.",
//      link: '/login'
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="features-section py-16 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Key Features
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 hover:border-indigo-600 transition-all duration-300 rounded-xl p-8 shadow-md flex flex-col items-start space-y-4"
//             >
//               {feature.icon}
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 {feature.description}
//               </p>
//               <Link to={feature?.link}>
//                 <button className="mt-auto px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
//                 Try It Out
//               </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import { FaPenFancy, FaLock, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    title: "Write Daily Journals",
    icon: <FaPenFancy className="text-white text-3xl" />,
    description: "Capture your thoughts and emotions in a secure, private journal.",
    link: '/login',
    gradient: "from-indigo-500 to-purple-600",
    hoverGradient: "from-indigo-600 to-purple-700",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    title: "Track Your Journey",
    icon: <FaCalendarAlt className="text-white text-3xl" />,
    description: "Reflect on past entries and visualize your emotional growth.",
    link: '/login',
    gradient: "from-emerald-500 to-teal-600",
    hoverGradient: "from-emerald-600 to-teal-700",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    title: "Insightful Stats",
    icon: <FaChartLine className="text-white text-3xl" />,
    description: "Analyze writing patterns and moods over time.",
    link: '/login',
    gradient: "from-amber-500 to-orange-600",
    hoverGradient: "from-amber-600 to-orange-700",
    bgGradient: "from-amber-50 to-orange-50"
  },
];

const FeaturesSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -8,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.section 
      className="features-section pt-20 pb-10 px-4  relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
          variants={cardVariants}
        >
          Key Features
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg flex flex-col items-start space-y-6 relative overflow-hidden group`}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
            >
           
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
              />

          
              <motion.div
                className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg relative z-10`}
                variants={iconVariants}
                whileHover={{
                  boxShadow: "0 20px 40px -8px rgba(99, 102, 241, 0.4)"
                }}
              >
                {feature.icon}
              </motion.div>

              <div className="relative z-10 flex-1">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-3"
                  whileHover={{
                    color: "#4f46e5",
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-base leading-relaxed mb-6"
                  whileHover={{
                    color: "#374151",
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.description}
                </motion.p>
              </div>

              <Link to={feature?.link} className="relative z-10 w-full">
                <motion.button 
                  className={`w-full px-6 py-3 cursor-pointer bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-semibold shadow-md relative overflow-hidden group`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -8px rgba(99, 102, 241, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                 
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "200%",
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ✨ Try It Out
                  </span>
                </motion.button>
              </Link>

              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    
    </motion.section>
  );
};

export default FeaturesSection;