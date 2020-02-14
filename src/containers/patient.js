import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetPatients from '../components/patients/getPatient.js'
import Axios from 'axios'

class Patient extends Component {
    constructor() {
        super()
        this.state = {
            patientData: [],
        }
    }

    componentDidMount = () => {
        // var user_token = sessionStorage.getItem('user_token')
        // var config = {
        //     headers: {
        //         'Authorization': user_token
        //     }
        // }
        //Axios.get('http://localhost:4444/getalldoctors', config)
        Axios.get('http://localhost:4444/getallpatients')
            .then((res) => {
                this.setState({
                    patientData: res.data
                })
            }).catch((err) => {
                this.setState({
                    message: err.message
                })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <GetPatients patientData={this.state.patientData} />
                <Footer />
            </div>
        )
    }
}

export default Patient