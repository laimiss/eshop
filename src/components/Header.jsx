import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React e-shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basics-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className="nav-link" to="/">About</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to="products">Products</Link></Nav.Link>
                        <Nav.Link><Link className="nav-link" to="cart">Cart</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Header
