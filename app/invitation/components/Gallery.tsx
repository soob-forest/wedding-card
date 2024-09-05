"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

function Gallery() {
  const images = [
    "스냅/30.jpg",
    "스냅/22.jpg",
    "스냅/23.jpg",
    "스냅/24.jpg",
    "스냅/25.jpg",
    "스냅/26.jpg",
    "호주/1.jpg",
    "호주/3.jpg",
    "호주/4.jpg",
    "호주/2.jpg",
    "호주/5.jpg",
    "스냅/1.jpg",
    "스냅/2.jpg",
    "스냅/3.jpg",
    "스냅/4.jpg",
    "스냅/5.jpg",
    "스냅/6.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 모달 열기와 닫기 시 body의 overflow 속성을 조정
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      // 컴포넌트가 언마운트되거나 모달이 닫힐 때 overflow를 자동으로 복원
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

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
    const threshold = 20; // 슬라이드가 발생할 최소 거리 설정

    if (distance > threshold) {
      showNext();
    } else if (distance < -threshold) {
      showPrevious();
    }
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-8/12">
      <div className="text-3xl">📷</div>
      <div className="text-2xl font-bold mb-4">갤러리</div>
      <div className="grid grid-cols-3 gap-1">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-full cursor-pointer bg-black bg-opacity-75"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <Button
            className="absolute top-5 right-5 bg-black text-white text-2xl z-50"
            onClick={closeModal}
          >
            닫기
          </Button>
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
              {images.map((src, index) => (
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
            {"<"}
          </button>
          <button
            className="absolute right-2 text-white text-2xl z-50"
            onClick={showNext}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
