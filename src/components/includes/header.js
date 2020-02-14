import React from "react";
import { Link } from 'react-router-dom';

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
                                </ul>
                                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                                    <a className="navbar-brand brand-logo" href="#"><img src="images/appLogo.png" alt="logo" /></a>
                                    <a className="navbar-brand brand-logo-mini" href="#"><img src="images/appLogo.png" alt="logo" /></a>
                                </div>
                                <ul className="navbar-nav navbar-nav-right">
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
                                    <a className="nav-link" href="#">
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
                                    <a href="#" className="nav-link">
                                        <i className="mdi mdi-account-star menu-icon"></i>
                                        <span className="menu-title">Doctors</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="mdi mdi-file-document menu-icon"></i>
                                        <span className="menu-title">Medical Reports</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="mdi mdi-clipboard-text menu-icon"></i>
                                        <span className="menu-title">Prescriptions</span>
                                        <i className="menu-arrow"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
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