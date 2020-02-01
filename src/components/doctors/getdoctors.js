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
                        <img src={'http://localhost:4444/public/'+val.image} alt="image" style={{'height': '100px', 'width': '100px'}}/>
                    </td>
                    <td>{val.name}</td>
                    <td>{val.department}</td>
                    <td>{val.phone}</td>
                    <td>{val.location}</td>
                    <td>{val.description}</td>
                    <td>{val.rating}</td>
                </tr>
            )
        })
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title float-left">List of Doctors</h1>

                        <button type="button" class="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addDoctor'>
                            <i class="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Doctor
                        </button>

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>
                                            Image
                          </th>
                                        <th>
                                            Doctor Name
                          </th>
                                        <th>
                                            Department
                          </th>
                                        <th>
                                            Phone
                          </th>
                                        <th>
                                            Location
                          </th>
                                        <th>
                                            Description
                          </th>
                                        <th>
                                            Rating
                          </th>
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
                                    <div className="form-group">
                                        <label htmlFor="fname">Name</label>
                                        <input type="text" className="form-control" ref='name' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fname">Department</label>
                                        <input type="text" className="form-control" ref='department' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fname">Phone</label>
                                        <input type="text" className="form-control" ref='phone' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fname">Description</label>
                                        <input type="text" className="form-control" ref='description' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fname">Location</label>
                                        <input type="text" className="form-control" ref='location' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fname">Rating</label>
                                        <input type="text" className="form-control" ref='rating' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" accept='*' class="form-control-file" id="exampleFormControlFile1" ref='image' />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="addContentbutton" className="btn btn-dark">Submit</button>
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