import React from "react";
import call_icon from "/img/call-icon.png";
import mail_icon from "/img/mail-icon.png";

export default function ContactSection() {
	const contactObj = [
		{
			imgSrc: call_icon,
			spanName: "Call +01 1234567890",
		},
		{
			imgSrc: mail_icon,
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
