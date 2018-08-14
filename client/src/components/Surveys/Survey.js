import React, { Component } from 'react';

class Survey extends Component {
    state = {
        title: '',
        questions: []
    };

    componentDidMount() {
        fetch(`/api/survey/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    questions: data.questions
                });
            })
    }

    renderQuestions() {
        return this.state.questions.map((q, i) =>
            <div className="question" key={i}>
                <h3>{q.question}</h3>
            </div>
        );
    }

    render() {
        return (
            <div className="survey take-survey">
                <div>
                    <h1>{this.state.title}</h1>
                    <h4>Questions: {this.state.questions.length}</h4>
                </div>
                {this.renderQuestions()}
            </div>
        );
    }
}

export default Survey;