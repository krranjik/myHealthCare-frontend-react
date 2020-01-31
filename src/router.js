import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importing Components

import Home from './containers/home'
import LoginPage from './components/admin/loginpage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/adminlogin" component={LoginPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router