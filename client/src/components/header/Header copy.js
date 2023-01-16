import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, Modal, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuClick } from '../../action/action';

function Header(props) {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [formType, setFormType] = useState("");
  const [filter, setFilter] = useState([])
  const loginNavigate = useNavigate()
  const handleShow = (value) => {
    setShow(true);
    setFormType(value);
  }
  async function loginSubmit(props) {
    console.log(userName, password);
    // e.preventDefault();
    let item = { userName, password };
    let result = await fetch('http://localhost:4004/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    result = await result.json()
    result.loggedinUser = {
      userName: userName,
      passWord: password
    }
    if (result.statusCode === 200) {
      localStorage.setItem("user-info", JSON.stringify(result))
      console.log(result.data.authToken);
      if (userName === "admin") {
        loginNavigate("/admin")
      } else {
        loginNavigate("/self")
      }
    } else {
      setErrMessage(true)
    }
  }

  const signupSubmit = () => {
    fetch("http://localhost:4004/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: mobile,
        password: passWord,
        role: "user"
      }),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setRegMessage("Successfully Completed Your Registration, You Can Login Now!")
        setFormType("login");
      })
  }
  const Menu = props.menuLink.map((menu) => {
    return (
      <Nav.Link href="#action1" onClick={menu.onClick}>  {menu.icon && <FontAwesomeIcon icon={menu.icon} style={{ marginRight: "10px" }} onClick={() => setShow(false)} />}{menu.text}</Nav.Link>
    );
  });
  const menuToggle = () => {
    props.menuClick()
    console.log(props.menuToggle)
  }
  async function myProfile (){
    setShowProfile(true);
    let userName = props?.loggedin?.loggedinUser?.userName
    const response = await fetch(`http://localhost:4004/userByUserName/${userName}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
      }
  }
  );
  const selectedData = await response.json();
  let data = selectedData?.users;
  setFirstName(data.firstName);
  setLastName(data.lastName);
  setEmail(data.email);
  setMobile(data.phone);
  setPassWord(data.password);
  setUserName(data.userName);
  }
  useEffect(() => {
    if (errMessage) {
      setTimeout(() => {
        setErrMessage(false);
        setRegMessage("");
      }, 3000);
    }

  }, [errMessage,regMessage]);
  return (
    <>
      <Navbar bg="light" className={props.className} expand="lg" fixed={props.fixed}>
        <Container fluid={props.fluid}>
          {props.type === "adminpage" && <FontAwesomeIcon icon={faBars} style={{ marginRight: "10px" }} onClick={menuToggle} />}
          {props.type !== "table" && <Navbar.Brand href="#">Logo</Navbar.Brand>}

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {Menu}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {(props.type === "adminpage" || props.type === "selfpage") &&
              <div className='d-flex'>
                {props.type !== "adminpage" &&
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                }
                <Dropdown drop={"start"}>
                  <Dropdown.Toggle variant="link" id="dropdown-basic" className='user-profile' >
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                    <h5 className='profile-username'>{props?.loggedin?.loggedinUser?.userName}</h5>
                  </Dropdown.Toggle>
                  <Dropdown.Menu  >
                    <Dropdown.Item href="#/action-1" onClick={() => myProfile()}>Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                    <Dropdown.Item onClick={() => loginNavigate("/")}>Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            }
            {props.type === "homepage" &&
              <div className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <>
                  <Button variant="link" onClick={() => handleShow("login")}>Login</Button>
                  <Button variant="link" onClick={() => handleShow("signup")}>Signup</Button>
                </>
                {/* <Button variant="link"> <FontAwesomeIcon icon={faEdit} className="Edit-icon" /></Button> */}
              </div>
            }
            {props.type === "table" &&
              <div className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={props.inputonChange}
                  filterItem={filter}
                />
                {/* <Button variant="link"> <FontAwesomeIcon icon={faEdit} className="Edit-icon" /></Button> */}
              </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal className='full-modal-box' show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header >
          <FontAwesomeIcon icon={faClose} className={"modal-close"} onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body>
          <>
            <Row>
              {formType === "signup" &&
                <Col xs={12} md={{ span: 6, offset: 3 }} style={{ marginTop: "7%" }}>
                  <>
                    <h3 style={{ color: "#ffffff", margin: "0px auto 50px auto", textAlign: "center" }}>Sign Up</h3>
                    <Form>
                      <Row>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formMobile">
                            <Form.Control type="tel" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" value={passWord} onChange={e => setPassWord(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                          <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Control type="text" placeholder="User Name" value={userName} onChange={e => setUserName(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="d-grid gap-2">
                        <Button variant="primary" onClick={signupSubmit}>
                          Submit
                        </Button>
                      </div>
                    </Form>

                  </>
                </Col>
              }
              {formType === "login" &&
                <Col xs={12} md={{ span: 4, offset: 4 }} style={{ marginTop: "7%" }}>

                  <>
                    <h3 style={{ color: "#ffffff", margin: "0px auto 50px auto", textAlign: "center" }}>Log In</h3>
                    {(errMessage || regMessage )&& <p style={{ color: errMessage?"red":regMessage?"green":"" }}>
                      {errMessage &&  "Please verify your Username or Password are incorrect"}
                      {regMessage && regMessage} </p>}
                    <Form>
                      <Row>
                        <Col xs={12} md={12} >
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="User Name / Email" value={userName} onChange={e => setUserName(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={12} >
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" style={{ color: "#ffffff" }} />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button variant="primary" onClick={loginSubmit}>
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </>
                </Col>
              }
            </Row>
          </></Modal.Body>
      </Modal>
      {showProfile &&
                <>
                    <div className='panel-overlay'></div>
                    <div className='panel panel-medium'>
                        <FontAwesomeIcon icon={faClose} className={"panel-close"} onClick={() => (setShowProfile(false))} />
                        <h4 className='panel-header content-heading'>User Profile</h4>
                        <div className='panel-content'>
                            <Row>
                                <Col xs={6} md={{ span: 12 }}>
                                    <>
                                        <Form>
                                            <Row>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formFirstName">
                                                        <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} disabled={true ? true : false} />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formLastName">
                                                        <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} disabled={true ? true : false} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formEmail">
                                                        <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} disabled={true ? true : false}  />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formMobile">
                                                        <Form.Control type="tel" pattern="^[789]\d{9,9}$" maxlength={10} placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target. value)} disabled={true ? true : false}  />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formPassword">
                                                        <Form.Control type="password" placeholder="Password" value={passWord}  disabled={true ? true : false}  onChange={e => setPassWord(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} md={6} >
                                                    <Form.Group className="mb-3" controlId="formUserName">
                                                        <Form.Control type="text" placeholder="User Name" value={userName} disabled={true ? true : false} onChange={e => setUserName(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </>
                                </Col>
                            </Row>
                        </div>
                        <div className='panel-footer'><div className=" gap-2" style={{ textAlign: "center" }}>
  
                        </div></div>
                    </div>
                </>
            }
    </>
  );
}
const mapStateToProps = (state) => ({
  menuToggle: state.menuToggle
});
const mapDispatchToProps = (dispatch) => ({
  menuClick: () => dispatch(menuClick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
