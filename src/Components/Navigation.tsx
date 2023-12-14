import {Container, Nav, Navbar} from "react-bootstrap";
import Socials from "./Socials.tsx";

export default function Navigation() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tomi Jumppanen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Koti</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                        </Nav>
                        <Socials/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}