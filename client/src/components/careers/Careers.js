import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { CAREERLIST } from '../../content';
import { Careerbnr } from '../../images/images';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';

const Careerlist = CAREERLIST.map((career) => {
  return (
    <div className='job-list'>
      <div className='job-title'>
        <h4>{career.name}</h4>
      </div>
      <div className='job-location'>
        <p> {career.location}</p>
      </div>
      <div className='job-link'>
        <a href='/careersdescription' target='_blank' className='link'>
          <FontAwesomeIcon icon={faArrowRight} className='tech-icon' />
        </a>
      </div>
      <div className='job-description'>{career.description}</div>
    </div>
  );
});

function Careers() {
  return (
    <>
      <div className='page-banner'>
        <Image fluid src={Careerbnr} />
      </div>
      <Container>
        <div className={'service-tabs animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Careers</span>
          </h3>
          <Row>
            <Col xs={12} md={6}>
              <h3>Open positions</h3>
              <p>
                We’re looking for people to join the team who are as excited as
                we are to help build the platform that empowers the future
                generation of creators to be successful online.
              </p>
            </Col>
          </Row>
        </div>
        <Row className={'career-tabs'}>
          <Col xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>All Locations (3)</ListGroup.Item>
              <ListGroup.Item>India (1)</ListGroup.Item>
              <ListGroup.Item>USA (2)</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={8}>
            {Careerlist}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Careers };
