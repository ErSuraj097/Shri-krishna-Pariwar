import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-orange-500 transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-orange-500 transition duration-300">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-orange-500 transition duration-300">
                  Store
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* Address Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Address</h3>
            <p>भगवान श्रीकृष्ण कृपा धाम</p>
            <p>ग्राम + पोस्ट, कठौड़ा, तह. सिकंदरपुर, जिला, बलिया UP</p>
            <p>
              Contact No:{" "}
              <a href="tel:+919935449055" className="hover:text-orange-500">
                +91 9935449055
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:pragyanandacharya@gmail.com" className="hover:text-orange-500">
                pragyanandacharya@gmail.com
              </a>
            </p>
          </motion.div>
          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Connect</h3>
            <motion.div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="hover:text-orange-500 text-2xl transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* Newsletter */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </div>
        {/* Footer Bottom */}
        <motion.div
          className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; 2024 Shri Krishna Yogpith Pariwar. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with ❤️ for spiritual growth.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
