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
          <b>Loction :</b>
          {''}
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
        <div className='career-footer mt-3'>
          <div className=' gap-2' style={{ textAlign: 'center' }}>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='First name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last name' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='emal' placeholder='Email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Message</Form.Label>
                <Form.Control type='textarea' placeholder='Message' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Button variant='primary' size={'lg'} onClick={() => contatMe()}>
                Contact Us
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export { CareersDescription };
