import React, { useState } from "react";
import { useDispatch, usedispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/category";
import { addProduct } from "../../redux/actions/products";
import Toasty from "../../utils/toast";
import { toast } from "react-toastify";
import ImageSelectDropzone from "../imageselect/ImageSelectDropzone";
const AddProduct = ({ history }) => {
  const cats = useSelector((state) => state?.categories?.categories?.cats);
  console.log("cats", cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const onChange = (e) => {
    setCategory(e.target.value);
  };
  // const loadFile = (e) => {
  //   alert("");
  //   console.log("Running");
  //   //console.log("url", e.target.files[0]);
  //   var image = document.getElementById("upload");
  //   image.src = URL.createObjectURL(e.target.files[0]);
  //   console.log("file", e.target.files[0]);
  //   setReciepts(e.target.files[0]);
  //   //console.log("url", image.src);
  // };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [edit, setIsEdit] = useState(false);
  const [status, setStatus] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [data, setData] = useState({
    project_images: [],
  });
  const { project_images } = data;
  //const [reciepts, setReciepts] = useState([]);
  //console.log("reciepts", reciepts);
  //project_images.forEach((reciept) => console.log("reciepts", reciept));
  let formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("status", status);
  formData.append("category", category);
  project_images.forEach((reciept) => formData.append("reciepts", reciept));
  return (
    <div>
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
                          <div className="col-12 col-md-6 col-lg-6">
                            <h1>Add Product</h1>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <Link
                              to="#"
                              className="btn btn-primary"
                              onClick={() => {
                                name.length > 0 &&
                                description.length > 0 &&
                                category.length > 0 &&
                                price.length > 0 &&
                                status.length > 0
                                  ? dispatch(addProduct(formData, history))
                                  : Toasty(
                                      "Error",
                                      "Please fill out all the req fileds"
                                    );
                              }}
                            >
                              Publish
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-gallery">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <ImageSelectDropzone
                              max={5}
                              setproductImage={setProductImage}
                              files={data?.project_images}
                              setFiles={(project_images) =>
                                setData({ ...data, project_images })
                              }
                              accept="image/*"
                            />{" "}
                            {/* <div className="product-preview text-center position-relative">
                              <img src="images/product-preview.png" alt="" />
                              <div className="d-inline-block align-bottom actions-buttons">
                                <input
                                  type="file"
                                  id="upload"
                                  name="file"
                                  onChange={(e) => loadFile(e)}
                                  required
                                />
                                <button
                                  type="button"
                                  className="btn delet"
                                  data-toggle="modal"
                                  data-target=".delete-review"
                                >
                                  <i
                                    className="fa fa-trash-alt"
                                    aria-hidden="true"
                                  />
                                </button>
                                <button type="button" className="btn upload">
                                  <label
                                    htmlFor="upload"
                                    className="d-block mb-0"
                                  >
                                    <i className="fa fa-upload" />
                                  </label>
                                </button>
                              </div>
                            </div> */}
                            <p className="primary-text pt-2 pl-2">
                              Please note that you can upload up to 5 images
                              only
                            </p>
                          </div>
                          <div className="col-12 col-lg-6 product-thumb-wrap">
                            <div className="row">
                              {/* <div className="col-12 col-lg-6">
                                <div className="preview-thumbs text-center">
                                  <img
                                    src="images/product-thumb-1.png"
                                    alt=""
                                  />
                                  <input
                                    type="checkbox"
                                    id="checkbox_one"
                                    name="question1"
                                    data-trigger="hidden_fields_one"
                                    className="trigger"
                                  />
                                  <div
                                    id="hidden_fields_one"
                                    className="align-bottom actions-buttons"
                                    // style={{ display: "none" }}
                                  >
                                    <input
                                      type="file"
                                      id="upload"
                                      name="file"
                                      onChange={(e) => loadFile(e)}
                                    />
                                    <button
                                      type="button"
                                      className="btn delet"
                                      data-toggle="modal"
                                      data-target=".delete-review"
                                    >
                                      <i
                                        className="fa fa-trash-alt"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn upload"
                                    >
                                      <label
                                        htmlFor="upload"
                                        className="d-block mb-0"
                                      >
                                        <i className="fa fa-upload" />
                                      </label>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              */}

                              {/* <div className="col-12 col-lg-6">
                                <div className="preview-thumbs text-center">
                                  <img
                                    src="images/product-thumb-1.png"
                                    alt=""
                                  />
                                  <input
                                    type="checkbox"
                                    id="checkbox_one"
                                    name="question1"
                                    data-trigger="hidden_fields_two"
                                    className="trigger"
                                  />
                                  <div
                                    id="hidden_fields_two"
                                    className="align-bottom actions-buttons"
                                    style={{ display: "none" }}
                                  >
                                    <input
                                      type="file"
                                      id="upload"
                                      name="file"
                                    />
                                    <button
                                      type="button"
                                      className="btn delet"
                                      data-toggle="modal"
                                      data-target=".delete-review"
                                    >
                                      <i
                                        className="fa fa-trash-alt"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn upload"
                                    >
                                      <label
                                        htmlFor="upload"
                                        className="d-block mb-0"
                                      >
                                        <i className="fa fa-upload" />
                                      </label>
                                    </button>
                                  </div>
                                </div>
                              </div>
                           
                            */}
                            </div>
                            {/* <div className="row mb-0">
                              <div className="col-12 col-lg-6">
                                <div className="preview-thumbs text-center">
                                  <img
                                    src="images/product-thumb-1.png"
                                    alt=""
                                  />
                                  <input
                                    type="checkbox"
                                    id="checkbox_one"
                                    name="question1"
                                    data-trigger="hidden_fields_three"
                                    className="trigger"
                                  />
                                  <div
                                    id="hidden_fields_three"
                                    className="align-bottom actions-buttons"
                                    style={{ display: "none" }}
                                  >
                                    <input
                                      type="file"
                                      id="upload"
                                      name="file"
                                    />
                                    <button
                                      type="button"
                                      className="btn delet"
                                      data-toggle="modal"
                                      data-target=".delete-review"
                                    >
                                      <i
                                        className="fa fa-trash-alt"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn upload"
                                    >
                                      <label
                                        htmlFor="upload"
                                        className="d-block mb-0"
                                      >
                                        <i className="fa fa-upload" />
                                      </label>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-6">
                                <div className="preview-thumbs text-center">
                                  <img
                                    src="images/product-thumb-4.png"
                                    alt=""
                                  />
                                  <input
                                    type="checkbox"
                                    id="checkbox_one"
                                    name="question1"
                                    data-trigger="hidden_fields_four"
                                    className="trigger"
                                  />
                                  <div
                                    id="hidden_fields_four"
                                    className="align-bottom actions-buttons"
                                    style={{ display: "none" }}
                                  >
                                    <input
                                      type="file"
                                      id="upload"
                                      name="file"
                                    />
                                    <button
                                      type="button"
                                      className="btn delet"
                                      data-toggle="modal"
                                      data-target=".delete-review"
                                    >
                                      <i
                                        className="fa fa-trash-alt"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn upload"
                                    >
                                      <label
                                        htmlFor="upload"
                                        className="d-block mb-0"
                                      >
                                        <i className="fa fa-upload" />
                                      </label>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          | */}
                          </div>
                        </div>
                      </div>
                      <div className="product-form">
                        <div className="user-block">
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-2">
                                <label>Product Title</label>
                                <input
                                  name="name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  placeholder="Title ABC"
                                />
                              </div>
                              <div className="form-group mb-2">
                                <label>Category</label>
                                <select
                                  id
                                  className="form-control"
                                  defaultValue={category}
                                  onChange={(e) => onChange(e)}
                                >
                                  <option value>Select Category</option>
                                  {cats && cats.length > 0
                                    ? cats?.map((item, index) => (
                                        <option
                                          value={item?._id}
                                          key={item?._id}
                                        >
                                          {item?.categoryTitle}
                                        </option>
                                      ))
                                    : ""}
                                </select>
                              </div>
                              <div className="form-group mb-2">
                                <label>Status</label>
                                <select
                                  id
                                  className="form-control"
                                  value={status}
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option value="">Select Status</option>
                                  <option value="true">true</option>
                                  <option value="false">false</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-2">
                                <label>Base Price</label>
                                <div className="position-relative">
                                  <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"
                                    placeholder=" Abc"
                                  />
                                </div>
                              </div>
                              <div className="form-group mb-2">
                                <label>Description</label>
                                <div className="position-relative">
                                  <textarea
                                    name="description"
                                    value={description}
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    className="form-control"
                                    placeholder="Confirm New Password"
                                    defaultValue={""}
                                  />
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

export default AddProduct;
