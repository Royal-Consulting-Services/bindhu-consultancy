/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Contactusbnr } from '../images/images';
import {
  faLocationDot,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
  return (
    <>
      <div className='page-banner'>
        <Image src={Contactusbnr} />
      </div>
      <Container>
        <div className={'animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Contact</span>
          </h3>
          <Row>
            <Col xs={12} md={4}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className='contact-icon'
                  />
                  <address>
                    607 <br />
                    mission circle,
                    <br /> Irving ,<br /> texas 75063
                  </address>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                  <address>
                    <a href='tel:+44 9832149032'>+44 9832149032</a>
                    <br />

                    <a href='tel:+44 9732739092'>+44 9732739092</a>
                    <br />
                  </address>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon icon={faGlobe} className='contact-icon' />
                  <a href='mailto:admin@brgrouptech.co'>
                    admin@brgrouptech.com
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <ScrollAnimation animateIn='slideInUp'>
            <Col xs={12} md={12} className='mt-3'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319'
                width='100%'
                height='400'
                frameborder='0'
                style={{ border: '0' }}
              />
            </Col>
          </ScrollAnimation>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
