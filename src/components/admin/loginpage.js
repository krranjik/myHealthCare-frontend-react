import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
    }

    handleRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    login = (event) => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        event.preventDefault();
        Axios.post('http://localhost:4444/userlogin', data)
            .then(res => {

                sessionStorage.setItem("user_token", res.data.token)
                sessionStorage.setItem("user_username", res.data.username)
                this.setState({ redirect: true })

            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container-scroller">
                {this.handleRedirect()}
                <div classNameName="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper d-flex align-items-center auth px-0">
                            <div className="row w-100 mx-0">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                        <div className="brand-logo text-center">
                                            <img src={require("../../assets/images/appLogo.png")} alt="logo" />
                                        </div>
                                        <h4>Hello! let's get started</h4>
                                        <h6 className="font-weight-light">Sign in to continue.</h6>
                                        <form className="pt-3">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1"
                                                    placeholder="Username" value={this.state.username}
                                                    onChange={(event) => this.setState({ username: event.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1"
                                                    placeholder="Password" value={this.state.password}
                                                    onChange={(event) => this.setState({ password: event.target.value })} />
                                            </div>
                                            <div className="mt-3">
                                                <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                                    onClick={this.login}>SIGN IN</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage