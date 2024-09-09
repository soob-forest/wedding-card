function Greeting() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:w-8/12 px-4">
      <div className="text-3xl text-center md:text-left">👰🏻🤵🏻</div>
      <div className="text-xl md:text-2xl font-bold mb-4 text-center">
        이제 서로, 평생 함께 🥂
      </div>
      <div className="text-xs md:text-base mb-8 text-center tracking-widest leading-relaxed">
        평생을 함께 같이 웃을 수 있는 사람을 만났습니다.
        <br />
        <br />
        성격도 성향도 많이 다르지만,
        <br />
        서로의 다름을 이해하고 포용하며
        <br />
        함께 발맞추어 걸어가고자 합니다.
        <br />
        <br />
        그 중요한 첫걸음이 될 결혼식에서,
        <br />
        저희에게 큰 힘이 되어주셨던
        <br />
        소중한 여러분들을 모시고
        <br />
        즐거운 시간을 함께하고 싶습니다.
        <br />
        <br />
        편한 옷차림, 편한 발걸음으로 오셔서
        <br />
        저희의 시작을 많이 축하해주시고
        <br />
        함께 파티를 즐겨주세요😘
      </div>
      <div className="w-full">
        <div className="flex flex-col space-y-1 text-center items-center justify-center text-sm">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">이현욱, 김미자의 말 잘 듣는 아들</span>
            </p>
            <div className="text-center md:text-left">수배👨🏽‍💻</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">조장연, 한선자의 말 안 듣는 딸</span>
            </p>
            <p className="text-center md:text-left">인혜👩🏽‍🏫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
