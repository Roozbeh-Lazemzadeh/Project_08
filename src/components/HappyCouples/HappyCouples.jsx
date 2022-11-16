import React from "react";

export default function HappyCouples() {
	return (
		<>
			<div className="gallery_section">
				<div className="gallery_section_container">
					<h1 className="about_title gallery">
						HAPPY <span>COUPLE</span>
					</h1>
					<p className="gallery_text">
						Lorem Ipsum, you need to be sure there isn't anything
						embarrassinghidden in the middle of text.{" "}
					</p>
				</div>

				<div className="gallery_cards">
					<div className="gallery_section_card">
						<div className="gallery_section_main">
							<img src="public/img/img-1.png" />
							<h4 className="jony_text">JONY AND JONILI</h4>
							<p className="some_text">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form
							</p>
							<div className="btn_main">
								<div className="buy_bt">
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
					</div>

					<div className="two-three-wrap gallery_section_card ">
						<div className="gallery_section_main_two">
							<img src="public/img/img-2.png" />
							<h4 className="jony_text">JONY AND JONILI</h4>
							<p className="some_text">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form
							</p>
							<div className="btn_main">
								<div className="buy_bt two">
									<a href="#">Read More</a>
								</div>
							</div>
						</div>

						<div className="gallery_section_main_three">
							<img src="public/img/img-3.png" />
							<h4 className="jony_text">JONY AND JONILI</h4>
							<p className="some_text">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form
							</p>
							<div className="btn_main">
								<div className="buy_bt two">
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
					</div>

					<div className="gallery_section_card">
						<div className="gallery_section_main">
							<img src="public/img/img-4.png" />
							<h4 className="jony_text">JONY AND JONILI</h4>
							<p className="some_text">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form
							</p>
							<div className="btn_main">
								<div className="buy_bt">
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="read_bt gallery">
				<a href="#">Read More</a>
			</div>
		</>
	);
}
