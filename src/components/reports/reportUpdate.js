import React, { Component } from 'react'
import Axios from 'axios'
import { Modal } from 'react-bootstrap'

export class ReportUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            setShow: false,
            show: false
        }
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
                        <Modal.Title>Update Report</Modal.Title>
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

export default ReportUpdate