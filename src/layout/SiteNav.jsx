import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function SiteNav() {
    return (
        <Navbar expand="md" className="bg-secondary">
            <Container>
                <NavLink className='navbar-brand' to="/">Home</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className='nav-link' to="/todo">Todo</NavLink>
                        <NavLink className='nav-link' to="/products">Products</NavLink>
                        <NavLink className='nav-link' to="/cart">Cart</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;