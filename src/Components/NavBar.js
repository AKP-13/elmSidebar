import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";
import { Icon } from "@iconify/react";
import bxsHome from "@iconify-icons/bx/bxs-home";
import plusOutlined from "@iconify-icons/ant-design/plus-outlined";
import settings28Filled from "@iconify-icons/fluent/settings-28-filled";

function NavBar() {
    return (
        <Nav
            defaultActiveKey="/overview"
            className="nav flex-column"
            // aria-orientation="vertical"
        >
            <Navbar.Brand>e</Navbar.Brand>{" "}
            <Nav.Link eventKey="link-1" href="/overview">
                <Icon icon={bxsHome} />{" "}
                <span className="expandableName">- Overview</span>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/asda">
                <div className="circle">As</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/bp">
                <div className="circle">Bp</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/morrisons">
                <div className="circle">Mo</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/sainsburys">
                <div className="circle">Sa</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/tesco">
                <div className="circle">Te</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/waitrose">
                <div className="circle">Wa</div>
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/addDataConnection">
                <Icon icon={plusOutlined} />
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/settings">
                <Icon icon={settings28Filled} />
            </Nav.Link>
        </Nav>
    );
}

export default NavBar;
