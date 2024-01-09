import {Container} from "react-bootstrap";
import Spacer from "../MainElements/Spacer.tsx";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Bio() {
    const {t} = useTranslation();
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center end", "start"]
    });
    const scale = useTransform(scrollYProgress, [0.5, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 1.1], [0, 1, 0]);

    return (
        <motion.div style={{scale, opacity}}>
            <section ref={ref}>
                <Container className={"justify-content-center"} id={"bio"}>
                    <h2 className={"section-sharp"} id="bio">{t("bio")}</h2>
                    <Spacer customHeight={25}/>
                    <table>
                        <tbody>
                        <tr>
                            <th>2002</th>
                            <td>{t("bornInBio")}</td>
                        </tr>
                        <tr>
                            <th>2014</th>
                            <td>{t("interestedInCoding")}</td>
                        </tr>
                        <tr>
                            <th>2020</th>
                            <td>{t("graduate")}</td>
                        </tr>
                        <tr>
                            <th>{t("2021andForward")}</th>
                            <td>{t("studying")}</td>
                        </tr>
                        </tbody>
                    </table>
                </Container>
            </section>
        </motion.div>
    )
}