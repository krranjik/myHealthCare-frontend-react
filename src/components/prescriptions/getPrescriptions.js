import React, { Component } from 'react'
import Axios from 'axios'
import PrescriptionUpdate from './prescriptionUpdate'

export class GetPrescriptions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prescriptionData: this.props.prescriptionData,
            message: "",
            patients: [],
            doctors: []

        }
    }

    componentDidMount() {
        Axios.get('http://localhost:4444/getallpatients')
            .then((response) => {
                this.setState({
                    patients: response.data
                })
            })

        Axios.get('http://localhost:4444/getalldoctors')
            .then((response) => {
                this.setState({
                    doctors: response.data
                })
            })
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.prescriptionData !== this.state.prescriptionData)
            this.setState({
                prescriptionData: nextprops.prescriptionData
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        var patient_name = this.refs.patientName.value
        var doctor_name = this.refs.doctorName.value
        var start_date = this.refs.startDate.value
        var end_date = this.refs.endDate.value
        var medicine_name = this.refs.medicineName.value
        var morning_time = this.refs.morningTime.value
        var day_time = this.refs.dayTime.value
        var night_time = this.refs.nightTime.value

        var data={
        patient_id:patient_name,
        doctor_id:doctor_name,
        start_date:start_date,
        end_date:end_date,
        medicine_name:medicine_name,
        morning_time:morning_time,
        day_time:day_time,
        night_time:night_time
        }
        
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.post('http://localhost:4444/addprescription', data, config)
            .then((res) => {
                window.location.reload();
                if (res.data.status === 200) {
                    var dataarray = this.state.prescriptionData.concat(res.data)
                    this.setState({
                        prescriptionData: dataarray,
                        message: res.data.message
                    })
                }
            })
    }

    handleDelete = (val, index) => {
        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
            }
        }

        Axios.delete('http://localhost:4444/deleteprescription/' + val, config)
            .then(val => {
                window.location.reload()
            })
    }
    render() {
        var prescriptionData = this.state.prescriptionData

        prescriptionData = prescriptionData.map((val, index) => {
            return (
                <tr>
                    <td>{val.patient_id.name}</td>
                    <td>{val.doctor_id.name}</td>
                    <td>{val.start_date}</td>
                    <td>{val.end_date}</td>
                    <td>{val.medicine_name}</td>
                    <td>{val.morning_time}</td>
                    <td>{val.day_time}</td>
                    <td>{val.night_time}</td>
                    <td><button class="btn btn-small btn-danger" onClick={() => this.handleDelete(val._id, index)}><i class="mdi mdi-delete" aria-hidden="true"></i></button>
                        <PrescriptionUpdate
                            updatePrescription={val}
                        />
                    </td>
                </tr>
            )
        })
        var patientsData = this.state.patients.map((val, index) => {
            return (
                <option value={val._id}>{val.name}</option>
            )
        })

        var doctorsData = this.state.doctors.map((val, index) => {
            console.log(val)
            return (
                <option value={val._id}>{val.name}</option>
            )
        })

        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">Prescription List</h1>

                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addPrescription'>
                            <i className="mdi mdi-plus btn-icon-prepend"></i>
                            Add Prescription
                        </button>

                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Patient Name</b></th>
                                        <th><b>Doctor Name</b></th>
                                        <th><b>Start Date</b></th>
                                        <th><b>End Date</b></th>
                                        <th><b>Medicine Name</b></th>
                                        <th><b>Morning Time</b></th>
                                        <th><b>Day Time</b></th>
                                        <th><b>Night Time</b></th>
                                        <th><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        prescriptionData
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="addPrescription" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Prescription</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={this.state.message == "" ? "alert alert-success d-none" : "alert alert-success"}>{this.state.message}</div>
                                <form className="form-horizontal add-admin" onSubmit={this.handleSubmit.bind(this)}>
                                    <span id="err"></span>
                                    <div className="forms-sample text-dark">
                                        <div className="form-group row">
                                            <label for="name" className="col-sm-3 col-form-label">Patient Name</label>
                                            <div className="col-sm-9">
                                                <select ref="patientName" className="form-control form-control-lg">
                                                    {patientsData}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="gender" className="col-sm-3 col-form-label">Doctor Name</label>
                                            <div className="col-sm-9">
                                                <select ref="doctorName" className="form-control form-control-lg">
                                                    {doctorsData}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="department" className="col-sm-3 col-form-label">Start Date</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="startDate" ref="startDate" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="phone" className="col-sm-3 col-form-label">End Date</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="endDate" ref="endDate" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="description" className="col-sm-3 col-form-label">Medicine Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="medicineName" ref="medicineName" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="location" className="col-sm-3 col-form-label">Morning Time</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="morningTime" ref="morningTime" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="rating" className="col-sm-3 col-form-label">Day Time</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="dayTime" ref="dayTime" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="rating" className="col-sm-3 col-form-label">Night Time</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="nightTime" ref="nightTime" />
                                            </div>
                                        </div>
                                        <button type="submit" id="addContentbutton" className="btn btn-dark mr-2">Submit</button>
                                        <button className="btn btn-light">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetPrescriptions
