import React from 'react';
import Axios from 'axios';

class GetReport extends React.Component {
    render() {
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