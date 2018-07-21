import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveys: []
        }
    }

    componentDidMount() {
        fetch('/api/survey')
            .then(res => {
                this.setState({
                    surveys: res.data
                });
                console.log(this.state.surveys);
            });
    }

    render() {
        const { surveys } = this.state;

        return (
            <div className='ListSurvey'>
                {surveys ? surveys.map(survey => <h1>survey {survey.title}</h1>) : <h1>No surveys found</h1>}
            </div>
        );
    }
}

export default Home;
