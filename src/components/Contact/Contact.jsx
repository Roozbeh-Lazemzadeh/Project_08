import React from "react";
import champage_img from "/img/champage-img.png";

export default function Contact() {
	return (
		<>
			<div className="contact_section">
				<h1 className="contact_title">
					ARE YOU <span style={{ color: "#e83d56" }}>ATTENDING?</span>
				</h1>
				<div className="contact_section_divided">
					<div className="contact_form">
						<input
							type="text"
							className="mail_text"
							placeholder="Name"
							name="text"
						/>
						<input
							type="text"
							className="mail_text"
							placeholder="Email"
							name="text"
						/>
						<input
							type="text"
							className="mail_text"
							placeholder="Phone Number"
							name="text"
						/>
						<textarea
							className="massage-bt"
							placeholder="Massage"
							rows="5"
							id="comment"
							name="Massage"
						></textarea>
						<div className="send_bt">
							<a href="#">SEND</a>
						</div>
					</div>
					<div className="photo_inner">
						<div className="champage_img">
							<img src={champage_img} />
						</div>
						<h2 className="enjoy_text">
							Enjoy <br />
							Marriage
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}
