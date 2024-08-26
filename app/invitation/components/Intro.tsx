const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center h-full w-8/12">
        <div className="relative no-event photo mb-6">
          <div className="w-full flex items-start text-2xl">10月 12日</div>
          <img src="스냅/30.jpg" alt="Main" className="w-full max-w-md" />
          <div className="absolute inset-0 bottom-[5px]">
            <video
              className="w-full h-full object-cover mix-blend-screen max-w-md"
              playsInline
              autoPlay
              muted
              loop
              poster="http://d1md7xbmo5297u.cloudfront.net/resource/image/nothing.png"
            >
              <source src="https://d1md7xbmo5297u.cloudfront.net/resource/video/눈송이.webm" />
            </video>
          </div>
        </div>
        <div className="text-center">
          <p className="p1 mb-4 text-base">
            <span className="vs-span font-semibold">이수배</span>
            <span className="vs-span bar mx-2">|</span>
            <span className="vs-span font-semibold">조인혜</span>
          </p>
          <p className="text-lg font-extrabold">
            토요일 오후 5시 00분
            <br />
            청주 그리너리 웨딩
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
