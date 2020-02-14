import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Importing Components

import Dashboard from './containers/dashboard'
import LoginPage from './components/admin/loginpage';
import GetDoctors from './containers/doctor'
import GetPatients from './containers/patient'
import GetAppointment from './containers/appointment'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/adminlogin" component={LoginPage} />
                    <Route path="/doctor/alldoctors" component={GetDoctors}/>
                    <Route path="/patient/allpatients" component={GetPatients} />
                    <Route path="/appointment/allappointment" component={GetAppointment} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router