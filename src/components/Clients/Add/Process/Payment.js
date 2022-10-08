import React from 'react'
import { Link } from 'react-router-dom'

export default function Payment(props) {
  return (
    <div className='px-3 py-4'>
      <h5 className='fw-bold'>Payment Setup</h5>
      <span className='text-secondary fs-15'>Set up payments for the client.</span>

      <form>
        <div className="row justify-content-around px-2 my-4 fs-15">
          <input type="text" name="" className='col-inputs-full border p-2 m-2 rounded' id="" placeholder="Billing Address *" required />

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

          <select name="" className='col-inputs border p-2 m-2 rounded' id="" required>
            <option value="">Select Number of Site Access *</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>

          <div className="col-inputs d-flex justify-content-between border p-2 m-2 rounded input-group">
            <div className='d-flex'>
              <span className="input-group-text p-0 m-0 px-1 bg-white border-none">Rs.</span>

              <input type="number" className="p-0 m-0 px-1 border-none" placeholder='Payable Amount per Site *' required />
            </div>

            <div className='d-flex'>
              <div className='vr mx-1'></div>

              <span className="input-group-text p-0 m-0 px-1 bg-white border-none">Total: &nbsp; Rs.</span>

              <span className="input-group-text p-0 m-0 px-1 bg-white border-none">000000</span>
            </div>
          </div>

          <input type="number" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Discount (%) *' required />

          <input type="text" name="" className='col-inputs border p-2 m-2 rounded' id="" placeholder='Reason *' required />

          {/* payment mode */}
          <div className="d-inline-block col-inputs mt-3 rounded text-black">
            <p className='fw-bold'>Payment Mode</p>

            <div className="">
              <input type="checkbox" name="paymentMode" id="" />
              <span> UPI</span>
            </div>

            <div className="">
              <input type="checkbox" name="paymentMode" id="" />
              <span> Net Banking</span>
            </div>

            <div className="">
              <input type="checkbox" name="paymentMode" id="" />
              <span> Cash</span>
            </div>

            <div className="">
              <input type="checkbox" name="paymentMode" id="" />
              <span> Cheque</span>
            </div>

            <div className="">
              <input type="checkbox" name="paymentMode" id="" />
              <span> Other</span>
            </div>
          </div>

          <div className="d-inline-block col-inputs mt-3 rounded text-black">
            <p className='fw-bold'>Payment Status</p>

            <div className="">
              <input type="radio" name="paymentStatus" id="" />
              <span> Cheque</span>
            </div>

            <div className="">
              <input type="radio" name="paymentStatus" id="" />
              <span> Other</span>
            </div>
          </div>

        </div>

        <div className="d-flex">
          <Link onClick={() => props.showComplete('step2')} to="/clients/add/theme-setup" className='text-decoration-none'>
            <button className='d-flex btn bg-blue border py-2 rounded-3 mx-1'>Save & Continue<span className="material-symbols-outlined">navigate_next</span></button>
          </Link>

          <button type="reset" className='d-flex btn py-2 mx-1 gap-2 text-blue'><span style={{ transform: "scaleX(-1" }} className="material-symbols-outlined">refresh</span>Reset</button>
        </div>
      </form>
    </div>
  )
}
