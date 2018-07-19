import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </div>
        </nav>
    );
};

export default Nav;
