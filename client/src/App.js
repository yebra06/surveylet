import React from 'react';

import { Link } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surveys: []
        }
    }

    componentDidMount() {
        fetch('/api/survey')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    surveys: data
                })
            })
    }

    renderSurveys() {
        return (
            this.state.surveys.map((survey, i) =>
                <div key={i} className="survey">
                    <div>
                        <h1>{survey.title}</h1>
                        <h4>Questions: {survey.questions.length}</h4>
                    </div>
                    <Link className="take-survey-btn" to={`/survey/${survey._id}`}>
                        Take Survey
                    </Link>
                </div>
            )
        );
    }

    render() {
        return (
            <div className="app">
                <div className="app-section">
                    {this.renderSurveys()}
                </div>
            </div>
        );
    }
}

export default App;
