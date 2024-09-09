const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <img src="메인사진.jpg" alt="Main" className="w-full h-full" />
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
    </div>
  );
};

export default Intro;
