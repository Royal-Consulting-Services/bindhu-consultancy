import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from './header/Header';
import { SLIDERS, MENULINK } from '../content';
import { Technology, Blog1, Aboutusbnr, Aboutuscont, Implement, Projmanag, Staffaug, Consult, Migrate, Whychoose } from '../images/images';
import Footer from './footer/Footer';
import { faDesktop, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';


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
// const indicators = SLIDERS.map((slider,index) => {
//   return(
// <button type="button"  data-bs-target="" aria-label={`Slide ${index+1}`} aria-current="true" className="indicator-button">
// <img
//         className="d-block w-100"
//         src={slider.src}
//         alt="First slide"
//       />
// </button>
//   )
// })
function Aboutus() {
  return (
    <>
      <div className='page-banner'>
        <Image src={Aboutusbnr} />
      </div>
      <Container >
        <h3 className={"mt-5 mb-5 content-heading"}><span>About Us</span></h3>
        <Row className={"service-tabs animate__animated animate__backInUp"}> 
          <Col xs={12} md={6}>
          <Image src={Aboutuscont} className={"d-flex w-100"} />
          </Col>
          <Col Xs={12} md={6}>
            <p>    At BR Group Tech, we are a premier software services company that provides tailor-made cloud solutions to organizations across the United States. Our highly skilled professionals offer comprehensive cloud consulting services to help enterprises boost their productivity like never before.
            Through evaluating a company's requirements, technical aspects, and data assessments, we deliver bespoke cloud computing solutions that are guaranteed to manage and streamline your business more effectively than ever before - all at a cost-effective price. If you're looking for a team of tech experts who can help you transform your IT environment, look no further than BR Group Tech!
            <br /><br />
            Our cloud architects are experienced in helping businesses with reliable and future-ready migrations. This way, you can keep your business operations smooth and stay ahead of your competitors.</p>
            </Col>
        </Row>
        <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Why Choose Us</span></h3>
          <Col xs={12} md={6} >
          <ScrollAnimation animateIn='flipInX'>
            <p>At BR Group Tech, we provide highly customized solutions for your needs. We have experienced IT professionals who are knowledgeable in cloud architecture, engineering, and planning.<br />
              When you partner with us, you gain access to the right knowledge and resources to get the job done right. Our tech experts can assist your businesses in streamlining IT infrastructure and migrating to the cloud. We have the resources and expertise to guide you through the entire process, from pre-migration planning to post-migration maintenance.
              Our goal is to make your transition to the cloud as smooth and seamless as possible. Contact us today to get started!</p>
              </ScrollAnimation>
          </Col>
          <Col xs={12} md={6} >
          <ScrollAnimation animateIn='flipInX'>
            <Image  src={Whychoose} className='choose-image' />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </>
  );
}



export default Aboutus;