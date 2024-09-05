function Greeting() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full md:w-8/12 px-4">
      <div className="text-3xl text-center md:text-left">👰🏽🤵🏽</div>
      <div className="text-xl md:text-2xl font-bold mb-4 text-center">
        이제 서로, 평생 함께 🥂
      </div>
      <div className="text-sm md:text-base mb-8 text-center tracking-widest leading-relaxed">
        서로가 마주보며 다져온 사랑을
        <br />
        이제 함께 한 곳을 바라보며
        <br />
        걸어갈 수 있는 큰 사랑으로
        <br />
        키우고자 합니다.
        <br />
        저희 두 사람이 사랑의 이름으로
        <br />
        지켜나갈 수 있도록
        <br />
        앞날을 축복해 주시면
        <br />
        감사하겠습니다.
      </div>
      <div className="w-full">
        <div className="flex flex-col space-y-1 text-center items-center justify-center">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">이현욱, 김미자의 말잘듣는 아들</span>
            </p>
            <div className="text-xl text-center md:text-left">수배👨🏽‍💻</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="flex items-center justify-center md:justify-start">
              <span className="mr-2">조장연, 한선자의 말안듣는 딸</span>
            </p>
            <p className="text-xl text-center md:text-left">인혜👩🏽‍🏫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
