import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetDoctors from '../components/doctors/getdoctors.js'

class Doctor extends Component {
    render() {
        return (
            <div>
                <Header />
                <GetDoctors/>
                <Footer />
            </div>
        )
    }
}

export default Doctor