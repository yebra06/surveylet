import React, { Component } from 'react';

class SurveyCreate extends Component {
    state = {
        title: '',
        questions: [{question: ''}]
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/survey/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    };

    handleTitleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    };

    handleQuestionsQuestionChange = (id) => (e) => {
        const newQuestions = this.state.questions.map((question, questionId) =>
            id !== questionId ? question : {...question, question: e.target.value});
        this.setState({questions: newQuestions});
    };

    handleAddQuestion = () => {
        this.setState({
            questions: this.state.questions.concat([{question: ''}])
        });
    };

    renderQuestions() {
        return (
            this.state.questions.map((question, questionId) => (
                <div key={questionId} className="question">
                    <label>Question #{`${questionId+1}`}</label>
                    <input
                        type="text"
                        value={question.question}
                        onChange={this.handleQuestionsQuestionChange(questionId)}
                    />
                </div>
            ))
        );
    }

    render() {
        return (
            <div className="survey-form-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Survey Title</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    {this.renderQuestions()}
                    <button type="button" onClick={this.handleAddQuestion}>Add Question</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SurveyCreate;
