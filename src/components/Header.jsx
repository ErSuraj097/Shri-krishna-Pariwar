import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, MapPin, Phone, Video } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div 
        className="bg-red-800 text-white text-sm flex   justify-left space-x-8 py-4 px-12 z-50"
        // style={{ 
        //   height: topBarVisible ? 'auto' : '0', 
        //   overflow: 'hidden',
       
        // }}
      >

        <div className="flex items-center space-x-1">
          <Phone className="w-4 h-4" />
          <a href="tel:+919935449055" className="hover:text-red-600">
            +91 9935449055
          </a>
        </div>
        <div className="flex items-center space-x-1">|</div>
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>Balua, Sikandarpur, Ballia, UP</span>
        </div>
        
       <div className="flex items-center space-x-1">|</div>
        <div className="flex items-center space-x-1">
          <a href="mailto:pragyanandacharya@gmail.com" className="hover:text-red-600">
            pragyanandacharya@gmail.com
          </a>
        </div>
<div className="flex items-center space-x-1">|</div>
         <div className="flex items- space-x-1">
          <Video className="w-4 h-4" />
          <Link to="/virtual-tour" className="hover:text-red-600">
            Virtual Tour
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className="backdrop-blur-sm shadow-md sticky z-50 w-full bg-white"
        style={{ 
          top: topBarVisible ? '0' : '0',
          transition: 'top 0.3s ease'
        }}
      >
        <div className="px-10 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Centered Navigation */}
          <ul className="hidden md:flex text-[1rem] font-bold space-x-10">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600"
              >
                Home
              </Link>
            </li>

            {/* Gallery Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600">
                Gallery <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {galleryOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100">
                  <li>
                    <Link
                      to="/gallery/dignitaries"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Visit of Dignitaries
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/photos"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Photo Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/videos"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Video Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/newsletter"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/stotra"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Stotra Sangrah
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Product Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100">
                  <li>
                    <Link
                      to="/product/bhajan"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Bhajan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/books"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product/spiritual-items"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Spiritual Items
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-600"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex gap-2">
            <Link to="/live-katha">
              <button className="bg-red-800 text-white px-4 py-2 rounded-sm hover:bg-red-700 flex items-center gap-1">
                <Video className="w-4 h-4" />
                Live Katha
              </button>
            </Link>
            <Link to="/donate">
              <button className="bg-red-800 text-white px-4 py-2 rounded-sm hover:bg-red-700">
                Donate Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="py-4 px-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-red-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* Gallery Dropdown for Mobile */}
              <li>
                <button
                  className="flex items-center w-full text-gray-700 hover:text-red-600"
                  onClick={() => setGalleryOpen(!galleryOpen)}
                  aria-expanded={galleryOpen}
                  aria-controls="mobile-gallery-dropdown"
                >
                  Gallery <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {galleryOpen && (
                  <ul id="mobile-gallery-dropdown" className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link
                        to="/gallery/dignitaries"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Visit of Dignitaries
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery/photos"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery/videos"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Video Gallery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/today-events"
                  className="block text-gray-700 hover:text-red-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Events
                </Link>
              </li>

              {/* Product Dropdown for Mobile */}
              <li>
                <button
                  className="flex items-center w-full text-gray-700 hover:text-red-600"
                  onClick={() => setProductOpen(!productOpen)}
                  aria-expanded={productOpen}
                  aria-controls="mobile-product-dropdown"
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {productOpen && (
                  <ul id="mobile-product-dropdown" className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link
                        to="/product/bhajan"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Bhajan
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product/books"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product/spiritual-items"
                        className="block text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        Spiritual Items
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-red-600"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-red-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/live-katha"
                  className="w-full bg-red-800 text-white py-2 rounded-sm hover:bg-red-700 block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Live Katha
                </Link>
              </li>

              <li>
                <Link
                  to="/donate"
                  className="w-full bg-red-800 text-white py-2 rounded-sm hover:bg-red-700 block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}