import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>남극의 신사 펭귄🐧</h2>
      <p>가장 유명한 두 펭귄, 황제펭귄과 아델리펭귄을 소개합니다.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">아델리펭귄(Adélie Penguin)</h3>
          <p className="image__desc">
            아델리펭귄은 작고 귀여운 외모와 달리 성격이 나쁘기로 유명합니다.
            호기심이 많고 겁이 없어서 공격성이 높은 펭귄입니다. 아델리펭귄은
            집을 짓기위해서 다른펭귄들의 조약돌을 도둑질 하기도 한답니다.
          </p>
          <a className="image__btn" href="/" title="자세히보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">황제펭귄(Emperor penguin)</h3>
          <p className="image__desc">
            황제펭귄은 지구상에 현존하는 펭귄중 가장 큰 펭귄입니다. 까만
            턱시도를 입은 듯한 모습과 추워서 항상 차렷 자세로 있는 것 때문에
            별명이 남극의 신사로 불리운답니다.
          </p>
          <a className="image__btn black" href="/" title="자세히보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
