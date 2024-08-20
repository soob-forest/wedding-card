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
import Greeting from "./components/Greeting";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import { Way } from "./components/Way";
import Attend from "./components/Attend";

export default function page() {
  return (
    <div>
      {/*메인 소개*/}
      <section className="h-screen">
        <Intro />
      </section>
      {/*인사 사진*/}
      <section></section>
      {/*인사말*/}
      <section className="flex flex-col items-center justify-center h-full w-full pb-40">
        <Greeting />
      </section>

      {/*갤러리, 호주 / 일상 / 스튜디오 탭 나누기*/}
      <section className="flex flex-col items-center justify-center h-full w-full pb-40">
        <Gallery />
      </section>

      {/*연락, 카톡으로 연결*/}
      <section></section>

      {/*오는 방법 카카오 네비 바로연결 ( 필수는 아님 )* 주소복사*/}
      <section className="flex flex-col items-center justify-center h-full w-full pb-40">
        <Way />
      </section>

      {/*참석여부 & 숙박여부 즐거운 날이니 오래 즐겼으면 좋겠습니다. 숙박 안하더라도*/}
      <section>
        {/*참석여부*/}
        <Attend />
        {/*숙박여부*/}
      </section>

      {/*메세지 남기기*/}
      <section></section>

      {/*마음 전할 곳 토스로 보내기 가능한지, 계좌번호 복사 기능*/}
      <section></section>
    </div>
  );
}
