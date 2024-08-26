"use client";
import { useState } from "react";

import { createClient } from "../../utils/supabase/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

  return (
    <>
      <div className="flex justify-center items-center">
        <section className="con-wrap p-4 w-full max-w-md">
          <Dialog>
            <DialogTrigger
              className={`px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              참석 여부 전달하기
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
                  대표 연락처<span className="text-red-500 ml-1">(필수)</span>
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
              {/* <div className="flex justify-center items-center">
                <button
                  className={`px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                  onClick={async () => {
                    const { error } = await supabase
                      .from("attendances")
                      .insert({
                        visitable,
                        accommodation,
                        name,
                        phone,
                        comment,
                      });
                    console.log(error);
                  }}
                >
                  참석 의사 전달
                </button>
              </div> */}
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="default"
                    onClick={async () => {
                      const { error } = await supabase
                        .from("attendances")
                        .insert({
                          visitable,
                          accommodation,
                          name,
                          phone,
                          comment,
                        });
                      console.log(error);
                    }}
                  >
                    <div className="item-ttl text-lg font-semibold">
                      참석 의사 전달
                    </div>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* <h1 className="text-center text-xl font-semibold mb-4">
            참석 여부 전달하기
          </h1>

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
              대표 연락처<span className="text-red-500 ml-1">(필수)</span>
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
          </div> */}
        </section>
      </div>
      {/* <div className="flex justify-center items-center">
        <button
          className={`px-4 py-2 rounded text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
          onClick={async () => {
            const { error } = await supabase.from("attendances").insert({
              visitable,
              accommodation,
              name,
              phone,
              comment,
            });
            console.log(error);
          }}
        >
          참석 의사 전달
        </button>
      </div> */}
    </>
  );
}
