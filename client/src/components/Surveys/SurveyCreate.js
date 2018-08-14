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
                <div key={questionId} className="form-question">
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
                <form className="survey-form" onSubmit={this.handleSubmit}>
                    <div className="survey-form-section">
                        <label>Survey Title</label>
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className="survey-form-section questions">
                        {this.renderQuestions()}
                        <button className="add-question-btn" type="button" onClick={this.handleAddQuestion}>&#43;</button>
                    </div>
                    <button className="btn-main submit-form-btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default SurveyCreate;
