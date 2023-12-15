import {Badge, Col, Container, Row, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {ProjectType} from "../../Data/Projects.tsx";
import {useTranslation} from "react-i18next";

export default function ProjectItem({project}: { project: ProjectType }) {
    const {t} = useTranslation()

    return (
        <Container>
            {project.logo && <img src={project.logo} height={50}/>}
            <h3>{project.name}</h3>
            <Stack direction={"horizontal"} gap={2}>
                {project.tags?.map((e) => (
                    <Badge key={e}>{e}</Badge>
                ))}
            </Stack>
            <p>{t(project.description)}</p>
            <hr/>
            <Row>
                <Col/>
                <Col xs={"auto"}>
                    <FontAwesomeIcon icon={faGithub} className={"link"} size={"xl"}
                                     onClick={() => window.open(project.github, "_blank")}/>
                </Col>
                <Col xs={"auto"}>
                    <FontAwesomeIcon icon={faDownload} className={"link"} size={"xl"}
                                     onClick={() => window.open(project.download, "_blank")}/>
                </Col>
            </Row>
        </Container>
    )
}