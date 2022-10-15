import React from "react";

export default function AboutUs({ imgSrc, text }) {
	return (
		<>
			<div className="about_section ">
				<div className="about_section_container">
					<h1 className="about_title">
						About <span>Us</span>
					</h1>
					<div className="about_img">
						<img src={imgSrc} />
					</div>
					<p className="about_text">{text}</p>

					<div className="read_bt">
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
		</>
	);
}
