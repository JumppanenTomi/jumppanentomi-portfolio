import {Container, Nav, Navbar} from "react-bootstrap";
import {faBurger} from "@fortawesome/free-solid-svg-icons/faBurger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Socials from "./Socials.tsx";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

export default function Navigation() {
    const {t} = useTranslation();

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tomi Jumppanen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   children={<FontAwesomeIcon icon={faBurger} color={"#fff"}/>}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">{t("home")}</Nav.Link>
                            <Nav.Link href="#bio">{t("bio")}</Nav.Link>
                            <Nav.Link href="#projects">{t("projects")}</Nav.Link>
                            <Nav.Link href="#contact">{t("contact")}</Nav.Link>
                        </Nav>
                        <Socials/>
                        <Nav>
                            <LanguageSwitcher/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}