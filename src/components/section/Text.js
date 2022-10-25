import React from "react";

function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span>새롭게 업데이트 된 앵무새에 종류</span>
      <h2 className="mb70">멋쟁이, 따라쟁이 앵무새🦜</h2>
      <div className={`text__inner ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">금강앵무</h3>
          <p className="text__desc">
            금강앵무는 앵무새는 대부분의 매체에서 앵무새 하면 나오는
            앵무새입니다. 깃털색이 화려하며, 크기가 대형종이 속하는 앵무새
            입니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">회색앵무</h3>
          <p className="text__desc">
            회색앵무는 앵무새중 가장 지능이 높다고 알려진 새입니다. 세계에서
            가장 유명한 회색앵무는 이렌느 페퍼버그 박사의 알렉스입니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">왕관앵무</h3>
          <p className="text__desc">
            온순한 성격으로 길들이기 쉬워서 많은 사람들이 앵무새를 처음 접할 때
            많이 추천하는 종 중 하나입니다. 겁이 많고 소심한 것이 특징입니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">코뉴어</h3>
          <p className="text__desc">
            가장 대중적인 앵무새이며, 애교가 많고 사람을 잘 따르는 앵무새 중
            손꼽힙니다. 주로 좁은 곳이나 틈새를 파고 드는 습성이 있습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">장미앵무</h3>
          <p className="text__desc">
            한국에서 많이 키우는 종류 중 하나이며, 화려한 색채 때문에 애완용으로
            인기가 많습니다. 하지만 겁이 많고 예민한 성격에 자주 데리고 놀면
            스트레스를 받습니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">모란앵무</h3>
          <p className="text__desc">
            모란앵무는 성격이 매우 활달하고 호기심이 많아 부리를 써서 탐색하는
            것을 좋아합니다. 주인과 유대감이 매우 깊을 때는 주인의 옆에 꼭 붙어
            있는 것이 특징입니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
