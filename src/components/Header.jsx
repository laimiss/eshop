import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React e-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basics-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Produktai</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Header
