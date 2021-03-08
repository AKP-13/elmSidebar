import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";

function NavBar() {
    return (
        <Nav
            defaultActiveKey="/overview"
            className="nav flex-column"
            // aria-orientation="vertical"
        >
            <Navbar.Brand>elm</Navbar.Brand>{" "}
            <Nav.Link eventKey="link-1" href="/overview">
                Overview
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/asda">
                Asda
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/bp">
                BP
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/morrisons">
                Morrisons
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/sainsburys">
                Sainsbury's
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/tesco">
                Tesco
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/waitrose">
                Waitrose
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/addDataConnection">
                Add Data Connection
            </Nav.Link>
            <Nav.Link eventKey="link-2" href="/settings">
                Settings
            </Nav.Link>
        </Nav>
    );
}

export default NavBar;
