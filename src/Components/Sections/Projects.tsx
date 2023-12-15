import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import {projects} from "../../Data/Projects.tsx";
import ProjectItem from "../SmallElements/ProjectItem.tsx";

export default function Projects() {
    return (
        <Container>
            <h2 className={"section-sharp"} id="projects">Projektit</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey={projects[0].name}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {projects.map((e) => (
                                <Nav.Item>
                                    <Nav.Link eventKey={e.name}>{e.name}</Nav.Link>
                                </Nav.Item>
                            ))}
                            <Nav.Item>
                                <Nav.Link onClick={() => window.open("https://github.com/JumppanenTomi", "_blank")}>Lisää projekteja GitHubissa <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {projects.map((e) => (
                                <Tab.Pane eventKey={e.name}>
                                    <ProjectItem project={e}/>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}