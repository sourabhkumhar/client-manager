import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Modules(props) {
  useEffect(() => {
    const pages = [...document.querySelectorAll(".check")]
    let listOfClass = null
    pages.forEach(element => {
      element.addEventListener("click", event => {
        if (listOfClass) {
          listOfClass.classList.remove("bg-blue");
        }
        event.currentTarget.classList.add("bg-blue");
        listOfClass = event.currentTarget;
      });
    });
  }, [])
  return (
    <div className='px-3 py-4'>
      <h5 className='fw-bold'>Modules Setup</h5>
      <span className='text-secondary fs-15'>Select the modules that the client can use.</span>

      <form className='mt-3'>

        <div className="d-md-flex d-block gap-4">
          <div className='d-flex flex-column w-25'>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Home / Dashboard</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Helpdesk</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Assets</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Daily Tasks</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>PPM</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Employees</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Profile</span>
            </div>

            <div className="check my-1 p-2 rounded d-flex gap-2">
              <input type="checkbox" name="" id="" />
              <span className='fs-15'>Transaction</span>
            </div>
          </div>

          <div className="shadow-lg p-3 w-75 col-inputs.full">
            <div className="d-md-flex d-block justify-content-between">
              <div className="d-flex">
                <img src={process.env.PUBLIC_URL + "/images/daily-task.svg"} alt="" />
                <div className='px-2'>
                  <div className='fw-bold'>Daily Tasks</div>
                  <span className='fs-13'>Select the sub modules that the client can use.</span>
                </div>
              </div>
              <button className="btn btn-primary bg-blue border-0 d-flex" style={{ paddingTop: "12px" }}><span class="material-symbols-outlined">done</span>Visible to Client</button>
            </div>

            <div className="d-flex flex-column mt-3">
              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15 fw-bold'>Show All Sub Modules</span>
              </div>

              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15'>Summary</span>
              </div>

              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15'>View Tasks</span>
              </div>

              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15'>Create New Task</span>
              </div>

              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15'>Logbook</span>
              </div>

              <div className="p-1 d-flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className='fs-15'>Logsheet</span>
              </div>

              <ul className='text-secondary'>
                <div className="d-flex gap-1">
                  <input type="checkbox" name="" id="" />
                  <span className='fs-15'>Daily</span>
                </div>

                <div className="d-flex gap-1">
                  <input type="checkbox" name="" id="" />
                  <span className='fs-15'>Activity Wise</span>
                </div>
              </ul>
            </div>
          </div>
        </div>


        <div className="d-flex">
          <Link onClick={() => props.showComplete('step3')} to="/clients/add/success" className='text-decoration-none'>
            <button className='d-flex btn bg-blue border py-2 rounded-3 mx-1'>Save & Continue<span className="material-symbols-outlined">navigate_next</span></button>
          </Link>

          <button type="reset" className='d-flex btn py-2 mx-1 gap-2 text-blue'><span style={{ transform: "scaleX(-1)" }} className="material-symbols-outlined">refresh</span>Reset</button>
        </div>
      </form>
    </div>
  )
}
