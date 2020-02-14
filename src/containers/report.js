import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import GetReport from '../components/reports/getreport.js'
import Axios from 'axios'

class Report extends Component {
    constructor() {
        super()
        this.state = {
            reportData: [],
        }
    }

    componentDidMount = () => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token
            }
        }
        Axios.get('http://localhost:4444/getreport', config)
            .then((res) => {
                this.setState({
                    reportData: res.data
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
                <GetReport reportData={this.state.reportData} />
                <Footer />
            </div>
        )
    }
}

export default Report