import React from "react";
import KakaoMap from "./KakaoMap";

export const Way = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-8/12">
      <div className="sec-tit text-2xl font-bold mb-2">오시는길</div>
      {/* <div className="map-area"> */}

      {/* <div className="map w-full h-96"> */}
      {/* <div className="relative w-full h-full"> */}
      {/* <a href="https://map.kakao.com/?urlX=605375&amp;urlY=881099&amp;itemId=1887757445&amp;q=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&amp;srcid=1887757445&amp;map_type=TYPE_MAP&amp;from=roughmap">
              <img className="w-full h-full" src="http://t1.daumcdn.net/roughmap/imgmap/68058d05c558b5cd11343d8d4e19d86ce9e246ca525a7b42b277ebf4c7e641b8" width="358" height="238" alt="Map" />
            </a> */}
      <KakaoMap />
      <div className="text-base font-mono font-semibold tracking-wider">
        그리너리웨딩
      </div>
      <div className="text-sm mb-8 text-center font-mono tracking-normal">
        <p>충북 청주시 청원구 새터로176번길 157-1</p>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};
