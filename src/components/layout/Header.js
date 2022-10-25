import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Birds <em>Story</em>
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#imageType">남극 소식</a>
            </li>
            <li>
              <a href="#imgTextType">맹금류 이야기</a>
            </li>
            <li>
              <a href="#cardType">친숙한 새들</a>
            </li>
            <li>
              <a href="#bannerType">새로나온 책</a>
            </li>
            <li>
              <a href="#textType">앵무새는 어떤가요</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
