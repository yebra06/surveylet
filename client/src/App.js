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
                    <Link to={`/survey/${survey._id}`}>
                        <h1>{survey.title}</h1>
                    </Link>
                    <small>Questions: {survey.questions.length}</small>
                </div>
            )
        );
    }

    render() {
        return (
            <div className="app">
                {this.renderSurveys()}
            </div>
        );
    }
}

export default App;
