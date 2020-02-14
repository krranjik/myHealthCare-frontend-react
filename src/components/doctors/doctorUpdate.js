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
                        <Modal.Title>Update Patient</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit.bind(this)}>

                        </form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default DoctorUpdate
