import {Col, OverlayTrigger, Popover, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import github from '../assets/github-thumbnail.png'


type SocialType = {
    name: string,
    link: string,
    icon: React.JSX.Element
}

export default function Socials() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
                <img src={github} className={"popoverThumbnail"}/>
            </Popover.Body>
        </Popover>
    )

    const socials: SocialType[] = [
        {
            name: "Github",
            link: "",
            icon: <FontAwesomeIcon icon={faGithub}/>
        },
        {
            name: "LinkedIn",
            link: "",
            icon: <FontAwesomeIcon icon={faLinkedin}/>
        },
    ]

    return (
        <Row>
            {socials.map((e) => (
                <Col xs={"auto"} key={e.name}>
                    <OverlayTrigger trigger={"hover"} placement={"bottom"} overlay={popover}>
                        <a className={"link"} href={e.link}>{e.icon}</a>
                    </OverlayTrigger>
                </Col>
            ))}
        </Row>
    )
}