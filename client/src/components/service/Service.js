import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SERVICES, DSERVICES } from '../../content';
import { Servicebnr } from '../../images/images';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

function Service(props) {
  const serviceNavigate = useNavigate();
  const [dservicesData, setDservicesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(SERVICES);
    setDservicesData(DSERVICES);
  }, []);

  const deliveryService = dservicesData.map((service, index) => {
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
  const serviceClick = (item) => {
    serviceNavigate('/servicedetail');
    props.clickEvent(item);
  };

  return (
    <>
      <div className='page-banner'>
        <Image src={Servicebnr} />
      </div>
      <Container>
        <div className={'service-tabs animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Delivery Services</span>
          </h3>
          <br />
          <br />
          <Row style={{ borderBottom: 'none', marginTop: '50px' }}>
            {deliveryService}
          </Row>
        </div>
        <br />
        <br />
        <Row className={'service-tabs'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Services</span>
          </h3>
          {servicesData.map((item) => (
            <Col xs={12} md={4} className={'mb-3'}>
              <Card
                className='help-cont-service'
                onClick={(e) => serviceClick(item)}
              >
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={item.icon} className='tech-icon' />
                    <br />
                    <br /> {item.title}
                  </Card.Title>
                  <Card.Text>
                    <p className='help-content'>{item.content}</p>
                    <div className='help-navigate'>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className='tech-icon'
                      />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export { Service };
