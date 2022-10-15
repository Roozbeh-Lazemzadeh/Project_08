import React from "react";

export default function SocialIcons() {
	const socialObj = [
		{
			imgSrc: "./src/assets/img/fb-icon.png",
		},
		{
			imgSrc: "./src/assets/img/twitter-icon.png",
		},
		{
			imgSrc: "./src/assets/img/linkedin-icon.png",
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

// <li>
// 	<a href="index.html">
// 		<img src="./src/assets/img/twitter-icon.png" />
// 	</a>
// </li>
// <li>
// 	<a href="index.html">
// 		<img src="./src/assets/img/linkedin-icon.png" />
// 	</a>
// </li>
