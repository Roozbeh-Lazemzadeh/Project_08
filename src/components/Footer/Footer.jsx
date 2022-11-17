import React from "react";
import footer_logo from "/img/footer-logo.png";
import map_icon from "/img/map-icon.png";
import call_icon from "/img/call-icon.png";
import mail_icon from "/img/mail-icon.png";

export default function Footer() {
	return (
		<>
			<div className="footer_section">
				<div className="footer_logo">
					<a href="index.html">
						<img src={footer_logo} />
					</a>
				</div>
				<h1 className="contact_text">
					<a href="#">Contact Us</a>
				</h1>
				<div className="contact_main">
					<ul className="contact_main_ul">
						<li>
							<a href="index.html">
								<img src={map_icon} />
								<span className="padding_sides">Location</span>
							</a>
						</li>
						<li>
							<a href="index.html">
								<img src={call_icon} />
								<span className="padding_sides">Call +01 1234567890</span>
							</a>
						</li>
						<li id="last_child">
							<a href="index.html">
								<img src={mail_icon} />
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
