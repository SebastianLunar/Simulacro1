import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="https://www.millbornseeds.com/wp-content/uploads/2020/03/Primal-Logo-Full-Color.jpg"
                            width="100px"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        <Nav.Link href="/list">Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;