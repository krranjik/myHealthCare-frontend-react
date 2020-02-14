import React from 'react';
import Axios from 'axios';

class GetAppointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appointmentData: this.props.appointmentData,
            appointmentDataupdate: ''
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.appointmentData !== this.state.appointmentData) {
            this.setState({
                appointmentData: nextprops.appointmentData
            })
        }
    }

    render() {
        var appointmentData = this.state.appointmentData
        appointmentData = appointmentData.map((val, index) => {
            return (
                <tr>
                    <td>{val.patientname}</td>
                    <td>{val.doctorname}</td>
                    <td>{val.appointdate}</td>
                    <td>{val.appointtime}</td>
                    <td>{val.status}</td>
                    <td><a class="btn btn-danger" href="/delete/{{this._id}}"><span class="mdi mdi-delete" aria-hidden="true"></span></a>
                        <a class="btn btn-primary" onClick={this.onopen(val._id)} data-toggle='modal' data-target='#updateAppointment'><span class="mdi mdi-lead-pencil" aria-hidden="true"></span></a></td>
                </tr>
            )
        })
        return (
            <div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">List of Appointments</h1>
                            <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addAppointment'>
                                <i className="mdi mdi-account-plus btn-icon-prepend"></i>
                                Add Appointment
                        </button>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered text-center table-hover text-dark">
                                    <thead>
                                        <tr>
                                            <th><b>Patient Name</b></th>
                                            <th><b>Doctor Name</b></th>
                                            <th><b>Appointment Date</b></th>
                                            <th><b>Appointment Time</b></th>
                                            <th><b>Status</b></th>
                                            <th><b>Action</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            appointmentData
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GetAppointment