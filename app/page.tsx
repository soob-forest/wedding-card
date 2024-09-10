"use client";
import React, { useEffect } from "react";
import Greeting from "./invitation/components/Greeting";
import Intro from "./invitation/components/Intro";
import Gallery from "./invitation/components/Gallery";
import { Way } from "./invitation/components/Way";
import Attend from "./invitation/components/Attend";
import SoobAccount from "./invitation/components/SoobAccount";
import JJooAccount from "./invitation/components/JJooAccount";
import Gallery2 from "./invitation/components/Gallery2";
import Aos from "aos";

export default function Page() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-pink-200 bg-opacity-10">
      {/*메인 소개*/}
      <section className="flex flex-col items-center justify-center h-full w-full mb-20">
        <Intro />
      </section>

      <hr className="border-t-2 border-gray-300 mb-10" />

      {/*인사말*/}
      <section
        className="flex flex-col items-center justify-center h-full w-full mb-20"
        data-aos="fade-up"
      >
        <Greeting />
      </section>

      <hr className="border-t-2 border-gray-300 mb-10" />

      {/*갤러리, 호주 / 일상 / 스튜디오 탭 나누기*/}
      <section className="flex flex-col items-center justify-center h-full w-full mb-20">
        <Gallery2 />
      </section>

      <hr className="border-t-2 border-gray-300 mb-10" />

      {/*오는 방법 카카오 네비 바로연결 ( 필수는 아님 )* 주소복사*/}
      <section
        className="flex flex-col items-center justify-center h-full w-full mb-20"
        data-aos="fade-up"
      >
        <Way />
      </section>

      <hr className="border-t-2 border-gray-300 mb-10" />

      {/*참석여부 & 숙박여부 즐거운 날이니 오래 즐겼으면 좋겠습니다. 숙박 안하더라도*/}
      <section
        className="flex flex-col items-center justify-center h-full w-full mb-20"
        data-aos="fade-up"
      >
        <Attend />
      </section>

      <hr className="border-t-2 border-gray-300 mb-10" />

      {/*마음 전할 곳 토스로 보내기 가능한지, 계좌번호 복사 기능*/}
      <section className="flex items-center justify-center h-full w-full">
        <div
          className="flex flex-col items-center justify-center h-full w-8/12"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="text-xl md:text-2xl font-bold mb-4 text-center">
            🤑수배, 인혜 응원하기💸
          </div>

          <SoobAccount />
          <JJooAccount />
          <div className="text-base md:text-base mb-8 text-center tracking-widest leading-relaxed mt-5">
            응원해주시는 마음,
            <br />
            살림에 크게 보태겠습니다💪
          </div>
        </div>
      </section>
    </div>
  );
}
