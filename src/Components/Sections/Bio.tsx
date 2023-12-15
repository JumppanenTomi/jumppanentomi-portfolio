import {Container} from "react-bootstrap";
import Spacer from "../MainElements/Spacer.tsx";

export default function Bio() {
    return (
        <Container className={"justify-content-center"} id={"bio"}>
            <h2 className={"section-sharp"} id="bio">Bio</h2>
            <Spacer customHeight={25}/>
            <table>
                <tbody>
                <tr>
                <th>2002</th>
                    <td>Syntyi Nurmijärvellä</td>
                </tr>
                <tr>
                    <th>2014</th>
                    <td>Kiinnostui ohjelmoinnista ja aloitti isänsä vanhalla Commodorella sekä osallistui
                        nettikursseille oppiakseen lisää
                    </td>
                </tr>
                <tr>
                    <th>2020</th>
                    <td>Valmistui datanomiksi Business College Helsingistä</td>
                </tr>
                <tr>
                    <th>{"2021 ja eteenpäin"}</th>
                    <td>Opiskelee Tieto- ja viestintätekniikan insinööriksi Metropolia AMK:ssa. Tänä aikana hän on
                        osallistunut mielenkiintoisiin projekteihin sekä koulussa että työssään.
                    </td>
                </tr>
            </tbody>
        </table>
        </Container>
    )
}