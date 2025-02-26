import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qrCode from "../assets/img1.jpg";
import gpay from "../assets/img1.jpg";
import phonepe from "../assets/img1.jpg";
import paytm from "../assets/img1.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img1.jpg";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = () => {
    if (!amount) {
      setMessage("Please enter a donation amount.");
      return;
    }
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      setMessage(`Thank you for your donation of ₹${amount}!`);
      setAmount("");
    }, 2000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
        {/* Left Side: Description */}
        <div className="lg:w-1/2 p-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4 text-gray-800"
          >
            Support the Shri Krishna Yogpith Charitable Trust
          </motion.h1>
          <p className="text-gray-600 mb-4">
            Help us build a divine space dedicated to spirituality, meditation,
            and community service. Your contributions will directly support the
            construction and maintenance of the temple.
          </p>
          <h2 className="text-xl font-semibold mb-2">Why Donate?</h2>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Assist in temple construction and beautification.</li>
            <li>Fund spiritual activities and rituals.</li>
            <li>Support cultural and educational initiatives.</li>
          </ul>
        </div>

        {/* Right Side: Image Slider */}
        <div className="lg:w-1/2 p-6">
          <Slider {...sliderSettings}>
            <img
              src={img1}
              alt="Temple Vision"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img
              src={img2}
              alt="Construction Progress"
              className="rounded-lg w-full h-64 object-cover"
            />
            <img
              src={img3}
              alt="Future Look"
              className="rounded-lg w-full h-64 object-cover"
            />
          </Slider>
        </div>
      </div>
{/* Bottom Section: Payment Methods */}
      <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 p-6 ">
          <h2 className="text-xl font-semibold mb-3">Payment Options</h2>
          <p className="text-gray-600 mb-2">
            Scan the QR code to donate via UPI
          </p>
          <img src={qrCode} alt="UPI QR Code" className=" w-40 mb-4" />
          <p className="text-gray-600 mb-2">or use the following details:</p>
          <p>
            <strong>UPI:</strong> example@upi
          </p>
          <p>
            <strong>Bank Transfer:</strong> 
            Account: 680701010050282
            bank (Union Bank of
            India, IFSC: UBINO568074)
          </p>
              <div className="flex gap-4 mt-4">
                <img src={gpay} alt="Google Pay" className="w-12 rounded-full" />
                <img src={phonepe} alt="PhonePe" className="w-12 rounded-full" />
                <img src={paytm} alt="Paytm" className="w-12 rounded-full" />
              </div>
        </div>

          <div className="lg:w-1/2 p-6 ">
                            Why Donate?
                Assist in temple construction and beautification.
                Fund spiritual activities and rituals.
                Support cultural and educational initiatives.
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter donation amount"
              className="w-full p-2 border rounded-md mb-3"
            />
                <div className="mb-4">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                    id="recurring"
                  />
                  <label htmlFor="recurring" className="ml-2 text-gray-700">
                    Make this a recurring donation
                  </label>
                </div>

                <button
                  onClick={handlePayment}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Donate Now"}
                </button>
                {message && <p className="text-green-600 mt-4">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Donate;
