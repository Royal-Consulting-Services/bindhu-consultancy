import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, Modal, Row, Col, Dropdown, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Slide1 } from '../images/images';


function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState(false);
    const [regMessage, setRegMessage] = useState("");
    const loginNavigate = useNavigate()
    const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
    const loginUser = stringifiedPerson?.loggedinUser?.userName;
    console.log(loginUser)
    async function loginSubmit() {
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
                loginNavigate("/admin");
                props.loginCall();
            } else {
                loginNavigate("/self")
                props.loginCall();
            }
        } else {
            setErrMessage(true)
        }
    }

    useEffect(()=>{
        setRegMessage(props.message?props.message:"");
        setTimeout(setRegMessage(""), 3000);
    },[])

    return (
        <Container fluid className='login-bg'>
            <div className='overlay'></div>
            <Image src={Slide1} className="backgrnd-img" />
            <div className='login-form-content'>
            <h3 style={{ color: "#ffffff", margin: "0px auto 50px auto", textAlign: "center" }}>Log In</h3>
            <Row>
                <Col xs={4} md={{ span: 4, offset: 4 }}>
                {(errMessage || regMessage) && <b style={{ color: errMessage ? "red" : regMessage ? "green" : "", marginBottom:"20px",display:"block" }}>
                {errMessage && "Please verify your Username or Password are incorrect"}
                {regMessage && regMessage} </b>}
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
                </Col>
            </Row>
            </div>
        </Container>
    );
}

export default Login;
