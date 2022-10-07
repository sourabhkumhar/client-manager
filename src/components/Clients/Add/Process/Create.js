import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Create() {
  const ref = useRef(null);

  const getImg = () => {
    ref.current.click();
  }

  return (
    <div className='px-3 py-4'>
      <h5 className='fw-bold'>Create Client Profile</h5>
      <span className='text-secondary fs-15'>Add some basic information related to the client.</span>

      <form>
        <div className='d-flex align-items-center mt-4 gap-3'>
          <input type="file" className='d-none' ref={ref} name="" id="" accept="image/*" required />
          <span onClick={getImg} style={{ borderRadius: "100%" }} className="pointer text-grey material-symbols-outlined border border-2 p-5">
            add
          </span>

          <div>
            <span>Company Name</span><br />
            <span className='fs-13 text-secondary'>Logo ratio shoud be 1:1 and should be 120px X 120 px</span>
          </div>
        </div>

        <div className="row justify-content-around px-2 my-4 fs-15">
          <input type="text" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Company Name *' required />

          <input type="url" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Website' />

          <select name="" className='col-inputs border p-2 m-2 rounded' id="" required>
            <option value="">Select Business Category *</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>

          <select name="" className='col-inputs border p-2 m-2 rounded' id="">
            <option value="">Select Facility Management Company *</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>

          <input type="email" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Company Email Address *' required />

          <input type="tel" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Mobile Number *' required />

          <select name="" className='col-inputs border p-2 m-2 rounded' id="" required>
            <option value="">Select State *</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>

          <div className="d-flex col-inputs my-2 gap-3 px-0">
            <select name="" className='text-secondary border p-2 w-75 rounded' id="" required>
              <option value="">Select City *</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </select>

            <input type="number" name="" className='text-secondary w-25 border p-2 rounded' id="" placeholder='Pincode *' required />
          </div>

          <input type="text" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='GST Number *' required />
          <input type="tel" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Fax Number' />
        </div>

        <div className="d-flex">
          <Link to="/clients/add/payment-setup" className='text-decoration-none'>
            <button className='d-flex btn bg-blue border py-2 rounded-3 mx-1'>Save & Continue<span className="material-symbols-outlined">navigate_next</span></button>
          </Link>

          <button type="reset" className='d-flex btn py-2 mx-1 gap-2 text-blue'><span style={{ transform: "scaleX(-1" }} className="material-symbols-outlined">refresh</span>Reset</button>
        </div>
      </form>
    </div>
  )
}
