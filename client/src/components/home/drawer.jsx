


import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

function DrawerContent() {
  const [opened, { open, close }] = useDisclosure(false);

  const menuVariants = {
    closed: {
      rotate: 0,
      scale: 1
    },
    open: {
      rotate: 90,
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const linkHoverVariants = {
    rest: { x: 0, scale: 1 },
    hover: {
      x: 8,
      scale: 1.05,
      transition: { duration: 0.2, type: "spring", stiffness: 400 }
    }
  };

  return (
    <>
      <Drawer
        position="right"
        size="xs"
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.6, blur: 8 }}
        styles={{
          content: {
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          header: {
            background: 'transparent',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
        closeButtonProps={{
          icon: (
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <ImCross size={16} className="text-white" />
            </motion.div>
          ),
        }}
      >
        <motion.div
          className="flex flex-col space-y-2 p-4 relative"
          initial="hidden"
          animate="visible"
        >
         
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {[
            { to: "/", label: "Home", icon: "🏠" },
            { to: "", label: "About", icon: "ℹ️" },
            { to: "/login", label: "Login", icon: "🔐" },
            { to: "/register", label: "Register", icon: "📝" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link to={item.to} onClick={close}>
                <motion.div
                  className="text-white hover:text-indigo-200 font-medium text-lg py-4 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                  variants={linkHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Link shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "200%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  
                  <motion.span
                    className="text-xl relative z-10"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="relative z-10">{item.label}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Drawer>


      <motion.button
        onClick={open}
        className="text-white hover:text-indigo-200 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
        variants={menuVariants}
        animate={opened ? "open" : "closed"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GiHamburgerMenu size={24} />
      </motion.button>
    </>
  );
} 

export default DrawerContent;