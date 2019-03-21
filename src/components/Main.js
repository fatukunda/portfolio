import React from "react";
import { Link } from "react-router-dom";
import "./style/main.css";

const Main = () => {
	return (
		<div className="col-md-9 main">
			<div className="intro">
				<h2 className="display-4">Hi, I'm Frank,</h2>
				<h3 className="lead">A full-stack Javascript developer specialized in both front and back-end.</h3>
			</div>
			<div className="details">
				<Link to="/portfolio">
					<button className="btn text-white">Portfolio</button>
				</Link>
				<Link to="/skillset">
					<button className="btn text-white">Skillset</button>
				</Link>
			</div>
		</div>
	);
};
export default Main;
