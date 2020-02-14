import React from 'react';
import Axios from 'axios';
import PatientUpdate from './patientUpdate';

class GetPatient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patientData: this.props.patientData,
            message: ""
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.patientData !== this.state.patientData) {
            this.setState({
                patientData: nextprops.patientData
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        var name = this.refs.patientName.value
        var username = this.refs.username.value
        var password = this.refs.password.value
        var email = this.refs.email.value
        var address = this.refs.patientAddress.value
        var dob = this.refs.dob.value
        var gender = this.refs.patientGender.value
        var bloodgroup = this.refs.bloodgroup.value
        var weight = this.refs.weight.value
        var height = this.refs.height.value
        var phone = this.refs.patientPhone.value
        var image = this.refs.image.files[0]

        var data = new FormData()
        data.append('name', name)
        data.append('username', username)
        data.append('password', password)
        data.append('email', email)
        data.append('address', address)
        data.append('dob', dob)
        data.append('gender', gender)
        data.append('bloodgroup', bloodgroup)
        data.append('weight', weight)
        data.append('height', height)
        data.append('phone', phone)
        data.append('image', image)

        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.post('http://localhost:4444/registerpatient', data, config)
            .then((res) => {
                window.location.reload();
                if (res.data.status === 200) {
                    var dataarray = this.state.patientData.concat(res.data)
                    this.setState({
                        patientData: dataarray,
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

        Axios.delete('http://localhost:4444/deletepatient/' + val, config)
            .then(val => {
                window.location.reload()
            })
    }

    render() {
        var patientData = this.state.patientData
        patientData = patientData.map((val, index) => {
            return (
                <tr>
                    <td className="py-1">
                        <img src={'http://localhost:4444/public/' + val.image} alt="image" style={{ 'height': '100px', 'width': '100px' }} />
                    </td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                    <td>{val.password}</td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>{val.dob}</td>
                    <td>{val.gender}</td>
                    <td>{val.bloodgroup}</td>
                    <td>{val.weight}</td>
                    <td>{val.height}</td>
                    <td>{val.phone}</td>
                    <td><button class="btn btn-small btn-danger" onClick={() => this.handleDelete(val._id, index)}><i class="mdi mdi-delete" aria-hidden="true"></i></button>
                        <PatientUpdate
                            updatePatient={val}
                        />
                    </td>
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">List of Patients</h1>
                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addPatient'>
                            <i className="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Patient
                        </button>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Image</b></th>
                                        <th><b>Name</b></th>
                                        <th><b>Username</b></th>
                                        <th><b>Password</b></th>
                                        <th><b>Email</b></th>
                                        <th><b>Address</b></th>
                                        <th><b>DOB</b></th>
                                        <th><b>Gender</b></th>
                                        <th><b>Blood Group</b></th>
                                        <th><b>Weight</b></th>
                                        <th><b>Height</b></th>
                                        <th><b>Phone</b></th>
                                        <th><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patientData
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="addPatient" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Patient</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={this.state.message == "" ? "alert alert-success d-none" : "alert alert-success"}>{this.state.message}</div>
                                <form className="form-horizontal add-admin" onSubmit={this.handleSubmit.bind(this)} >
                                    <span id="err"></span>
                                    <div className="forms-sample text-dark">
                                        <div class="col-12 grid-margin">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Patient Name</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="patientName" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Username</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="username" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Password</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Email</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Address</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="patientAddress" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Date of Birth</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="dob" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Gender</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="patientGender" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Blood Group</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="bloodgroup" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Weight</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="weight" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Height</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="height" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Phone</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" ref="patientPhone" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default GetPatient