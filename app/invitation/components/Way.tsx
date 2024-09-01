import React from "react";
import KakaoMap from "./KakaoMap";

export const Way = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-8/12">
      <div className="sec-tit text-2xl font-bold mb-2">오시는길</div>
      <KakaoMap />
      <div className="text-base tracking-wider">그리너리웨딩</div>
      <div className="text-xl mb-8 text-center tracking-normal">
        <p>충북 청주시 청원구 새터로176번길 157-1</p>
      </div>
    </div>
  );
};
