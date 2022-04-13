import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../padgination/Padgination";
import moment from "moment";
import { deleteFeedback, getAllFeedbacks } from "../../redux/actions/feedbacks";
const FeedBacks = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("Feedbacks Running");
    dispatch(
      getAllFeedbacks(searchString, status, from, to, sort, page, perPage)
    );
  }, [searchString, status, from, to, sort, page, perPage]);
  const [id, setId] = useState(0);
  const m = moment();
  const feedbackInfo = useSelector((state) => state.feedbacks?.feedbacks);
  console.log("feebackInfo", feedbackInfo);
  const { feedback } = feedbackInfo;
  console.log("feedback", feedback);
  const dispatch = useDispatch();
  return (
    <div>
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
                          <div class="col-12">
                            <h1>Feedback</h1>
                          </div>
                        </div>
                      </div>
                      <div class="dataTables_wrapper">
                        <div class="user-listing-top">
                          <div class="row mb-1">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-start align-items-center">
                              <label for="" class="d-block">
                                Sort by:
                              </label>
                              <select
                                name=""
                                value={sort}
                                onChange={(e) => setsort(e.target.value)}
                                class="form-control sort-select"
                                id=""
                              >
                                <option value="Latest">Latest</option>
                                <option value="Earlier">Earlier</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-end d-flex mb-1">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block align-items-center sort-ban sort-datepicker">
                              <label>Sort by:</label>
                              <div class="d-sm-flex d-block">
                                <div class="input-wrap mr-0 mr-sm-2 mb-2 mb-sm-0">
                                  <label for="" class="d-block">
                                    From
                                  </label>
                                  <input
                                    value={from}
                                    type="text"
                                    onChange={(e) => setFrom(e.target.value)}
                                    id="datepicker-2"
                                    placeholder="From"
                                    readonly
                                  />
                                </div>
                                <div class="input-wrap">
                                  <label for="" class="d-block">
                                    To
                                  </label>
                                  <input
                                    type="text"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    id="datepicker-3"
                                    placeholder="To"
                                    readonly
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                              <label for="" class="d-block">
                                Filter by Status
                              </label>
                              <select name="" class="form-control" id="">
                                <option value="">Filter</option>
                                <option value="">user</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-end d-flex">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block align-items-center">
                              <div class=" dataTables_length">
                                <label>
                                  Show{" "}
                                  <select class="form-control form-control-sm">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mt-2 mt-md-0 d-md-flex d-block justify-content-start justify-content-md-end align-items-center">
                              <div class="dataTables_filter">
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    value={searchString}
                                    onChange={(e) =>
                                      setSearchString(e.target.value)
                                    }
                                    class="form-control form-control-sm"
                                    placeholder="Search"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row row-table">
                          <div class="main-tabble table-responsive">
                            <div class="dataTables_wrapper container-fluid dt-bootstrap4">
                              <div class="row">
                                <div class="col-sm-12">
                                  <table class="table table-borderless  dataTable">
                                    <thead>
                                      <tr>
                                        <th class="sorting_asc">S. No.</th>
                                        <th class="sorting">First Name</th>
                                        <th class="sorting">Last Name</th>
                                        <th class="sorting">Email</th>
                                        <th class="sorting">Date</th>
                                        <th class="sorting">ACTION</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <>
                                        {feedbackInfo &&
                                        Object.keys(feedbackInfo).length > 0 &&
                                        feedbackInfo.docs.length > 0 ? (
                                          feedbackInfo.docs.map(
                                            (item, index) => (
                                              <tr>
                                                <td class="">{index}</td>
                                                <td>{item?.firstname}</td>
                                                <td>{item?.lastname}</td>
                                                <td>{item?.email}</td>
                                                <td>
                                                  {m.format(
                                                    "ll",
                                                    item?.createdAt
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
                                                      <a
                                                        onClick={(e) => {
                                                          setId(item?._id);
                                                        }}
                                                        class="dropdown-item"
                                                        href={`/feedback-details/${id}`}
                                                      >
                                                        <i class="fa fa-eye"></i>
                                                        View Detail
                                                      </a>
                                                      <a
                                                        onClick={(e) => {
                                                          setId(item?._id);
                                                        }}
                                                        class="dropdown-item"
                                                        href="#_"
                                                        data-toggle="modal"
                                                        data-target=".delete-feedback"
                                                      >
                                                        <i class="fa fa-trash-alt"></i>
                                                        Delete
                                                      </a>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            )
                                          )
                                        ) : (
                                          <td>No Feed Backs Present</td>
                                        )}
                                      </>
                                    </tbody>
                                  </table>
                                </div>
                                {feedbackInfo?.docs?.length > 0 && (
                                  <Pagination
                                    totalDocs={feedbackInfo?.totalDocs}
                                    totalPages={feedbackInfo?.totalPages}
                                    currentPage={feedbackInfo?.page}
                                    setPage={setPage}
                                    hasNextPage={feedbackInfo?.hasNextPage}
                                    hasPrevPage={feedbackInfo?.hasPrevPage}
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
                                          Previous
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
                                      <li class="paginate_button page-item">
                                        <a href="#" class="page-link">
                                          4
                                        </a>
                                      </li>
                                      <li class="paginate_button page-item">
                                        <a href="#" class="page-link">
                                          5
                                        </a>
                                      </li>
                                      <li
                                        class="paginate_button page-item next disabled"
                                        i
                                      >
                                        <a href="#" class="page-link">
                                          Next
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
      <div
        className="modal fade delete-feedback p-0"
        tabIndex
        role
        aria-labelledby
        aria-hidden="true"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" />
              <button
                type="button"
                className="btn close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-12 text-center">
                    <i className="fa fa-question red" />
                    <h3>
                      Are you sure you want to delete
                      <span className="d-block">this Feedback?</span>
                    </h3>
                    <button
                      type="submit"
                      className="btn btn-primary mr-1"
                      onClick={(e) => {
                        dispatch(
                          deleteFeedback(
                            id,
                            searchString,
                            status,
                            from,
                            to,
                            sort,
                            page,
                            perPage
                          )
                        );
                      }}
                    >
                      yes
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary ml-1"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      No
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
