// FeaturesSection.jsx
import { FaPenFancy, FaLock, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Write Daily Journals",
    icon: <FaPenFancy className="text-indigo-600 text-3xl" />,
    description: "Capture your thoughts and emotions in a secure, private journal.",
    link: '/login'
  },
  // {
  //   title: "Privacy First",
  //   icon: <FaLock className="text-indigo-600 text-3xl" />,
  //   description: "Your journal is private by default. Only you can view or edit it.",
  // },
  {
    title: "Track Your Journey",
    icon: <FaCalendarAlt className="text-indigo-600 text-3xl" />,
    description: "Reflect on past entries and visualize your emotional growth.",
     link: '/login'
  },
  {
    title: "Insightful Stats",
    icon: <FaChartLine className="text-indigo-600 text-3xl" />,
    description: "Analyze writing patterns and moods over time.",
     link: '/login'
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-indigo-600 transition-all duration-300 rounded-xl p-8 shadow-md flex flex-col items-start space-y-4"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
              <Link to={feature?.link}>
                <button className="mt-auto px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Try It Out
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
