"use client";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

function Gallery2() {
  const breakpoints = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  };

  const images = [
    "호주/1.jpg",
    "호주/3.jpg",
    "호주/4.jpg",
    "호주/2.jpg",
    "호주/5.jpg",
    "호주/6.jpg",
    "호주/7.jpg",
    "호주/8.jpg",
    "호주/9.jpg",
    "호주/10.jpg",
    "호주/11.jpg",
    "호주/12.jpg",
    "호주/13.jpg",
    "호주/14.jpg",
    "호주/15.jpg",
    "호주/16.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  SwiperCore.use([Navigation, Pagination]);
  let swiperRef = useRef<SwiperCore>();

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
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-3xl">📷</div>
      <div className="text-2xl font-bold mb-4">갤러리</div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-32 md:w-52 h-32 md:h-52 cursor-pointer bg-black bg-opacity-75"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            initialSlide={currentIndex}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.snapIndex);
            }}
            navigation
            breakpoints={breakpoints}
            className="w-full h-full flex items-center justify-center bg-black bg-opacity-75"
          >
            <Button
              className="absolute top-5 right-5 bg-black text-white text-2xl z-50"
              onClick={closeModal}
            >
              닫기
            </Button>
            {images?.map((src, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex justify-center items-center">
                    <img
                      src={src}
                      alt="Full Size"
                      className="max-h-screen object-contain object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <Button
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
          </button> */}
        </div>
      )}
    </div>
  );
}

export default Gallery2;
