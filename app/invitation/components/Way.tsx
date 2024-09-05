import React from "react";
import KakaoMap from "./KakaoMap";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

export const Way = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:w-8/12 px-4">
      <div className="text-3xl text-center md:text-left">🛣️</div>
      <div className="px-5 py-1 sec-tit text-2xl font-bold mb-2 text-center md:text-left rounded-lg">
        오시는길
      </div>
      <KakaoMap />
      <div className="flex flex-col items-center justify-center text-base md:text-xl text-center tracking-normal">
        <p>충북 청주시</p>
        <p>청원구 새터로176번길 157-1</p>
        <p>그리너리웨딩 </p>
      </div>
      <Button
        type="submit"
        size="sm"
        className="px-3 mt-1"
        onClick={() => {
          navigator.clipboard.writeText(
            "충북 청주시 청원구 새터로176번길 157-1"
          );
        }}
      >
        <span className="sr-only">Copy</span>
        <CopyIcon className="h-4 w-4" /> 주소복사
      </Button>
    </div>
  );
};
