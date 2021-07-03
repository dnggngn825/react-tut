import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
		// make sure the handleClick() is bound in the context of 'this'
		this.handleClick = this.handleClick.bind(this);
	}

	// have to bind the method if we use setState
	handleClick() {
		// setState can be called whenever we want to change
		// rather than accessing the state itself
		this.setState((prevState) => {
			if (prevState.count === 10) {
				return {
					count: 0,
				};
			}
			return {
				count: prevState.count + 1,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}>Change!</button>
			</div>
		);
	}
}

export default App;
