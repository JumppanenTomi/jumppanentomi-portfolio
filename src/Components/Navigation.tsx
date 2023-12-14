import {Container, Nav, Navbar} from "react-bootstrap";
import Socials from "./Socials.tsx";
import {faBurger} from "@fortawesome/free-solid-svg-icons/faBurger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navigation() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tomi Jumppanen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" children={<FontAwesomeIcon icon={faBurger} color={"#fff"}/>}/>
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