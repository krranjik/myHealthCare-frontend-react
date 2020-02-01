import React, { Component } from 'react';
import Header from '../components/includes/header'
import Footer from '../components/includes/footer'
import DashboardCharts from '../components/admin/dashcharts'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <DashboardCharts/>
                <Footer />
            </div>
        )
    }
}

export default Dashboard