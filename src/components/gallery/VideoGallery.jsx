import React from "react";

const VideoGallery = () => {
  const videos = [
    "https://www.youtube.com/embed/RewjRXAdA-o?si=RV-jKguIjuw7gelu",
    "https://www.youtube.com/embed/-grmHorSFWs?si=6G5o4r9JRiY_DzrG",
    "https://www.youtube.com/embed/B1VpO56XK3s?si=prneE6A5MhoVbov5",
    "https://www.youtube.com/embed/RewjRXAdA-o?si=RV-jKguIjuw7gelu",
    "https://www.youtube.com/embed/-grmHorSFWs?si=6G5o4r9JRiY_DzrG",
    "https://www.youtube.com/embed/B1VpO56XK3s?si=prneE6A5MhoVbov5",
    "https://www.youtube.com/embed/RewjRXAdA-o?si=RV-jKguIjuw7gelu",
    "https://www.youtube.com/embed/-grmHorSFWs?si=6G5o4r9JRiY_DzrG",
    "https://www.youtube.com/embed/B1VpO56XK3s?si=prneE6A5MhoVbov5",
  ];

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((src, index) => (
          <iframe
            key={index}
            src={src}
            title={`Video ${index + 1}`}
            className="w-full h-64 rounded-lg shadow-lg"
            allowFullScreen
          />
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
