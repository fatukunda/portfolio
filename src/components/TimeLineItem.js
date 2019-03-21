import React from "react";
import "./style/TimeLineItem.css";

const TimeLineItem = ({ link, project, period, description, image }) => {
	return (
		<li className="timeLineItem">
			<h4 className="lead">
				{project} - <span>{period}</span>
			</h4>
			<p>{description}</p>
			<a href={link} rel="noopener noreferrer">
				<img src={image} alt="project" />
			</a>
		</li>
	);
};
export default TimeLineItem;
