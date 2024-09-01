"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState, useRef } from "react";

function Gallery() {
  const categories = [
    {
      name: "일상",
      images: [
        "스냅/30.jpg",
        "스냅/22.jpg",
        "스냅/23.jpg",
        "스냅/24.jpg",
        "스냅/25.jpg",
        "스냅/26.jpg",
      ],
    },
    {
      name: "호주",
      images: [
        "호주/1.jpg",
        "호주/3.jpg",
        "호주/4.jpg",
        "호주/2.jpg",
        "호주/5.jpg",
      ],
    },
    {
      name: "스냅",
      images: [
        "스냅/1.jpg",
        "스냅/2.jpg",
        "스냅/3.jpg",
        "스냅/4.jpg",
        "스냅/5.jpg",
        "스냅/6.jpg",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setEndX(e.clientX);
    handleSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setEndX(e.changedTouches[0].clientX);
    handleSlide();
  };

  const handleSlide = () => {
    const distance = startX - endX;
    const threshold = 50; // 슬라이드가 발생할 최소 거리 설정

    if (distance > threshold) {
      showNext();
    } else if (distance < -threshold) {
      showPrevious();
    }
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedCategory.images.length - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < selectedCategory.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-8/12">
      <div className="text-2xl font-bold mb-4">갤러리</div>
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-4 py-2 rounded ${
              selectedCategory.name === category.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <Carousel>
        <CarouselContent className="flex w-full">
          {selectedCategory.images.map((src, index) => (
            <CarouselItem
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <img
                src={src}
                className="w-full h-64 object-contain max-w-md cursor-pointer"
                onClick={() => openModal(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <button
            className="absolute top-2 right-2 text-white text-2xl z-50"
            onClick={closeModal}
          >
            &times;
          </button>
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={scrollContainerRef}
          >
            <div
              className="absolute flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {selectedCategory.images.map((src, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt="Full Size"
                    className="max-h-screen object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-2 text-white text-2xl z-50"
            onClick={showPrevious}
          >
            &#8249;
          </button>
          <button
            className="absolute right-2 text-white text-2xl z-50"
            onClick={showNext}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
