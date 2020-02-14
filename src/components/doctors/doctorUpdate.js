import React, { Component } from 'react'
import Axios from 'axios'
import { Modal } from 'react-bootstrap'

export class DoctorUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.updateDoctor._id,
            name: this.props.updateDoctor.name,
            gender: this.props.updateDoctor.gender,
            department: this.props.updateDoctor.department,
            phone: this.props.updateDoctor.phone,
            description: this.props.updateDoctor.description,
            location: this.props.updateDoctor.location,
            rating: this.props.updateDoctor.rating,
            setShow: false,
            show: false
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        var name = this.state.name
        var gender = this.state.gender
        var department = this.state.department
        var phone = this.state.phone
        var description = this.state.description
        var location = this.state.location
        var rating = this.state.rating
        var image = this.refs.image.files[0]

        var data = new FormData()
        data.append('name', name)
        data.append('gender', gender)
        data.append('department', department)
        data.append('phone', phone)
        data.append('description', description)
        data.append('location', location)
        data.append('rating', rating)
        data.append('image', image)

        var user_token = sessionStorage.getItem('user_token')
        var config = {
            headers: {
                'Authorization': user_token,
                'Accept': 'multipart/form-data'
            }
        }

        Axios.put('http://localhost:4444/updatedoctor/' + this.state.id, data, config)
            .then((res) => {
                window.location.reload();
            })
    }

    handleClose = () => {
        this.setState({
            setShow: false,
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            setShow: true,
            show: true
        })
    }
    render() {
        return (
            <>
                <button class="btn btn-small btn-primary" onClick={this.handleShow}>
                    <i class="mdi mdi-lead-pencil" aria-hidden="true"></i>
                </button>
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Doctor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="forms-sample text-dark">
                                <div className="form-group row">
                                    <label for="name" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} ref="doctorName" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="gender" className="col-sm-3 col-form-label">Gender</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.gender} onChange={(event) => this.setState({ gender: event.target.value })} ref="doctorGender" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="department" className="col-sm-3 col-form-label">Department</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.department} onChange={(event) => this.setState({ department: event.target.value })} ref="department" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="phone" className="col-sm-3 col-form-label">Phone</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.phone} onChange={(event) => this.setState({ phone: event.target.value })} ref="doctorPhone" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="description" className="col-sm-3 col-form-label">Description</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} ref="description" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="location" className="col-sm-3 col-form-label">Location</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.location} onChange={(event) => this.setState({ location: event.target.value })} ref="doctorLocation" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="rating" className="col-sm-3 col-form-label">Rating</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.rating} onChange={(event) => this.setState({ rating: event.target.value })} ref="rating" />
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
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default DoctorUpdate
