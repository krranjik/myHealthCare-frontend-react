import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

//Importing Components

import Dashboard from './containers/dashboard'
import LoginPage from './components/admin/loginpage';
import GetDoctors from './containers/doctor'
import GetPatients from './containers/patient'
import GetAppointment from './containers/appointment'
import GetPrescription from './containers/prescription'
import GetReport from './containers/report'

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
                        this.isLoggedIn() == false ? (<Redirect to="/adminlogin" />) : (<Dashboard />)
                    )}/>
                    <Route path="/adminlogin" component={LoginPage} />
                    <Route path="/doctor/alldoctors" component={GetDoctors} />
                    <Route path="/patient/allpatients" component={GetPatients} />
                    <Route path="/appointment/allappointments" component={GetAppointment} />
                    <Route path="/prescription/allprescriptions" component={GetPrescription} />
                    <Route path="/report/allreports" component={GetReport} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router