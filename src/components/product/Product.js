import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../redux/actions/products";
const Product = () => {
  const productInfo = useSelector((state) => state.products?.products);
  console.log("ProductInfo", productInfo);
  const { products } = productInfo;
  console.log("Products", products);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Products Running");
    dispatch(getAllProducts());
  }, []);

  // const adminInfo = useSelector((state) => state.auth?.admin?.admin);
  // const { firstname, lastname } = adminInfo;
  return (
    <div>
      <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration" className="product-page">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded">
                    <div className="card-body p-md-2 p-lg-3 p-xl-4">
                      <div className="page-title">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                            <h1>Products</h1>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <Link to="add-product" className="btn btn-primary">
                              Add Product
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="dataTables_wrapper custom-filter">
                        <div className="user-listing-top">
                          <div className="row align-items-center justify-content-between mb-1">
                            <div className="col-xl-9">
                              <div className="row align-items-center justify-content-between">
                                <div className="col-xl-3 col-md-6 col-12 mt-2">
                                  <label>Show entries </label>
                                  <select className="form-control">
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12 mt-2">
                                  <label htmlFor className="d-block">
                                    Sort by:
                                  </label>
                                  <select
                                    name
                                    className="form-control sort-select"
                                    id
                                  >
                                    <option value>Latest</option>
                                    <option value>Earlier</option>
                                  </select>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12 mt-2">
                                  <label htmlFor className="d-block">
                                    Filter by Category
                                  </label>
                                  <select name className="form-control" id>
                                    <option value>Filter</option>
                                    <option value>user</option>
                                  </select>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12 mt-2">
                                  <label htmlFor className="d-block">
                                    Filter by Status
                                  </label>
                                  <select name className="form-control" id>
                                    <option value>Filter</option>
                                    <option value>user</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3">
                              <div className="row">
                                <div className="col-12 mt-2">
                                  <div className="search-filter w-100">
                                    <label>Search:</label>
                                    <input
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
                            <div className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                              <div className="row">
                                <div className="col-sm-12">
                                  <table className="table table-borderless dataTable">
                                    <thead>
                                      <tr>
                                        <th className>ID</th>
                                        <th className>SKU</th>
                                        <th className>Name</th>
                                        <th className>Category</th>
                                        <th className>Status</th>
                                        <th className>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {products && products?.length > 0 ? (
                                        products?.map((item, index) => (
                                          <tr key={index}>
                                            <td class="">{index + 1}</td>
                                            <td>{item?._id}</td>
                                            <td>{item?.name}</td>
                                            <td>
                                              {item?.category?.categoryTitle}
                                            </td>
                                            <td>
                                              {item?.status ? (
                                                <>Active</>
                                              ) : (
                                                <>InActive</>
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
                                                    to={`/product-detail/${item._id}`}
                                                  >
                                                    <i class="fa fa-eye"></i>
                                                    View Detail
                                                  </Link>
                                                  <Link
                                                    class="dropdown-item"
                                                    onClick={(e) => {
                                                      dispatch(
                                                        deleteProduct(item?._id)
                                                      );
                                                    }}
                                                    to="/products"
                                                    data-toggle="modal"
                                                    data-target=".delete-feedback"
                                                  >
                                                    <i class="fa fa-trash-alt"></i>
                                                    Delete
                                                  </Link>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        ))
                                      ) : (
                                        <td>No Product Exists</td>
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="row">
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
                              </div>
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

export default Product;
