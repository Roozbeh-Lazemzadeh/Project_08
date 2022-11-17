import React from "react";
import fb_icon from "/img/fb-icon.png";
import twitter_icon from "/img/twitter-icon.png";
import linkedin_icon from "/img/linkedin-icon.png";

export default function SocialIcons() {
	const socialObj = [
		{
			imgSrc: fb_icon,
		},
		{
			imgSrc: twitter_icon,
		},
		{
			imgSrc: linkedin_icon,
		},
	];
	return (
		<div className="social_icon">
			<ul>
				{socialObj.map(({ imgSrc }) => {
					return (
						<li>
							<a href="index.html">
								<img src={imgSrc} />
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
