import React from 'react';

const SurveyList = ({surveys}) => {

    const surveyList = surveys.map((survey, i) =>
        <div key={i} className="Survey">
            <h1>{survey.title}</h1>
        </div>
    );

    return (
        <div className="SurveyList">
            {surveyList}
        </div>
    );
};

export default SurveyList;
