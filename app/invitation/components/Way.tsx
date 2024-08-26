import React from "react";

export const Way = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-8/12">
      <div className="sec-tit text-2xl font-bold">오시는길</div>
      <div className="map-area">
        <div className="head mt-2 mb-4">
          <div className="text-base font-mono font-semibold tracking-wider">
            그리너리웨딩
          </div>
          <div className="text-sm mb-8 text-center font-mono tracking-normal">
            <p>충북 청주시 청원구 새터로176번길 157-1</p>
          </div>
        </div>
        <div className="map w-full h-96">
          <div className="relative w-full h-full">
            <a href="https://map.kakao.com/?urlX=605375&urlY=881099&urlLevel=3&itemId=1887757445&q=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&srcid=1887757445&map_type=TYPE_MAP">
              <img className="w-full h-full" src="그리너리맵.png" alt="Map" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
