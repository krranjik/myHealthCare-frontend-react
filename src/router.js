import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

//Importing Components

import Dashboard from './containers/dashboard'
import LoginPage from './components/admin/loginPage'
import GetDoctors from './containers/doctor'
import GetPatients from './containers/patient'
import GetAppointments from './containers/appointment'
import GetPrescriptions from './containers/prescription'
import GetReports from './containers/report'

class Router extends Component {
    isLoggedIn() {
        if (sessionStorage.getItem("user_token") == null) {
            return false;
        }
        else {
            return true;
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.isLoggedIn() == false ? (<Redirect to="/admin/login" />) : (<Dashboard />)
                    )} />
                    <Route path="/admin/login" component={LoginPage} />
                    <Route path="/doctor/all-doctors" component={GetDoctors} />
                    <Route path="/patient/all-patients" component={GetPatients} />
                    <Route path="/appointment/all-appointments" component={GetAppointments} />
                    <Route path="/prescription/all-prescriptions" component={GetPrescriptions} />
                    <Route path="/report/all-reports" component={GetReports} />
                    >
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router