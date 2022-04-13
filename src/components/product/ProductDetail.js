import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/products";
import { Link } from "react-router-dom";
import { baseURl } from "../../utils/Helper";
const ProductDetail = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(0);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const product = useSelector((state) => state?.products?.product);
  console.log("product", product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(match.params.id));
  }, [match.params.id]);
  return (
    <div className="app-content dashboard content">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration" className="page-view-page">
            <div className="row">
              <div className="col-12">
                <div className="card rounded">
                  <div className="card-body p-md-2 p-lg-3 p-xl-4">
                    <div className="page-title mb-3">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-9">
                          {isEdit ? (
                            <h1>Edit Product</h1>
                          ) : (
                            <h1>Product Details</h1>
                          )}
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-right">
                          <Link
                            to={`/edit-product/${product?._id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-gallery">
                      <div className="row">
                        <div className="col-12 col-xl-6">
                          <div className="row ">
                            <div className="form-group mb-2">
                              <label style={{ paddingLeft: 0 }}>Images</label>
                            </div>
                          </div>
                          <div className="col-lg-10 col-12 mt-2">
                            <div className="row">
                              {product?.productImage.length > 0 &&
                                product?.productImage.map((img, index) => (
                                  <div className="col-lg-3" key={index}>
                                    <img
                                      width={100}
                                      height={100}
                                      src={`${baseURl()}${img}`}
                                      alt=""
                                      className="h-100"
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="d-flex mt-2"></div>
                        </div>
                        <div className="col-12 col-xl-6 pt-2">
                          <h3 className="product-title mb-1">
                            {product?.name}
                          </h3>
                          <div className="product-rating mb-1"></div>
                          <div className="product-meta">
                            {!isEdit ? (
                              <span className="status-wrapper">
                                Status:{" "}
                                <span className="status">
                                  {product?.status ? (
                                    <>Active</>
                                  ) : (
                                    <>Not Active</>
                                  )}
                                </span>
                              </span>
                            ) : (
                              <div className="form-group mb-2">
                                <label>Status</label>
                                <select id className="form-control">
                                  <option value>Select Status</option>
                                  <option value="small">{}</option>
                                  <option value="small">Active</option>
                                  <option value="medium">Inactive</option>
                                </select>
                              </div>
                            )}

                            {!isEdit ? (
                              <span className="price">
                                Price per unit:{" "}
                                <span className="price-amount amount">
                                  <span className="price-currencySymbol">
                                    $
                                  </span>
                                  {product?.price}
                                </span>
                              </span>
                            ) : (
                              <div className="form-group mb-2">
                                <label>Product Title</label>
                                <input
                                  type="text"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="form-control"
                                  placeholder="Title ABC"
                                />
                              </div>
                            )}
                          </div>
                          <div className="product-meta mt-3">
                            <span className="posted-in">
                              Category:{" "}
                              <a href="#" rel="tag">
                                {product?.category?.categoryTitle}
                              </a>
                            </span>
                            <span className="sku-wrapper">
                              SKU # <span className="sku">{product?._id}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-summary">
                      <div className="description">
                        <div className="row">
                          {!isEdit ? (
                            <div className="col-12 ">
                              <h3>Product Specification</h3>
                              <p>{product?.description}</p>
                            </div>
                          ) : (
                            <div className="form-group mb-2">
                              <label>Description</label>
                              <div className="position-relative">
                                <textarea
                                  className="form-control"
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  placeholder="Confirm New Password"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          )}
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

export default ProductDetail;
