import React from 'react'
import { Link } from 'react-router-dom'
export default function Success() {
    return (
        <div>
            <div className="d-md-flex justify-content-between p-3">
                <div className="d-flex align-items-center gap-2">
                    <img src={process.env.PUBLIC_URL + "/images/success.svg"} alt="" />
                    <span className='fw-bold fs-15'>You have successfully added Infosys.</span>
                </div>

                <div className="d-flex gap-2 mt-3 mt-md-0">
                    <Link to="/clients">
                        <button className='btn btn-secondary'>Go to Client Master</button>
                    </Link>
                    <Link to="/clients/add">
                        <button className='btn btn-primary bg-blue border-0'>Add More Clients</button>
                    </Link>
                </div>
            </div>

            <div className="p-5 row gap-3 justify-content-center">
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 d-flex flex-column bg-light shadow py-3 rounded-4 " align="center">
                    <img src={process.env.PUBLIC_URL + "/images/company.svg"} width="100px" style={{ marginInline: "auto" }} alt="" />
                    <h5 className="card-title">Infosys</h5>
                    <p className="card-text">--</p>
                    <button className="btn btn-primary">Add Client</button>
                    <button className="btn">View All</button>
                </div>
                
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 d-flex flex-column bg-light shadow py-3 rounded-4 " align="center">
                    <img src={process.env.PUBLIC_URL + "/images/company.svg"} width="100px" style={{ marginInline: "auto" }} alt="" />
                    <h5 className="card-title">Infosys</h5>
                    <p className="card-text">--</p>
                    <button className="btn btn-primary">Add Client</button>
                    <button className="btn">View All</button>
                </div>
                
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 d-flex flex-column bg-light shadow py-3 rounded-4 " align="center">
                    <img src={process.env.PUBLIC_URL + "/images/company.svg"} width="100px" style={{ marginInline: "auto" }} alt="" />
                    <h5 className="card-title">Infosys</h5>
                    <p className="card-text">--</p>
                    <button className="btn btn-primary">Add Client</button>
                    <button className="btn">View All</button>
                </div>
            </div>
        </div>
    )
}
