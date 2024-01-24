import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {faBurger} from "@fortawesome/free-solid-svg-icons/faBurger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Socials from "./Socials.tsx";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigation() {
    const {t} = useTranslation();

    const CenteredNavLink = ({id, children}: { id: string, children: any }) => {
        return (
            <Nav.Link
                onClick={(e) => {
                    e.preventDefault();

                    const target = document.getElementById(id);
                    if (target) {
                        const viewportHeight = window.innerHeight;
                        const elementTop = target.getBoundingClientRect().top;
                        const elementHeight = target.getBoundingClientRect().height;
                        const scrollPosition =
                            window.scrollY +
                            elementTop -
                            viewportHeight / 2 +
                            elementHeight / 2;

                        window.scrollTo({top: scrollPosition, behavior: "smooth"});
                    }
                }}
                href={`#${id}`}
            >
                {children}
            </Nav.Link>
        );
    };

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
                        <Offcanvas.Header closeButton closeVariant={"white"}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Tomi Jumppanen
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Container>
                                <Row className={"mobile-menu"}>
                                    <Col xs={12} lg={"auto"}>
                                        <Nav className="me-auto">
                                            <CenteredNavLink id="home">{t("home")}</CenteredNavLink>
                                            <CenteredNavLink id="bio">{t("bio")}</CenteredNavLink>
                                            <CenteredNavLink id="projects">{t("projects")}</CenteredNavLink>
                                            <CenteredNavLink id="contact">{t("contact")}</CenteredNavLink>
                                        </Nav>
                                    </Col>
                                    <Col/>
                                    <Col xs={12} lg={"auto"}>
                                        <LanguageSwitcher/>
                                    </Col>
                                    <Col xs={12} lg={"auto"}
                                         style={{alignItems: "center", justifyContent: "end", display: "flex"}}>
                                        <Socials/>
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