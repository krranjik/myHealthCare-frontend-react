import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetAppointments from '../components/appointment/getAppointments.js'
import Axios from 'axios'

class Appointment extends Component {
    constructor() {
        super()
        this.state = {
            appointmentData: [],
        }
    }

    componentDidMount = () => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token
            }
        }
        Axios.get('http://localhost:4444/getallappointment', config)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    appointmentData: res.data
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
                <GetAppointments appointmentData={this.state.appointmentData} />
                <Footer />
            </div>
        )
    }
}

export default Appointment