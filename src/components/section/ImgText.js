/** @format */

import React from "react";
const imgTextTitle = {
	span: "비슷하지만 서로 다른 올빼미와 부엉이",
	title: "올빼미, 그리고 부엉이",
	desc: "비슷하게 생겨서 어느 동물인지 헷갈리는 두 동물을 소개합니다.",
};

const imgTextInfo = [
	{
		aLink: "/",
		desc: "올빼미에 대하여",
	},
	{
		aLink: "/",
		desc: "부엉이에 대하여",
	},
	{
		aLink: "/",
		desc: "올빼미와 부엉이에 차이는?",
	},
	{
		aLink: "/",
		desc: "날카로운 발톱의 소유자, 맹금류",
	},
	{
		aLink: "/",
		desc: "올빼미의 목은 얼마나 돌아가나요?",
	},
	{
		aLink: "/",
		desc: "밤을새는 부엉이",
	},
];
const imgTextBtn = [
	{
		btnLink: "/",
		btnDesc: "귀여운 올빼미",
		btnColor: "none",
		background: "img1",
	},
	{
		btnLink: "/",
		btnDesc: "부엉부엉 부엉이",
		btnColor: "blue",
		background: "img2",
	},
];

const ImgTextInfo = ({ aLink, desc }) => {
	return (
		<li>
			<a href={aLink}>{desc}</a>
		</li>
	);
};

const ImgTextBtn = ({ btnLink, btnDesc, btnColor, background }) => {
	return (
		<div className={`imgText__img ${background}`}>
			<a
				href={btnLink}
				className={`${btnColor}`}
			>
				{btnDesc}
			</a>
		</div>
	);
};

function ImgText({ attr }) {
	return (
		<section
			id="imgTextType"
			className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
		>
			<h2 className="blind">올빼미와 부엉이</h2>
			<div className={`imgText__inner ${attr[3]}`}>
				<div className="imgText__txt">
					<span>{imgTextTitle.span}</span>
					<h3>{imgTextTitle.title}</h3>
					<p>{imgTextTitle.desc}</p>
					<ul>
						{imgTextInfo.map((info, index) => (
							<ImgTextInfo
								key={index}
								aLink={info.aLink}
								desc={info.desc}
							/>
						))}
					</ul>
				</div>
				{imgTextBtn.map((img, index) => (
					<ImgTextBtn
						key={index}
						btnLink={img.btnLink}
						btnColor={img.btnColor}
						btnDesc={img.btnDesc}
						background={img.background}
					/>
				))}
				{/* <div className="imgText__img img1">
					<a href="/">귀여운 올빼미</a>
				</div>
				<div className="imgText__img img2">
					<a
						className="blue"
						href="/"
					>
						부엉부엉 부엉이
					</a>
				</div> */}
			</div>
		</section>
	);
}

export default ImgText;
