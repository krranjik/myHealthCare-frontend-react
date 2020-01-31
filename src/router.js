import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importing Components

import Dashboard from './containers/dashboard'
import LoginPage from './components/admin/loginpage';
import GetDoctors from './components/doctors/getdoctors'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/adminlogin" component={LoginPage} />
                    <Route exact path="/alldoctors" component={GetDoctors}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router