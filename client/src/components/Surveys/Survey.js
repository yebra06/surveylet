import React, { Component } from 'react';

class Survey extends Component {
    state = {
        survey: {}
    };

    componentDidMount() {
        fetch(`/api/survey/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    survey: data
                });
                console.log(this.state);
            })
    }

    render() {
        return (
            <div className="survey">
                <h1>{this.state.survey.title}</h1>
            </div>
        );
    }
}

export default Survey;