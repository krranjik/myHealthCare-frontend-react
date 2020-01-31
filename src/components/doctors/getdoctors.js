import React from 'react';

class GetDoctors extends React.Component {
    render() {
        return (
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center">List of Doctors</h1>
                        
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
                                    <tr>
                                        <td className="py-1">
                                            <img src="../../public/images/kritik.jpg" alt="image" />
                                        </td>
                                        <td>
                                            Kritik Ranjit
                          </td>
                                        <td>
                                            Emergency
                                        </td>
                                        <td>
                                            +977 9860841830
                          </td>
                                        <td>
                                            Chagal, Tahachal
                          </td>
                                        <td>
                                            Head Doctor
                          </td>
                                        <td>
                                            4.5
                          </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetDoctors