import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import './css/master.scss';
import 'animate.css';
import { Home } from './components/home';
import { AdminHomeConnect } from './components/adminHome';
import { Aboutus } from './components/about';
import { SSHome } from './components/selfHome';
import { Service } from './components/service';
import { Careers } from './components/careers';

import store from './store/store';

import { Contact } from './components/contact';
import { Login } from './components/login';
import { SignUp } from './components/signUp';
import { HeaderConnect } from './components/header';
import { ServiceDetail } from './components/serviceDetail';
import { Footer } from './components/footer';
import { CareersDescription } from './components/careersDescription';
import { MENULINK, ADMINMENULINK } from './content';

function App() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem('user-info'))?.loggedinUser?.userName
  );
  const [serviceDetail, setServiceDetail] = useState({});
  const [regMessage, setRegMessage] = useState('');
  const url = window.location.pathname;
  console.log(url);
  useEffect(() => {
    setUserLogin(userLogin);
  }, [userLogin]);
  const homeCallback = (e) => {
    setUserLogin(userLogin);
    console.log(localStorage.getItem('user-info')?.loggedinUser?.userName);
    window.location.reload();
  };
  useEffect(() => {
    setUserLogin(userLogin);
  }, []);
  const loginCallback = () => {
    setUserLogin(userLogin);
    window.location.reload();
  };
  const refresh = () => {
    window.location.reload();
  };
  const SignUpcallback = (item) => {
    setRegMessage(item);
  };
  const serviceCallback = (item) => {
    setServiceDetail(item);
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        {userLogin === 'admin' ? (
          <HeaderConnect
            menuLink={ADMINMENULINK}
            className={'app-header'}
            type={'adminpage'}
            fluid={true}
            fixed='top'
            loggedin={stringifiedPerson}
            clickEvent={(e) => homeCallback()}
            forceLoad={refresh}
          />
        ) : userLogin && userLogin !== 'admin' ? (
          <HeaderConnect
            menuLink={MENULINK}
            selectedMenu={url === '/' ? 'home' : url.replace('/', '')}
            className={'app-header'}
            type={'selfpage'}
            fixed=''
            loggedin={stringifiedPerson}
            clickEvent={(e) => homeCallback()}
            forceLoad={refresh}
          />
        ) : (
          <HeaderConnect
            menuLink={MENULINK}
            selectedMenu={url === '/' ? 'home' : url.replace('/', '')}
            className={'app-header'}
            type={'homepage'}
            fixed=''
            clickEvent={(e) => homeCallback()}
            forceLoad={refresh}
          />
        )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/admin' element={<AdminHomeConnect />} />
          <Route path='/self' element={<SSHome />} />
          <Route
            path='/service'
            element={<Service clickEvent={(item) => serviceCallback(item)} />}
          />
          <Route
            path='/servicedetail'
            element={<ServiceDetail detail={serviceDetail} />}
          />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careersdescription' element={<CareersDescription />} />
          <Route
            path='/login'
            element={<Login loginCall={loginCallback} message={regMessage} />}
          />
          <Route
            path='/signup'
            element={<SignUp SignUpcall={SignUpcallback} />}
          />
        </Routes>
        {url !== '/login' && url !== '/signup' ? (
          userLogin === 'admin' ? (
            <Footer type='admin' />
          ) : (
            <Footer />
          )
        ) : (
          ''
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
