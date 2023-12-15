import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {faBurger} from "@fortawesome/free-solid-svg-icons/faBurger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Socials from "./Socials.tsx";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigation() {
    const {t} = useTranslation();

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tomi Jumppanen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   children={<FontAwesomeIcon icon={faBurger} color={"#fff"} size={"lg"}/>}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Tomi Jumppanen
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Container>
                                <Row className={"align-content-between"}>
                                    <Col xs={12} lg={"auto"}>
                                        <Nav className="me-auto">
                                            <Nav.Link className={"collapse-nav-item"}
                                                      href="#home">{t("home")}</Nav.Link>
                                            <Nav.Link href="#bio">{t("bio")}</Nav.Link>
                                            <Nav.Link href="#projects">{t("projects")}</Nav.Link>
                                            <Nav.Link href="#contact">{t("contact")}</Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col/>
                                    <Col xs={12} lg={"auto"} style={{alignItems: "center", display: "flex"}}>
                                        <Socials/>
                                    </Col>
                                    <Col xs={12} lg={"auto"}>
                                        <LanguageSwitcher/>
                                    </Col>
                                </Row>
                            </Container>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}