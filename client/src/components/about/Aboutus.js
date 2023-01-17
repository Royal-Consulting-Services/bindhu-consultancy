import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Aboutusbnr, Aboutuscont, Whychoose } from '../../images/images';
import Image from 'react-bootstrap/Image';
import ScrollAnimation from 'react-animate-on-scroll';

function Aboutus() {
  return (
    <>
      <div className='page-banner'>
        <Image src={Aboutusbnr} />
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>About Us</span>
        </h3>
        <Row className={'service-tabs animate__animated animate__backInUp'}>
          <Col xs={12} md={6}>
            <Image
              src={Aboutuscont}
              rounded={true}
              className={'d-flex w-100'}
            />
          </Col>
          <Col Xs={12} md={6}>
            <p>
              At BR Group Tech, we are a premier software services company that
              provides tailor-made cloud solutions to organizations across the
              United States. Our highly skilled professionals offer
              comprehensive cloud consulting services to help enterprises boost
              their productivity like never before. Through evaluating a
              company's requirements, technical aspects, and data assessments,
              we deliver bespoke cloud computing solutions that are guaranteed
              to manage and streamline your business more effectively than ever
              before - all at a cost-effective price. If you're looking for a
              team of tech experts who can help you transform your IT
              environment, look no further than BR Group Tech!
              <br />
              <br />
              Our cloud architects are experienced in helping businesses with
              reliable and future-ready migrations. This way, you can keep your
              business operations smooth and stay ahead of your competitors.
            </p>
          </Col>
        </Row>
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Why Choose Us</span>
          </h3>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <p>
                At BR Group Tech, we provide highly customized solutions for
                your needs. We have experienced IT professionals who are
                knowledgeable in cloud architecture, engineering, and planning.
                <br />
                When you partner with us, you gain access to the right knowledge
                and resources to get the job done right. Our tech experts can
                assist your businesses in streamlining IT infrastructure and
                migrating to the cloud. We have the resources and expertise to
                guide you through the entire process, from pre-migration
                planning to post-migration maintenance. Our goal is to make your
                transition to the cloud as smooth and seamless as possible.
                Contact us today to get started!
              </p>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn='flipInX'>
              <Image src={Whychoose} rounded={true} className='choose-image' />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Aboutus };
