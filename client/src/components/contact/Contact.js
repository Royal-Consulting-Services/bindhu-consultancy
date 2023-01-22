/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Contactusbnr } from '../../images/images';
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
        <Image fluid={true} src={Contactusbnr} />
      </div>
      <Container>
        <div className={'animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Contact</span>
          </h3>
          <Row>
            <Col xs={12} md={4} className={'mb-4'}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className='contact-icon'
                  />
                  <address>
                    607 <br />
                    Mission circle,
                    <br /> Irving ,<br /> Texas 75063
                  </address>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className={'mb-4'}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                  <br />
                  <a
                    href='tel:+1 9455369778'
                    style={{ padding: '0px 10px', textDecoration: 'none' }}
                  >
                    +1 945-536-9778{' '}
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className={'mb-4'}>
              <Card className='contact-card'>
                <Card.Body>
                  <FontAwesomeIcon icon={faGlobe} className='contact-icon' />
                  <a href='mailto:admin@brgrouptech.com'>
                    admin@brgrouptech.com
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <ScrollAnimation animateIn='slideInUp'>
            <h3 className={'mt-5 mb-5 content-heading'}>
              <span>Location</span>
            </h3>
            <Col xs={12} md={12} className='mt-3'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.812476649048!2d-96.95720178533168!3d32.929552383500365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2857c5a745b1%3A0x5cbed32899b9dd62!2s607%20Mission%20Cir%2C%20Irving%2C%20TX%2075063%2C%20USA!5e0!3m2!1sen!2sin!4v1674303274038!5m2!1sen!2sin'
                width='100%'
                height='400'
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </Col>
          </ScrollAnimation>
        </Row>
      </Container>
    </>
  );
}

export { Contact };
