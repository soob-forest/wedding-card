"use client";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Aos from "aos";
import "aos/dist/aos.css";

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
    "스냅/1.jpg",
    "스냅/2.jpg",
    "스냅/3.jpg",
    "스냅/4.jpg",
    "스냅/5.jpg",
    "스냅/6.jpg",
    "스냅/7.jpg",
    "스냅/8.jpg",
    "스냅/9.jpg",
    "스냅/10.jpg",
    "스냅/11.jpg",
    "스냅/12.jpg",
    "스냅/13.jpg",
    "스냅/14.jpg",
    "스냅/15.jpg",
    "스냅/16.jpg",
    "스냅/17.jpg",
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
  const [moreImage, setMoreImage] = useState(false);

  SwiperCore.use([Navigation, Pagination]);
  let swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    Aos.init();
  }, []);

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

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-3xl" data-aos="fade-up">
        📷
      </div>
      <div className="text-2xl font-bold mb-4" data-aos="fade-up">
        갤러리
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 mb-3">
        {images
          .filter((src, index) => {
            if (!moreImage) {
              return index < 15;
            }
            return true;
          })
          .map((src, index) => (
            <div
              key={index}
              className="relative w-24 md:w-52 h-24 md:h-52 cursor-pointer bg-black bg-opacity-75"
              data-aos="flip-left"
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
      {moreImage && (
        <Button
          className="px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          onClick={() => setMoreImage(false)}
        >
          덜보기
        </Button>
      )}
      {!moreImage && (
        <Button
          className="px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          onClick={() => setMoreImage(true)}
        >
          더보기
        </Button>
      )}
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
        </div>
      )}
    </div>
  );
}

export default Gallery2;
