import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK } from '../content';
import { Blog1, Blog2, Contactusbnr, Itrecruitment } from '../images/images';
import Footer from './footer/Footer';
import { faCog, faLocationDot, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
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
function Contact() {
  const [inputValues, setInputValues] = useState({
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  });

  const [validation, setValidation] = useState({
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState("");
    //handle submit updates
    function handleChange(event) {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
    }
      const signupSubmit = () => {
    fetch("http://localhost:4004/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        message: inputValues.message,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        phone: inputValues.mobile,
      }),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setRegMessage("Successfully Completed Your Registration, You Can Login Now!")
        // setFormType("login");
        setInputValues({
          message: "",
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
        });
      })
  }
  return (
    <>
      <div className='page-banner'>
        <Image src={Contactusbnr} />
      </div>
      <Container >
      <div className={"animate__animated animate__backInUp"}>
        <h3 className={"mt-5 mb-5 content-heading"}><span>Contact</span></h3>
        <Row>
          <Col xs={12} md={4}>
            <Card className='contact-card'>
              <Card.Body>
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" /> 
                <address>
                  607 <br/>mission circle,<br/> Irving ,<br/> texas 75063
                </address>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className='contact-card'>
              <Card.Body>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> 
                <address>
                  +44 9832149032,<br />
                  +44 9732739092<br />
                </address>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className='contact-card'>
              <Card.Body>
              <FontAwesomeIcon icon={faGlobe} className="contact-icon" /> 
                <address>
                admin@brgrouptech.com
                </address>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          </div>
          <Row>
          <ScrollAnimation animateIn='slideInUp' >
          <Col xs={12} md={12} className="mt-3">
            {/* <Form>
              <Row>
                <Col xs={12} md={6} >
                  <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name={"firstName"} placeholder="First Name" value={inputValues.firstName} onChange={(e) => handleChange(e)} />
                    {validation.firstName && <p style={{ color: "red" }}>{validation.firstName}</p>}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} >
                  <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name={"lastName"} placeholder="Last Name" value={inputValues.lastName} onChange={(e) => handleChange(e)} />
                    {validation.lastName && <p style={{ color: "red" }}>{validation.lastName}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} >
                  <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name={"email"} placeholder="Email" value={inputValues.email} onChange={(e) => handleChange(e)} />
                    {validation.email && <p style={{ color: "red" }}>{validation.email}</p>}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} >
                  <Form.Group className="mb-3" controlId="formMobile">
                  <Form.Label>Mobile</Form.Label>
                    <Form.Control type="tel" name={"mobile"} placeholder="Mobile" value={inputValues.mobile} onChange={(e) => handleChange(e)} />
                    {validation.mobile && <p style={{ color: "red" }}>{validation.mobile}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} >
                  <Form.Group className="mb-3" controlId="formUserName">
                  <Form.Label>Message</Form.Label>
                    <Form.Control type="text" as="textarea" name={"message"} rows={3} placeholder="Message" value={inputValues.message} onChange={(e) => handleChange(e)} />
                    {validation.message && <p style={{ color: "red" }}>{validation.message}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={signupSubmit}>
                  Submit
                </Button>
              </div>
            </Form> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="400" frameborder="0" style={{ border: "0" }} />
          </Col>
          </ScrollAnimation>
        </Row>
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

export default Contact;