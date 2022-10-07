import React from 'react'
import './Add.css';
import Create from './Process/Create'
import Payment from './Process/Payment'
import Theme from './Process/Theme'
import Modules from './Process/Modules'
import {
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

export default function Add() {
  const location = useLocation();
  const pname = location.pathname

  // path variables
  const create = '/clients/add/create-profile';
  const payment = '/clients/add/payment-setup';
  const theme = '/clients/add/theme-setup';
  const modules = '/clients/add/modules-setup';

  // if (pname === '/clients/add/' || pname === '/clients/add') {
  //   window.location.href = "/clients/add/create-profile"
  // }

  return (
    <>
      <div className="bg-white border rounded-3 shadow-sm mt-4">
        <div className="row m-0 text-center fs-13">
          <Link to="/clients/add/create-profile" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === create ? 'current' : ''}`}><span className='step1'>01</span> CREATE PROFILE</Link>

          <Link to="/clients/add/payment-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === payment ? 'current' : ''}`}><span className='step2'>02</span> PAYMENT SETUP</Link>

          <Link to="/clients/add/theme-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === theme ? 'current' : ''}`}><span className='step3'>03</span> THEME SETUP</Link>

          <Link to="/clients/add/modules-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === modules ? 'current' : ''}`}><span className='step4'>04</span> MODULES SETUP</Link>
        </div>

        <div className="">
          
          <Routes>
            <Route path="create-profile" element={<Create />} />
            <Route path="payment-setup" element={<Payment />} />
            <Route path="theme-setup" element={<Theme />} />
            <Route path="modules-setup" element={<Modules />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
