import React from "react";
import Header from "./Header";
import SocialIcons from "./SocialIcons";
import Navigation from "./Navigation";
import "./style/Sidebar.css";

const SideBar = () => {
	return (
		<div className="col-md-3 sidebar">
			<Header />
			<SocialIcons />
			<Navigation />
		</div>
	);
};
export default SideBar;
