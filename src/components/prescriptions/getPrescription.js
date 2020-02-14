import React from 'react';
import Axios from 'axios';

class GetPrescription extends React.Component {
    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card" >
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">List of Prescriptions</h1>
                        <button type="button" className="float-right btn btn-dark btn-icon-text" data-toggle='modal' data-target='#addPrescription'>
                            <i className="mdi mdi-account-plus btn-icon-prepend"></i>
                            Add Prescription
                        </button>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center table-hover text-dark">
                                <thead>
                                    <tr>
                                        <th><b>Patient Name</b></th>
                                        <th><b>Doctor Name</b></th>
                                        <th><b>Start Date</b></th>
                                        <th><b>End Date</b></th>
                                        <th><b>Medicine Name</b></th>
                                        <th><b>Morning Time</b></th>
                                        <th><b>Day Time</b></th>
                                        <th><b>Night Time</b></th>
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

export default GetPrescription