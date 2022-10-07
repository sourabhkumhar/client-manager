import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"

export default function Login(props) {
    const [cred, setCred] = useState({ email: "", password: "" })
    let navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cred.email, password: cred.password })
      })
      const json = await response.json()
  
      if (json.token) {
        // save the auth token and redirect
        localStorage.setItem('token', json.token)
        navigate("/clients");
        props.showAlert('Logged in Successfully', 'success', 'Success');
      }
      else {
        props.showAlert(`${json.error}`, 'danger', 'Error');
      }
    }
  
    const handleChange = (e) => {
      setCred({ ...cred, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="row gx-0" style={{ height: "100vh" }}>
                <div className="col-lg-5 col-12 centered-flex-group py-3">

                    <div></div>
                    <form action="" method="post" onSubmit={handleLogin}>
                        <div className="centered-flex-group">
                            <h2><b>Welcome</b></h2>
                            <span className="subtitle text-secondary">Enter your Username and Passoword.</span>

                            <div className="login-inputs d-flex justify-content-baseline border border-1 py-3 rounded-3 my-1">
                                <span className="material-symbols-outlined px-3">
                                    person
                                </span>
                                <input onChange={handleChange} type="text" className='border-none w-100 pe-3' name="email" id="email" placeholder='Email Address' />
                            </div>

                            <div className="login-inputs d-flex justify-content-baseline border border-1 py-3 rounded-3 my-1">
                                <span className="material-symbols-outlined px-3">
                                    lock
                                </span>
                                <input onChange={handleChange} type="password" className='border-none w-100 pe-3' name="password" id="password" placeholder='password' />
                            </div>

                            <button type='submit' className='login-inputs btn btn-primary bg-blue py-3 my-1'>Submit</button>

                            <a href="/" className='text-decoration-none text-secondary fs-6 py-3'>Forgot Password?</a>
                        </div>
                    </form>

                    <div className="row text-center mt-3">
                        <p className="col-6 subtitle text-end">Terms of Use</p>
                        <p className="col-6 subtitle text-start">Privacy Policy</p>
                        <p className="col-12 subtitle">© Punctualiti 2022. All rights reserved</p>
                    </div>

                </div>

                <div className="col-lg-7 col-12 bg-blue text-center p-5">
                    <img src={process.env.PUBLIC_URL + "/images/login-page.svg"} alt="" className='login-page-svg' />

                    <h5>360° Solution for Asset Management</h5>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </>
    )
}