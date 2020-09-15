import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Protected from './containers/Protected';
import UnProtected from './containers/UnProtected';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/protected" component={Protected} />
                <Route exact path="/unprotected" component={UnProtected} />
            </Switch>
        </Router>
    );
};

export default App;
