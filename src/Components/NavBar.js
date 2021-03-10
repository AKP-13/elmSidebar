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

import { arrayOfClients } from "../data/clients";

class NavBar extends Component {
    state = {
        showNav: false,
    };

    // Two different functions rather than a toggle for more control on when to call each one
    showNav = () => {
        this.setState({ showNav: true });
    };

    hideNav = () => {
        this.setState({ showNav: false });
    };

    render() {
        return (
            // Sidebar
            <Nav
                onMouseLeave={this.hideNav}
                className={`flex-column${
                    this.state.showNav ? " navExpand" : ""
                }`}
            >
                {/* ICONS FROM ELM LOGO DOWN TO ADD DATA CONNECTIONS LINK */}
                <div id="clientLinks">
                    <Navbar.Brand id={this.state.showNav ? "center" : ""}>
                        {this.state.showNav ? "elm" : "e"}
                    </Navbar.Brand>

                    {/* DROPDOWN MENU */}
                    <NavDropdown
                        onMouseEnter={this.showNav}
                        rootCloseEvent="mousedown"
                        title={
                            this.state.showNav ? (
                                <span>
                                    <Icon icon={bxsHome} /> Overview
                                </span>
                            ) : (
                                <span>
                                    <Icon icon={bxsHome} />
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

                    {/* CLIENT LINKS */}
                    {arrayOfClients.map((item, idx) => {
                        return (
                            <NavLink
                                key={idx}
                                to={`/${item.toLowerCase()}`}
                                activeClassName="activeLink"
                            >
                                {this.state.showNav ? (
                                    <span>
                                        <Icon
                                            onMouseEnter={this.showNav}
                                            icon={tagIcon}
                                        />{" "}
                                        {`${item}`}
                                    </span>
                                ) : (
                                    <div
                                        onMouseEnter={this.showNav}
                                        className="circle"
                                    >
                                        {`${item.substring(0, 2)}`}
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}

                    {/* ADD DATA CONNECTION */}
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

                {/* SETTINGS LINK */}
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
