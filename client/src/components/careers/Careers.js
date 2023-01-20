import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { CAREERLIST } from '../../content';
import { Careerbnr } from '../../images/images';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import { findFlagUrlByIso3Code } from 'country-flags-svg';

const unitedstates = findFlagUrlByIso3Code('USA');
const india = findFlagUrlByIso3Code('IND');
const Careerlist = CAREERLIST.map((career) => {
  return (
    <div className='job-list'>
      <div className='job-title'>
        <h4>{career.name}</h4>
      </div>
      <div className='job-location'>
        <p style={{ margin: '0px' }}>
          <Image
            src={career.location === 'IND' ? india : unitedstates}
            width='20px'
          />{' '}
          <span>{career.location}</span>
        </p>
      </div>
      <div className='job-link'>
        <a href='/careersdescription' className='link'>
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
            <Col xs={12} md={12}>
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
              <ListGroup.Item>
                <p style={{ margin: '0px' }}>All Locations (3)</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p style={{ margin: '0px' }}>
                  <Image src={india} width='25px' /> India (1)
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p style={{ margin: '0px' }}>
                  <Image src={unitedstates} width='25px' /> USA (2)
                </p>
              </ListGroup.Item>
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
