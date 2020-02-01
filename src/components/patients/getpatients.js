import React from 'react';

class GetPatients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            patientData: this.props.patientData,
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.patientData !== this.state.patientData) {
            this.setState({
                patientData: nextprops.patientData
            })
        }
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
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">List of Patients</h1>

                        <button type="button" class="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addPatient'>
                            <i class="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Patient
                        </button>

                        <div className="table-responsive">
                            <table className="table table-striped table-hover text-dark">
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
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Patient</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={this.state.message == "" ? "alert alert-success d-none" : "alert alert-success"}>{this.state.message}</div>
                                <form className="form-horizontal add-admin" >
                                    <span id="err"></span>
                                    <div className="forms-sample text-dark">

                                        <div class="form-group row">
                                            <label for="name" class="col-sm-3 col-form-label">Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="name" ref="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="department" class="col-sm-3 col-form-label">Department</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="department" ref="department" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="phone" class="col-sm-3 col-form-label">Phone</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="phone" ref="phone" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="description" class="col-sm-3 col-form-label">Description</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="description" ref="description" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="location" class="col-sm-3 col-form-label">Location</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="location" ref="location" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="rating" class="col-sm-3 col-form-label">Rating</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="rating" ref="rating" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="image">Image</label>
                                            <div class="input-group col-xs-12">
                                                <div class="custom-file">
                                                    <input type="file" accept='*' class="form-control-file" id="exampleFormControlFile1" ref='image' />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="addContentbutton" class="btn btn-dark mr-2">Submit</button>
                                        <button class="btn btn-light">Cancel</button>
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

export default GetPatients