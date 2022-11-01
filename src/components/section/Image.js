/** @format */

import React from "react";

const imageTitle = {
	title: "남극의 신사 펭귄🐧",
	desc: "가장 유명한 두 펭귄, 황제펭귄과 아델리펭귄을 소개합니다.",
};

const imageText = [
	{
		title: "아델리펭귄(Adélie Penguin)",
		desc: "아델리펭귄은 작고 귀여운 외모와 달리 성격이 나쁘기로 유명합니다. 호기심이 많고 겁이 없어서 공격성이 높은 펭귄입니다. 아델리펭귄은 집을 짓기위해서 다른펭귄들의 조약돌을 도둑질 하기도 한답니다.",
		className: "img1",
		btnclass: "white",
		btnLink: "/",
	},
	{
		title: "황제펭귄(Emperor penguin)",
		desc: "황제펭귄은 지구상에 현존하는 펭귄중 가장 큰 펭귄입니다. 까만 턱시도를 입은 듯한 모습과 추워서 항상 차렷 자세로 있는 것 때문에 별명이 남극의 신사로 불리운답니다.",
		className: "img2",
		btnclass: "black",
		btnLink: "/",
	},
];

const ImageText = ({ title, desc, className, btnclass, btnLink }) => {
	return (
		<article className={`image ${className}`}>
			<h3 className="image__title">{desc}</h3>
			<p className="image__desc">{title}</p>
			<a
				className={`image__btn ${btnclass}`}
				href={btnLink}
				title="자세히보기"
			>
				자세히 보기
			</a>
		</article>
	);
};
function Image(props) {
	return (
		<section
			id="imageType"
			className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
		>
			<h2>{imageTitle.title}</h2>
			<p>{imageTitle.desc}</p>
			<div className={`image__inner ${props.attr[2]}`}>
				{imageText.map((info, index) => (
					<ImageText
						key={index}
						title={info.title}
						desc={info.desc}
						className={info.className}
						btnclass={info.btnclass}
						btnLink={info.btnLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Image;
