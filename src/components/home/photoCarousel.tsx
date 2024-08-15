// components/photoCarousel.tsx
"use client";
import React, { useState, useEffect } from "react";

const PhotoCarousel: React.FC = () => {
  const images = [
    "/images/double.jpg",
    "/images/centerfold.jpg",
    "/images/15.jpg",
    // Add more image paths as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const goToPrevious = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > minSwipeDistance) {
      goToNext();
    }

    if (touchEnd - touchStart > minSwipeDistance) {
      goToPrevious();
    }
  };

  return (
    <div className="bg-black mx-auto pt-20 text-center">
      <p className="font-bold text-white text-4xl pb-4 "></p>
      <div
        className="relative w-full max-h-full max-w-screen-lg mx-auto overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="w-full object-cover"
        />

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        ></button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        ></button>
      </div>
    </div>
  );
};

export default PhotoCarousel;
