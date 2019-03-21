import React from "react";
import "./style/main.css";

const Main = () => {
	return (
		<div className="col-md-9 main">
			<div className="intro">
				<h2 className="display-4">Hi, I'm Frank,</h2>
				<h3 className="lead">A full-stack Javascript developer specialized in both front and back-end.</h3>
			</div>
			<div className="details">
				<button className="btn text-white">Portfolio</button>
				<button className="btn text-white">Skillset</button>
			</div>
		</div>
	);
};
export default Main;
