import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../redux/actions/orders";
import { getAllUsers } from "../../redux/actions/users";
import moment from "moment";
const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const orders = useSelector((state) => state.orders?.orders);
  const users = useSelector((state) => state.users?.users);
  console.log("orders", orders);
  console.log("Search", searchString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders(searchString, status, from, to, sort, page, perPage));
    dispatch(getAllUsers(searchString, status, from, to, sort, page, perPage));
  }, [searchString, status, from, to, sort, page, perPage]);
  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration" className>
              <div className="row">
                <div className="col-12">
                  <div className="card rounded">
                    <div className="card-body p-md-2 p-lg-3 p-xl-4">
                      <div className="page-title mb-0">
                        <div className="row">
                          <div className="col-12 col-sm-12">
                            <h1>Dashboard</h1>
                          </div>
                        </div>
                      </div>
                      <div className="card-dashboard mt-3 mb-3">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-2 d-flex align-items-stretch box-6">
                            <div className="card">
                              <div className="card-body d-flex align-items-center">
                                <div className="media d-flex align-items-center w-100">
                                  <div className="media-body text-left">
                                    <div className="card-title">
                                      TOTAL CUSTOMERS
                                    </div>
                                    <h3>{users?.docs?.length}</h3>
                                  </div>
                                  <div className="align-self-center text-right">
                                    <svg
                                      className="radial-progress"
                                      data-percentage={50}
                                      viewBox="0 0 80 80"
                                    >
                                      <circle
                                        className="incomplete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                      />
                                      <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{
                                          strokeDashoffset: "39.58406743523136",
                                        }}
                                      />
                                      <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                      >
                                        50%
                                      </text>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-3 pl-md-0 mb-2 d-flex align-items-stretch box-6">
                            <div className="card">
                              <div className="card-body d-flex align-items-center">
                                <div className="media d-flex align-items-center w-100">
                                  <div className="media-body text-left ">
                                    <div className="card-title">
                                      TOTAL ORDERS
                                    </div>
                                    <h3>{orders?.docs?.length}</h3>
                                  </div>
                                  <div className="align-self-center text-right">
                                    <svg
                                      className="radial-progress"
                                      data-percentage={95}
                                      viewBox="0 0 80 80"
                                    >
                                      <circle
                                        className="incomplete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                      />
                                      <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{
                                          strokeDashoffset: "39.58406743523136",
                                        }}
                                      />
                                      <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                      >
                                        95%
                                      </text>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-2 d-flex align-items-stretch box-6">
                            <div className="card">
                              <div className="card-body d-flex align-items-center">
                                <div className="media d-flex align-items-center w-100">
                                  <div className="media-body text-left ">
                                    <div className="card-title">TOTAL SALE</div>
                                    <h3>$1500</h3>
                                  </div>
                                  <div className="align-self-center text-right">
                                    <svg
                                      className="radial-progress"
                                      data-percentage={50}
                                      viewBox="0 0 80 80"
                                    >
                                      <circle
                                        className="incomplete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                      />
                                      <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{
                                          strokeDashoffset: "39.58406743523136",
                                        }}
                                      />
                                      <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                      >
                                        50%
                                      </text>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-3 pl-md-0 mb-2 d-flex align-items-stretch box-6">
                            <div className="card">
                              <div className="card-body d-flex align-items-center">
                                <div className="media d-flex align-items-center w-100">
                                  <div className="media-body text-left ">
                                    <div className="card-title">
                                      AVERAGE ORDER SALE
                                    </div>
                                    <h3>$1500</h3>
                                  </div>
                                  <div className="align-self-center text-right">
                                    <svg
                                      className="radial-progress"
                                      data-percentage={50}
                                      viewBox="0 0 80 80"
                                    >
                                      <circle
                                        className="incomplete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                      />
                                      <circle
                                        className="complete"
                                        cx={40}
                                        cy={40}
                                        r={35}
                                        style={{
                                          strokeDashoffset: "39.58406743523136",
                                        }}
                                      />
                                      <text
                                        className="percentage"
                                        x="50%"
                                        y="57%"
                                        transform="matrix(0, 1, -1, 0, 80, 0)"
                                      >
                                        50%
                                      </text>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <div className>
                            <div className="row">
                              <div className="col-12 d-flex justify-content-between tckt-srch-row text-left mb-3">
                                <h2>Sales Analytics</h2>
                                <div className="select-input">
                                  <select name id>
                                    <option value>Year</option>
                                    <option value>2012</option>
                                    <option value>2012</option>
                                    <option value>2012</option>
                                    <option value>2012</option>
                                    <option value>2012</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="chart-main position-relative">
                              <div className="row">
                                <div className="col-12 col-xl-12 text-center">
                                  <img src="images/sales-stats.png" alt="" />
                                  <p className="text-dark mt-2">Months</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-tabble table-responsive">
                        <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                          <div className="row mt-3">
                            <div className="col-sm-12">
                              <h2>Order ID</h2>
                              <table className="table table-borderless dataTable">
                                <thead>
                                  <tr>
                                    <th>S.NO</th>
                                    <th>Base Total</th>
                                    <th>Order Date</th>
                                    <th>STATUS</th>
                                    <th>Billed To</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orders &&
                                  Object.keys(orders).length > 0 &&
                                  orders.docs.length > 0 ? (
                                    orders.docs.map((item, index) => (
                                      <tr key={index}>
                                        <td class="">{index + 1}</td>
                                        <td>${item?.totalPrice}</td>
                                        <td>
                                          {moment(item?.createdAt).format("ll")}
                                        </td>
                                        <td>
                                          {item?.isPaid ? (
                                            <>Paid</>
                                          ) : (
                                            <>Pending</>
                                          )}
                                        </td>
                                        <td>{item?.user?.firstname}</td>
                                        {/* <td>
                                          <div class="btn-group ml-1">
                                            <button
                                              type="button"
                                              class="btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                            >
                                              <i class="fa fa-ellipsis-v"></i>
                                            </button>
                                            <div class="dropdown-menu">
                                              <Link
                                                class="dropdown-item"
                                                to={`/order-detail/${item._id}`}
                                              >
                                                <i class="fa fa-eye"></i>
                                                View Detail
                                              </Link>
                                            </div>
                                          </div>
                                        </td> */}
                                      </tr>
                                    ))
                                  ) : (
                                    <td>No Order Exists</td>
                                  )}
                                </tbody>
                              </table>
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

export default Dashboard;
