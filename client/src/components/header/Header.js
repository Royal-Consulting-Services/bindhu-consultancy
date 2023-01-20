import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Modal,
  Row,
  Col,
  Dropdown,
  Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuClick } from '../../action/action';
import { MainLogo } from '../../images/images';

function Header(props) {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    passWord: '',
    role: 'user',
  });

  const [validation, setValidation] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    passWord: '',
  });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [formType, setFormType] = useState('');
  const [headerType] = useState(props.type);
  const headerNavigate = useNavigate();

  async function loginSubmit(props) {
    console.log(userName, password);
    let item = { userName, password };
    let result = await fetch('http://localhost:4004/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    result.loggedinUser = {
      userName: userName,
      passWord: password,
    };
    if (result.statusCode === 200) {
      localStorage.setItem('user-info', JSON.stringify(result));
      console.log(result.data.authToken);
      if (userName === 'admin') {
        headerNavigate('/admin');
      } else {
        headerNavigate('/self');
      }
    } else {
      setErrMessage(true);
    }
  }
  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.firstName) {
      errors.firstName = 'First name is required';
    } else {
      errors.firstName = '';
    }
    //last Name validation
    if (!inputValues.lastName) {
      errors.lastName = 'Last name is required';
    } else {
      errors.lastName = '';
    }

    //user Name validation
    if (!inputValues.userName) {
      errors.userName = 'User name is required';
    } else {
      errors.userName = '';
    }

    //mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!inputValues.mobile) {
      errors.mobile = 'Mobile Number is required';
    } else if (!inputValues.mobile.match(mobileRegex)) {
      errors.mobile = 'Invalid email address';
    } else {
      errors.mobile = '';
    }
    // email validation
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if (!inputValues.email) {
      errors.email = 'Email is required';
    } else if (!inputValues.email.match(emailRegex)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }
    if (
      errors.firstName ||
      errors.lastName ||
      errors.email ||
      errors.phone ||
      errors.userName ||
      errors.passWord
    ) {
      errors.isValid = false;
    } else {
      errors.isValid = true;
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const signupSubmit = () => {
    fetch('http://localhost:4004/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userName: inputValues.userName,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        phone: inputValues.mobile,
        password: inputValues.passWord,
        role: 'user',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRegMessage(
          'Successfully Completed Your Registration, You Can Login Now!'
        );
        setFormType('login');
        setInputValues({
          userName: '',
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          passWord: '',
          role: 'user',
        });
      });
  };
  const Menu = props.menuLink.map((menu) => {
    return (
      <Nav.Link
        href={menu.key}
        onClick={menu.onClick}
        className={menu.key === props.selectedMenu ? 'active' : ''}
      >
        {menu.icon && (
          <FontAwesomeIcon
            icon={menu.icon}
            style={{ marginRight: '10px' }}
            onClick={() => setShow(false)}
          />
        )}
        {menu.text}
      </Nav.Link>
    );
  });
  const menuToggle = () => {
    props.menuClick();
    console.log(props.menuToggle);
  };
  async function myProfile() {
    setShowProfile(true);
    let userName = props?.loggedin?.loggedinUser?.userName;
    const response = await fetch(
      `http://localhost:4004/userByUserName/${userName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            stringifiedPerson.data.authToken &&
            `Bearer ${stringifiedPerson.data.authToken}`,
        },
      }
    );
    const selectedData = await response.json();
    let data = selectedData?.users;
    setInputValues({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.phone,
      passWord: data.password,
      role: 'user',
    });
  }
  useEffect(() => {
    if (errMessage) {
      setTimeout(() => {
        setErrMessage(false);
        setRegMessage('');
      }, 3000);
    }
  }, [errMessage, regMessage]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  const signOut = () => {
    localStorage.removeItem('user-info');
    headerNavigate('/');
    props.clickEvent();
  };

  const navigateLogin = () => {
    headerNavigate('/login');
    // props.forceLoad();
  };
  const navigateSignup = () => {
    headerNavigate('/signup');
    // props.forceLoad();
  };
  const url = window.location.pathname;
  return (
    url !== '/login' &&
    url !== '/signup' && (
      <>
        <Navbar
          bg='light'
          className={props.className}
          expand='lg'
          fixed={props.fixed}
        >
          <Container fluid={props.fluid} className={'app-header-container'}>
            {props.type === 'adminpage' && (
              <FontAwesomeIcon
                icon={faBars}
                style={{ marginRight: '10px', fontSize: '25px' }}
                onClick={menuToggle}
              />
            )}
            {props.type !== 'table' && (
              <Navbar.Brand href='/'>
                <Image src={MainLogo} style={{ height: '38px' }} />
              </Navbar.Brand>
            )}
            {props?.type !== 'adminpage' && props?.type !== 'table' && (
              <Navbar.Toggle aria-controls='navbarScroll' />
            )}
            {props?.type === 'table' ? (
              <>{Menu}</>
            ) : (
              <Navbar.Collapse id='navbarScroll'>
                <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                  {Menu}
                </Nav>
                {props.type === 'homepage' && (
                  <div className='d-flex'>
                    <>
                      <Button
                        variant='outline-secondary'
                        size={'lg'}
                        onClick={navigateLogin}
                      >
                        Login
                      </Button>
                      <Button
                        variant='outline-primary'
                        size={'lg'}
                        className={'left'}
                        onClick={navigateSignup}
                      >
                        Signup
                      </Button>
                    </>
                  </div>
                )}
              </Navbar.Collapse>
            )}
            <>
              {(props.type === 'adminpage' || props.type === 'selfpage') && (
                <div className='d-flex profile-dd'>
                  <Dropdown drop={'start'}>
                    <Dropdown.Toggle
                      variant='link'
                      id='dropdown-basic'
                      className='user-profile'
                    >
                      <FontAwesomeIcon icon={faUser} className='profile-icon' />
                      <h5 className='profile-username'>
                        {props?.loggedin?.loggedinUser?.userName}
                      </h5>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => myProfile()}>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => signOut()}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </>
          </Container>
        </Navbar>
        <Modal
          className='full-modal-box'
          show={show}
          fullscreen={true}
          onHide={() => setShow(false)}
        >
          <Modal.Header>
            <FontAwesomeIcon
              icon={faClose}
              className={'modal-close'}
              onClick={() => setShow(false)}
            />
          </Modal.Header>
          <Modal.Body>
            <>
              <Row>
                {formType === 'signup' && (
                  <Col
                    xs={12}
                    md={{ span: 6, offset: 3 }}
                    style={{ marginTop: '7%' }}
                  >
                    <>
                      <h3
                        style={{
                          color: '#ffffff',
                          margin: '0px auto 50px auto',
                          textAlign: 'center',
                        }}
                      >
                        Sign Up
                      </h3>
                      <Form>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formFirstName'
                            >
                              <Form.Control
                                type='text'
                                name={'firstName'}
                                placeholder='First Name'
                                value={inputValues.firstName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.firstName && (
                                <p style={{ color: '#ba3939' }}>
                                  {validation.firstName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formLastName'
                            >
                              <Form.Control
                                type='text'
                                name={'lastName'}
                                placeholder='Last Name'
                                value={inputValues.lastName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.lastName && (
                                <p style={{ color: '#ba3939' }}>
                                  {validation.lastName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formEmail'>
                              <Form.Control
                                type='email'
                                name={'email'}
                                placeholder='Email'
                                value={inputValues.email}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.email && (
                                <p style={{ color: '#ba3939' }}>
                                  {validation.email}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formMobile'>
                              <Form.Control
                                type='tel'
                                name={'mobile'}
                                placeholder='Mobile'
                                value={inputValues.mobile}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.mobile && (
                                <p style={{ color: '#ba3939' }}>
                                  {validation.mobile}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formPassword'
                            >
                              <Form.Control
                                type='password'
                                name={'passWord'}
                                placeholder='Password'
                                value={inputValues.passWord}
                                onChange={(e) => handleChange(e)}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formUserName'
                            >
                              <Form.Control
                                type='text'
                                name={'userName'}
                                placeholder='User Name'
                                value={inputValues.userName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.userName && (
                                <p style={{ color: '#ba3939' }}>
                                  {validation.userName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className='d-grid gap-2'>
                          <Button variant='primary' onClick={signupSubmit}>
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </>
                  </Col>
                )}
                {formType === 'login' && (
                  <Col
                    xs={12}
                    md={{ span: 4, offset: 4 }}
                    style={{ marginTop: '7%' }}
                  >
                    <>
                      <h3
                        style={{
                          color: '#ffffff',
                          margin: '0px auto 50px auto',
                          textAlign: 'center',
                        }}
                      >
                        Log In
                      </h3>
                      {(errMessage || regMessage) && (
                        <p
                          style={{
                            color: errMessage
                              ? '#ba3939'
                              : regMessage
                              ? 'forestgreen'
                              : '',
                          }}
                        >
                          {errMessage && 'Username or Password are incorrect'}
                          {regMessage && regMessage}{' '}
                        </p>
                      )}
                      <Form>
                        <Row>
                          <Col xs={12} md={12}>
                            <Form.Group
                              className='mb-3'
                              controlId='formBasicEmail'
                            >
                              <Form.Control
                                type='text'
                                placeholder='User Name / Email'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={12}>
                            <Form.Group
                              className='mb-3'
                              controlId='formBasicEmail'
                            >
                              <Form.Control
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <div className='d-grid gap-2'>
                          <Button variant='primary' onClick={loginSubmit}>
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </>
                  </Col>
                )}
              </Row>
            </>
          </Modal.Body>
        </Modal>
        {showProfile && (
          <>
            <div className='panel-overlay'></div>
            <div className='panel panel-medium'>
              <FontAwesomeIcon
                icon={faClose}
                className={'panel-close'}
                onClick={() => setShowProfile(false)}
              />
              <h4 className='panel-header content-heading'>User Profile</h4>
              <div className='panel-content'>
                <Row>
                  <Col xs={6} md={{ span: 12 }}>
                    <>
                      <Form>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formFirstName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='First Name'
                                value={inputValues.firstName}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formLastName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='Last Name'
                                value={inputValues.lastName}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formEmail'>
                              <Form.Control
                                type='email'
                                placeholder='Email'
                                value={inputValues.email}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formMobile'>
                              <Form.Control
                                type='tel'
                                pattern='^[789]\d{9,9}$'
                                maxlength={10}
                                placeholder='Mobile'
                                value={inputValues.mobile}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formPassword'
                            >
                              <Form.Control
                                type='password'
                                placeholder='Password'
                                value={inputValues.passWord}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formUserName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='User Name'
                                value={inputValues.userName}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </>
                  </Col>
                </Row>
              </div>
              <div className='panel-footer'>
                <div className=' gap-2' style={{ textAlign: 'center' }}></div>
              </div>
            </div>
          </>
        )}
      </>
    )
  );
}
const mapStateToProps = (state) => ({
  menuToggle: state.menuToggle,
});
const mapDispatchToProps = (dispatch) => ({
  menuClick: () => dispatch(menuClick()),
});

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderConnect };
