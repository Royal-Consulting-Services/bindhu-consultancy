import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DSERVICES } from '../../content';
import { Servicebnr } from '../../images/images';

import Image from 'react-bootstrap/Image';

import { useNavigate } from 'react-router-dom';

function ServiceDetail(props) {
  const serviceNavigate = useNavigate();
  const [detailCont] = useState(props.detail);
  const deliveryService = DSERVICES.map((service, index) => {
    return (
      <Col
        xs={12}
        md={2}
        className='col-md-2_5 p-0'
        style={{ border: 'none', marginBottom: '20px' }}
      >
        <div
          className={`technology-timeline ${index === 0 && 'firsttimeline'} ${
            index === 4 && 'lasttimeline'
          }`}
        >
          <h5 className='technology-timetitle' style={{ textAlign: 'center' }}>
            {service.title}
          </h5>
          <Image thumbnail={true} src={service.image} className={'w-100'} />
        </div>
      </Col>
    );
  });
  useEffect(() => {
    if (!detailCont.title) {
      serviceNavigate('/service');
    }
  }, [detailCont]);
  return (
    <>
      <div className='page-banner'>
        <Image fluid={true} src={Servicebnr} />
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>Delivery Services</span>
        </h3>
        <Row style={{ borderBottom: 'none', marginTop: '50px' }}>
          {deliveryService}
        </Row>
        <Row className={'service-tabs animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>{detailCont.title}</span>
          </h3>
          <Row className={'mb-3'}>
            <Col Xs={12} md={6} style={{ position: 'relative' }}>
              <p> {detailCont.content} </p>
            </Col>
            <Col xs={12} md={6}>
              <Image
                rounded={true}
                src={detailCont.image}
                className={'d-flex w-100'}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export { ServiceDetail };
