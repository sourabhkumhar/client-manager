import React, { useState, useEffect } from 'react'
import './Main.css'
import {
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate
} from 'react-router-dom'

import View from '../Clients/View/View'
import Add from '../Clients/Add/Add'

export default function Main() {
    const [open, setOpen] = useState(true)

    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {

        }
        else {
            navigate("/login")
        }

        if (location.pathname === '/clients') {
            navigate("/clients/view")
        }

        if (location.pathname === '/clients/add') {
            navigate("/clients/add/create-profile")
        }

    }, [location.pathname, navigate])

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    const handleMenu = (e) => {
        document.querySelector(".sidebar").style.marginLeft = open ? "0px" : "-300px"
        e.target.innerText = open ? "close" : "menu"
        setOpen(open ? false : true)
    }

    return (
        <>
            <div className="btn-menu">
                <span onClick={handleMenu} className="material-symbols-outlined pointer">
                    menu
                </span>
            </div>

            <div className="d-flex">
                <div className="sidebar centered-flex-group">
                    <div id="menu">
                        <h6 className='fw-bold text-darkblue'>Company name</h6>

                        {/* search  */}
                        <div className="d-flex border rounded-5 p-2 my-3">
                            <span className="material-symbols-outlined px-1">search</span>
                            <input type="text" className='border-none' name="" id="" placeholder='Search modules' />
                        </div>

                        <p className='text-grey fs-13'>CLIENT MASTER</p>

                        <Link className={`btn ${location.pathname === '/clients/view' ? "btn-primary bg-blue" : ""} border-none col-12 text-start fs-13 py-2 px-4 my-1`} to="/clients">View Clients</Link>

                        <Link className={`btn ${location.pathname.includes('/clients/add') ? "btn-primary bg-blue" : ""} border-none col-12 text-start fs-13 py-2 px-4 my-1`} to="/clients/add">Add Clients</Link>

                    </div>

                    <div className="d-flex justify-content-between align-items-center w-100">
                        <img src={process.env.PUBLIC_URL + "/images/profile-pic.svg"} alt="" />

                        <div className='text-darkblue'>
                            <div>Jane Buston</div>
                            <div className="fs-13">james@thevouch.digital</div>
                        </div>

                        <span onClick={handleLogout} className="material-symbols-outlined text-secondary pointer">
                            logout
                        </span>
                    </div>

                </div>

                <div className="main-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className='fw-bold text-capitalize mt-3'>{location.pathname.match(/view|add/gi)} Clients</h4>
                            <span className='fs-13 text-capitalize'>{location.pathname.replace("-", " ").split("/").join(" / ").slice(3)}</span>
                        </div>

                        <span className="material-symbols-outlined pointer">
                            notifications
                        </span>
                    </div>

                    <Routes>
                        <Route path='/view' element={<View />} />
                        <Route path='/add/*' element={<Add />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
