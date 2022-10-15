import React from "react";

export default function Footer() {
	return (
		<>
			<div className="footer_section">
				<div className="footer_logo">
					<a href="index.html">
						<img src="./src/assets/img/footer-logo.png" />
					</a>
				</div>
				<h1 className="contact_text">
					<a href="#">Contact Us</a>
				</h1>
				<div className="contact_main">
					<ul className="contact_main_ul">
						<li>
							<a href="index.html">
								<img src="./src/assets/img/map-icon.png" />
								<span className="padding_sides">Location</span>
							</a>
						</li>
						<li>
							<a href="index.html">
								<img src="./src/assets/img/call-icon.png" />
								<span className="padding_sides">Call +01 1234567890</span>
							</a>
						</li>
						<li id="last_child">
							<a href="index.html">
								<img src="./src/assets/img/mail-icon.png" />
								<span className="padding_sides">demo@gmail.com</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="copyright_section">
					<p className="copyright_text">
						Copyright 2022 All Rights Reserved by
						<a href="https://html.design"> Owner of the Website</a>
					</p>
				</div>
			</div>
		</>
	);
}
