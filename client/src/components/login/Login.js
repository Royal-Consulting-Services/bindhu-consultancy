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
import { Slide1 } from '../../images/images';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState('');
  const loginNavigate = useNavigate();
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const loginUser = stringifiedPerson?.loggedinUser?.userName;
  const [showPassword, setShowPassword] = useState(false);
  console.log(loginUser);
  async function loginSubmit() {
    if (userName !== '' && password !== '') {
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
        if (userName === 'admin') {
          loginNavigate('/admin');
          props.loginCall();
        } else {
          loginNavigate('/self');
          props.loginCall();
        }
      } else {
        setErrMessage(true);
      }
    }
  }

  useEffect(() => {
    setRegMessage(props.message ? props.message : '');
    setTimeout(setRegMessage(''), 3000);
  }, []);

  return (
    <Container fluid className='login-bg'>
      <div className='overlay'></div>
      <FontAwesomeIcon
        icon={faClose}
        className={'page-close'}
        onClick={() => loginNavigate('/')}
      />
      <Image src={Slide1} fluid={true} className='backgrnd-img' />
      <div className='login-form-content'>
        <h3
          style={{
            color: '#ffffff',
            margin: '0px auto 50px auto',
            textAlign: 'center',
          }}
        >
          Log In
        </h3>
        <Row>
          <Col xs={12} md={{ span: 4, offset: 4 }}>
            {(errMessage || regMessage) && (
              <b
                style={{
                  color: errMessage
                    ? 'firebrick'
                    : regMessage
                    ? 'forestgreen'
                    : '',
                  marginBottom: '20px',
                  display: 'block',
                }}
              >
                {errMessage &&
                  'Please verify your Username or Password are incorrect'}
                {regMessage && regMessage}{' '}
              </b>
            )}
            <Form>
              <Row>
                <Col xs={12} md={12}>
                  <InputGroup className='mb-3' controlId='userName'>
                    <Form.Control
                      type='text'
                      placeholder='User Name '
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <InputGroup className='mb-3' controlId='password'>
                    <Form.Control
                      type={!showPassword ? 'password' : 'text'}
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Text id='basic-addon1'>
                      <FontAwesomeIcon
                        icon={!showPassword ? faEye : faEyeSlash}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>

              <div className='d-grid gap-2'>
                <Button variant='primary' onClick={loginSubmit}>
                  Submit
                </Button>
              </div>
            </Form>
            <hr />
            <p
              style={{
                color: '#ffffff',
                margin: '0px auto 20px auto',
              }}
            >
              Please Sign Up Here
            </p>
            <div className='d-grid gap-2'>
              <Button
                variant='outline-primary'
                onClick={() => loginNavigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export { Login };
