import React, { useState, useEffect } from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import "../css/master.scss";
import AdminHome from './AdminHome';
import SSHome from './SSHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MENULINK, ADMINMENULINK } from '../content';
import Header from './header/Header';
import Service from './Service';


function Main(props) {
    const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
    const loginUser = stringifiedPerson?.loggedinUser?.userName;
    console.log(loginUser)
    

    return (
        <>
            <Header menuLink={loginUser === "admin" ? ADMINMENULINK : MENULINK} className={"app-header"} type={loginUser ? (loginUser === "admin" ? "adminpage" : "selfpage") : "homepage"} fixed="top" fluid={loginUser === "admin" ? true : false} loggedin={stringifiedPerson}  />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/self" element={<Home />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </>
    );
}

export default Main;
