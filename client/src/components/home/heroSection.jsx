
import { Button } from "@mantine/core";


const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col sm:flex-row items-center justify-between px-10 bg-gray-50">
        <div className="">
           <div className="flex flex-col lg:px-28 space-y-3">
             <h1 className="text-indigo-600 font-bold text-5xl">Your Private Space</h1>

            <h1 className="text-indigo-600 font-bold text-5xl">to reflect, grow and</h1>

            <h1 className="text-indigo-600 font-bold text-5xl">feel better -</h1>
            <h1 className="text-indigo-600 font-bold text-5xl">powered by AI.</h1>
           </div>

           <div className="sm:px-28 mt-10">
             <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold
                 hover:bg-indigo-700"
             >Get Started</button>
           </div>
           
        </div>

        <div className="sm:px-28">
            <img src="/images/journalling.png" alt="Hero Image" className="w-96 h-96" />
        </div>
    </div>
  );
}


export default HeroSection;