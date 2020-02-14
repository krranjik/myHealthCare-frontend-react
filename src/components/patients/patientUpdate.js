import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class PatientUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.updatePatient.name,
            username: this.props.updatePatient.username,
            password: this.props.updatePatient.password,
            email: this.props.updatePatient.email,
            address: this.props.updatePatient.address,
            dob: this.props.updatePatient.dob,
            gender: this.props.updatePatient.gender,
            bloodgroup: this.props.updatePatient.bloodgroup,
            weight: this.props.updatePatient.weight,
            height: this.props.updatePatient.height,
            phone: this.props.updatePatient.phone
        }
    }

    render() {
        return (
            <>
                <button class="btn btn-small btn-primary" data-toggle="modal" data-target="#updatePatient">
                    <i class="mdi mdi-lead-pencil" aria-hidden="true"></i>
                </button>
                <Modal>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Patient</Modal.Title>
                    </Modal.Header>

                    <form>
                        <div className="forms-sample text-dark">
                            <div class="col-12 grid-margin">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Patient Name</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} ref="patientName" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Username</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} ref="username" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Password</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} ref="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Email</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} ref="email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Address</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} ref="patientAddress" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Date of Birth</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.dob} onChange={(event) => this.setState({ dob: event.target.value })} ref="dob" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Gender</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.gender} onChange={(event) => this.setState({ gender: event.target.value })} ref="patientGender" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Blood Group</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.bloodgroup} onChange={(event) => this.setState({ bloodgroup: event.target.value })} ref="bloodgroup" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Weight</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.weight} onChange={(event) => this.setState({ weight: event.target.value })} ref="weight" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Height</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.height} onChange={(event) => this.setState({ height: event.target.value })} ref="height" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Phone</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} ref="patientPhone" />
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
                </Modal>

            </>
        )
    }
}

export default PatientUpdate
