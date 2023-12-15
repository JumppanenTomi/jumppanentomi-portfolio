import {Col, OverlayTrigger, Popover, Row} from "react-bootstrap";
import {socials} from "../../Data/SocialsData.tsx";

export default function Socials() {
    return (
        <Row>
            {socials.map((e) => {
                const popover = (
                    <Popover id={`popover-${e.name}`}>
                        <Popover.Header as="h3">{e.name}</Popover.Header>
                        <Popover.Body>
                            <img src={e.image} className={"popoverThumbnail"}/>
                        </Popover.Body>
                    </Popover>
                );

                return (<Col xs={"auto"} key={e.name}>
                        <OverlayTrigger trigger={["hover", "focus"]} placement={"bottom"} overlay={popover}>
                            <a className={"link"} href={e.link} target={"_blank"}>{e.icon}</a>
                        </OverlayTrigger>
                    </Col>
                )
            })}
        </Row>
    )
}