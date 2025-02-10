import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LiveKatha from './pages/LiveKatha';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import TodayEvents from './components/TodayEvents';
import DignitariesGallery from './components/gallery/DignitariesGallery';
import PhotoGallery from './components/gallery/PhotoGallery';
import VideoGallery from './components/gallery/VideoGallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/live-katha" element={<LiveKatha />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Store />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/TodayEvents" element={<TodayEvents />} />


            <Route path="/" element={<Gallery />} />
              <Route path="gallery/dignitaries" element={<DignitariesGallery />} />
              <Route path="gallery/photos" element={<PhotoGallery />} />
              <Route path="gallery/videos" element={<VideoGallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;