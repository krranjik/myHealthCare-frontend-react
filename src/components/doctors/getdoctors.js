import React from 'react';

class GetDoctors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            doctorData: this.props.doctorData,
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.doctorData !== this.state.doctorData) {
            this.setState({
                doctorData: nextprops.doctorData
            })
        }
    }

    render() {
        var doctorData = this.state.doctorData
        doctorData = doctorData.map((val, index) => {
            return (
                <tr>
                    <td className="py-1">
                        <img src={'http://localhost:4444/public/' + val.image} alt="image" style={{ 'height': '100px', 'width': '100px' }} />
                    </td>
                    <td>{val.name}</td>
                    <td>{val.gender}</td>
                    <td>{val.department}</td>
                    <td>{val.phone}</td>
                    <td>{val.location}</td>
                    <td>{val.description}</td>
                    <td>{val.rating}</td>
                    <td><a class="btn btn-danger" href="/delete/{{this._id}}"><span class="mdi mdi-delete" aria-hidden="true"></span></a>
                        <a class="btn btn-primary" href="/update/{{this._id}}"><span class="mdi mdi-lead-pencil" aria-hidden="true"></span></a></td>
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">List of Doctors</h1>

                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addDoctor'>
                            <i className="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Doctor
                        </button>

                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Image</b></th>
                                        <th><b>Doctor Name</b></th>
                                        <th><b>Gender</b></th>
                                        <th><b>Department</b></th>
                                        <th><b>Phone</b></th>
                                        <th><b>Location</b></th>
                                        <th><b>Description</b></th>
                                        <th><b>Rating</b></th>
                                        <th><b>Action</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        doctorData
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="addDoctor" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Doctor</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={this.state.message == "" ? "alert alert-success d-none" : "alert alert-success"}>{this.state.message}</div>
                                <form className="form-horizontal add-admin" >
                                    <span id="err"></span>
                                    <div className="forms-sample text-dark">

                                        <div className="form-group row">
                                            <label for="name" className="col-sm-3 col-form-label">Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="name" ref="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="gender" className="col-sm-3 col-form-label">Gender</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="gender" ref="gender" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="department" className="col-sm-3 col-form-label">Department</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="department" ref="department" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="phone" className="col-sm-3 col-form-label">Phone</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="phone" ref="phone" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="description" className="col-sm-3 col-form-label">Description</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="description" ref="description" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="location" className="col-sm-3 col-form-label">Location</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="location" ref="location" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="rating" className="col-sm-3 col-form-label">Rating</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="rating" ref="rating" />
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

export default GetDoctors