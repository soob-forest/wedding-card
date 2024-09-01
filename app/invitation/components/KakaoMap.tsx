export default function KakaoMapEmbed() {
  return (
    <div
      style={{
        font: "12px AppleSDGothicNeo-Regular, dotum, sans-serif",
        letterSpacing: "-1px",
        width: "360px",
        height: "310px",
        color: "#333",
        // position: "relative",
      }}
    >
      <div style={{ height: "240px" }}>
        <a
          href="https://map.kakao.com/?urlX=605375&urlY=881099&itemId=1887757445&q=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&srcid=1887757445&map_type=TYPE_MAP&from=roughmap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="map"
            src="http://t1.daumcdn.net/roughmap/imgmap/68058d05c558b5cd11343d8d4e19d86ce9e246ca525a7b42b277ebf4c7e641b8"
            width="358"
            height="238"
            style={{ border: "1px solid #ccc" }}
            alt="지도"
          />
        </a>
      </div>
      <div
        style={{
          overflow: "hidden",
          padding: "7px 11px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "0px 0px 2px 2px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <a
          href="https://map.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ float: "left" }}
        >
          <img
            src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
            width="72"
            height="16"
            alt="카카오맵"
            style={{ display: "block", width: "72px", height: "16px" }}
          />
        </a>
        <div
          style={{
            float: "right",
            // position: "relative",
            top: "1px",
            fontSize: "11px",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.kakao.com/?from=roughmap&srcid=1887757445&confirmid=1887757445&q=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&rv=on"
            style={{
              float: "left",
              height: "15px",
              paddingTop: "1px",
              lineHeight: "15px",
              color: "#000",
              textDecoration: "none",
            }}
          >
            로드뷰
          </a>
          <span
            style={{
              width: "1px",
              padding: "0",
              margin: "0 8px 0 9px",
              height: "11px",
              verticalAlign: "top",
              // position: "relative",
              top: "2px",
              borderLeft: "1px solid #d0d0d0",
              float: "left",
            }}
          ></span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.kakao.com/?from=roughmap&eName=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&eX=605375&eY=881099"
            style={{
              float: "left",
              height: "15px",
              paddingTop: "1px",
              lineHeight: "15px",
              color: "#000",
              textDecoration: "none",
            }}
          >
            길찾기
          </a>
          <span
            style={{
              width: "1px",
              padding: "0",
              margin: "0 8px 0 9px",
              height: "11px",
              verticalAlign: "top",
              // position: "relative",
              top: "2px",
              borderLeft: "1px solid #d0d0d0",
              float: "left",
            }}
          ></span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=1887757445&itemId=1887757445&q=%EA%B7%B8%EB%A6%AC%EB%84%88%EB%A6%AC%EC%9B%A8%EB%94%A9&urlX=605375&urlY=881099"
            style={{
              float: "left",
              height: "15px",
              paddingTop: "1px",
              lineHeight: "15px",
              color: "#000",
              textDecoration: "none",
            }}
          >
            지도 크게 보기
          </a>
        </div>
      </div>
    </div>
  );
}
