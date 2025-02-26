import React, { useState } from "react";

const PhotoGallery = () => {
  const photos = [
    "/src/assets/img1.jpg",
    "/src/assets/img2.jpg",
    "/src/assets/img3.jpg",
    "/src/assets/img4.jpg",
    "/src/assets/img5.jpg",
    "/src/assets/img6.jpg",
    "/src/assets/img7.jpg",
    "/src/assets/img8.jpg",
    "/src/assets/image.jpeg",
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openLightbox(src)}
          >
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;