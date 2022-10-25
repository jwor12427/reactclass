import React from "react";

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">올빼미와 부엉이</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>비슷하지만 서로 다른 올빼미와 부엉이</span>
          <h3>올빼미, 그리고 부엉이</h3>
          <p>비슷하게 생겨서 어느 동물인지 헷갈리는 두 동물을 소개합니다.</p>
          <ul>
            <li>
              <a href="/">올빼미에 대하여</a>
            </li>
            <li>
              <a href="/">부엉이에 대하여</a>
            </li>
            <li>
              <a href="/">올빼미와 부엉이에 차이는?</a>
            </li>
            <li>
              <a href="/">날카로운 발톱의 소유자, 맹금류</a>
            </li>
            <li>
              <a href="/">올빼미의 목은 얼마나 돌아가나요?</a>
            </li>
            <li>
              <a href="/">밤을새는 부엉이</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">귀여운 올빼미</a>
        </div>
        <div className="imgText__img img2">
          <a className="blue" href="/">
            부엉부엉 부엉이
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
