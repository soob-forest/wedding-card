"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { useState } from "react";
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

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <CarouselContent>
          {selectedCategory.images.map((src, index) => (
            <CarouselItem key={index} className="basis-1/2 flex justify-center">
              <img
                src={src}
                className="w-full h-auto max-w-md cursor-pointer"
                onClick={() => openModal(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-center mt-4">
        이미지를 클릭하시면 확대보기가 가능합니다.
      </p>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <button
            className="absolute top-2 right-2 text-white text-2xl z-50"
            onClick={closeModal}
          >
            &times;
          </button>
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
          <div className="relative w-full h-full overflow-hidden">
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
                    className="max-h-screen max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
