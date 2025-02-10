import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition duration-300">About</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition duration-300">Gallery</Link></li>
              <li><Link to="/donate" className="hover:text-orange-500 transition duration-300">Donate</Link></li>
              <li><Link to="/store" className="hover:text-orange-500 transition duration-300">Store</Link></li>
            </ul>
          </div>
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Address</h3>
            <p>भगवान श्रीकृष्ण कृपा धाम</p>
            <p>ग्राम + पोस्ट, कठौड़ा, तह. सिकंदरपुर, जिला, बलिया UP</p>
            <p>Contact No: <a href="tel:+919935449055" className="hover:text-orange-500">+91 9935449055</a></p>
            <p>Email: <a href="mailto:pragyanandacharya@gmail.com" className="hover:text-orange-500">pragyanandacharya@gmail.com</a></p>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-orange-500 text-2xl transition duration-300"><FaFacebook /></a>
              <a href="#" className="hover:text-orange-500 text-2xl transition duration-300"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-500 text-2xl transition duration-300"><FaYoutube /></a>
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Newsletter</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Shri Krishna Yogpith Pariwar. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with ❤️ for spiritual growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
