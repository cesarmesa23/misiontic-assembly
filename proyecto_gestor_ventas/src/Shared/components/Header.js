import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    return(

        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Assembly</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/RegistroVentas">Registro de Ventas</Nav.Link>
                <Nav.Link href="/ListadoVentas">Listado de Ventas</Nav.Link>
                <Nav.Link href="/RegistroProductos">Registro de Productos</Nav.Link>                
                <Nav.Link href="/ListadoProductos">Listado de Productos</Nav.Link>
                <Nav.Link href="/GestionUsuarios">Gestión de Usuarios</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;