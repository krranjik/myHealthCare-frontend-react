import React from 'react';
import Axios from 'axios';
import ReportUpdate from './reportUpdate';

class GetReport extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reportData: this.props.reportData,
            message: ""
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.reportData !== this.state.reportData) {
            this.setState({
                reportData: nextprops.reportData
            })
        }
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
                    <td><img src={'http://localhost:4444/public/' + val.image} alt="image" style={{ 'height': '100px', 'width': '100px' }} /></td>
                    <td><button class="btn btn-small btn-danger" onClick={() => this.handleDelete(val._id, index)}><i class="mdi mdi-delete" aria-hidden="true"></i></button>
                    <ReportUpdate
                    updateReport={val}
                    />
                     </td>
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card" >
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">List of Reports</h1>
                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addReport'>
                            <i className="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Report
                        </button>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Patient Name</b></th>
                                        <th><b>Doctor Name</b></th>
                                        <th><b>Report Date</b></th>
                                        <th><b>Report Time</b></th>
                                        <th><b>Status</b></th>
                                        <th><b>Action</b></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GetReport