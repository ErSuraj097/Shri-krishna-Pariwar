import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Top from "./Top";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Top />
      <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <Link to="/" className="text-lg md:text-xl font-bold text-red-600 hover:text-red-700">
              BHAGWAN SHRI KRISHNA KRIPA DHAM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-[0.9rem] space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-red-600 transition duration-300">
                Home
              </Link>
            </li>

            {/* Gallery Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600 transition duration-300">
                Gallery <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {galleryOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100">
                  <li>
                    <Link to="/gallery/dignitaries" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Visit of Dignitaries
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/photos" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Photo Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/videos" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Video Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/newsletter" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/stotra" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Stotra Sangrah
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/TodayEvents" className="text-gray-700 hover:text-red-600 transition duration-300">
                Events
              </Link>
            </li>

            {/* Product Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600 transition duration-300">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100">
                  <li>
                    <Link to="/product/bhajan" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Bhajan
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/books" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/spiritual-items" className="block px-4 py-2 hover:bg-gray-50 transition duration-200">
                      Spiritual Items
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition duration-300">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition duration-300">
                Contact
              </Link>
            </li>

            <li>
              <Link to={"/donate"}>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Donate Now
              </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="py-4 px-6 space-y-4">
              <li>
                <Link to="/" className="block text-gray-700 hover:text-red-600 transition duration-300">
                  Home
                </Link>
              </li>

              {/* Gallery Dropdown for Mobile */}
              <li>
                <button
                  className="flex items-center w-full text-gray-700 hover:text-red-600 transition duration-300"
                  onClick={() => setGalleryOpen(!galleryOpen)}
                >
                  Gallery <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {galleryOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link to="/gallery/dignitaries" className="block text-gray-600 hover:text-red-600">
                        Visit of Dignitaries
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/photos" className="block text-gray-600 hover:text-red-600">
                        Photo Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/videos" className="block text-gray-600 hover:text-red-600">
                        Video Gallery
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/today-events" className="block text-gray-700 hover:text-red-600 transition duration-300">
                  Events
                </Link>
              </li>

              {/* Product Dropdown for Mobile */}
              <li>
                <button
                  className="flex items-center w-full text-gray-700 hover:text-red-600 transition duration-300"
                  onClick={() => setProductOpen(!productOpen)}
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {productOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link to="/product/bhajan" className="block text-gray-600 hover:text-red-600">
                        Bhajan
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/books" className="block text-gray-600 hover:text-red-600">
                        Books
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/contact" className="block text-gray-700 hover:text-red-600 transition duration-300">
                  Contact
                </Link>
              </li>

              <li>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300">
                  Donate Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
