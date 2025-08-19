
import { FaPen, FaFolderOpen, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllJournals } from "../../store/actions/journal";
import { exportJournalsToPDF } from "../utils/exportPDF";

const ActionBtns = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { journals } = useSelector(state => state.journal);

  console.log('journals:', journals);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.3, 
      rotate: 12,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05,
      y: -8,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    },
    tap: { scale: 0.95 }
  };

  useEffect(() => {
    const userId = user?._id; 
    dispatch(getAllJournals(userId));
  }, [dispatch]);

  const handleExportPDF = async () => {
    const userName = user?.username;
    exportJournalsToPDF(journals, userName);
  };

  const actionItems = [
    {
      icon: FaPen,
      title: "Write New Journal",
      link: "newJournal",
      gradient: "from-indigo-500 to-purple-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50",
      shadowColor: "rgba(99, 102, 241, 0.3)"
    },
    {
      icon: FaFolderOpen,
      title: "View All Entries",
      link: "allJournalEntries", 
      gradient: "from-emerald-500 to-teal-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50",
      shadowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: FaDownload,
      title: "Export Journals",
      onClick: handleExportPDF,
      gradient: "from-amber-500 to-orange-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50",
      shadowColor: "rgba(245, 158, 11, 0.3)"
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {actionItems.map((item, index) => (
        <motion.div key={index} variants={itemVariants}>
          {item.link ? (
            <Link to={item.link}>
              <ActionCard item={item} />
            </Link>
          ) : (
            <button onClick={item.onClick} className="w-full">
              <ActionCard item={item} />
            </button>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ActionBtns;

const ActionCard = ({ item }) => (
  <motion.div 
    className={`bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center cursor-pointer border border-white/30 ${item.hoverBg} transition-all duration-300`}
    variants={{
      rest: { scale: 1, y: 0 },
      hover: { 
        scale: 1.05,
        y: -8,
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      },
      tap: { scale: 0.95 }
    }}
    initial="rest"
    whileHover="hover"
    whileTap="tap"
    style={{
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
    }}
    whileHoverStyle={{
      boxShadow: `0 25px 50px -12px ${item.shadowColor}`
    }}
  >
    <motion.div
      className="mb-4"
      variants={{
        rest: { scale: 1, rotate: 0 },
        hover: { 
          scale: 1.3, 
          rotate: 12,
          transition: { 
            duration: 0.3,
            type: "spring",
            stiffness: 200
          }
        }
      }}
    >
      <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg`}>
        <item.icon className="text-white text-2xl" />
      </div>
    </motion.div>
    <motion.p 
      className="font-semibold text-gray-800 text-lg"
      variants={{
        rest: { y: 0 },
        hover: { y: -2 }
      }}
    >
      {item.title}
    </motion.p>
  </motion.div>
);