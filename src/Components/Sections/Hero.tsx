import {Button, ButtonToolbar, Col, Container, Row} from "react-bootstrap";
import tomi from '../../assets/tomi.jpg'
import ShellText from "../SmallElements/ShellText.tsx";
import {useTranslation} from "react-i18next";
import fiCv from "../../assets/tomi-jumppanen-cv-fi.pdf";
import enCv from "../../assets/tomi-jumppanen-cv-en.pdf";

export default function Hero() {
    const {t, i18n} = useTranslation()

    return (
        <Container>
            <Row style={{minHeight: "60vh", alignContent: "center", justifyContent: "center", textAlign: "center"}}>
                <Col xs={12}>
                    <img src={tomi} className={"roundImage cool-shadow moving"}/>
                </Col>
                <Col xs={12}>
                    <h1>{t("welcome")}</h1>
                </Col>
                <Col xs={12} style={{display: "flex", justifyContent: "center"}}>
                    <ShellText duration={3000}>
                        {t("shellDescription")}
                    </ShellText>
                </Col>
                <Col xs={"auto"}>
                    <ButtonToolbar>
                        {i18n.language == "fi" && <a href={fiCv} target={"_blank"}><Button>Kurkkaa CV:täni</Button></a>}
                        {i18n.language == "en" && <a href={enCv} target={"_blank"}><Button>Check out my CV</Button></a>}
                        <a href={"#contact"}><Button>{t("contact")}</Button></a>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Container>
    );
}