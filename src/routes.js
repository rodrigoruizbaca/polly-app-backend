import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
    <p>Home</p>
);

const Route1 = () => (
    <p>Route 1</p>
);

const NotFound = () => (
    <div>
        <p>Page not found!</p>
        <NavLink activeClassName="is-active" to="/">Go home</NavLink>
    </div>
);


const Routes = () => (
    <BrowserRouter>
        <div>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/route-1" component={Route1}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;