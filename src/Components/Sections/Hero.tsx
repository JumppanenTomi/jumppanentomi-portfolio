import {Col, Container, Row} from "react-bootstrap";
import tomi from '../../assets/tomi.jpg'
import ShellText from "../SmallElements/ShellText.tsx";
import {useTranslation} from "react-i18next";

export default function Hero() {
    const {t} = useTranslation()

    return (
        <Container>
            <Row style={{minHeight: "60vh", alignContent: "center",  justifyContent: "center", textAlign: "center"}}>
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
            </Row>
        </Container>
    );
}