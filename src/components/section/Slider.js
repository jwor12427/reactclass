import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider(props) {
  return (
    <>
    <div id="sliderType" className={`slider__wrap ${props.ponts}`}>
      <div className="slider__inner">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="desc">
                <span>birds</span>
                <h3>For the Birds</h3>
                <p>
                  지금부터 당신에게 들려드릴 조금은 특별한 <br />
                  새들에 대한 이야기 입니다.
                </p>
                <div className="btn">
                  <a href="/">자세히 보기</a>
                  <a href="/" className="black">
                    사이트 보기
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="desc">
                <span>birds</span>
                <h3>For the Birds</h3>
                <p>
                  지금부터 당신에게 들려드릴 조금은 특별한 <br />
                  새들에 대한 이야기 입니다.
                </p>
                <div className="btn">
                  <a href="/">자세히 보기</a>
                  <a href="/" className="black">
                    사이트 보기
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="desc">
                <span>birds</span>
                <h3>For the Birds</h3>
                <p>
                  지금부터 당신에게 들려드릴 조금은 특별한 <br />
                  새들에 대한 이야기 입니다.
                </p>
                <div className="btn">
                  <a href="/">자세히 보기</a>
                  <a href="/" className="black">
                    사이트 보기
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> 
      
    </>
  );
}

export default Slider;
