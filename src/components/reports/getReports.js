import React, { Component } from 'react'
import Axios from 'axios'
import ReportUpdate from './reportUpdate'

export class GetReports extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reportData: this.props.reportData,
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
        if (nextprops.reportData !== this.state.reportData)
            this.setState({
                reportData: nextprops.reportData
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        var patient_name = this.refs.patientName.value
        var doctor_name = this.refs.doctorName.value
        var report_name = this.refs.reportName.value
        var report_date = this.refs.reportDate.value
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

        Axios.post('http://localhost:4444/addreport', data, config)
            .then((res) => {
                window.location.reload();
                if (res.data.status === 200) {
                    var dataarray = this.state.reportData.concat(res.data)
                    this.setState({
                        reportData: dataarray,
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

        Axios.delete('http://localhost:4444/deletereport/' + val, config)
            .then(val => {
                window.location.reload()
            })
    }
    render() {
        var reportData = this.state.reportData
        reportData = reportData.map((val, index) => {

            return (
                <tr>
                    <td>{val.patient_id.name}</td>
                    <td>{val.doctor_id.name}</td>
                    <td>{val.report_name}</td>
                    <td>{val.report_date}</td>
                    <td>
                        <img src={'http://localhost:4444/public/' + val.image} alt="image" style={{ 'height': '200px', 'width': '200px', borderRadius:0 }}/>
                    </td>
                    <td><button class="btn btn-small btn-danger" onClick={() => this.handleDelete(val._id, index)}><i class="mdi mdi-delete" aria-hidden="true"></i></button>
                        <ReportUpdate
                            updateReport={val}
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
            return (
                <option value={val._id}>{val.name}</option>
            )
        })

        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">Report List</h1>

                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addReport'>
                            <i className="mdi mdi-plus btn-icon-prepend"></i>
                            Add Report
                        </button>

                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Patient Name</b></th>
                                        <th><b>Doctor Name</b></th>
                                        <th><b>Report Name</b></th>
                                        <th><b>Report Date</b></th>
                                        <th><b>Report</b></th>
                                        <th><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reportData
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="addReport" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Report</h5>
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
                                            <label for="department" className="col-sm-3 col-form-label">Report Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="reportName" ref="reportName" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="phone" className="col-sm-3 col-form-label">Report Date</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="reportDate" ref="reportDate" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetReports
