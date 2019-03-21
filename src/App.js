import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Main from './components/Main';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<SideBar />
          <Main/>
				</div>
			</div>
		);
	}
}

export default App;
