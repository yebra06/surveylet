import React, { Component } from 'react';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			test: null
		};
	}

	componentDidMount() {
		fetch('/api/test')
		    .then(res => res.json())
		    .then(data => this.setState({ data: data.data }));
	}

	render() {
		return (
			<div className="App">
				{ this.state.data ? <h1>hi {this.state.data}</h1> : <h1>Nothing here</h1> }
			</div>
		);
	}
};
