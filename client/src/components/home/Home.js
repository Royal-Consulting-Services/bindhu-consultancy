import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
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
} from '../../images/images';

import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';

const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant='dark'>
      <img className='d-block w-100 ' src={slider.src} alt='First slide' />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

function Home() {
  return (
    <>
      <Carousel>{slides}</Carousel>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <ScrollAnimation animateIn='slideInDown' initiallyVisible>
              <h3 className={'mt-5 mb-5 content-heading'}>
                <span>About Us</span>
              </h3>
              <Image src={Aboutuscont} className={'d-flex w-100 rounded'} />
              <p>
                At{' '}
                <span
                  style={{
                    fontWeight: 800,
                    color: '#052695',
                    fontSize: '18px',
                  }}
                >
                  BR Group Tech
                </span>
                , we are a premier software services company that provides
                tailor made cloud solutions to organizations across the United
                States. Our highly skilled professionals offer comprehensive
                cloud consulting services to help enterprises boost their
                productivity like never before. Through evaluating a company's
                requirements, technical aspects, and data assessments, we
                deliver bespoke cloud computing solutions that are guaranteed to
                manage and streamline your business more effectively than ever
                before all at a cost effective price. If you're looking for a
                team of tech experts who can help you transform your IT
                environment, look no further than BR Group Tech!
              </p>

              <p>
                Our cloud architects are experienced in helping businesses with
                reliable and future ready migrations. This way, you can keep
                your business operations smooth and stay ahead of your
                competitors.
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Delivery Services</span>
          </h3>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <p>
                At{' '}
                <span
                  style={{
                    fontWeight: 800,
                    color: '#052695',
                    fontSize: '18px',
                  }}
                >
                  BR Group Tech
                </span>
                , we have a team of highly trained individuals who are
                experienced in large scale implementations. This team can help
                you with the following:
              </p>

              <ul className='unodr-list' style={{listStyleType: "none"}}>
                <li >Implementation</li>
                <li>Project management</li>
                <li> Staff Augmentation</li>
                <li> Consultancy </li>
                <li> Migration </li>
              </ul>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <Image className={'d-flex w-100 rounded'} src={Technology} />
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
                    <Image rounded={true} src={Implement} className={'w-100'} />
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
                    <Image rounded={true} src={Projmanag} className={'w-100'} />
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
                    <Image rounded={true} src={Staffaug} className={'w-100'} />
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
                    <Image rounded={true} src={Consult} className={'w-100'} />
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
                    <Image rounded={true} src={Migrate} className={'w-100'} />
                    <p className='tech-content'></p>
                  </Card.Text>
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
              <Image rounded={true} className='choose-image' src={Whychoose} />
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <p>
                At{' '}
                <span
                  style={{
                    fontWeight: 800,
                    color: '#052695',
                    fontSize: '18px',
                  }}
                >
                  BR Group Tech
                </span>
                , we provide highly customized solutions for your needs. We have
                experienced IT professionals who are knowledgeable in cloud
                architecture, engineering, and planning.
                <br />
                When you partner with us, you gain access to the right knowledge
                and resources to get the job done right. Our tech experts can
                assist your businesses in streamlining IT infrastructure and
                migrating to the cloud. We have the resources and expertise to
                guide you through the entire process, from pre migration
                planning to post migration maintenance. Our goal is to make your
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

export { Home };
