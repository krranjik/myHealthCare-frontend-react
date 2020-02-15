import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetDoctors from '../components/doctors/getDoctors.js'
import Axios from 'axios'

class Doctor extends Component {
    constructor() {
        super()
        this.state = {
            doctorData: [],
        }
    }

    componentDidMount = () => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token
            }
        }
        Axios.get('http://localhost:4444/getalldoctors', config)
            .then((res) => {
                this.setState({
                    doctorData: res.data
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
                <GetDoctors doctorData={this.state.doctorData} />
                <Footer />
            </div>
        )
    }
}

export default Doctor