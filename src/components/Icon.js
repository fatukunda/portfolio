import React from "react";

const Icon = ({ className, link }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<i className={className} />
		</a>
	);
};
export default Icon;
