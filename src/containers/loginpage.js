import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <center>
                        <div className="middle">
                            <div id="login">
                                <h1>LOGIN</h1><br />
                                <form action="javascript:void(0);" method="get">
                                    <fieldset className="clearfix">
                                        <p ><span className="fa fa-user"></span><input type="text" Placeholder="Username" required /></p>
                                        <p><span className="fa fa-lock"></span><input type="password" Placeholder="Password" required /></p>
                                        <div>
                                            <span style={{ width: 48, textAlign: 'left', display: 'inlineBlock' }}><a className="small-text" href="#">Forgot
                                password?</a></span>
                                            <span style={{ width: 50, textAlign: 'right', display: 'inlineBlock' }}><br /><br /><input type="submit" value="Sign In" /></span>
                                        </div>
                                    </fieldset>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                            <div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}

export default LoginPage