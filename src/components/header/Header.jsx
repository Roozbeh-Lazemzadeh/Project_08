import React from "react";
import ContactSection from "./ContactSection";
import NavigationList from "./NavigationList";
import SocialIcons from "./SocialIcons";
import logo from "/img/logo.png";
import user_icon from "/img/user-icon.png";
import search_icon from "/img/search-icon.png";
import background from "/img/banner-bg.png";

export default function Header() {
	return (
		<>
			<div className="mobile_devices_header">
				<a className="navbar-brand_mobile" href="index.html">
					<img src={logo} />
				</a>

				<button className="navbar-mobile" type="button">
					<i className="fa fa-bars"></i>
				</button>
			</div>

			<div className="banner-content">
				<div className="banner_section_left">
					<a className="navbar-brand" href="index.html">
						<img src={logo} />
					</a>

					<NavigationList />
					<ContactSection />
					<SocialIcons />
				</div>

				<div
					className="banner_section_right"
					style={{
						backgroundImage: `url(${background})`,
					}}
				>
					<nav className="navbar">
						<div className="hidden"></div>

						<div className="login_icon">
							<img src={user_icon} />
							<span className="span-login">
								<a href="#">Login</a>
							</span>
						</div>
						<div className="search_icon">
							<img src={search_icon} />
						</div>
					</nav>

					<div className="right_content">
						<h1 className="banner_title">
							Wedding <br />
							House
						</h1>
						<p className="banner_text">
							many variations of passages of Lorem Ipsum available, but the
							majority have suffered alteration in some form, by injected
							humour, or randomisedmany variations of passages of Lorem Ipsum
							available, but the majority have suffered alteration in some form,
							by injected humour, or randomised
						</p>

						<a href="contact.html">Contact Us</a>
					</div>
				</div>
			</div>
		</>
	);
}
