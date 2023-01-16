import React, { useState, useEffect } from 'react';
import { Table, Row, Col, ListGroup, Container, Form, Button, Alert, Modal } from 'react-bootstrap';
import Header from './header/Header';
import { ADMINMENULINK } from '../content';
import Footer from './footer/Footer';
import { faClose, faAdd, faEdit, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

function AdminHome(props) {
    const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
    console.log(stringifiedPerson.data.authToken);
    const [userList, setUserList] = useState([]);
    const [filterList, setFilterList] = useState([])
    const [addUserPnl, setAddUserPnl] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [showConfirmation, setshowConfirmation] = useState(false)
    const [selectedItem, setSelectedItem] = useState([]);
    const AddUserOpen = () => {
        setAddUserPnl(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
        setPassWord("");
        setUserName("");
    }
    async function editUserOpen(item) {
        setAddUserPnl(true);
        const response = await fetch(`http://localhost:4004/userByUserName/${item.userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
            }
        }
        );
        const selectedData = await response.json();
        let data = selectedData?.users;
        setSelectedItem(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setMobile(data.phone);
        setPassWord(data.password);
        setUserName(data.userName);
    }
    async function deleteConfirm(item) {
        setshowConfirmation(true)
        const response = await fetch(`http://localhost:4004/userByUserName/${item.userName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
            }
        }
        );
        const selectedData = await response.json();
        let data = selectedData?.users;
        setUserName(data.userName);
    }
    const USERTABLEMENU = [
        {
            id: "adduser",
            text: "Add User",
            icon: faAdd,
            onClick: AddUserOpen
        }
    ]
    let UpdateUserData = () => {
        fetch("http://localhost:4004/updateUser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
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
                setAddUserPnl(false)
                getData();
                setMessage(res.message);
                setMessageType("success")
            })
    }
    let DeleteUserData = (userName) => {
        fetch(`http://localhost:4004/delete/${userName}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
            },
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                setshowConfirmation(false)
                getData();
                setMessage(res.message);
                setMessageType("success")
            })
    }
    let AddUserData = () => {

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
                setAddUserPnl(false)
                getData();
                setMessage(res.message);
                setMessageType("success")

            })
    }
    useEffect(() => {
        getData();
        document.getElementsByClassName("scroll-content")[0].style.height = (window.innerHeight - 110) + "px";
        if (message) {
            setTimeout(() => {
                setMessage("");
                setMessageType("")
                setFirstName("");
                setLastName("");
                setEmail("");
                setMobile("");
                setPassWord("");
                setUserName("");
            }, 3000);
        }

    }, [message]);
    async function getData() {
        const response = await fetch('http://localhost:4004/getAllUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: stringifiedPerson.data.authToken && `Bearer ${stringifiedPerson.data.authToken}`
            }
        }
        );
        const data = await response.json();
        setUserList(data.users);
    }
    const requestSearch = (searchValue, items) => {
        if (searchValue.length < 1 || !searchValue) {
            setFilterList(userList)
        }
        else {
            const filteredRows = items.filter((item) => {
                return (item.firstName.toString().toLowerCase().includes(searchValue.toString().toLowerCase()) || item.lastName.toString().toLowerCase().includes(searchValue.toString().toLowerCase()) || item.email.toString().toLowerCase().includes(searchValue.toString().toLowerCase()) || item.phone.toString().toLowerCase().includes(searchValue.toString().toLowerCase()))
            });
            setFilterList(filteredRows)
        }
    };
    const users = filterList.length ? filterList : userList;
    const userData = users.map((item, index) =>
        <tr>
            <td>{index}</td>
            <td><Button variant="link" onClick={event => editUserOpen(item)}>{item.firstName}</Button></td>
            <td>{item.lastName}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.role}</td>
            <td> <FontAwesomeIcon icon={faEdit} style={{ padding: "5px" }} onClick={event => editUserOpen(item)} />
                <FontAwesomeIcon icon={faTrash} style={{ padding: "5px" }} onClick={event => deleteConfirm(item)} /></td>
        </tr>
    )

    return (
        <>
            <Container fluid>
                <Row style={{ marginTop: "60px" }}>
                    {!props.menuToggle &&
                        <Col xs={12} md={3} style={{ boxShadow: "1px 0px 5px 0px #403c4329",padding:"0px" }}>
                            <ListGroup defaultActiveKey="#link1" className='side-menu'>
                                <ListGroup.Item action href="#link1">
                                <FontAwesomeIcon icon={faUsers} style={{ marginRight: "5px" }}  /> User List
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    }
                    <Col xs={12} md={props.menuToggle ? 12 : 9} >
                        <>
                            {message &&
                                <Alert key={messageType} variant={messageType} className={"page-message"} onClose={() => setMessage("")} dismissible>
                                    {message}
                                </Alert>
                            }
                            <div className='scroll-content'>
                                <Header menuLink={USERTABLEMENU} type={"table"} fluid={true} inputonChange={(e) => requestSearch(e.target.value, userList)} />
                                <Table responsive="xl">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData}
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    </Col>
                </Row>
            </Container>
            {addUserPnl &&
                <>
                    <div className='panel-overlay'></div>
                    <div className='panel panel-medium'>
                        <FontAwesomeIcon icon={faClose} className={"panel-close"} onClick={() => (setAddUserPnl(false), setSelectedItem([]))} />
                        <h4 className='panel-header content-heading'>{selectedItem.userName ?"Edit User":"Add User"}</h4>
                        <div className='panel-content'>
                            <Row>
                                <Col xs={6} md={{ span: 12 }}>
                                    <>
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
                                                        <Form.Control type="tel" pattern="^[789]\d{9,9}$" maxlength={10} placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
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
                                                        <Form.Control type="text" placeholder="User Name" value={userName} disabled={selectedItem.userName ? true : false} onChange={e => setUserName(e.target.value)} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </>
                                </Col>
                            </Row>
                        </div>
                        <div className='panel-footer'><div className=" gap-2" style={{ textAlign: "center" }}>
                            <Button variant="link" onClick={() => (setAddUserPnl(false), setSelectedItem([]))}>
                                Cancel
                            </Button>
                            {selectedItem.userName ?
                                <Button variant="primary" size={"sm"} onClick={UpdateUserData}>
                                    Update
                                </Button> :
                                <Button variant="primary" size={"sm"} onClick={AddUserData}>
                                    Save
                                </Button>}
                        </div></div>
                    </div>
                </>
            }
            {showConfirmation &&
                <Modal show={showConfirmation} onHide={() => setshowConfirmation(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure, you want to delete <b>{userName}</b> ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setshowConfirmation(false)}>
                            No
                        </Button>
                        <Button variant="primary" onClick={() => DeleteUserData(userName)}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    menuToggle: state.menuToggle
});

export default connect(mapStateToProps, "")(AdminHome);