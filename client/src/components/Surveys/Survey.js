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

    render() {
        const qs = this.state.questions.map((q, i) =>
            <div className= "question" key={i}>
                <h2>{q.question}</h2>
            </div>
        );

        return (
            <div className="survey">
                <h1>{this.state.title}</h1>
                <div className="questions">
                    {qs}
                </div>
            </div>
        );
    }
}

export default Survey;