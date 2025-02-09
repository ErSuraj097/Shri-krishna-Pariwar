import { Button } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="flex flex-col ">
      {/* Top Bar */}
      <div className="bg-white text-white border border-b-red-600">
        <div className="container mx-auto px-4  flex justify-between items-center">
          <div className="flex items-center ">
            <Link
              href="/live-katha"
              className="border bg-red-600 py-2 px-2  hover:text-white flex items-center"
            >
              Live Katha
            </Link>

            <Link
              href="/events"
              className="border bg-red-600 py-2 px-2 hover:text-white"
            >
              Today's Events
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant=" ghost"
              className=" border bg-red-600 rounded-xl px-2 text-white hover:text-white"
            >
              Chat With Us
            </Button>
            <Link
              href="tel:+911234567890"
              className="text-red-600 hover:text-red-600 flex items-center"
            >
              +91 9792440259
            </Link>

            {/* Language Selector */}

            <select
              className=" text-red-600 border border-red-600  cursor-pointer"
              onChange={(e) =>
                console.log("Language selected:", e.target.value)
              }
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
