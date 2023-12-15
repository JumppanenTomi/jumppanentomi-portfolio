import github from "../assets/github-thumbnail.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import linkedin from "../assets/linkedin-thumbnail.png";
import React from "react";

export type SocialType = {
    name: string,
    link: string,
    image: string
    icon: React.JSX.Element
}

export const socials: SocialType[] = [
        {
            name: "Github",
            link: "https://github.com/JumppanenTomi",
            image: github,
            icon: <FontAwesomeIcon icon={faGithub} size={"lg"}/>
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/tomi-jumppanen-516392221/",
            image: linkedin,
            icon: <FontAwesomeIcon icon={faLinkedin} size={"lg"}/>
        },
    ]