import {Col, Container, Row} from "react-bootstrap";
import tomi from '../../assets/tomi.jpg'
import ShellText from "../SmallElements/ShellText.tsx";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Hero() {
    const {t} = useTranslation()
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start", "end"]
    });
    const scale = useTransform(scrollYProgress, [0.5, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <motion.div style={{scale, opacity}}>
            <Container ref={ref}>
                <Row style={{
                    minHeight: "60vh",
                    paddingTop: 100,
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center"
                }}>
                    <Col xs={12}>
                        <img alt={"tomi"} src={tomi} className={"roundImage cool-shadow moving"}/>
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
        </motion.div>
    );
}