import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SERVICES } from '../../content';
import { Servicebnr } from '../../images/images';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

import {
  Projmanag,
  Staffaug,
  Consult,
  Migrate,
  Implement,
} from '../../images/images';

function Service(props) {
  const serviceNavigate = useNavigate();
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(SERVICES);
  }, []);

  const serviceClick = (item) => {
    serviceNavigate('/servicedetail');
    props.clickEvent(item);
  };

  return (
    <>
      <div className='page-banner'>
        <Image fluid src={Servicebnr} />
      </div>
      <Container>
        <div className={'service-tabs animate__animated animate__backInUp'}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Delivery Services</span>
          </h3>

          <Row>
            <Row>
              <Col
                xs={12}
                className='col-md-2_5'
                style={{
                  padding: '0px',
                  border: 'none',
                  background: '#5369b4',
                  borderRadius: '20px',
                }}
              >
                <Card
                  className='technology-card'
                  style={{ background: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title
                      className='technology-title'
                      style={{ textAlign: 'center', height: '50px' }}
                    >
                      Implementation
                    </Card.Title>
                    <Card.Text>
                      <Image
                        rounded={true}
                        src={Implement}
                        className={'w-100'}
                      />
                      <p className='tech-content'></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                className='col-md-2_5'
                style={{
                  padding: '0px',
                  border: 'none',
                  background: '#5369b4',
                  borderRadius: '20px',
                }}
              >
                <Card
                  className='technology-card'
                  style={{ background: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title
                      className='technology-title'
                      style={{ textAlign: 'center', height: '50px' }}
                    >
                      Project management
                    </Card.Title>
                    <Card.Text>
                      <Image
                        rounded={true}
                        src={Projmanag}
                        className={'w-100'}
                      />
                      <p className='tech-content'></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                className='col-md-2_5'
                style={{
                  padding: '0px',
                  background: '#5369b4',
                  borderRadius: '20px',
                }}
              >
                <Card
                  className='technology-card'
                  style={{ background: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title
                      className='technology-title'
                      style={{ textAlign: 'center', height: '50px' }}
                    >
                      Staff Augmentation
                    </Card.Title>
                    <Card.Text>
                      <Image
                        rounded={true}
                        src={Staffaug}
                        className={'w-100'}
                      />
                      <p className='tech-content'></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                className='col-md-2_5'
                style={{
                  padding: '0px',
                  border: 'none',
                  background: '#5369b4',
                  borderRadius: '20px',
                }}
              >
                <Card
                  className='technology-card'
                  style={{ background: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title
                      className='technology-title'
                      style={{ textAlign: 'center', height: '50px' }}
                    >
                      Consultancy
                    </Card.Title>
                    <Card.Text>
                      <Image rounded={true} src={Consult} className={'w-100'} />
                      <p className='tech-content'></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                className='col-md-2_5'
                style={{
                  padding: '0px',
                  border: 'none',
                  background: '#5369b4',
                  borderRadius: '20px',
                }}
              >
                <Card
                  className='technology-card'
                  style={{ background: 'transparent' }}
                >
                  <Card.Body>
                    <Card.Title
                      className='technology-title'
                      style={{ textAlign: 'center', height: '50px' }}
                    >
                      Migration
                    </Card.Title>
                    <Card.Text>
                      <Image rounded={true} src={Migrate} className={'w-100'} />
                      <p className='tech-content'></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
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
                  <div class='help-cs-inner'>
                    <div class='help-cs-front'>
                      <Card.Title>
                        <FontAwesomeIcon
                          icon={item.icon}
                          className='tech-icon'
                        />
                        <br />
                        <br /> {item.title}
                      </Card.Title>
                    </div>
                    <div class='help-cs-back'>
                      <Card.Text>
                        <p className='help-content'>{item.content}</p>
                        <div className='help-navigate effect-7 sub-b'>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className='tech-icon'
                          />
                        </div>
                      </Card.Text>
                    </div>
                  </div>
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
