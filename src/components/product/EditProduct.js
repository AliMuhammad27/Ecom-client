import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/products";
import { getAllCategory } from "../../redux/actions/category";
import ImageSelectDropzone from "../imageselect/ImageSelectDropzone";
import ImageSlider from "../imageselect/ImageSlider";
import { Link } from "react-router-dom";
import { editProduct } from "../../redux/actions/products";
const EditProduct = ({ match }) => {
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState();
  const [hover, sethover] = useState(false);
  const [productImage, setProductImage] = useState([]);
  const [data, setData] = useState({
    project_images: [],
  });
  const { project_images } = data;
  const [name, setName] = useState("");
  const product = useSelector((state) => state?.products?.product);
  console.log("product", product);
  const cats = useSelector((state) => state?.categories?.categories?.cats);
  console.log("cats", cats);
  console.log("productID", product?._id);
  const handleMouseEnter = () => {
    sethover(true);
  };
  const handleMouseLeave = () => {
    sethover(false);
  };
  const handleDeleteImage = (index) => {
    const temp_data = [...images];
    temp_data.splice(index, 1);
    console.log("tempdata", temp_data);
    setImages(temp_data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  useEffect(() => {
    dispatch(getProductById(match.params.id));
  }, [match.params.id]);
  useEffect(() => {
    if (product) {
      setPrice(product?.price);
      setDescription(product?.description);
      setCategory(product?.category?.categoryTitle);
      setName(product?.name);
      setImages(product?.productImage);
      setStatus(product?.status);
    }
  }, []);
  console.log("Image", images.length);
  console.log("Cat", category);
  console.log("Status", status);
  console.log("projectImages", project_images);
  let formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("status", status);
  formData.append("category", category);
  project_images.forEach((reciept) => formData.append("reciepts", reciept));
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
                        <div className="col-12 col-md-6 col-lg-6">
                          <h1>Edit Product</h1>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 text-right">
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={(e) => {
                              dispatch(editProduct(product?._id, formData));
                            }}
                          >
                            Update
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-gallery">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <label>Upload New Images</label>
                          <ImageSelectDropzone
                            max={5}
                            setproductImage={setProductImage}
                            files={data?.project_images}
                            setFiles={(project_images) =>
                              setData({ ...data, project_images })
                            }
                            accept="image/*"
                          />{" "}
                          <p className="primary-text pt-2 pl-2">
                            Please note that you can upload up to{" "}
                            {5 - images.length} images only
                          </p>
                          <label>Existing Images</label>
                          <ImageSlider
                            images={images}
                            enable_delete={true}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            hover={hover}
                            handleDeleteImage={handleDeleteImage}
                          />
                        </div>
                        {/* <div className="col-12 col-lg-6 product-thumb-wrap">
                          <div className="row">
                            <div className="col-12 col-lg-6">
                              <div className="preview-thumbs text-center">
                                <img src="images/product-thumb-1.png" alt="" />
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
                                  style={{ display: "none" }}
                                >
                                  <input type="file" id="upload" name="file" />
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
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="preview-thumbs text-center">
                                <img src="images/product-thumb-1.png" alt="" />
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
                                  <input type="file" id="upload" name="file" />
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
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col-12 col-lg-6">
                              <div className="preview-thumbs text-center">
                                <img src="images/product-thumb-1.png" alt="" />
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
                                  <input type="file" id="upload" name="file" />
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
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="preview-thumbs text-center">
                                <img src="images/product-thumb-4.png" alt="" />
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
                                  <input type="file" id="upload" name="file" />
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
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="product-form">
                      <div className="user-block">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="form-group mb-2">
                              <label>Product Title</label>
                              <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="form-group mb-2">
                              <label>Category</label>
                              <select
                                id
                                className="form-control"
                                defaultValue={category}
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                {/* <option value>{category}</option> */}
                                {cats && cats.length > 0
                                  ? cats?.map((item, index) => (
                                      <option value={item?._id} key={item?._id}>
                                        {item?.categoryTitle}
                                      </option>
                                    ))
                                  : ""}
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group mb-2">
                              <label>Base Price</label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  value={price}
                                  onChange={(e) => setPrice(e.target.value)}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div class="form-group mb-2">
                              <label>Status</label>
                              <select
                                id=""
                                class="form-control"
                                defaultValue={status}
                              >
                                {/* <option value="">Select Status</option> */}
                                <option value="true">True</option>
                                <option value="false">False</option>
                              </select>
                            </div>
                            <div className="form-group mb-2">
                              <label>Description</label>
                              <div className="position-relative">
                                <textarea
                                  className="form-control"
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
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
  );
};

export default EditProduct;
