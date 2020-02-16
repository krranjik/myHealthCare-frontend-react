import React from 'react';
import Axios from 'axios';

class GetAppointments extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            appointmentData: this.props.appointmentData,
            message: ""
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.appointmentData !== this.state.appointmentData) {
            this.setState({
                appointmentData: nextprops.appointmentData
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        var patient_name = this.refs.patientName.value
        var doctor_name = this.refs.doctorName.value
        var appoint_date = this.refs.appointDate.value
        var appoint_time = this.refs.appointTime.value
        var status = this.refs.status.value

        var data = new FormData()
        data.append('patient_id', patient_name)
        data.append('doctor_id', doctor_name)
        data.append('appoint_date', appoint_date)
        data.append('appoint_time', appoint_time)
        data.append('status', status)

        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.post('http://localhost:4444/addappointment', data, config)
            .then((res) => {
                window.location.reload();
                if (res.data.status === 200) {
                    var dataarray = this.state.appointmentData.concat(res.data)
                    this.setState({
                        appointmentData: dataarray,
                        message: res.data.message
                    })

                }
            })
    }

    handleConfirm = (val, index) => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
            }
        }

        var data = { status: "Confirm!" }

        Axios.put('http://localhost:4444/updateappointment/' + val, data, config)
            .then(val => {
                window.location.reload()
            })
    }

    handleDelete = (val, index) => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
            }
        }

        Axios.delete('http://localhost:4444/deleteappointment/' + val, config)
            .then(val => {
                window.location.reload()
            })
    }

    render() {
        var appointmentData = this.state.appointmentData
        appointmentData = appointmentData.map((val, index) => {
            return (
                <tr>
                    <td>{val.patient_id.name}</td>
                    <td>{val.doctor_id.name}</td>
                    <td>{val.appoint_date}</td>
                    <td>{val.appoint_time}</td>
                    <td>{val.status == "Confirm!" ? <label class="badge badge-success">{val.status}</label> : <label class="badge badge-warning">{val.status}</label>}</td>
                    <td><button class="btn btn-small btn-danger" onClick={() => this.handleDelete(val._id, index)}><i class="mdi mdi-delete" aria-hidden="true"></i></button>
                        {val.status == "Confirm!" ? null :
                            <button class="btn btn-small btn-success" onClick={() => this.handleConfirm(val._id, index)}><i class="mdi mdi-check" aria-hidden="true"></i></button>
                        }
                    </td>
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card" >
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">List of Appointments</h1>
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

        )
    }
}

export default GetAppointments