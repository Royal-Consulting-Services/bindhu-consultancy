import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import './css/master.scss';
import 'animate.css';
import AdminHome from './components/AdminHome';
import Aboutus from './components/Aboutus';
import SSHome from './components/SSHome';
import Service from './components/Service';
import Careers from './components/Careers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SLIDERS, MENULINK, ADMINMENULINK } from './content';
import store from './store/store';
import { Provider } from 'react-redux';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/header/Header';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/footer/Footer';
import CareersDescription from './components/CareersDescription';
function App() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  let loginUser = stringifiedPerson?.loggedinUser?.userName;
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
          <Header
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
          <Header
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
          <Header
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
          <Route path='/admin' element={<AdminHome />} />
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
