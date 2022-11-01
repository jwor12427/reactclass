/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderInfo = {
	sub: "birds",
	title: "For the Birds",
	desc: "지금부터 당신에게 들려드릴 조금은 특별한 새들에 대한 이야기 입니다.",
	link: "/",
	more: "자세히 보기",
	site: "사이트 보기",
	className: "black",
};

function Slider(props) {
	return (
		<>
			<div
				id="sliderType"
				className={`slider__wrap ${props.ponts}`}
			>
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
								<span>{sliderInfo.sub}</span>
								<h3>{sliderInfo.title}</h3>
								<p>{sliderInfo.desc}</p>
								<div className="btn">
									<a href={sliderInfo.link}>{sliderInfo.more}</a>
									<a
										href={sliderInfo.link}
										className={`${sliderInfo.className}`}
									>
										{sliderInfo.site}
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="desc">
								<span>{sliderInfo.sub}</span>
								<h3>{sliderInfo.title}</h3>
								<p>{sliderInfo.desc}</p>
								<div className="btn">
									<a href={sliderInfo.link}>{sliderInfo.more}</a>
									<a
										href={sliderInfo.link}
										className={`${sliderInfo.className}`}
									>
										{sliderInfo.site}
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="desc">
								<span>{sliderInfo.sub}</span>
								<h3>{sliderInfo.title}</h3>
								<p>{sliderInfo.desc}</p>
								<div className="btn">
									<a href={sliderInfo.link}>{sliderInfo.more}</a>
									<a
										href={sliderInfo.link}
										className={`${sliderInfo.className}`}
									>
										{sliderInfo.site}
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
