         
import React from "react";
import img from '../assets/img2.jpg'

const About = () =>{
  return (


   <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={img} // Replace with actual image URL
            alt="Shri Krishna Yogpith Pariwar"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right Section - Content */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            About Shri Krishna Yogpith Pariwar
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shri Krishna Yogpith Pariwar is dedicated to promoting spiritual and physical well-being
            through yoga, meditation, and Vedic teachings. Rooted in the rich traditions of India,
            we aim to spread the essence of spirituality and holistic health for all.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to create a harmonious balance between body, mind, and soul.
            We strive to educate and inspire individuals to embrace a healthy and spiritual lifestyle.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To be a guiding light in the journey of self-discovery and enlightenment,
            empowering individuals through ancient yogic wisdom and modern wellness practices.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Information</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Address:</strong> भगवान श्रीकृष्ण कृपा धाम, ग्राम + पोस्ट, कठौड़ा, तह. सिकंदरपुर, जिला, बलिया UP
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Contact No:</strong> +91 99354 49055
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Email:</strong> pragyanandacharya@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 