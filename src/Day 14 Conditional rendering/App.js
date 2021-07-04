import React from "react";
import Conditional from "./Conditional";

// App should be the one that handle the conditional rendering

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
		};
	}


	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 1500);
	}

	render() {
		return (
			<div>
                <h1>Navbar</h1>
                {this.state.isLoading === true? 
                <h1>Loading...</h1> : 
                <Conditional />}
                <h1>Footer</h1>
			</div>
		);
	}
}

export default App;
