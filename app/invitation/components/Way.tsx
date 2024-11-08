import React, { useEffect } from "react";
import KakaoMap from "./KakaoMap";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Way = () => {
  const { toast } = useToast();

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
          toast({
            description: "주소가 복사되었습니다.",
          });
        }}
      >
        <span className="sr-only">Copy</span>
        <CopyIcon className="h-4 w-4" /> 주소복사
      </Button>
      <p className="px-5 py-1 sec-tit text-2xl font-bold mb-2 text-center md:text-left rounded-lg mt-16 mb-5">
        🚘운전 및 주차정보🅿
      </p>
      <div className="text-base md:text-base mb-8 text-center tracking-widest leading-relaxed">
        진입로가 협소하고 급격한 유턴이 요구되어
        <br />
        운전고수만 진입이 가능합니다🤪
        <br />
        <br />
        주차요원분께서 계실 예정이니
        <br />
        안내를 잘 따라주세요.
        <br />
        <br />
        ⭐중요!!!
        <br />
        Medium Wedding인 관계로
        <br />
        주차 공간이 협소 할 수 있습니다.
        <br />
        삼삼오오 모여서 와주시면 좋아요😝
      </div>
    </div>
  );
};
