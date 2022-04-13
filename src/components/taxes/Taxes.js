import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteTax, editTax, getAllTaxes } from "../../redux/actions/taxes";
import Toasty from "../../utils/toast";
import AddTax from "./AddTax";
import { closeModals } from "../../utils/closeModal";
import Pagination from "../padgination/Padgination";
const Taxes = () => {
  const m = moment();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("taxes running");
    dispatch(getAllTaxes(searchString, status, from, to, sort, page, perPage));
  }, [searchString, status, from, to, sort, page, perPage]);
  const [id, setId] = useState(0);
  const [state, setState] = useState("");
  const [percent, setPercent] = useState(0);
  const tax = useSelector((state) => state.taxes?.taxes, shallowEqual);
  console.log("TaxInfo", tax);
  // const { tax } = taxInfo;
  console.log("id", id);
  console.log("percent", percent);
  const onChange = (e) => {
    setPercent(e.target.value);
  };

  useEffect(() => {}, [tax]);

  const dispatch = useDispatch();
  return (
    <div>
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
                              <h1>Tax Management</h1>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 text-right">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target=".add-tax"
                                className="btn btn-primary"
                              >
                                Add New
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="dataTables_wrapper">
                          <div className="user-listing-top">
                            <div className="row align-items-center justify-content-between mb-1">
                              <div className="col-xl-9">
                                <div className="row align-items-center justify-content-start">
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-3 mt-2">
                                    <label>Show entries </label>
                                    <select
                                      className="w-100 form-control form-control-sm"
                                      onChange={(e) =>
                                        setPerPage(e.target.value)
                                      }
                                    >
                                      <option value={10}>10</option>
                                      <option value={25}>25</option>
                                      <option value={50}>50</option>
                                      <option value={100}>100</option>
                                    </select>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-3 mt-2">
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
                                  <div className="col-12 col-md-6 col-lg-6 col-xl-3 mt-2">
                                    <label htmlFor className="d-block">
                                      Filter by Status
                                    </label>
                                    <select
                                      name
                                      className="w-100 form-control"
                                      id
                                    >
                                      <option value>Filter</option>
                                      <option value>user</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3">
                                <div className="row align-items-center">
                                  <div className="col-12 mt-2">
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
                                          <th className="sorting_asc">
                                            S. No.
                                          </th>
                                          <th className="sorting">State</th>
                                          <th className="sorting">Tax %</th>
                                          <th className="sorting">
                                            Last Updated On
                                          </th>
                                          <th className="sorting">ACTION</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <>
                                          {tax &&
                                          Object.keys(tax).length > 0 &&
                                          tax.docs.length > 0
                                            ? tax.docs.map((item, index) => (
                                                <tr key={index}>
                                                  <td className>{index + 1}</td>
                                                  <td>{item?.state}</td>
                                                  <td>{item?.percent}%</td>
                                                  <td>
                                                    {m.format(
                                                      "ll",
                                                      item?.createdAt
                                                    )}
                                                  </td>
                                                  <td>
                                                    <div className="btn-group ml-1">
                                                      <button
                                                        type="button"
                                                        className="btn btn-drop-table btn-sm"
                                                        data-toggle="dropdown"
                                                      >
                                                        <i className="fa fa-ellipsis-v" />
                                                      </button>
                                                      <div className="dropdown-menu">
                                                        <a
                                                          onClick={(e) => {
                                                            dispatch(
                                                              deleteTax(
                                                                item?._id,
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
                                                          className="dropdown-item"
                                                          href="#_"
                                                          data-toggle="modal"
                                                          data-target=".delete-tax"
                                                        >
                                                          <i className="fa fa-trash-alt" />
                                                          Delete
                                                        </a>
                                                        <a
                                                          onClick={(e) => {
                                                            setId(item?._id);
                                                            setState(
                                                              item?.state
                                                            );
                                                            setPercent(
                                                              item?.percent
                                                            );
                                                          }}
                                                          className="dropdown-item"
                                                          href="#"
                                                          data-toggle="modal"
                                                          data-target=".edit-tax"
                                                        >
                                                          <i className="fa fa-edit" />
                                                          Edit
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              ))
                                            : ""}
                                        </>

                                        {/* <tr>
                                        <td className>02</td>
                                        <td>ABC</td>
                                        <td>$123</td>
                                        <td>mm/dd/yyyy</td>
                                        <td>
                                          <div className="btn-group ml-1">
                                            <button
                                              type="button"
                                              className="btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                            >
                                              <i className="fa fa-ellipsis-v" />
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".delete-tax"
                                              >
                                                <i className="fa fa-trash-alt" />
                                                Delete
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".edit-tax"
                                              >
                                                <i className="fa fa-edit" />
                                                Edit
                                              </a>
                                              &gt;
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className>03</td>
                                        <td>ABC</td>
                                        <td>$123</td>
                                        <td>mm/dd/yyyy</td>
                                        <td>
                                          <div className="btn-group ml-1">
                                            <button
                                              type="button"
                                              className="btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                            >
                                              <i className="fa fa-ellipsis-v" />
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".delete-tax"
                                              >
                                                <i className="fa fa-trash-alt" />
                                                Delete
                                              </a>
                                              &lt;
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".edit-tax"
                                              >
                                                <i className="fa fa-edit" />
                                                Edit
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className>04</td>
                                        <td>ABC</td>
                                        <td>$123</td>
                                        <td>mm/dd/yyyy</td>
                                        <td>
                                          <div className="btn-group ml-1">
                                            <button
                                              type="button"
                                              className="btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                            >
                                              <i className="fa fa-ellipsis-v" />
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".edit-tax"
                                              >
                                                <i className="fa fa-trash-alt" />
                                                Delete
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".edit-tax"
                                              >
                                                <i className="fa fa-edit" />
                                                Edit
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className>05</td>
                                        <td>ABC</td>
                                        <td>$123</td>
                                        <td>mm/dd/yyyy</td>
                                        <td>
                                          <div className="btn-group ml-1">
                                            <button
                                              type="button"
                                              className="btn btn-drop-table btn-sm"
                                              data-toggle="dropdown"
                                            >
                                              <i className="fa fa-ellipsis-v" />
                                            </button>
                                            <div className="dropdown-menu">
                                              <a
                                                className="dropdown-item"
                                                href="feedback-detail.php"
                                              >
                                                <i className="fa fa-trash-alt" />
                                                Delete
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#_"
                                                data-toggle="modal"
                                                data-target=".edit-tax"
                                              >
                                                <i className="fa fa-edit" />
                                                Edit
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr> */}
                                      </tbody>
                                    </table>
                                  </div>
                                  {tax?.docs?.length > 0 && (
                                    <Pagination
                                      totalDocs={tax?.totalDocs}
                                      totalPages={tax?.totalPages}
                                      currentPage={tax?.page}
                                      setPage={setPage}
                                      hasNextPage={tax?.hasNextPage}
                                      hasPrevPage={tax?.hasPrevPage}
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
              <AddTax />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade tax-modal edit-tax p-0"
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
            <div className="modal-body pb-0">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Edit Tax</h3>
                </div>
              </div>
              <form action method="post">
                <div className="row">
                  <div className="col-12 form-group">
                    <label htmlFor className="form-label">
                      State
                    </label>
                    <p>{state}</p>
                  </div>
                  <div className="col-12 form-group confrm-pass">
                    <label htmlFor className="form-label">
                      Tax %
                    </label>
                    <input
                      type="text"
                      name="percent"
                      placeholder="0"
                      className="form-control"
                      value={percent}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12 form-group text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        percent?.length > 0
                          ? dispatch(
                              editTax(
                                id,
                                percent,
                                searchString,
                                status,
                                from,
                                to,
                                sort,
                                page,
                                perPage
                              )
                            )
                          : Toasty(
                              "error",
                              `Please fill out the percent fields!`
                            );
                        closeModals();
                      }}
                    >
                      Update
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

export default Taxes;
