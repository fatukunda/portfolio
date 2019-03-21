import React from "react";
import Icon from "./Icon";
import "./style/social.css";

const SocialIcons = () => {
	return (
		<div className="text-center mt-4 social">
			<Icon className="fab fa-github-square fa-2x mr-2" link="https://github.com/fatukunda" />
			<Icon className="fab fa-gitlab fa-2x mr-2" link="https://gitlab.com/fatukunda" />
			<Icon className="fab fa-linkedin fa-2x mr-2" link="https://www.linkedin.com/in/frank-atukunda/" />
			<Icon className="fab fa-twitter-square fa-2x mr-2" link="https://twitter.com/fatukunda" />
			<Icon className="fab fa-facebook fa-2x mr-2" link="https://www.facebook.com/fatukunda" />
			<hr />
		</div>
	);
};
export default SocialIcons;
