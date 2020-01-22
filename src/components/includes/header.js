import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="t-header">
                    <div className="t-header-brand-wrapper">
                        <a href="index.html">
                            <img className="logo" src="../assets/images/logo.svg" alt="" />
                            <img className="logo-mini" src="../assets/images/logo_mini.svg" alt="" />
                        </a>
                    </div>
                    <div className="t-header-content-wrapper">
                        <div className="t-header-content">
                            <button className="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <form action="#" className="t-header-search-box">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" autocomplete="off" />
                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-arrow-right-thick"></i></button>
                                </div>
                            </form>
                            <ul className="nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="notificationDropdown" data-toggle="dropdown" aria-expanded="false">
                                        <i className="mdi mdi-bell-outline mdi-1x"></i>
                                    </a>
                                    <div className="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="notificationDropdown">
                                        <div className="dropdown-header">
                                            <h6 className="dropdown-title">Notifications</h6>
                                            <p className="dropdown-title-text">You have 4 unread notification</p>
                                        </div>
                                        <div className="dropdown-body">
                                            <div className="dropdown-list">
                                                <div className="icon-wrapper rounded-circle bg-inverse-primary text-primary">
                                                    <i className="mdi mdi-alert"></i>
                                                </div>
                                                <div className="content-wrapper">
                                                    <small className="name">Storage Full</small>
                                                    <small className="content-text">Server storage almost full</small>
                                                </div>
                                            </div>
                                            <div className="dropdown-list">
                                                <div className="icon-wrapper rounded-circle bg-inverse-success text-success">
                                                    <i className="mdi mdi-cloud-upload"></i>
                                                </div>
                                                <div className="content-wrapper">
                                                    <small className="name">Upload Completed</small>
                                                    <small className="content-text">3 Files uploded successfully</small>
                                                </div>
                                            </div>
                                            <div className="dropdown-list">
                                                <div className="icon-wrapper rounded-circle bg-inverse-warning text-warning">
                                                    <i className="mdi mdi-security"></i>
                                                </div>
                                                <div className="content-wrapper">
                                                    <small className="name">Authentication Required</small>
                                                    <small className="content-text">Please verify your password to continue using cloud services</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-footer">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="appsDropdown" data-toggle="dropdown" aria-expanded="false">
                                        <i className="mdi mdi-apps mdi-1x"></i>
                                    </a>
                                    <div className="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
                                        <div className="dropdown-header">
                                            <h6 className="dropdown-title">Apps</h6>
                                            <p className="dropdown-title-text mt-2">Authentication required for 3 apps</p>
                                        </div>
                                        <div className="dropdown-body border-top pt-0">
                                            <a className="dropdown-grid">
                                                <i className="grid-icon mdi mdi-jira mdi-2x"></i>
                                                <span className="grid-tittle">Jira</span>
                                            </a>
                                            <a className="dropdown-grid">
                                                <i className="grid-icon mdi mdi-trello mdi-2x"></i>
                                                <span className="grid-tittle">Trello</span>
                                            </a>
                                            <a className="dropdown-grid">
                                                <i className="grid-icon mdi mdi-artstation mdi-2x"></i>
                                                <span className="grid-tittle">Artstation</span>
                                            </a>
                                            <a className="dropdown-grid">
                                                <i className="grid-icon mdi mdi-bitbucket mdi-2x"></i>
                                                <span className="grid-tittle">Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="dropdown-footer">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="sidebar" style={{ minHeight: 0  }}>
                    <div className="user-profile">
                        <div className="display-avatar animated-avatar">
                            <img className="profile-img img-lg rounded-circle" src="/images/profile/male/image_1.png" alt="profile image" />
                        </div>
                        <div className="info-wrapper">
                            <p className="user-name">Welcome, Admin</p>
                        </div>
                    </div>
                    <ul className="navigation-menu">
                        <li className="nav-category-divider">MAIN</li>
                        <li>
                            <a href="index.html">
                                <span className="link-title">Dashboard</span>
                                <i className="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>

                        <li>
                            <a href="pages/forms/form-elements.html">
                                <span className="link-title">Patients</span>
                                <i className="fas fa-users link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="pages/charts/chartjs.html">                              <span className="link-title">Doctors</span>
                                <i className="fas fa-user-md link-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#sample-pages" data-toggle="collapse" aria-expanded="false">
                                <span className="link-title">Reports</span>
                                <i className="fas fa-file-alt link-icon"></i>
                            </a>
                            <ul className="collapse navigation-submenu" id="sample-pages">
                                <li>
                                    <a href="pages/sample-pages/login_1.html" target="_blank">Medical Reports</a>
                                </li>
                                <li>
                                    <a href="pages/sample-pages/error_2.html" target="_blank">Prescriptions</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#ui-elements" data-toggle="collapse" aria-expanded="false">
                                <span className="link-title">Appointment</span>
                                <i className="fas fa-calendar-check link-icon"></i>

                            </a>
                            <ul className="collapse navigation-submenu" id="ui-elements">
                                <li>
                                    <a href="pages/ui-components/buttons.html">Requested Appointment</a>
                                </li>
                                <li>
                                    <a href="pages/ui-components/tables.html">Appointment List</a>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-category-divider">SITE SETTINGS</li>
                        <li>
                            <a href="../docs/docs.html">
                                <span className="link-title">Settings</span>
                                <i className="fas fa-cog link-icon"></i>
                            </a>
                        </li>

                        <li>
                            <a href="../docs/docs.html">
                                <span className="link-title">Logout</span>
                                <i className="fas fa-sign-out-alt link-icon"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>


        )
    }

}

export default Header