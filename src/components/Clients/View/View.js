import React from 'react'
import './View.css'

export default function View() {

  return (
    <>
      <div className="bg-white border rounded-3 shadow-sm mt-4">
        <div className='d-sm-flex justify-content-between align-items-baseline px-3 mb-sm-0 mb-3'>

          {/* search */}
          <div className="d-flex border rounded-5 p-2 my-3 text-grey">
            <span className="material-symbols-outlined px-1">search</span>
            <input type="text" className='border-none' name="" id="" placeholder='Search' />
          </div>

          <div className="d-flex">
            <select name="" id="" className='d-flex border px-3 py-2 rounded-3 mx-1'>
              <option value="">Column</option>
              <option value=""></option>
              <option value=""></option>
            </select>

            <button className='d-flex btn border p-2 rounded-3 mx-1'><span className="material-symbols-outlined">file_download</span>Export</button>
          </div>

        </div>

        <div className='table-responsive'>
          <table className="table table-borderless fs-13 table-hover">
            <thead className='bg-container'>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Facilitator</th>
                <th scope="col">Size</th>
                <th scope="col">Tenants</th>
                <th scope="col">Tenant Groups</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><img className='d-md-inline d-none' src={process.env.PUBLIC_URL + "/images/company.svg"} alt="" /> Infosys</td>
                <td>management@infosys.com</td>
                <td>+91 9563214587</td>
                <td>@Vijayent Roy </td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className='toggle'>
                  <span className="material-symbols-outlined pointer" data-bs-toggle="dropdown" aria-expanded="false">more_vert</span>

                  <ul className="dropdown-menu">
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">visibility</span> View Details</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">edit</span> Edit</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">block</span> Block Action</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">delete</span> Delete</div>
                  </ul>
                </td>
              </tr>

              <tr>
                <td><img className='d-md-inline d-none' src={process.env.PUBLIC_URL + "/images/company.svg"} alt="" /> Infosys</td>
                <td>management@infosys.com</td>
                <td>+91 9563214587</td>
                <td>@Vijayent Roy </td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className='toggle'>
                  <span className="material-symbols-outlined pointer" data-bs-toggle="dropdown" aria-expanded="false">more_vert</span>

                  <ul className="dropdown-menu">
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">visibility</span> View Details</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">edit</span> Edit</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">block</span> Block Action</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">delete</span> Delete</div>
                  </ul>
                </td>
              </tr>

              <tr>
                <td><img className='d-md-inline d-none' src={process.env.PUBLIC_URL + "/images/company.svg"} alt="" /> Infosys</td>
                <td>management@infosys.com</td>
                <td>+91 9563214587</td>
                <td>@Vijayent Roy </td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className='toggle'>
                  <span className="material-symbols-outlined pointer" data-bs-toggle="dropdown" aria-expanded="false">more_vert</span>

                  <ul className="dropdown-menu">
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">visibility</span> View Details</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">edit</span> Edit</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">block</span> Block Action</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">delete</span> Delete</div>
                  </ul>
                </td>
              </tr>

              <tr>
                <td><img className='d-md-inline d-none' src={process.env.PUBLIC_URL + "/images/company.svg"} alt="" /> Infosys</td>
                <td>management@infosys.com</td>
                <td>+91 9563214587</td>
                <td>@Vijayent Roy </td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className='toggle'>
                  <span className="material-symbols-outlined pointer" data-bs-toggle="dropdown" aria-expanded="false">more_vert</span>

                  <ul className="dropdown-menu">
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">visibility</span> View Details</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">edit</span> Edit</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">block</span> Block Action</div>
                    <div className="dropdown-item d-flex align-items-center pointer"><span className="material-symbols-outlined mx-1 fs-6">delete</span> Delete</div>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='d-sm-flex justify-content-between align-items-baseline px-3 mb-3'>

          <div></div>

          <div className="d-flex">
            <button className='d-flex btn border py-2 rounded-3 mx-1'><span style={{rotate: "180deg"}} className="material-symbols-outlined">navigate_next
            </span>Previous</button>

            <button className='d-flex btn border py-2 rounded-3 mx-1'>Next<span className="material-symbols-outlined">navigate_next</span></button>
          </div>

        </div>

      </div>
    </>
  )
}