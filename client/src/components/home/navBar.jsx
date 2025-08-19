


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DrawerContent from "./drawer";

const NavBar = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  const linkVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, type: "spring", stiffness: 400 }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-6 px-6 lg:px-10 shadow-lg backdrop-blur-lg border-b border-indigo-400/20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
 
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="flex items-center justify-between relative z-10">
      <motion.h1
  className="text-3xl font-bold cursor-pointer flex items-center gap-2"
  variants={logoVariants}
  initial="rest"
  whileHover="hover"
>
  <motion.span
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="text-3xl"  // normal text color applies here
  >
    🧠
  </motion.span>
  <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
    MindMap
  </span>
</motion.h1>


        <motion.div 
          className="lg:block hidden"
          variants={itemVariants}
        >
          <ul className="flex space-x-8">
            {[
              { to: "/", label: "Home", icon: "🏠" },
              // { to: "", label: "About", icon: "ℹ️" },
              { to: "login", label: "Login", icon: "🔐" },
              { to: "register", label: "Register", icon: "📝" }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
              >
                <Link to={item.to}>
                  <motion.div
                    className="text-white hover:text-indigo-200 font-medium text-lg px-4 py-2 rounded-xl hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 relative overflow-hidden"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                  
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "200%",
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    />
                    <span className="text-sm">{item.icon}</span>
                    <span className="relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="lg:hidden block"
          variants={itemVariants}
        >
          <DrawerContent />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;