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
        const { title } = this.state;
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
