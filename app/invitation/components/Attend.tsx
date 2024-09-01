"use client";
import { useState } from "react";

import { createClient } from "../../utils/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { isValidPhoneNumber } from "@/app/utils/validator";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Attend() {
  const supabase = createClient();

  const [visitable, setVisitable] = useState<boolean>(true);
  const [accommodation, setAccommodation] = useState<boolean>(true);
  const [name, setName] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [comment, setComment] = useState<string | undefined>(undefined);

  console.log("visitable:", visitable);
  console.log("accommodation:", accommodation);
  console.log("name:", name);
  console.log("phone:", phone);
  console.log("comment:", comment);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
    if (!isValidPhoneNumber(phone ?? "1")) {
      // 여기서 폰 번호가 유효하지 않다면 추가적인 로직을 수행할 수 있습니다.
      console.log("잘못된 형식의 휴대폰 번호입니다.");
      setIsAlertOpen(true); // AlertDialog를 열도록 설정
      setAlertMessage(`잘못된 형식의 휴대폰 번호입니다. (${phone})`);
      return;
    }

    const { error } = await supabase.from("attendances").insert({
      visitable,
      accommodation,
      name,
      phone,
      comment,
    });

    if (error?.code === "23505") {
      // 이미 참석 여부가 등록되어 있는 경우
      console.log("이미 참석 여부를 등록 함");
      setIsAlertOpen(true); // AlertDialog를 열도록 설정
      setAlertMessage(`이미 참석 여부를 등록하셨습니다. (${name} / ${phone})`);
    } else {
      // 성공적으로 등록되었거나 다른 에러가 발생한 경우
      setIsDialogOpen(false); // Dialog를 닫음
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <section className="con-wrap p-4 w-max">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger
              className={` px-4 py-2 rounded text-white bg-gray-500 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
              onClick={() => {
                setIsDialogOpen(true);
              }}
            >
              <div className="text-2xl">참석 정보 입력하기</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md overflow-y-scroll max-h-screen">
              <DialogHeader>
                <DialogTitle>오실건가요?</DialogTitle>
              </DialogHeader>
              <div className="row-wrap mb-4">
                <p className="item-ttl text-lg font-semibold mb-2">
                  참석 여부를 선택해 주세요
                </p>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="visitableRadio"
                      name="attend"
                      value="visitableRadio"
                      className="hidden peer"
                      checked={visitable}
                      onClick={(e) => setVisitable(true)}
                      onChange={(e) => e}
                      required
                    />
                    <label
                      htmlFor="visitableRadio"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">참석</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="unVisitableRadio"
                      name="attend"
                      className="hidden peer"
                      value="unVisitableRadio"
                      checked={!visitable}
                      onClick={(e) => setVisitable(false)}
                      onChange={(e) => e}
                    />
                    <label
                      htmlFor="unVisitableRadio"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">불참</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="row-wrap mb-4">
                <p className="item-ttl text-lg font-semibold mb-2">1박 ~ 2일</p>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="radio"
                      id="accommodation"
                      name="accommodation"
                      className="hidden peer"
                      checked={accommodation}
                      onClick={(e) => setAccommodation(true)}
                      onChange={(e) => e}
                      required
                    />
                    <label
                      htmlFor="accommodation"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">예쓰</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="notAccommodation"
                      name="notAccommodation"
                      className="hidden peer"
                      value="notAccommodation"
                      checked={!accommodation}
                      onClick={(e) => setAccommodation(false)}
                      onChange={(e) => e}
                    />
                    <label
                      htmlFor="notAccommodation"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">노옵</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="row-wrap mb-4">
                <p className="item-ttl text-lg font-semibold mb-2">
                  성함<span className="text-red-500 ml-1">(필수)</span>
                </p>
                <div className="inner">
                  <div className="item w-full">
                    <input
                      id="name"
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-lg"
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row-wrap mb-4">
                <p className="item-ttl text-lg font-semibold mb-2">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  휴대폰 번호('-'는 제외하고 입력해주세요)
                  <span className="text-red-500 ml-1">(필수)</span>
                </p>
                <div className="inner">
                  <div className="item w-full">
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded-lg"
                      value={phone || ""}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row-wrap mb-4">
                <p className="item-ttl text-lg font-semibold mb-2">
                  추가 전달 사항
                </p>
                <div className="inner">
                  <textarea
                    placeholder="추가적으로 주최자에게 전달하고 싶은 내용을 작성해 주세요."
                    className="w-full border border-gray-300 p-2 rounded-lg h-32"
                    value={comment || ""}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button type="button" variant="default" onClick={handleSubmit}>
                  <div className="item-ttl text-lg font-semibold">
                    참석 의사 전달
                  </div>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>참석 여부 등록 실패</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription className="text-red-500 ml-1">
                {alertMessage}
              </AlertDialogDescription>
              <AlertDialogAction onClick={() => setIsAlertOpen(false)}>
                확인
              </AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </div>
    </>
  );
}
