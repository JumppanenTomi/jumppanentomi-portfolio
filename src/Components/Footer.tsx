import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap";
import {faPepperHot} from "@fortawesome/free-solid-svg-icons/faPepperHot";
import {faFontAwesome} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col className={"footer-row"}>
                    <h3>
                        Soita <a href={"tel:+358404868621"}>+358 404868621</a>
                        <br/>
                        tai
                        <br/>
                        Laita viestiä <a href={"mailto:tomi.jumppanen@hotmail.com"}>tomi.jumppanen@hotmail.com</a>
                    </h3>
                </Col>
            </Row>
            <Row className={"footer-row"}>
                <span>Made with <a href={"https://react.dev/"} target={"_blank"}>React <FontAwesomeIcon icon={faReact} color={"#61DBFB"}/></a>, <a
                    href={"https://react-bootstrap.netlify.app/"} target={"_blank"}>React Bootstrap <FontAwesomeIcon icon={faBootstrap}
                                                                                                   color={"#563d7c"}/></a>, <a
                    href={"https://react-bootstrap.netlify.app/"} target={"_blank"}>Font Awesome <FontAwesomeIcon icon={faFontAwesome}
                                                                                                   color={"#538dd7"}/></a> and added some <FontAwesomeIcon
                    icon={faPepperHot} color={"#ff0000"}/></span>
            </Row>
        </Container>
    )
}