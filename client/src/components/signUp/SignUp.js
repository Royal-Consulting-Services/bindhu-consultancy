import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginBg } from '../../images/images';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SignUp(props) {
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
  const [showPassword, setShowPassword] = useState(false);
  const signupNavigate = useNavigate();
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const loginUser = stringifiedPerson?.loggedinUser?.userName;
  console.log(loginUser);
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
    if (!inputValues.mobile) {
      errors.mobile = 'Mobile Number is required';
    } else {
      errors.mobile = '';
    }

    // email validation
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if (!inputValues.email) {
      errors.email = 'Email is required';
    } else if (!inputValues.email.match(emailRegex)) {
      errors.email = ' Invalid email address';
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
    if (
      inputValues.userName !== '' &&
      inputValues.firstName !== '' &&
      inputValues.lastName !== '' &&
      inputValues.email !== '' &&
      inputValues.mobile !== '' &&
      inputValues.passWord !== ''
    ) {
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
          phone: `+${inputValues.mobile}`,
          password: inputValues.passWord,
          role: 'user',
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          props.SignUpcall(
            'Successfully Completed Your Registration, You Can Login Now!'
          );
          signupNavigate('/login');
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
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  return (
    <Container fluid className='signup-bg'>
      <FontAwesomeIcon
        icon={faClose}
        className={'page-close'}
        onClick={() => signupNavigate('/')}
      />
      <div className='overlay'></div>
      <Image src={LoginBg} fluid={true} className='backgrnd-img' />
      <div className='login-form-content'>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
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
                  <Form.Group className='mb-3' controlId='formFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='text'
                      name={'firstName'}
                      placeholder='First Name'
                      value={inputValues.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                    {validation.firstName && (
                      <p style={{ color: '#ba3939' }}>{validation.firstName}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className='mb-3' controlId='formLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='text'
                      name={'lastName'}
                      placeholder='Last Name'
                      value={inputValues.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                    {validation.lastName && (
                      <p style={{ color: '#ba3939' }}>{validation.lastName}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name={'email'}
                      placeholder='Email'
                      value={inputValues.email}
                      onChange={(e) => handleChange(e)}
                    />
                    {validation.email && (
                      <p style={{ color: '#ba3939' }}>{validation.email}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group
                    className='mb-4 react-phone-control'
                    controlId='formMobile'
                  >
                    <Form.Label>Mobile</Form.Label>
                    <PhoneInput
                      name={'mobile'}
                      placeholder='Mobile'
                      country={'us'}
                      value={inputValues.mobile}
                      onChange={(value) =>
                        setInputValues(
                          { ...inputValues, ['mobile']: value },
                          () => checkValidation
                        )
                      }
                    />
                    {validation.mobile && (
                      <p className={'error-msg'}>{validation.mobile}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  {/* <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      name={'passWord'}
                      placeholder='Password'
                      value={inputValues.passWord}
                      onChange={(e) => handleChange(e)}
                    />
                  </Form.Group> */}
                  <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={!showPassword ? 'password' : 'text'}
                        name={'passWord'}
                        placeholder='Password'
                        value={inputValues.passWord}
                        onChange={(e) => handleChange(e)}
                      />
                      <InputGroup.Text id='basic-addon1'>
                        <FontAwesomeIcon
                          icon={!showPassword ? faEye : faEyeSlash}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className='mb-3' controlId='formUserName'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type='text'
                      name={'userName'}
                      placeholder='User Name'
                      value={inputValues.userName}
                      onChange={(e) => handleChange(e)}
                    />
                    {validation.userName && (
                      <p style={{ color: '#ba3939' }}>{validation.userName}</p>
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
            <hr />
            <p
              style={{
                color: '#ffffff',
                margin: '0px auto 20px auto',
                fontSize: '20px',
              }}
            >
              Already have a account login here
            </p>
            <div className='d-grid gap-2'>
              <Button
                variant='outline-primary'
                onClick={() => signupNavigate('/login')}
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export { SignUp };
