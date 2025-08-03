import React from "react";
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
} from "chart.js";
import { FaPen, FaFolderOpen, FaDownload } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Mood Score",
        data: [5, 6, 5.5, 6.2, 5.9, 5.4, 5.7],
        borderColor: "#4f46e5",
        backgroundColor: "#c7d2fe",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow fixed top-0 w-full z-10 flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-indigo-600">LOGO</div>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Journal</a>
          <a href="#">Dashboard</a>
          <a href="#">Profile</a>
          <a href="#">Logout</a>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome back, Awais!</h2>
          <p className="text-gray-600">Here's how you've been feeling lately.</p>
        </div>

        {/* Mood Summary & Chart */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold text-gray-700">Mood Summary</h3>
            <div className="mt-4 text-4xl">😐</div>
            <div className="text-gray-800 mt-2 text-xl font-medium">5.6 – Neutral</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Mood Trend (7 Days)</h3>
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Suggestions Box */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Based on your recent entries...
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Try going for a 15-minute walk.</li>
            <li>You’ve mentioned feeling anxious — consider a breathing exercise.</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
            <FaPen className="text-indigo-600 text-3xl mx-auto mb-2" />
            <p className="text-gray-800 font-semibold">Write New Journal</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
            <FaFolderOpen className="text-indigo-600 text-3xl mx-auto mb-2" />
            <p className="text-gray-800 font-semibold">View All Entries</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
            <FaDownload className="text-indigo-600 text-3xl mx-auto mb-2" />
            <p className="text-gray-800 font-semibold">Export Journals</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12 border-t pt-6">
          <p className="space-x-4">
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </p>
          <p className="mt-2">&copy; 2025 MindfulTrack. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default DashboardPage;