import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from "react";

type SocialType = {
    name: string,
    link: string,
    icon: React.JSX.Element
}

export default function Socials() {

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
                    <a className={"link"} href={e.link}>{e.icon}</a>
                </Col>
            ))}
        </Row>
    )
}