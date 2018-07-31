import React from 'react';

class SurveyList extends React.Component {

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

    render() {
        const surveyList = this.state.surveys.map((survey, i) =>
            <div key={i} className="Survey">
                <h1>{survey.title}</h1>
            </div>
        );

        return (
            <div className="Surveys">
                {surveyList}
            </div>
        );
    }
}


export default SurveyList;
