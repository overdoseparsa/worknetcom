import React, { Component } from 'react'
import { Container, Navbar , Nav , NavDropdown , Form , Button} from 'react-bootstrap'
import "bootstrap"

export default class NavBar extends Component {
  render() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary px-5" fixed='top'>
            <Container fluid>
            <Navbar.Brand href="#" className='ms-5' style={{fontSize:'30px'}}>Work-Net</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='ms-4'>
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1" className='fs-4'>Home</Nav.Link>
                <Nav.Link href="#action2" className='fs-4'>Link</Nav.Link>
                <NavDropdown title="Link" className='fs-4' id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" >
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" >
                    Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#"className='fs-4'>
                    Link
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
}
}
