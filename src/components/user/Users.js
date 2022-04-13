import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { getAllUsers } from "../../redux/actions/users";
import { useState } from "react";
import Pagination from "../padgination/Padgination";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Users = () => {
  const m = moment();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  console.log("Sort", sort);
  const users = useSelector((state) => state.users?.users);
  // console.log("userInfo", userInfo);
  // const { users } = userInfo;
  console.log("users", users);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Users Running");
    dispatch(getAllUsers(searchString, status, from, to, sort, page, perPage));
  }, [searchString, status, from, to, sort, page, perPage]);
  console.log(from);
  console.log(to);
  return (
    <div>
      <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration" className="user-page">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded">
                    <div className="card-body p-md-2 p-lg-3 p-xl-4">
                      <div className="page-title">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                            <h1>Users</h1>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <a href="new-user" className="btn btn-primary">
                              New User
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dataTables_wrapper">
                        <div className="user-listing-top">
                          <div className="row align-items-end d-flex mb-1">
                            <div className="col-xl-9">
                              <div className="row align-items-center justify-content-start">
                                <div className="col-xl-3 col-md-6 mt-2">
                                  <label>Show entries </label>
                                  <select
                                    onChange={(e) => setPerPage(e.target.value)}
                                    className="w-100 form-control form-control-sm"
                                  >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>
                                </div>
                                <div className="col-xl-3 col-md-6 mt-2">
                                  <label htmlFor className="d-block">
                                    Sort by:
                                  </label>
                                  <select
                                    name
                                    value={sort}
                                    onChange={(e) => setsort(e.target.value)}
                                    className="w-100 form-control sort-select"
                                    id
                                  >
                                    <option value="Latest">Latest</option>
                                    <option value="Earlier">Earlier</option>
                                  </select>
                                </div>
                                <div className="col-xl-3 col-md-6 mt-2">
                                  <label htmlFor className="d-block">
                                    From
                                  </label>
                                  <DatePicker
                                    selected={from}
                                    onChange={(from) => setFrom(from)}
                                  />
                                </div>
                                <div className="col-xl-3 col-md-6 mt-2">
                                  <label htmlFor className="d-block">
                                    To
                                  </label>
                                  <DatePicker
                                    selected={to}
                                    onChange={(to) => setTo(to)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3">
                              <div className="row align-items-center justify-content-end">
                                <div className="col-12">
                                  <div className="search-filter w-100">
                                    <label>Search:</label>
                                    <input
                                      value={searchString}
                                      onChange={(e) =>
                                        setSearchString(e.target.value)
                                      }
                                      type="search"
                                      className="form-control form-control-sm"
                                      placeholder="Search"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row row-table">
                          <div className="main-tabble table-responsive">
                            <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                              <div className="row">
                                <div className="col-sm-12">
                                  <table className="table table-borderless  dataTable">
                                    <thead>
                                      <tr>
                                        <th className>S. No.</th>
                                        <th className>First Name</th>
                                        <th className>Last Name</th>
                                        <th className>Email</th>
                                        <th className>Status</th>
                                        <th className>Registration Date</th>
                                        {/* <th className>ACTION</th> */}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <>
                                        {users &&
                                        Object.keys(users).length > 0 &&
                                        users.docs.length > 0 ? (
                                          users.docs.map((item, index) => (
                                            <tr key={index}>
                                              <td class="">{index}</td>
                                              <td>{item?.firstname}</td>
                                              <td>{item?.lastname}</td>
                                              <td>{item?.email}</td>
                                              <td>
                                                {item?.status ? (
                                                  <>Active</>
                                                ) : (
                                                  <>Not</>
                                                )}
                                              </td>
                                              <td>
                                                {m.format(
                                                  "ll",
                                                  item?.createdAt
                                                )}
                                              </td>
                                              <td>
                                                {/* <div class="btn-group ml-1">
                                                  <button
                                                    type="button"
                                                    class="btn btn-drop-table btn-sm"
                                                    data-toggle="dropdown"
                                                  >
                                                    <i class="fa fa-ellipsis-v"></i>
                                                  </button>
                                                  <div class="dropdown-menu"> */}
                                                {/* <a class="dropdown-item">
                                                      <i class="fa fa-eye"></i>
                                                      View Detail
                                                    </a> */}
                                                {/* </div>
                                                </div> */}
                                              </td>
                                            </tr>
                                          ))
                                        ) : (
                                          <td>No User Exists</td>
                                        )}
                                      </>
                                    </tbody>
                                  </table>
                                </div>
                                {users?.docs?.length > 0 && (
                                  <Pagination
                                    totalDocs={users?.totalDocs}
                                    totalPages={users?.totalPages}
                                    currentPage={users?.page}
                                    setPage={setPage}
                                    hasNextPage={users?.hasNextPage}
                                    hasPrevPage={users?.hasPrevPage}
                                  />
                                )}
                              </div>
                              {/* <div className="row">
                                <div className="col-sm-12 col-md-5">
                                  <div
                                    className="dataTables_info"
                                    id="DataTables_Table_0_info"
                                    role="status"
                                    aria-live="polite"
                                  >
                                    Showing 1 to 3 of 3 entries
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                  <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="DataTables_Table_0_paginate"
                                  >
                                    <ul className="pagination">
                                      <li className="paginate_button page-item previous disabled">
                                        <a href="#" className="page-link">
                                          <i className="fa fa-chevron-left red" />
                                        </a>
                                      </li>
                                      <li className="paginate_button page-item active">
                                        <a href="#" className="page-link">
                                          1
                                        </a>
                                      </li>
                                      <li className="paginate_button page-item">
                                        <a href="#" className="page-link">
                                          2
                                        </a>
                                      </li>
                                      <li className="paginate_button page-item">
                                        <a href="#" className="page-link">
                                          3
                                        </a>
                                      </li>
                                      <li
                                        className="paginate_button page-item next disabled"
                                        i
                                      >
                                        <a href="#" className="page-link">
                                          <i className="fa fa-chevron-right red" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
