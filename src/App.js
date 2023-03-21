import React, {useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';

import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';

import Address from './questions/Address';
import Name from './questions/Name';
import EmailPhone from './questions/EmailPhone';
import Submit from './questions/Submit';
import ThankYou from './questions/ThankYou';


export default function App() {

  //store userData in a session storage 
  useEffect(() => {
    sessionStorage.setItem('userData local', userData)
    ipAddress();
 
}, [])

  return (
    <div>
      <NavBar />
      <ToastContainer limit={1} position='bottom-left' theme='colored' />
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
       
        
        <Route path='/address' element={<Address />} />
        <Route path='/name' element={<Name />} />
        <Route path='/email-phone' element={<EmailPhone />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>

      <Footer/>
    </div>
  )

}