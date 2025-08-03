const FeaturesSection = () => {
  return (
    <section className="features-section p-10">
      <div className="w-full">
        {/* <h2 className="px-12 font-bold text-2xl">Features</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12 mt-8">
          <div className="border-2 border-gray-300 hover:border-indigo-600 p-10 rounded-lg shadow-lg flex flex-col space-y-6">
            <h1 className="font-bold text-2xl">Write Daily Journals</h1>

            <p>
              Capture your thoughts and emotions in a secure, private journal.
            </p>

            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Try It Out</button>
          </div>


          <div className="border-2 border-gray-300 hover:border-indigo-600 p-10 rounded-lg shadow-lg flex flex-col space-y-6">
            <h1 className="font-bold text-2xl">Write Daily Journals</h1>

            <p>
              Capture your thoughts and emotions in a secure, private journal.
            </p>

            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Try It Out</button>
          </div>

          <div className="border-2 border-gray-300 hover:border-indigo-600 p-10 rounded-lg shadow-lg flex flex-col space-y-6">
            <h1 className="font-bold text-2xl">Write Daily Journals</h1>

            <p>
              Capture your thoughts and emotions in a secure, private journal.
            </p>

            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Try It Out</button>
          </div>

          <div className="border-2 border-gray-300 hover:border-indigo-600 p-10 rounded-lg shadow-lg flex flex-col space-y-6">
            <h1 className="font-bold text-2xl">Write Daily Journals</h1>

            <p>
              Capture your thoughts and emotions in a secure, private journal.
            </p>

            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Try It Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
