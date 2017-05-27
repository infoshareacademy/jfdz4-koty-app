import  'react-bootstrap'
import  from'bootstrap'


const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Zaloguj się</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbarInstance