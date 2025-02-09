import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Top from "./Top";

import logo from "../assets/logo.jpg"
export default function Header() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    < >
    <Top />
    <div>
    <nav className="bg-white shadow-md ">
      <div className="  container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="" className="w-10 rounded-full" />
        <Link href="/" className="text-xl font-bold text-red-600">
        BHAGWAN SHRI KRISHNA KRIPA DHAM
        </Link>

        {/* Navigation Links */}
        <ul className=" text-[0.9rem] z-[999] hidden md:flex space-x-3">
          <li>
            <Link href="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
          </li>
          {/* Gallery Dropdown */}
          <li className="relative" onMouseEnter={() => setGalleryOpen(null)} onMouseLeave={() => setGalleryOpen(false)}>
            <button className="flex items-center text-gray-700 hover:text-red-600">
              Gallery <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* {galleryOpen && (
            //   <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            //     <li><Link href="/gallery/dignitaries" className="block px-4 py-2 hover:bg-gray-100">Visit of Dignitaries</Link></li>
            //     <li><Link href="/gallery/photos" className="block px-4 py-2 hover:bg-gray-100">Photo Gallery</Link></li>
            //     <li><Link href="/gallery/videos" className="block px-4 py-2 hover:bg-gray-100">Video Gallery</Link></li>
            //     <li><Link href="/gallery/newsletter" className="block px-4 py-2 hover:bg-gray-100">Newsletter</Link></li>
            //     <li><Link href="/gallery/stotra" className="block px-4 py-2 hover:bg-gray-100">Stotra Sangrah</Link></li>
            //   </ul>
            )} */}
          </li>
         
          <li>
            <Link href="/about" className="text-gray-700 hover:text-red-600">
              Event
            </Link>
          </li>
        

            

          {/* Gallery Dropdown */}
          <li className="relative" onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
            <button className="flex items-center text-gray-700 hover:text-red-600">
              Gallery <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {galleryOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <li><Link href="/gallery/dignitaries" className="block px-4 py-2 hover:bg-gray-100">Visit of Dignitaries</Link></li>
                <li><Link href="/gallery/photos" className="block px-4 py-2 hover:bg-gray-100">Photo Gallery</Link></li>
                <li><Link href="/gallery/videos" className="block px-4 py-2 hover:bg-gray-100">Video Gallery</Link></li>
                <li><Link href="/gallery/newsletter" className="block px-4 py-2 hover:bg-gray-100">Newsletter</Link></li>
                <li><Link href="/gallery/stotra" className="block px-4 py-2 hover:bg-gray-100">Stotra Sangrah</Link></li>
              </ul>
            )}
          </li>

          {/* Product Dropdown */}
          <li className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
            <button className="flex items-center text-gray-700 hover:text-red-600">
              Product <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {productOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md ">
                <li><Link href="/product/bhajan" className="block px-4 py-2 hover:bg-gray-100">Bhajan</Link></li>
                <li><Link href="/product/books" className="block px-4 py-2 hover:bg-gray-100">Books</Link></li>
                <li><Link href="/product/spiritual-items" className="block px-4 py-2 hover:bg-gray-100">Spiritual Items</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-red-600">
              About
            </Link>
          </li>
          
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-red-600">
              Contact
            </Link>
          </li>
          <li>
            <button className="bg-red-600 text-white  px-1 rounded-xl hover:bg-red-900">
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    </>
  );
}
