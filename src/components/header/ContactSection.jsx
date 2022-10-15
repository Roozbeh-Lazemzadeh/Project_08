import React from "react";

export default function ContactSection() {
	const contactObj = [
		{
			imgSrc: "./src/assets/img/call-icon.png",
			spanName: "Call +01 1234567890",
		},
		{
			imgSrc: "./src/assets/img/mail-icon.png",
			spanName: "demo@gmail.com",
		},
	];
	return (
		<div className="custom_menu">
			<ul>
				{contactObj.map(({ imgSrc, spanName }) => {
					return (
						<li>
							<a href="index.html">
								<img src={imgSrc} />
								<span className="padding_15 contact">{spanName}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
