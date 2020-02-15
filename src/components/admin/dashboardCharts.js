import React from 'react';

class DashboardCharts extends React.Component {

    render() {
        return (
            <div>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Line chart</h4>
                                            <canvas id="lineChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Bar chart</h4>
                                            <canvas id="barChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DashboardCharts