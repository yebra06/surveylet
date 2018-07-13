import React, { Component } from 'react';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = { test: null };
	}

	componentDidMount() {
		fetch('/api/test')
		    .then(res => res.json())
		    .then(data => this.setState({ data: data.data }));
	}

	render() {
		return (
			<div>
				<h1>hi {this.state.data}</h1>
			</div>
		);
	}

};
