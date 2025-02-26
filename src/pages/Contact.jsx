import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API integration here for backend handling
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">Feel free to reach out to us for any inquiries.</p>
            <div className="space-y-3">
              <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-3 text-orange-500" /> भगवान श्रीकृष्ण कृपा धाम, ग्राम + पोस्ट, कठौड़ा, तह. सिकंदरपुर, जिला, बलिया UP</p>
              <p className="flex items-center text-gray-700"><FaPhone className="mr-3 text-orange-500" /> +91 9935449055</p>
              <p className="flex items-center text-gray-700"><FaEnvelope className="mr-3 text-orange-500" /> pragyanandacharya@gmail.com</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-gray-600 hover:text-blue-600 transition"><FaFacebook /></a>
                <a href="#" className="text-2xl text-gray-600 hover:text-pink-500 transition"><FaInstagram /></a>
                <a href="#" className="text-2xl text-gray-600 hover:text-red-600 transition"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our Location</h3>
          <div className="w-full h-72">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902660365064!2d90.38803231543245!3d23.750871494565335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8991b0c3a2f%3A0x131b9b6a2a0a2e0!2sDhaka!5e0!3m2!1sen!2sbd!4v1639228727464!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
