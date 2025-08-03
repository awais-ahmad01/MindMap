import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ moodTrends }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
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
      },
    },
  };

  const data = {
    labels: moodTrends?.map((item) => item.date),
    datasets: [
      {
        label: "Sentiment Score",
        data: moodTrends?.map((item) => item.sentimentScore),
        borderColor: "#4f46e5",
        backgroundColor: "#c7d2fe",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Mood Trend (7 Days)</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
