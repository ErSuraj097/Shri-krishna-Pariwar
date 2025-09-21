import React from 'react'

const NewsMarque = () => {
  return (
   <>
   <div className="bg-red-800 text-white overflow-hidden ">
        <div className="animate-marquee">
            
            <marquee  direction="right">
          <span className="mx-4">|| Next Live Katha: Bhagavad Gita Chapter 12 - Starting at 6:00 PM Today ||</span>
          <span className="mx-4">Special Bhajan Sandhya this Sunday at 5:00 PM ||</span>
          <span className="mx-4">
            New Books Available in Store: "Path to Divine Wisdom" by Shri Pragyanand Ji Maharaj ||
          </span>
          </marquee>
        </div>
      </div>
   </>
  )
}

export default NewsMarque