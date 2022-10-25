import React from "react";

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너</h2>
      <div className="banner__inner">
        <h3 className="title">새의 언어</h3>
        <p className="desc">
          더 많고, 다양한 새들의 이야기가 당신을 기다리고 있습니다.
          <a href="/" title="페이지 이동">
            What It's Like To Be A Bird
          </a>
        </p>
        <span className="small">이 달의 이야기</span>
      </div>
    </section>
  );
}

export default Banner;
