import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CAREERLIST } from '../content';
import { Careerbnr } from '../images/images';
import Image from 'react-bootstrap/Image';
const Careerlist = CAREERLIST.map((career, index) => {
  return index === 1 ? (
    <div className='job-list'>
      <div className='job-title'>
        <h4>{career.name}</h4>
      </div>
      <div className='job-location'>
        <p>
          <b>Loction :</b> {career.location}
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
  return (
    <>
      <div className='page-banner'>
        <Image src={Careerbnr} />
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
            <Button variant='secondary' size={'lg'}>
              Cancel
            </Button>

            {''}
            <Button variant='primary' size={'lg'}>
              Apply
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CareersDescription;
