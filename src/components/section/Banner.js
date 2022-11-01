/** @format */

import React from "react";

const bannerTitle = {
	title: "새의 언어",
	desc: "더 많고, 다양한 새들의 이야기가 당신을 기다리고 있습니다.",
	link: "/",
	linkDesc: "What It's Like To Be A Bird",
	span: "이 달의 이야기",
};

function Banner(props) {
	return (
		<section
			id="bannerType"
			className={`banner__wrap ${props.fonts}`}
		>
			<h2 className="blind">배너</h2>
			<div className="banner__inner">
				<h3 className="title">{bannerTitle.title}</h3>
				<p className="desc">
					{bannerTitle.desc}
					<a
						href={bannerTitle.link}
						title="페이지 이동"
					>
						{bannerTitle.linkDesc}
					</a>
				</p>
				<span className="small">{bannerTitle.span}</span>
			</div>
		</section>
	);
}

export default Banner;
