import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import {projects} from "../../Data/Projects.tsx";
import ProjectItem from "../SmallElements/ProjectItem.tsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Spacer from "../MainElements/Spacer.tsx";

export default function Projects() {
    const {t} = useTranslation()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);

    useEffect(() => {
        // Function that updates our state
        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container>
            <h2 className={"section-sharp"} id="projects">{t("projects")}</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey={projects[0].name}>
                <Row>
                    <Col sm={12} lg={4}>
                        <Nav variant="pills" className={isMobile ? "flex-row" : "flex-column"}>
                            {projects.map((e) => (
                                <Nav.Item key={e.name}>
                                    <Nav.Link eventKey={e.name}>{e.name}</Nav.Link>
                                </Nav.Item>
                            ))}
                            <Nav.Item>
                                <Nav.Link
                                    onClick={() => window.open("https://github.com/JumppanenTomi", "_blank")}>{t("moreInGithub")}<FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}/></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    {isMobile && (
                        <>
                            <Spacer customHeight={12}/>
                            <hr/>
                            <Spacer customHeight={12}/>
                        </>
                    )}
                    <Col sm={12} lg={8}>
                        <Tab.Content>
                            {projects.map((e) => (
                                <Tab.Pane eventKey={e.name} key={e.name}>
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