import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid">
					<div className="row">
						<SideBar />
						<Route exact path="/" component={Main} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
