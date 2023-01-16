import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { SLIDERS, SERVICES, DSERVICES } from '../content';
import { Itrecruitment, Blog1, Blog2, Servicebnr, Implement, Projmanag, Staffaug, Consult, Migrate, Whychoose } from '../images/images';
import Footer from './footer/Footer';
import { faChevronRight, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { propTypes } from 'react-bootstrap/Image';
import { Timeline } from "react-beautiful-horizontal-timeline";
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from 'react-router-dom';
const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant="dark">
      <img
        className="d-block w-100"
        src={slider.src}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});
function Service(props) {
  const serviceNavigate = useNavigate()
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [dservicesData, setDservicesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(SERVICES);
    setDservicesData(DSERVICES)
  }, [])

  const deliveryService = dservicesData.map((service, index) => {
    return (
      <Col xs={12} md={2} className="col-md-2_5 p-0" style={{ border: "none", marginBottom: "20px" }}>
        {/* <Card className='' style={{height:"240px",borderRadius:"50%",overflow:"hidden",paddingTop:"20px"}}>
        <Card.Body>
          <Card.Title className='technology-title' style={{ textAlign: "center" }}>{service.title}</Card.Title>
          <Card.Text>
            <Row>
              <Col xs={12} md={12} style={{ padding: "0px", border: "none" }}>
                <Image src={service.image} className={"w-100"} />
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card> */}
        <div className={`technology-timeline ${index === 0 && "firsttimeline"} ${index === 4 && "lasttimeline"}`}>
          <h5 className='technology-timetitle' style={{ textAlign: "center" }}>{service.title}</h5>
          <Image src={service.image} className={"w-100"} />
        </div>
      </Col>
    );
  });
  const serviceClick = (item) => {
    serviceNavigate("/servicedetail");
    props.clickEvent(item)

  }



  return (
    <>
      <div className='page-banner'>
        <Image src={Servicebnr} />
      </div>
      <Container >
        <div className={"service-tabs animate__animated animate__backInUp"}>
            <h3 className={"mt-5 mb-5 content-heading"}><span>Delivery Services</span></h3>
            <br />
            <br />
            <Row style={{ borderBottom: "none", marginTop: "50px" }} >
              {deliveryService}
            </Row>
        </div>
        <br />
        <br />
        {/* <ScrollAnimation animateIn='flipInY'> */}
          <Row className={"service-tabs"} >
            <h3 className={"mt-5 mb-5 content-heading"}><span>Services</span></h3>
            {
              servicesData.map((item) => (
                <Col xs={12} md={4} className={"mb-3"}>
                  <Card className='help-cont-service' onClick={(e) => serviceClick(item)}>
                    <Card.Body>
                      <Card.Title><FontAwesomeIcon icon={item.icon} className="tech-icon" /><br /><br /> {item.title}</Card.Title>
                      <Card.Text>
                        <p className='help-content'>
                          {item.content}
                        </p >
                        <div className='help-navigate'>
                          <FontAwesomeIcon icon={faChevronRight} className="tech-icon" /></div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        {/* </ScrollAnimation> */}
      </Container>
      {/* <Container fluid>
        <Container>
          <Row className='service-contact'>
            <Col xs={12} md={6} >
              <Card>
                <Card.Body>
                  <Card.Title>Have an idea or project to discuss?</Card.Title>
                  <Card.Text>
                    <p className='help-content'>
                      Fill out the short form on our <a href="">Contact Us</a> page give us call directly on <a href="">+44 (0) 300 077 1720</a> or email us at <a href="">support@gmail.com</a> We’ll guide you through our process, advise on the best possible solutions and steer you in the right direction. </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
    </>
  );
}

export default Service;