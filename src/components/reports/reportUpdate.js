import React, { Component } from 'react'
import Axios from 'axios'
import { Modal } from 'react-bootstrap'

export class ReportUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.updateReport._id,
            patient_name: this.props.updateReport.patient_name,
            doctor_name: this.props.updateReport.doctor_name,
            report_name: this.props.updateReport.report_name,
            report_date: this.props.updateReport.report_date,
            setShow: false,
            patients: [],
            doctors: [],
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
        var report_name = this.state.report_name
        var report_date = this.state.report_date
        var image = this.refs.image.files[0]

        var data = new FormData()
        data.append('patient_id', patient_name)
        data.append('doctor_id', doctor_name)
        data.append('report_name', report_name)
        data.append('report_date', report_date)
        data.append('image', image)

        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.put('http://localhost:4444/updateReport/' + this.state.id, data, config)
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
                        <Modal.Title>Update Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="forms-sample text-dark">
                                <div className="form-group row">
                                    <label for="name" className="col-sm-3 col-form-label">Patient Name</label>
                                    <div className="col-sm-9">
                                        <select className="form-control form-control-lg" value={this.state.patient_name} onChange={(event) => this.setState({ patient_name: event.target.value })} ref="patientName">
                                            {patientsData}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="gender" className="col-sm-3 col-form-label">Doctor Name</label>
                                    <div className="col-sm-9">
                                        <select className="form-control form-control-lg" value={this.state.doctor_name} onChange={(event) => this.setState({ doctor_name: event.target.value })} ref="doctorName">
                                            {doctorsData}
                                        </select>  </div>
                                </div>
                                <div className="form-group row">
                                    <label for="department" className="col-sm-3 col-form-label">Report Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.report_name} onChange={(event) => this.setState({ report_name: event.target.value })} ref="reportName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="phone" className="col-sm-3 col-form-label">Report Date</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.report_date} onChange={(event) => this.setState({ report_date: event.target.value })} ref="reportDate" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image</label>
                                    <div className="input-group col-xs-12">
                                        <div className="custom-file">
                                            <input type="file" accept='*' className="form-control-file" id="exampleFormControlFile1" ref='image' />
                                        </div>
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

export default ReportUpdate
