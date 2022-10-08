import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Theme(props) {
  const [color, setColor] = useState({ primaryColor: "#000000", loginColor: "#FFFFFF" })

  const handleColor = (e) => {
    if (e.target.id === "primary") {
      setColor({ primaryColor: (e.target.value).toUpperCase() })
    }
    if (e.target.id === "loginTheme") {
      setColor({ loginColor: (e.target.value).toUpperCase() })
    }
  }
  
  useEffect(() => {
    const pages = [...document.querySelectorAll(".page")]
    let listOfClass = null
    pages.forEach(element => {
      element.addEventListener("click", event => {
        if (listOfClass) {
          listOfClass.classList.remove("page-selected");
        }
        
        event.currentTarget.classList.add("page-selected");
        listOfClass = event.currentTarget;
      });
    });
  }, [])
    
  return (
    <div className='px-3 py-4'>
      <h5 className='fw-bold'>Theme Setup</h5>
      <span className='text-secondary fs-15'>Add information about the client to give them a personalized experience.</span>

      <form className='mt-3'>
        <span className='m-0 fw-bold fs-13 text-secondary'>Primary Color</span>
        <div className="input-group rounded-3 border p-2 gap-3">
          <input type="color" id="primary" onChange={handleColor} name="" className='p-2 border-0 rounded-3' value={color.primaryColor} required />

          <input type="text" name="" value={color.primaryColor} className='border-none' id="" />
        </div>

        <div className=" mt-3">
          <div className='fw-bold'>Login Theme</div>
          <span className='fs-13 text-secondary'>Select the look and feel of the login page.</span>
        </div>

        <span className='fw-bold fs-13 text-secondary'>Use Color</span>
        <div className="input-group rounded-3 border p-2 gap-3">
          <input type="color" onChange={handleColor} name="" className='p-2 border-0' id="loginTheme" value={color.loginColor} required />

          <input type="text" name="" value={color.loginColor} className='border-none' id="" />
        </div>

        <div className='fw-bold mt-3'>Where Should be the login modal?</div>
        <div className="d-sm-flex d-block gap-2 pt-2 mb-3">
          <div className="page">
            <div className="login-modal float-start"></div>
          </div>

          <div className="page">
            <div className="login-modal float-center"></div>
          </div>

          <div className="page">
            <div className="login-modal float-end"></div>
          </div>
        </div>

        <div className="d-flex">
          <Link onClick={() => props.showComplete('step3')} to="/clients/add/modules-setup" className='text-decoration-none'>
            <button className='d-flex btn bg-blue border py-2 rounded-3 mx-1'>Save & Continue<span className="material-symbols-outlined">navigate_next</span></button>
          </Link>

          <button type="reset" className='d-flex btn py-2 mx-1 gap-2 text-blue'><span style={{ transform: "scaleX(-1)" }} className="material-symbols-outlined">refresh</span>Reset</button>
        </div>
      </form>
    </div>
  )
}
