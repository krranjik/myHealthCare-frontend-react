import React, { Component } from 'react'
import Axios from 'axios'
import { Modal } from 'react-bootstrap'

export class PrescriptionUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.updatePrescription._id,
            patient_name: this.props.updatePrescription.patient_name,
            doctor_name: this.props.updatePrescription.doctor_name,
            start_date: this.props.updatePrescription.start_date,
            end_date: this.props.updatePrescription.end_date,
            medicine_name: this.props.updatePrescription.medicine_name,
            morning_time: this.props.updatePrescription.morning_time,
            day_time: this.props.updatePrescription.day_time,
            night_time: this.props.updatePrescription.night_time,
            patients: [],
            doctors: [],
            setShow: false,
            show: false
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

    handleSubmit(event) {
        event.preventDefault()
        var patient_name = this.state.patient_name
        var doctor_name = this.state.doctor_name
        var start_date = this.state.start_date
        var end_date = this.state.end_date
        var medicine_name = this.state.medicine_name
        var morning_time = this.state.morning_time
        var day_time = this.state.day_time
        var night_time = this.state.night_time

        var data = {
            patient_id: patient_name,
            doctor_id: doctor_name,
            start_date: start_date,
            end_date: end_date,
            medicine_name: medicine_name,
            morning_time: morning_time,
            day_time: day_time,
            night_time: night_time
        }
        console.log(data)

        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.put('http://localhost:4444/updateprescription/' + this.state.id, data, config)
            .then((res) => {
                window.location.reload();
            })
    }

    handleClose = () => {
        this.setState({
            setShow: false,
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            setShow: true,
            show: true
        })
    }
    render() {

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
            <>
                <button class="btn btn-small btn-primary" onClick={this.handleShow}>
                    <i class="mdi mdi-lead-pencil" aria-hidden="true"></i>
                </button>
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Prescription</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="forms-sample text-dark">
                                <div className="form-group row">
                                    <label for="name" className="col-sm-3 col-form-label">Patient Name</label>
                                    <div className="col-sm-9">
                                        <select value={this.state.patient_name} onChange={(event) => this.setState({ patient_name: event.target.value })} className="form-control form-control-lg">
                                            {patientsData}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="gender" className="col-sm-3 col-form-label">Doctor Name</label>
                                    <div className="col-sm-9">
                                        <select value={this.state.doctor_name} onChange={(event) => this.setState({ doctor_name: event.target.value })} className="form-control form-control-lg">
                                            {doctorsData}
                                        </select>  </div>
                                </div>
                                <div className="form-group row">
                                    <label for="department" className="col-sm-3 col-form-label">Start Date</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.start_date} onChange={(event) => this.setState({ start_date: event.target.value })} ref="startDate" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="phone" className="col-sm-3 col-form-label">End Date</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.end_date} onChange={(event) => this.setState({ end_date: event.target.value })} ref="endDate" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="description" className="col-sm-3 col-form-label">Medicine Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.medicine_name} onChange={(event) => this.setState({ medicine_name: event.target.value })} ref="medicineName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="location" className="col-sm-3 col-form-label">Morning Time</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.morning_time} onChange={(event) => this.setState({ morning_time: event.target.value })} ref="morningTime" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="rating" className="col-sm-3 col-form-label">Day Time</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.day_time} onChange={(event) => this.setState({ day_time: event.target.value })} ref="datTime" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="rating" className="col-sm-3 col-form-label">Night Time</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.night_time} onChange={(event) => this.setState({ night_time: event.target.value })} ref="nightTime" />
                                    </div>
                                </div>
                                <button type="submit" id="addContentbutton" className="btn btn-dark mr-2">Submit</button>
                                <button className="btn btn-light">Cancel</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default PrescriptionUpdate
