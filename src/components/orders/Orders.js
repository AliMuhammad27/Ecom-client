import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/orders";
import { Link } from "react-router-dom";
import moment from "moment";
import Pagination from "../padgination/Padgination";
const Orders = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const userArr = [];
  const orderitemArr = [];
  const orders = useSelector((state) => state.orders?.orders);
  console.log("orders", orders);
  console.log("Search", searchString);
  // console.log("userArr", userArr);
  // orders.forEach((item) => {
  //   const { user, orderItems } = item;
  //   userArr.push(user);
  //   orderitemArr.push(orderItems);
  // });
  // const [user] = userArr;
  // console.log("user", user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders(searchString, status, from, to, sort, page, perPage));
  }, [searchString, status, from, to, sort, page, perPage]);

  return (
    <div class="app-content dashboard content">
      <div class="content-wrapper">
        <div class="content-body">
          {/* <!-- Basic form layout section start --> */}
          <section id="configuration" class="user-page">
            <div class="row">
              <div class="col-12">
                <div class="card rounded">
                  <div class="card-body p-md-2 p-lg-3 p-xl-4">
                    <div class="page-title">
                      <div class="row">
                        <div class="col-12 col-md-12 col-lg-12">
                          <h1>Orders</h1>
                        </div>
                      </div>
                    </div>
                    <div class="dataTables_wrapper">
                      <div class="user-listing-top">
                        <div class="row align-items-end d-flex mb-1">
                          <div class="col-xl-9">
                            <div class="row align-items-center justify-content-between">
                              <div class="col-xl-3 col-md-6 col-12 mt-2">
                                <label>Show entries </label>
                                <select
                                  onChange={(e) => setPerPage(e.target.value)}
                                  class="w-100 form-control form-control-sm"
                                >
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                              </div>
                              <div class="col-xl-3 col-md-6 col-12 mt-2">
                                <label for="" class="d-block">
                                  Sort by:
                                </label>
                                <select
                                  value={sort}
                                  onChange={(e) => setsort(e.target.value)}
                                  name=""
                                  class="w-100 form-control sort-select"
                                  id=""
                                >
                                  <option value="Latest">Latest</option>
                                  <option value="Earlier">Earlier</option>
                                </select>
                              </div>
                              <div class="col-xl-3 col-md-6 col-12 mt-2">
                                <label for="" class="d-block">
                                  From
                                </label>
                                <input
                                  value={from}
                                  onChange={(e) => setFrom(e.target.value)}
                                  type="date"
                                  class="form-control form-control-sm"
                                />
                              </div>
                              <div class="col-xl-3 col-md-6 col-12 mt-2">
                                <label for="" class="d-block">
                                  To
                                </label>
                                <input
                                  value={to}
                                  onChange={(e) => setTo(e.target.value)}
                                  type="date"
                                  class="form-control form-control-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-3">
                            <div class="row align-items-center justify-content-between">
                              <div class="col-12 mt-2">
                                <div class="search-filter w-100">
                                  <label>Search:</label>
                                  <input
                                    value={searchString}
                                    onChange={(e) =>
                                      setSearchString(e.target.value)
                                    }
                                    type="search"
                                    class="form-control form-control-sm"
                                    placeholder="Search"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row row-table">
                        <div class="main-tabble table-responsive">
                          <div class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                            <div class="row">
                              <div class="col-sm-12">
                                <table class="table table-borderless dataTable">
                                  <thead>
                                    <tr>
                                      <th class="sorting_asc">S. No.</th>
                                      <th class="sorting">Total</th>
                                      <th class="sorting">Billed to</th>
                                      <th class="sorting">Status</th>
                                      <th class="sorting">Date</th>
                                      <th class="sorting">ACTION</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {orders &&
                                    Object.keys(orders).length > 0 &&
                                    orders.docs.length > 0 ? (
                                      orders.docs.map((item, index) => (
                                        <tr key={index}>
                                          <td class="">{index}</td>
                                          <td>${item?.totalPrice}</td>
                                          <td>{item?.user?.firstname}</td>
                                          <td>
                                            {item?.isPaid ? (
                                              <>Paid</>
                                            ) : (
                                              <>Pending</>
                                            )}
                                          </td>
                                          <td>
                                            {moment(item?.createdAt).format(
                                              "ll"
                                            )}
                                          </td>
                                          <td>
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
                                          </td>
                                        </tr>
                                      ))
                                    ) : (
                                      <td>No Order Exists</td>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                              {orders?.docs?.length > 0 && (
                                <Pagination
                                  totalDocs={orders?.totalDocs}
                                  totalPages={orders?.totalPages}
                                  currentPage={orders?.page}
                                  setPage={setPage}
                                  hasNextPage={orders?.hasNextPage}
                                  hasPrevPage={orders?.hasPrevPage}
                                />
                              )}
                            </div>
                            {/* <div class="row">
                              <div class="col-sm-12 col-md-5">
                                <div
                                  class="dataTables_info"
                                  id="DataTables_Table_0_info"
                                  role="status"
                                  aria-live="polite"
                                >
                                  Showing 1 to 3 of 3 entries
                                </div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                <div
                                  class="dataTables_paginate paging_simple_numbers"
                                  id="DataTables_Table_0_paginate"
                                >
                                  <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled">
                                      <a href="#" class="page-link">
                                        <i class="fa fa-chevron-left red"></i>
                                      </a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                      <a href="#" class="page-link">
                                        1
                                      </a>
                                    </li>
                                    <li class="paginate_button page-item">
                                      <a href="#" class="page-link">
                                        2
                                      </a>
                                    </li>
                                    <li class="paginate_button page-item">
                                      <a href="#" class="page-link">
                                        3
                                      </a>
                                    </li>
                                    <li
                                      class="paginate_button page-item next disabled"
                                      i
                                    >
                                      <a href="#" class="page-link">
                                        <i class="fa fa-chevron-right red"></i>
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
  );
};

export default Orders;
