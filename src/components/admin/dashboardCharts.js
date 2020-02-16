import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class DashboardCharts extends React.Component {

    render() {
        return (
            <div>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <Link to="/patient/all-patients" className="nav-link">
                                        <div className="card">
                                            <img src={require("../../assets/images/patient.jpg")} alt="patient" style={{ 'height': '400px', borderRadius: 0 }} />
                                            <div className="card-body">
                                                <h3 className="text-center text-dark"><b>PATIENTS</b></h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <Link to="/doctor/all-doctors" className="nav-link">
                                        <div className="card">
                                            <img src={require("../../assets/images/doctor.jpg")} alt="doctor" style={{ 'height': '400px', borderRadius: 0 }} />
                                            <div className="card-body">
                                                <h3 className="text-center text-dark"><b>DOCTORS</b></h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-12 grid-margin">
                                    <div className="offset-lg-3 col-lg-6 grid-margin stretch-card">
                                        <Link to="/appointment/all-appointments" className="nav-link">
                                            <div className="card">
                                                <img src={require("../../assets/images/appointment.jpg")} alt="appointment" style={{ 'height': '400px', borderRadius: 0 }} />
                                                <div className="card-body">
                                                    <h3 className="text-center text-dark"><b>APPOINTMENTS</b></h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <Link to="/report/all-reports" className="nav-link">
                                        <div className="card">
                                            <img src={require("../../assets/images/report.jpg")} alt="report" style={{ 'height': '400px', borderRadius: 0 }} />
                                            <div className="card-body">
                                                <h3 className="text-center text-dark"><b>REPORTS</b></h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6 grid-margin stretch-card">
                                    <Link to="/prescription/all-prescriptions" className="nav-link">
                                        <div className="card">
                                            <img src={require("../../assets/images/prescription.jpg")} alt="prescription" style={{ 'height': '400px', borderRadius: 0 }} />
                                            <div className="card-body">
                                                <h3 className="text-center text-dark"><b>PRESCRIPTIONS</b></h3>
                                            </div>
                                        </div>
                                    </Link>
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