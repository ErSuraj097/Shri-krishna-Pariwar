import React from "react";
import Hero from "../components/Hero";
import EventCountdown from "../components/EventCountdown";
import QuickLinks from "../components/QuickLinks";

import UpcomingEvents from "../components/UpcomingEvents";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <>
      <div>
        <Hero />
         {/* Event Countdown */}
         <EventCountdown />

{/* Quick Links */}
<QuickLinks />

        {/* Upcoming Events */}
        <UpcomingEvents />

        {/* Testimonials */}
        <Testimonials />
        {/* <EventCountdown />
      <QuickLinks />
      <NewsMarquee />
      <UpcomingEvents />
      <Testimonials /> */}
       
      </div>
    </>
  );
};

export default Home;
