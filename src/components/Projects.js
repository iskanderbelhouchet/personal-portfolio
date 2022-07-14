import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import projImg7 from '../assets/img/project-img7.jpg'
import projImg8 from '../assets/img/project-img8.png'
import projImg9 from '../assets/img/project-img9.jpg'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Apper landing page ',
      description: 'Design & Development',
      imgUrl: projImg1
    },
    {
      title: 'Coffee website',
      description: 'Front-end Development',
      imgUrl: projImg2
    },
    {
      title: 'Memories project',
      description: 'Front & Back Development',
      imgUrl: projImg3
    }
  ]

  const webdev = [
    {
      title: 'Startup Landing page',
      description: 'Design',
      imgUrl: projImg4
    },
    {
      title: 'Startup isometric landing page',
      description: 'Design',
      imgUrl: projImg5
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg6
    },
    {
      title: 'Restaurant landing page',
      description: 'Design',
      imgUrl: projImg7
    },
    {
      title: 'Real estate landing page',
      description: 'Design',
      imgUrl: projImg8
    },
    {
      title: 'Food delivery app',
      description: 'Design',
      imgUrl: projImg9
    }
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>My Creative Portfolio Section</p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>UI/UX Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Mobile Development </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          {
                          webdev.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>soon....</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}
