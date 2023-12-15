import {Col, Container, Row} from "react-bootstrap";
import tomi from '../assets/tomi.jpg'
import ShellText from "./ShellText.tsx";

export default function Hero() {
    return (
        <Container>
            <Row style={{minHeight: "60vh", alignContent: "center",  justifyContent: "center", textAlign: "center", marginTop: 100}}>
                <Col xs={12}>
                    <img src={tomi} className={"roundImage cool-shadow moving"}/>
                </Col>
                <Col xs={12}>
                    <h1>Tervetuloa!</h1>
                </Col>
                <Col xs={12} className={"card"}>
                    <ShellText text={"# Moikka olen Tomi, viimeisen vuoden Tieto- ja viestintätekniikan insinööriopiskelija Helsingistä."} duration={3000}/>
                </Col>
            </Row>
        </Container>
    );
}