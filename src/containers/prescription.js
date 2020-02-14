import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetPrescription from '../components/prescriptions/getPrescription.js'
import Axios from 'axios'

class Prescription extends Component {
    constructor() {
        super()
        this.state = {
            prescriptionData: [],
        }
    }

    componentDidMount = () => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token
            }
        }
        Axios.get('http://localhost:4444/getprescription', config)
            .then((res) => {
                this.setState({
                    prescriptionData: res.data
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
                <GetPrescription prescriptionData={this.state.prescriptionData} />
                <Footer />
            </div>
        )
    }
}

export default Prescription