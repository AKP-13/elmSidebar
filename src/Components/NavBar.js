import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/navbar.css";
import { Icon } from "@iconify/react";
import bxsHome from "@iconify-icons/bx/bxs-home";
import plusOutlined from "@iconify-icons/ant-design/plus-outlined";
import settings28Filled from "@iconify-icons/fluent/settings-28-filled";
import tagIcon from "@iconify-icons/fa-solid/tag";

class NavBar extends Component {
    state = {
        showNav: false,
    };

    showNav = () => {
        this.setState({ showNav: true });
    };

    hideNav = () => {
        this.setState({ showNav: false });
    };

    render() {
        return (
            <Nav
                onMouseLeave={this.hideNav}
                className={`flex-column${
                    this.state.showNav ? " navExpand" : ""
                }`}
            >
                <div id="clientLinks">
                    <Navbar.Brand>e</Navbar.Brand>{" "}
                    <NavDropdown
                        onMouseEnter={this.showNav}
                        rootCloseEvent="mousedown"
                        title={
                            this.state.showNav ? (
                                <span>
                                    <Icon
                                        // onMouseEnter={this.showNav}
                                        icon={bxsHome}
                                    />{" "}
                                    Overview
                                </span>
                            ) : (
                                <span>
                                    <Icon
                                        // onMouseEnter={this.showNav}
                                        icon={bxsHome}
                                    />
                                </span>
                            )
                        }
                        id="nav-dropdown"
                    >
                        <NavLink to="/overview" activeClassName="activeLink">
                            {this.state.showNav ? <span>Overview</span> : ""}
                        </NavLink>
                        <NavLink to="/overview" activeClassName="activeLink">
                            {this.state.showNav ? (
                                <span>Rate of Sale</span>
                            ) : (
                                ""
                            )}
                        </NavLink>
                        <NavLink to="/overview" activeClassName="activeLink">
                            {this.state.showNav ? <span>Discounts</span> : ""}
                        </NavLink>
                    </NavDropdown>
                    <NavLink to="/asda" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                Asda
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                As
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/bp" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                BP
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                BP
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/morrisons" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                Morrisons
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                Mo
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/sainsburys" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                Sainsbury's
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                Sa
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/tesco" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                Tesco
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                Te
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/waitrose" activeClassName="activeLink">
                        {this.state.showNav ? (
                            <span>
                                <Icon
                                    onMouseEnter={this.showNav}
                                    icon={tagIcon}
                                />{" "}
                                Waitrose
                            </span>
                        ) : (
                            <div onMouseEnter={this.showNav} className="circle">
                                Wa
                            </div>
                        )}
                    </NavLink>
                    <NavLink
                        to="/addDataConnection"
                        activeClassName="activeLink"
                    >
                        <Icon onMouseEnter={this.showNav} icon={plusOutlined} />{" "}
                        {this.state.showNav ? (
                            <span>Add Data Connection</span>
                        ) : (
                            ""
                        )}
                    </NavLink>
                </div>
                <div id="settingsLink">
                    <NavLink to="/settings" activeClassName="activeLink">
                        <Icon
                            onMouseEnter={this.showNav}
                            icon={settings28Filled}
                        />
                    </NavLink>
                </div>
            </Nav>
        );
    }
}

export default NavBar;
