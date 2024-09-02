const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <img src="스냅/30.jpg" alt="Main" className="w-full h-full" />
      <div className="absolute top-0 w-full h-full">
        <video
          className="w-full h-full object-cover mix-blend-screen"
          playsInline
          autoPlay
          muted
          loop
          poster="http://d1md7xbmo5297u.cloudfront.net/resource/image/nothing.png"
        >
          <source src="https://d1md7xbmo5297u.cloudfront.net/resource/video/눈송이.webm" />
        </video>
      </div>

      <div className="flex flex-col items-center justify-center h-full w-8/12">
        <div className="text-center">
          <p className="p1 mb-4 text-base">
            <span className="vs-span text-lg">이수배</span>
            <span className="vs-span bar mx-2">|</span>
            <span className="vs-span text-lg">조인혜</span>
          </p>
          <div className="text-2xl">10월 12일 토요일</div>
          <p className="text-xl font-extrabold">
            오후 5시
            <br />
            청주 그리너리 웨딩
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
