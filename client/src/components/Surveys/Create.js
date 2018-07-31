import React, { Component } from 'react';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            title: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        const nextState = this.state;
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/api/survey/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title
            })
        });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    title
                    <input
                        name='title'
                        type='string'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Create;
