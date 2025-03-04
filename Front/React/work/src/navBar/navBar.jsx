import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
                <Navbar.Brand as={NavLink} 
                to={"/"}
                className="ms-lg-5 ms-3 pb-2 pt-0  navTitle fs-2">Work Net</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav " style={{
                    width: "100%"
                }} >
                    <Nav className="me-auto ms-3 ">
                        <Nav.Link as={NavLink} to={"/"} className="navbarLink" >Home</Nav.Link>
                        <Nav.Link as={NavLink} to={"/Service"} className="navbarLink">Service</Nav.Link>
                        <Nav.Link as={NavLink} to={"/ProductPage"} className="navbarLink">Product</Nav.Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="ms-3 ms-lg-0 navbarLink">Contact us</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="ms-3 ms-lg-0 navbarLink">
                            pannel admin
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


