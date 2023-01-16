import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button} from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK, CAREERLIST } from '../content';
import { Blog1, Blog2, Careerbnr, Itrecruitment } from '../images/images';
import Footer from './footer/Footer';
import { faArrowRight, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';
const Careerlist = CAREERLIST.map((career, index) => {
  return (
    index === 1 ?
      <div className='job-list'>
        <div className='job-title'>
          <h4>{career.name}</h4>
        </div>
        <div className='job-location'>
          <p><b>Loction :</b> {career.location}</p>
        </div>
        {/* <div className='job-link'>
      <FontAwesomeIcon icon={faArrowRight} className="tech-icon" />
    </div> */}
        <div className='job-description'>
          {career.description}
        </div>
        <div>{career.careerdescribcont}</div>
      </div>
      : ""
  );
});
function CareersDescription() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  return (
    <>
      <div className='page-banner'>
        <Image src={Careerbnr} />
      </div>
      <Container >
        <div className={"service-tabs animate__animated animate__backInUp"}>
          {/* <h3 className={"mt-5 mb-5 content-heading"}><span>HR</span></h3> */}
        </div>
        {/* <ScrollAnimation animateIn='slideInUp'> */}
        <Row className={"career-tabs"}>
          <Col xs={12} md={12}>
            {Careerlist}
          </Col>
        </Row>
        {/* </ScrollAnimation> */}
        <div className='career-footer mt-3'><div className=" gap-2" style={{ textAlign: "center" }}>
          <Button variant="link" size={"lg"} onClick={""}>
            Cancel
          </Button>
          <Button variant="primary" size={"lg"} onClick={""}>
            Apply
          </Button>
        </div></div>
      </Container>
    </>
  );
}

export default CareersDescription;