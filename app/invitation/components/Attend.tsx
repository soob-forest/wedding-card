"use client";
import { useState } from "react";

import { createClient } from "../../utils/supabase/client";
import { submitAttendance } from "../actions/submit-attendance";

export default function Attend() {
  const supabase = createClient();

  // const [loading, setLoading] = useState(true);
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
      {/* // <>name: {data[0].name}</>
      // <br />
      // <>phone: {data[0].phone}</> */}
      <div className="flex justify-center items-center min-h-screen">
        <section className="con-wrap p-4 w-full max-w-md">
          <h1 className="text-center text-xl font-semibold mb-4">
            참석 여부 전달하기
          </h1>

          <div className="row-wrap mb-4">
            <p className="item-ttl text-lg font-semibold mb-2">
              참석 여부를 선택해 주세요
            </p>
            <div className="inner flex justify-between">
              <div className="item">
                <div className="check_box">
                  <input
                    type="radio"
                    id="visitableRadio"
                    name="attend"
                    className="hidden"
                    checked={visitable}
                    onClick={(e) => setVisitable(true)}
                    onChange={(e) => e}
                  />
                  <label
                    htmlFor="visitableRadio"
                    className="sec-item-icon flex items-center justify-center cursor-pointer border p-2 rounded-lg"
                  >
                    <span className="chk-txt">참석 가능</span>
                  </label>
                </div>
              </div>
              <div className="item">
                <div className="check_box">
                  <input
                    type="radio"
                    id="unVisitableRadio"
                    name="attend"
                    className="hidden"
                    checked={!visitable}
                    onClick={(e) => setVisitable(false)}
                    onChange={(e) => e}
                  />
                  <label
                    htmlFor="unVisitableRadio"
                    className="sec-item-icon flex items-center justify-center cursor-pointer border p-2 rounded-lg"
                  >
                    <span className="chk-txt">참석 불가</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row-wrap mb-4">
            <p className="item-ttl text-lg font-semibold mb-2">1박 ~ 2일</p>
            <div className="inner flex justify-between">
              <div className="check_box">
                <input
                  type="radio"
                  id="accommodation"
                  name="accommodation"
                  className="hidden"
                  checked={accommodation}
                  onClick={(e) => setAccommodation(true)}
                  onChange={(e) => e}
                />
                <label
                  htmlFor="accommodation"
                  className="sec-item-icon flex items-center justify-center cursor-pointer border p-2 rounded-lg"
                >
                  <span className="chk-txt">예쓰</span>
                </label>
              </div>
              <div className="check_box">
                <input
                  type="radio"
                  id="notAccommodation"
                  name="accommodation"
                  className="hidden"
                  checked={!accommodation}
                  onClick={(e) => setAccommodation(false)}
                  onChange={(e) => e}
                />
                <label
                  htmlFor="notAccommodation"
                  className="sec-item-icon flex items-center justify-center cursor-pointer border p-2 rounded-lg"
                >
                  <span className="chk-txt">높</span>
                </label>
              </div>
            </div>
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
          <div className="row-wrap personal-info mb-4">
            <p className="item-ttl text-lg font-semibold mb-2">
              개인정보 수집 및 이용 동의
              <span className="text-red-500 ml-1">(필수)</span>
            </p>
            <p className="info-txt text-sm text-gray-600 mb-2">
              참석여부 전달을 위한 개인정보 수집 및 이용에 동의해 주세요.
              <br />
              · 제공 받는 자 : 모바일 청첩장 주문자 (신랑, 신부측)
              <br />
              · 이용 목적 : 행사 참석여부 확인
              <br />
              · 제공 항목 : 성함, 대표 연락처, 동행인원, 식사여부 중 제공받는
              정보에 한함
              <br />
              · 보유 기간 : 모바일 청첩장 만료시까지
              <br />* 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
              동의 거부 시 참석여부 서비스 이용이 불가합니다.
            </p>
            <div className="check-wrap flex items-center">
              <input type="checkbox" id="agree" className="hidden" />
              <label
                htmlFor="agree"
                className="basic-checkbox flex items-center cursor-pointer"
              >
                <span className="border border-gray-300 p-2 rounded-lg mr-2"></span>
                <span className="label-text">수집 및 이용에 동의합니다.</span>
              </label>
            </div>
          </div>
        </section>
      </div>
      {/* <button formAction={submitAttendance}>제출의사 전달</button> */}
      <button
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
    </>
  );
}
