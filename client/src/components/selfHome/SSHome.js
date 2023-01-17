import React from 'react';
import { Carousel, Container, Row, Col, Card, Button,Image } from 'react-bootstrap';
import { SLIDERS } from '../../content';
import {
  Technology,
  Aboutuscont,
  Implement,
  Projmanag,
  Staffaug,
  Consult,
  Migrate,
  Whychoose,
  Databasemigrte,
  Itconsulting,
  Cloudmigration,
  Cloudarchitecture,
  Businessanalytics,
} from '../../images/images';

import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom';

const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant='dark'>
      <img className='d-block w-100' src={slider.src} alt='First slide' />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});
function SSHome() {
  const homeNavigate = useNavigate();
  return (
    <>
      <Carousel>{slides}</Carousel>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <ScrollAnimation animateIn='slideInDown'>
              <h3 className={'mt-5 mb-5 content-heading'}>
                <span>About Us</span>
              </h3>
              <Image rounded={true} src={Aboutuscont} className={'d-flex w-100'} />
              At BR Group Tech, we are a premier software services company that
              provides tailor-made cloud solutions to organizations across the
              United States. Our highly skilled professionals offer
              comprehensive cloud consulting services to help enterprises boost
              their productivity like never before. Through evaluating a
              company's requirements, technical aspects, and data assessments,
              we deliver bespoke cloud computing solutions that are guaranteed
              to manage and streamline your business more effectively than ever
              before - all at a cost-effective price. If you're looking for a
              team of tech experts who can help you transform your IT
              environment, look no further than BR Group Tech!
              <br />
              <br />
              Our cloud architects are experienced in helping businesses with
              reliable and future-ready migrations. This way, you can keep your
              business operations smooth and stay ahead of your competitors.
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Delivery Services</span>
          </h3>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              At our company, we have a team of highly trained individuals who
              are experienced in large-scale implementations. This team can help
              you with the following:
              <ul>
                <li>Implementation</li>
                <li>Project management</li>
                <li> Staff Augmentation</li>
                <li> Consultancy </li>
                <li> Migration </li>
              </ul>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <img
                className='d-block w-100'
                src={Technology}
                alt='First slide'
              />
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation animateIn='slideInUp'>
          <Row style={{ borderBottom: 'none', marginTop: '50px' }}>
            <Col
              xs={12}
              className='col-md-2_5'
              style={{ padding: '0px', border: 'none' }}
            >
              <Card className='technology-card'>
                <Card.Body>
                  <Card.Title
                    className='technology-title'
                    style={{ textAlign: 'center', height: '50px' }}
                  >
                    Implementation
                  </Card.Title>
                  <Card.Text>
                    <Image src={Implement} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              className='col-md-2_5'
              style={{ padding: '0px', border: 'none' }}
            >
              <Card className='technology-card'>
                <Card.Body>
                  <Card.Title
                    className='technology-title'
                    style={{ textAlign: 'center', height: '50px' }}
                  >
                    Project management
                  </Card.Title>
                  <Card.Text>
                    <Image src={Projmanag} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className='col-md-2_5' style={{ padding: '0px' }}>
              <Card className='technology-card'>
                <Card.Body>
                  <Card.Title
                    className='technology-title'
                    style={{ textAlign: 'center', height: '50px' }}
                  >
                    Staff Augmentation
                  </Card.Title>
                  <Card.Text>
                    <Image src={Staffaug} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              className='col-md-2_5'
              style={{ padding: '0px', border: 'none' }}
            >
              <Card className='technology-card'>
                <Card.Body>
                  <Card.Title
                    className='technology-title'
                    style={{ textAlign: 'center', height: '50px' }}
                  >
                    Consultancy
                  </Card.Title>
                  <Card.Text>
                    <Image src={Consult} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              className='col-md-2_5'
              style={{ padding: '0px', border: 'none' }}
            >
              <Card className='technology-card'>
                <Card.Body>
                  <Card.Title
                    className='technology-title'
                    style={{ textAlign: 'center', height: '50px' }}
                  >
                    Migration
                  </Card.Title>
                  <Card.Text>
                    <Image src={Migrate} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInUp'>
          <Row>
            <h3 className={'mt-5 mb-5 content-heading'}>
              <span>Services </span>
            </h3>
            <Col xs={12} md={4}>
              <Card className='help-cont-card'>
                <Card.Body>
                  <Card.Title>
                    Database Creation & Database Migrations
                  </Card.Title>
                  <Image src={Databasemigrte} className={'d-flex w-100'} />
                  <Card.Text>
                    <p className='help-content'>
                      Our certified cloud engineers provide a tailored database
                      creation & database migrations service that helps cut the
                      time and cost of creating & migrating your data to the
                      public cloud platform. No matter what kind of database
                      you're using - Oracle, SQL server, or something else - we
                      have the knowledge and skills to get it working on the
                      cloud.
                    </p>
                  </Card.Text>
                  <Button
                    variant='link'
                    onClick={() => homeNavigate('/service')}
                  >
                    read more{' '}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='help-cont-card'>
                <Card.Body>
                  <Card.Title>IT Consulting</Card.Title>
                  <Image src={Itconsulting} className={'d-flex w-100'} />
                  <Card.Text>
                    <p className='help-content'>
                      Our IT consulting solutions focus on helping you achieve
                      specific business outcomes, through digital strategies,
                      process optimization, and IT infrastructure services.
                      <br />
                      With our IT consulting services, we aim to help you
                      streamline and secure your business operations quickly and
                      efficiently. All our tech professionals have extensive
                      domain knowledge and access to advanced solutions, so they
                      can easily create an IT roadmap that meets your
                      organizational needs.
                    </p>
                  </Card.Text>
                  <Button
                    variant='link'
                    onClick={() => homeNavigate('/service')}
                  >
                    read more{' '}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='help-cont-card'>
                <Card.Body>
                  <Card.Title>Cloud Migration</Card.Title>
                  <Image src={Cloudmigration} className={'d-flex w-100'} />
                  <Card.Text>
                    <p className='help-content'>
                      At BR Group Tech, our cloud migration service is designed
                      to lower your company's need for physical resources and
                      reduce overhead costs while increasing productivity. Our
                      team of specialists will use proven methodologies and
                      advanced tools to quickly and effectively transform your
                      business from on-premise to cloud-based, ensuring a smooth
                      process that won't disrupt your day-to-day operations.
                    </p>
                  </Card.Text>
                  <Button
                    variant='link'
                    onClick={() => homeNavigate('/service')}
                  >
                    read more{' '}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn='slideInUp'>
          <Row className='mt-5'>
            <Col xs={12} md={4}>
              <Card className='help-cont-card'>
                <Card.Body>
                  <Card.Title>Cloud Architecture</Card.Title>
                  <Image src={Cloudarchitecture} className={'d-flex w-100'} />
                  <Card.Text>
                    <p className='help-content'>
                      Our team provides tailored cloud architecture services
                      that are based on what future businesses will need. We
                      help you to adopt new-age architectures that are
                      cloud-powered and designed for high performance. We have
                      the expertise to build robust designs that simplify
                      business opportunities and workflows. By putting the best
                      practices combined with our expertise at the core of your
                      projects, you can be confident that your business is
                      future-proofed.
                    </p>
                  </Card.Text>
                  <Button
                    variant='link'
                    onClick={() => homeNavigate('/service')}
                  >
                    read more{' '}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='help-cont-card'>
                <Card.Body>
                  <Card.Title>Business Analytics</Card.Title>
                  <Image src={Businessanalytics} className={'d-flex w-100'} />
                  <Card.Text>
                    <p className='help-content'>
                      At BR Group Tech, we provide ad hoc business analytics
                      services to help our clients make better decisions. Our
                      team helps clients gather insights on customer behavior,
                      employees’ performance, and partners’ interaction. This
                      data helps organizations align resources for better
                      performance and achieving short- and long-term goals.
                    </p>
                  </Card.Text>
                  <Button
                    variant='link'
                    onClick={() => homeNavigate('/service')}
                  >
                    read more{' '}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ScrollAnimation>
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Why Choose Us</span>
          </h3>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInY'>
              <Image className='choose-image' src={Whychoose} />
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <p>
                At BR Group Tech, we provide highly customized solutions for
                your needs. We have experienced IT professionals who are
                knowledgeable in cloud architecture, engineering, and planning.
                <br />
                When you partner with us, you gain access to the right knowledge
                and resources to get the job done right. Our tech experts can
                assist your businesses in streamlining IT infrastructure and
                migrating to the cloud. We have the resources and expertise to
                guide you through the entire process, from pre-migration
                planning to post-migration maintenance. Our goal is to make your
                transition to the cloud as smooth and seamless as possible.
                Contact us today to get started!
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { SSHome };
