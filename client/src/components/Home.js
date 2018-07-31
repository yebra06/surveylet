import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <Link to='/list'>
                <button type='button'>Take Survey</button>
            </Link>
            <Link to='/create'>
                <button type='button'>Create Survey</button>
            </Link>
        </div>
    );
};

export default Home;
