import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid">
					<div className="row">
						<SideBar />
						<Route exact path="/" component={Main} />
						<Route path="/portfolio" component={Portfolio} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
