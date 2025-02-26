import React from "react";
import img from '../assets/img2.jpg'
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
       {/* Right Section */}
       <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Spiritual Master"
          className="h-80 w-full md:w-[400px] rounded-lg shadow-lg"
        />
      </div>
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-black">
          आचार्य प्रज्ञानंद जी महाराज
        </h1>
        <h2 className="text-2xl font-semibold text-black">
          भगवान <span className="text-green-600">श्री कृष्ण कृपा धाम</span>
        </h2>
        <p className="text-lg text-gray-700">Geeta preacher and Spiritual master.</p>
        
        <Link to={"/contact"}>
        
        <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-gray-700">
          Contact
        </button>

        </Link>

        <p className="italic text-gray-600 text-md">
          In the Bhagavad Gita, Lord Krishna teaches the importance of duty, detachment,
          and self-realization. He emphasizes the path of selfless action, devotion, and
          knowledge, guiding Arjuna towards spiritual liberation.
        </p>
      </div>
      
     
    </div>
  );
};

export default Intro;
