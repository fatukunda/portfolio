import React from "react";
import "./style/navigation.css";

const Navigation = () => {
	return (
		<nav className="navigation mt-4">
			<div>
				<ul className="links">
					<a href="#">
						<li>Portfolio</li>
					</a>
					<a href="#">
						<li>Resume</li>
					</a>
					<a href="#">
						<li>Skills</li>
					</a>
					<a href="#">
						<li>Contact Me</li>
					</a>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
