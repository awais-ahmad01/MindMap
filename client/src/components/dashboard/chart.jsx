
import { motion } from 'framer-motion';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart = ({ moodTrends }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#374151',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const sentiment = context.raw;
            const mood = moodTrends[index]?.moodLabel || "Unknown";
            return `Mood: ${mood}, Score: ${sentiment}`;
          }
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12
          }
        }
      }
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
        backgroundColor: '#6366F1',
        borderColor: '#FFFFFF',
        borderWidth: 3,
        hoverBorderWidth: 4,
      },
      line: {
        borderWidth: 3,
        tension: 0.4,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  const data = {
    labels: moodTrends?.map((item) => item.date),
    datasets: [
      {
        label: "Sentiment Score",
        data: moodTrends?.map((item) => item.sentimentScore),
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.01,
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.h3 
        className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        📈 Mood Trend (7 Days)
      </motion.h3>
      <motion.div
        className="h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Line data={data} options={options} />
      </motion.div>
    </motion.div>
  );
};

export default Chart