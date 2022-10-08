import React from 'react'
import './Add.css';
import Create from './Process/Create'
import Payment from './Process/Payment'
import Theme from './Process/Theme'
import Modules from './Process/Modules'
import Success from './Process/Success';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom'

export default function Add() {
  const location = useLocation();
  const navigate = useNavigate();
  const pname = location.pathname

  // path variables
  const create = '/clients/add/create-profile';
  const payment = '/clients/add/payment-setup';
  const theme = '/clients/add/theme-setup';
  const modules = '/clients/add/modules-setup';
  const completeProcess = new Set();

  const showComplete = (id) => {
    completeProcess.add(id)
    document.getElementById(id).innerHTML = '<img src="/images/success.svg" width="15px" height="15px alt="" />';

    if(completeProcess.lenght === 4) {
        navigate("/success")
    }
  }

  return (
    <>
      <div className="bg-white border rounded-3 shadow-sm mt-4">
        {pname !== "/clients/add/success" && <div className="row m-0 text-center fs-13 border-bottom">
          <Link to="/clients/add/create-profile" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === create ? 'current' : ''}`}><span id='step1'>01</span> CREATE PROFILE</Link>

          <Link to="/clients/add/payment-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === payment ? 'current' : ''}`}><span id='step2'>02</span> PAYMENT SETUP</Link>

          <Link to="/clients/add/theme-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === theme ? 'current' : ''}`}><span id='step3'>03</span> THEME SETUP</Link>

          <Link to="/clients/add/modules-setup" className={`col-6 col-md-3 py-3 text-decoration-none text-secondary ${pname === modules ? 'current' : ''}`}><span id='step4'>04</span> MODULES SETUP</Link>
        </div>}

        <div className="">
          <Routes>
            <Route path="create-profile" element={<Create showComplete={showComplete} />} />
            <Route path="payment-setup" element={<Payment showComplete={showComplete} />} />
            <Route path="theme-setup" element={<Theme showComplete={showComplete} />} />
            <Route path="modules-setup" element={<Modules showComplete={showComplete} />} />
            <Route path="success" element={<Success />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
