import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10 bg-gray-50">
      <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
        <div className="flex flex-col space-y-3 px-2 sm:px-4 md:px-10 lg:px-20">
          <h1 className="text-indigo-600 font-bold text-3xl sm:text-4xl md:text-5xl">
            Your Private Space
          </h1>
          <h1 className="text-indigo-600 font-bold text-3xl sm:text-4xl md:text-5xl">
            to reflect, grow and
          </h1>
          <h1 className="text-indigo-600 font-bold text-3xl sm:text-4xl md:text-5xl">
            feel better -
          </h1>
          <h1 className="text-indigo-600 font-bold text-3xl sm:text-4xl md:text-5xl">
            powered by AI.
          </h1>
        </div>

        <div className="px-2 sm:px-4 md:px-10 lg:px-20 mt-8">
          <Link to='/login'>
            <button className="bg-indigo-600 text-white px-4 py-2 
            rounded-lg font-bold hover:bg-indigo-700 transition cursor-pointer">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-2 sm:px-4 md:px-10 lg:px-20">
        <img
          src="/images/journalling.png"
          alt="Hero Image"
          className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
