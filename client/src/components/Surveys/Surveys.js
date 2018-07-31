import React from 'react';

import SurveyList from './SurveyList';

class Surveys extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            surveys: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/survey')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    surveys: data
                })
            })
    }

    render() {
        const { surveys } = this.state;

        return (
            <div className="Surveys">
                <SurveyList surveys={surveys} />
            </div>
        );
    }
}

export default Surveys;
