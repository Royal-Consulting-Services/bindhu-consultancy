import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { CAREERLIST } from '../../content';
import { Careerbnr } from '../../images/images';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { findFlagUrlByIso3Code } from 'country-flags-svg';

const unitedstates = findFlagUrlByIso3Code('USA');

const Careerlist = CAREERLIST.map((career, index) => {
  return index === 1 ? (
    <div className='job-list'>
      <div className='job-title'>
        <h4>{career.name}</h4>
      </div>
      <div className='job-location'>
        <p>
          <b>Loction </b>

          <Image src={unitedstates} width='25px' />
          {career.location}
        </p>
      </div>

      <div className='job-description'>{career.description}</div>
      <div>{career.careerdescribcont}</div>
    </div>
  ) : (
    ''
  );
});
function CareersDescription() {
  const navigate = useNavigate();

  function contatMe() {
    return navigate('/contact');
  }

  function gotoCareers() {
    return navigate('/careers');
  }
  return (
    <>
      <div className='page-banner'>
        <Image src={Careerbnr} initiallyVisible />
      </div>
      <Container>
        <div
          className={'service-tabs animate__animated animate__backInUp'}
        ></div>
        <Row className={'career-tabs'}>
          <Col xs={12} md={12}>
            {Careerlist}
          </Col>
        </Row>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>
            <Button variant='primary' size={'lg'} onClick={() => gotoCareers()}>
              Back
            </Button>
          </span>
        </h3>
        <div className='career-footer mt-3'>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Firstname' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Lastname' />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
              </Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control placeholder='Type message' type='textarea' />
            </Form.Group>

            <Button variant='primary' size={'lg'} onClick={() => contatMe()}>
              Contact Us
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export { CareersDescription };
