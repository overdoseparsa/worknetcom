import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import "./navBar.css";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                collapseOnSelect expand="lg"
                className={`customNavbar ${scrolled ? "scrolled" : ""} pb-2 pt-3 `}
                fixed="top"
            >
                <Navbar.Brand href="#home" className="ms-lg-5 ms-3 pb-2 pt-0  navTitle fs-2">Work Net</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav " style={{
                    width: "100%"
                }} >
                    <Nav className="me-auto ms-3 ">
                        <Nav.Link href="../Home/Home.jsx" className="navbarLink" >Home</Nav.Link>
                        <Nav.Link href="#pricing" className="navbarLink">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" className="navbarLink">
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="ms-3 ms-lg-0 navbarLink">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="ms-3 ms-lg-0 navbarLink">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="mx-3 mb-lg-0 mb-sm-3 searchForm"
                            aria-label="Search"
                            style={{ backgroundColor: "lightgray" }}
                        />
                        <Button variant="outline-success" className="me-5 mb-lg-0 mb-sm-3 fs-5">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


