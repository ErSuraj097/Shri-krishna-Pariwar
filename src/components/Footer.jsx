import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500">Gallery</Link></li>
              <li><Link to="/donate" className="hover:text-orange-500">Donate</Link></li>
              <li><Link to="/store" className="hover:text-orange-500">Store</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-orange-500">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-500">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Shri Krishna Yogpith Pariwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;