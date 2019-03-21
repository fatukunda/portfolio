import React from "react";
import "./style/Header.css";
import logo from "../assets/images/frank.jpg";

const Header = () => {
	return (
		<div className="Header text-center">
			<img src={logo} alt="frank" className="img-fluid mx-auto d-block" />
			<h3 className="text-uppercase lead mt-4">Frank Atukunda</h3>
			<h5 className="lead">Full-Stack JavaScript Developer</h5>
			<hr />
		</div>
	);
};
export default Header;
