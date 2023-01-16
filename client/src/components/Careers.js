import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK, CAREERLIST } from '../content';
import { Blog1, Blog2, Careerbnr, Itrecruitment } from '../images/images';
import Footer from './footer/Footer';
import { faArrowRight, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';
const Careerlist = CAREERLIST.map((career) => {
  return (
    <div className='job-list'>
    <div className='job-title'>
      <h4>{career.name} (7)</h4>
    </div>
    <div className='job-location'>
      <p> {career.location}</p>
    </div>
    <div className='job-link'>
      <a href='/careersdescription' target="_blank"><FontAwesomeIcon icon={faArrowRight} className="tech-icon" /></a>
    </div>
    <div className='job-description'>
     {career.description}
    </div>
  </div>
  );
});
function Careers() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  return (
    <>
      <div className='page-banner'>
        <Image src={Careerbnr} />
      </div>
      <Container >
      <div className={"service-tabs animate__animated animate__backInUp"}>
        <h3 className={"mt-5 mb-5 content-heading"}><span>Careers</span></h3>
        <Row>
          <Col xs={12} md={6}>
            <h3>Open positions</h3>
            <p>We’re looking for people to join the team who are as excited as we are to help build the platform that empowers the future generation of creators to be successful online.</p>
          </Col>
        </Row>
        </div>
        <ScrollAnimation animateIn='slideInUp'>
        <Row className={"career-tabs"}>
          <Col xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>All Locations (10)</ListGroup.Item>
              <ListGroup.Item>India (2)</ListGroup.Item>
              <ListGroup.Item>USA (2)</ListGroup.Item>
              <ListGroup.Item>UK (1)</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={8}>
          {Careerlist}
          </Col>
        </Row>
        </ScrollAnimation>
      </Container>
    </>
  );
}

export default Careers;