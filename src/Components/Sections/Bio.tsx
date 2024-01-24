import {Container} from "react-bootstrap";
import Spacer from "../MainElements/Spacer.tsx";
import {useTranslation} from "react-i18next";

export default function Bio() {
    const {t} = useTranslation();
    return (
        <section>
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
    )
}