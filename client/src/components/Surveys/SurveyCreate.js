import React, { Component } from 'react';

class SurveyCreate extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            questions: []
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
        fetch('api/survey/create', {
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
            <div className="survey-form-container">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Survey Form:</h1>
                    <label>
                        Title
                        <input
                            name='title'
                            type='string'
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SurveyCreate;
