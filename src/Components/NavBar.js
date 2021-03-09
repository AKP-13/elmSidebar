import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
                <Navbar.Brand>e</Navbar.Brand>{" "}
                <NavLink to="/overview" activeClassName="activeLink">
                    <Icon onMouseEnter={this.showNav} icon={bxsHome} />
                </NavLink>
                <NavLink to="/asda" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            As
                        </div>
                    )}
                </NavLink>
                <NavLink to="/bp" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            Bp
                        </div>
                    )}
                </NavLink>
                <NavLink to="/morrisons" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            Mo
                        </div>
                    )}
                </NavLink>
                <NavLink to="/sainsburys" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            Sa
                        </div>
                    )}
                </NavLink>
                <NavLink to="/tesco" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            Te
                        </div>
                    )}
                </NavLink>
                <NavLink to="/waitrose" activeClassName="activeLink">
                    {this.state.showNav ? (
                        <Icon onMouseEnter={this.showNav} icon={tagIcon} />
                    ) : (
                        <div onMouseEnter={this.showNav} className="circle">
                            Wa
                        </div>
                    )}
                </NavLink>
                <NavLink to="/addDataConnection">
                    <Icon onMouseEnter={this.showNav} icon={plusOutlined} />
                </NavLink>
                <NavLink to="/settings" activeClassName="activeLink">
                    <Icon onMouseEnter={this.showNav} icon={settings28Filled} />
                </NavLink>
            </Nav>
        );
    }
}

export default NavBar;
