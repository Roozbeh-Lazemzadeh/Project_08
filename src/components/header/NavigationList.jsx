import React from "react";

export default function NavigationList() {
	const ulObj = [
		{
			href: "index.html",
			span: "HOME",
		},
		{
			href: "the-wedding.html",
			span: "THE WEDDING",
		},
		{
			href: "wedding-planner.html",
			span: "WEDDING PLANNER",
		},
		{
			href: "blog.html",
			span: "BLOG",
		},
		{
			href: "contact.html",
			span: "CONTACT",
		},
	];
	return (
		<div className="custom_menu">
			<ul>
				{ulObj.map((item) => {
					return (
						<li>
							<a href={item.href}>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
								<span className="padding_15">{item.span}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
