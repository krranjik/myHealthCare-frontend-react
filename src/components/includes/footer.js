import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <div>
                <footer className="footer">
                    <div className="row">
                        <div className="col-sm-6 text-center text-sm-right order-sm-1">
                            <ul className="text-gray">
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
                            <small className="text-muted d-block">myHealth Care © 2020. All rights reserved</small>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer