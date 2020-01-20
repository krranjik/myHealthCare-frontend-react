import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importing Components

import Home from './containers/home'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}