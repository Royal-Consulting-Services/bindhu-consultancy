import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { SLIDERS, SERVICES, DSERVICES } from '../content';
import { Itrecruitment, Blog1, Blog2, Servicebnr, Implement, Projmanag, Staffaug, Consult, Migrate, Whychoose } from '../images/images';
import Footer from './footer/Footer';
import { faChevronRight, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
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

function ServiceDetail(props) {
    const serviceNavigate = useNavigate()
    const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
    const [showserviceDetail, setShowserviceDetail] = useState(false);
    const [serviceDetail, setServiceDetail] = useState({});
    const [detailCont, setDetailCont] = useState(props.detail);
    // const detailCont = props.detail;
    const deliveryService = DSERVICES.map((service, index) => {
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
    useEffect(()=>{
        if(!detailCont.title){
            serviceNavigate("/service");
        }
    },[detailCont])
    return (
        <>
            <div className='page-banner'>
                <Image src={Servicebnr} />
            </div>
            <Container >
            <h3 className={"mt-5 mb-5 content-heading"}><span>Delivery Services</span></h3>
            <Row style={{ borderBottom: "none", marginTop: "50px" }}>
                {deliveryService}
            </Row>
                <Row className={"service-tabs animate__animated animate__backInUp"}>
                        <h3 className={"mt-5 mb-5 content-heading"}><span>{detailCont.title}</span></h3>
                        <Row className={"mb-3"}>
                            <Col Xs={12} md={6} style={{ position: "relative" }}>
                                <p>  {detailCont.content} </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <Image src={detailCont.image} className={"d-flex w-100"} />
                            </Col>
                        </Row>
                </Row>
            </Container>
        </>
    );
}

export default ServiceDetail;