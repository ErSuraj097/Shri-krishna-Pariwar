import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { BsChatLeftFill, BsTelephoneFill, BsGlobe } from 'react-icons/bs'; // Import icons

const Top = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-900 shadow-md"> {/* Gradient background */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">

        <div className="flex items-center space-x-4"> 
          <Link
            to="/live-katha"
            className="bg-white text-red-700 px-4 py-1 rounded-md  hover:bg-red-100 transition duration-300" // Updated styles
          >
            Live Katha
          </Link>

          <Link
            to="/TodayEvents"
            className="bg-white text-red-700 px-4 py-1 rounded-md  hover:bg-red-100 transition duration-300" // Updated styles
          >
            Today's Events
          </Link>
        </div>

  
        <div className="flex items-center space-x-4">
  
          <button className="bg-white text-red-700 px-4 py-1 rounded-md  hover:bg-red-100 transition duration-300 flex items-center"> {/* Icon added */}
            <BsChatLeftFill className="mr-2" />Chat-Us
          </button>

        
          <Link
            to="tel:+919935449055" 
            className="text-white  hover:text-red-100 transition duration-300 flex items-center" 
          >
            <BsTelephoneFill className="mr-2" />9935449055
          </Link>

       
          {/* <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="bg-white text-red-700 px-4 py-2 rounded-md font-semibold hover:bg-red-100 transition duration-300 flex items-center">
                <BsGlobe className="mr-2" /> Language
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => console.log("Language selected: en")}
                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                         onClick={() => console.log("Language selected: hi")}
                        className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                      >
                        हिन्दी
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
        </div>
      </div>
    </div>
  );
};

export default Top;