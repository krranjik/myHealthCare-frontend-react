import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="container-scroller">

                <div className="horizontal-menu">
                    <nav className="navbar top-navbar col-lg-12 col-12 p-0">
                        <div className="container-fluid">
                            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                                <ul className="navbar-nav navbar-nav-left">
                                    <li className="nav-item ml-0 mr-5 d-lg-flex d-none">
                                        <a href="#" className="nav-link horizontal-nav-left-menu"><i className="mdi mdi-format-list-bulleted"></i></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-bell mx-0"></i>
                                            <span className="count bg-success">2</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-success">
                                                        <i className="mdi mdi-information mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                                    <p className="font-weight-light small-text mb-0 text-muted">
                                                        Just now
                        </p>
                                                </div>
                                            </a>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-warning">
                                                        <i className="mdi mdi-settings mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                                                    <p className="font-weight-light small-text mb-0 text-muted">
                                                        Private message
                        </p>
                                                </div>
                                            </a>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-info">
                                                        <i className="mdi mdi-account-box mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                                    <p className="font-weight-light small-text mb-0 text-muted">
                                                        2 days ago
                        </p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-email mx-0"></i>
                                            <span className="count bg-primary">4</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                            <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                        </h6>
                                                    <p className="font-weight-light small-text text-muted mb-0">
                                                        The meeting is cancelled
                        </p>
                                                </div>
                                            </a>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                        </h6>
                                                    <p className="font-weight-light small-text text-muted mb-0">
                                                        New product launch
                        </p>
                                                </div>
                                            </a>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                        </h6>
                                                    <p className="font-weight-light small-text text-muted mb-0">
                                                        Upcoming board meeting
                        </p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link count-indicator "><i className="mdi mdi-message-reply-text"></i></a>
                                    </li>
                                    <li className="nav-item nav-search d-none d-lg-block ml-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="search">
                                                    <i className="mdi mdi-magnify"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="search" />
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                                    <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo.svg" alt="logo" /></a>
                                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                                </div>
                                <ul className="navbar-nav navbar-nav-right">
                                    <li className="nav-item dropdown  d-lg-flex d-none">
                                        <button type="button" className="btn btn-inverse-primary btn-sm">Product </button>
                                    </li>
                                    <li className="nav-item dropdown d-lg-flex d-none">
                                        <a className="dropdown-toggle show-dropdown-arrow btn btn-inverse-primary btn-sm" id="nreportDropdown" href="#" data-toggle="dropdown">
                                            Reports
                  </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="nreportDropdown">
                                            <p className="mb-0 font-weight-medium float-left dropdown-header">Reports</p>
                                            <a className="dropdown-item">
                                                <i className="mdi mdi-file-pdf text-primary"></i>
                                                Pdf
                      </a>
                                            <a className="dropdown-item">
                                                <i className="mdi mdi-file-excel text-primary"></i>
                                                Exel
                      </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown d-lg-flex d-none">
                                        <button type="button" className="btn btn-inverse-primary btn-sm">Settings</button>
                                    </li>
                                    <li className="nav-item nav-profile dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                            <span className="nav-profile-name">Welcome, Admin</span>
                                            <span className="online-status"></span>
                                            <img src="images/kritik.jpg" alt="profile" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                            <a className="dropdown-item">
                                                <i className="mdi mdi-settings text-primary"></i>
                                                Settings
                      </a>
                                            <a className="dropdown-item">
                                                <i className="mdi mdi-logout text-primary"></i>
                                                Logout
                      </a>
                                        </div>
                                    </li>
                                </ul>
                                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                                    <span className="mdi mdi-menu"></span>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <nav className="bottom-navbar">
                        <div className="container">
                            <ul className="nav page-navigation">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <i className="mdi mdi-view-dashboard menu-icon"></i>
                                        <span className="menu-title">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="mdi mdi-account menu-icon"></i>
                                        <span className="menu-title">Patients</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/basic_elements.html" className="nav-link">
                                        <i className="mdi mdi-account-star menu-icon"></i>
                                        <span className="menu-title">Doctors</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/chartjs.html" className="nav-link">
                                        <i className="mdi mdi-file-document menu-icon"></i>
                                        <span className="menu-title">Medical Reports</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/basic-table.html" className="nav-link">
                                        <i className="mdi mdi-clipboard-text menu-icon"></i>
                                        <span className="menu-title">Prescriptions</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/icons/mdi.html" className="nav-link">
                                        <i className="mdi mdi-calendar-plus menu-icon"></i>
                                        <span className="menu-title">Appointment</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }

}

export default Header