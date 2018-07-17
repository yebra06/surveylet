import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <Switch>
                <Route exact path="/" component={() => <h1>home</h1>}/>
            </Switch>
        </nav>
    );
};

export default Nav;
