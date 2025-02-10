import React from "react";

const DignitariesGallery = () => {
  const dignitariesImages = [
    "/src/assets/logo.jpg",
    "/src/assets/img1.jpg",
    "/src/assets/img2.jpg",
    "/src/assets/img4.jpg",
    "/src/assets/img6.jpg",
    "/src/assets/img8.jpg",
    "/images/dignitary2.jpg",
    "/images/dignitary3.jpg",
  ];

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Visit of Dignitaries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dignitariesImages.map((src, index) => (
          <img key={index} src={src} alt={`Dignitary ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
        ))}
      </div>
    </section>
  );
};

export default DignitariesGallery;
