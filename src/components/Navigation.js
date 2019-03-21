import React from "react";
import { Link } from "react-router-dom";
import "./style/navigation.css";

const Navigation = () => {
	return (
		<nav className="navigation mt-4">
			<div>
				<ul className="links">
					<Link to="/portfolio">
						<li>Portfolio</li>
					</Link>
					<Link to="/resume">
						<li>Resume</li>
					</Link>
					<Link to="/skillset">
						<li>Skillset</li>
					</Link>
					<Link to="contact">
						<li>Contact Me</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
