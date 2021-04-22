import React from "react";
import { CreateOpenings } from "./CreateOpenings";
import Badge from 'react-bootstrap/Badge'

export function OpeningList() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className={`card card-custom card-stretch gutter-b`}>
                    <div className="card-header border-0 py-5">
                        <h3 className="card-title align-items-start flex-column">   
                            <span className="card-label font-weight-bolder text-dark">Openings Stats</span>
                            <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new Openings</span>
                        </h3>
                        <div className="card-toolbar">
                            <CreateOpenings />
                            {/* <a href="/" className="btn btn-info font-weight-bolder font-size-sm">Create</a> */}
                        </div>
                    </div>
                    <div className="card-body pt-0 pb-3">
                        <div className="tab-content">
                            <div className="table-responsive">
                                <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                                    <thead>
                                        <tr className="text-left text-uppercase">
                                            <th className="pl-7" style={{minWidth: "250px"}}><span className="text-dark-75">Opening Title</span></th>
                                            <th style={{minWidth: "100px"}}>id</th>
                                            <th style={{minWidth: "100px"}}>Status</th>
                                            <th style={{minWidth: "130px"}}>Posted Date</th>
                                            <th style={{minWidth: "130px"}}>Closing Date</th>
                                            <th style={{minWidth: "130px"}}>Access</th>
                                            <th style={{minWidth: "130px"}}>Openings</th>
                                            <th style={{minWidth: "130px"}}>Account Name</th>
                                            <th style={{minWidth: "130px"}}>Primary Recruiter</th>
                                            <th style={{minWidth: "130px"}}>Account Owner</th>
                                            <th style={{minWidth: "130px"}}>Assigned Recruiters</th>
                                            <th style={{minWidth: "80px"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pl-7 py-8"> Electrical Estimator </td>
                                            <td className="pl-0 py-8"> BART0001 </td>
                                            <td>
                                                <Badge pill variant="danger">
                                                    In-Active
                                                </Badge>
                                            </td>
                                            <td> 04/12/2021 </td>
                                            <td> 31/02/2021 </td>
                                            <td> Private </td>
                                            <td> 3 </td>
                                            <td> Rick moore </td>
                                            <td> Bart's Electric </td>
                                            <td> Harry Smith </td>
                                            <td> Rick Moore </td>
                                            <td className="pr-0 text-right"> </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-7 py-8"> Electrical Estimator </td>
                                            <td className="pl-0 py-8"> BART0001 </td>
                                            <td>
                                                <Badge pill variant="primary">
                                                    Active
                                                </Badge>
                                            </td>
                                            <td> 04/12/2021 </td>
                                            <td> 31/02/2021 </td>
                                            <td> Private </td>
                                            <td> 3 </td>
                                            <td> Rick moore </td>
                                            <td> Bart's Electric </td>
                                            <td> Harry Smith </td>
                                            <td> Rick Moore </td>
                                            <td className="pr-0 text-right"> </td>
                                        </tr>
                                        <tr>
                                            <td className="pl-7 py-8"> Electrical Estimator </td>
                                            <td className="pl-0 py-8"> BART0001 </td>
                                            <td>
                                                <Badge pill variant="secondary">
                                                    Closed
                                                </Badge>
                                            </td>
                                            <td> 04/12/2021 </td>
                                            <td> 31/02/2021 </td>
                                            <td> Private </td>
                                            <td> 3 </td>
                                            <td> Rick moore </td>
                                            <td> Bart's Electric </td>
                                            <td> Harry Smith </td>
                                            <td> Rick Moore </td>
                                            <td className="pr-0 text-right"> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
