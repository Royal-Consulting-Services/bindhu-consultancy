/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Servicebnr } from '../../images/images';

import Image from 'react-bootstrap/Image';

import { useNavigate } from 'react-router-dom';

function ServiceDetail(props) {
  const serviceNavigate = useNavigate();
  const [detailCont] = useState(props.detail);

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
        <Row className={'service-tabs animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>{detailCont.title}</span>
          </h3>
          <Row className={'mb-3'}>
            <Col Xs={12} md={6} style={{ position: 'relative' }}>
              <p
                style={{
                  display: 'table-cell',
                  height: '300px',
                  verticalAlign: 'middle',
                }}
              >
                {detailCont.content}{' '}
              </p>
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
