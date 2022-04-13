import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/users";
import Toasty from "../../utils/toast";

const NewUser = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { firstname, lastname, email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
                          <div className="col-12">
                            <h1>
                              <Link to="/Users">
                                <i className="fa fa-angle-left" />
                              </Link>
                              New User
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="user-block">
                        <div className="row detail-row">
                          <div className="col-12 col-md-6  col-xl-4 form-group">
                            <label>
                              First Name<span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              value={firstname}
                              onChange={(e) => onChange(e)}
                              className="form-control"
                              placeholder="Enter First Name"
                            />
                          </div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 col-md-6  col-xl-4 form-group">
                            <label>
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              value={lastname}
                              onChange={(e) => onChange(e)}
                              className="form-control"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 col-md-6  col-xl-4 form-group">
                            <label>
                              Email Address{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => onChange(e)}
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="row detail-row">
                          <div className="col-12 col-md-6  col-xl-4 form-group">
                            <label>
                              Password <span className="text-danger">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => onChange(e)}
                                className="form-control enter-input"
                                placeholder="Enter Password"
                              />
                              <button
                                className="view-btn position-absolute"
                                onclick="event.preventDefault()"
                              >
                                <i
                                  className="fa enter-icon right-icon fa-eye-slash"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row detail-row mt-1">
                          <div className="col-12 col-md-6 col-xl-4">
                            <button
                              onClick={(e) => {
                                formData?.firstname.length > 0 &&
                                formData?.lastname.length > 0 &&
                                formData?.email.length > 0 &&
                                formData?.password.length > 0
                                  ? dispatch(createUser(formData))
                                  : Toasty("Error", "Please fill all fields");
                              }}
                              type="submit"
                              href="#"
                              className="btn btn-primary btn-fixed-190"
                            >
                              Create
                            </button>
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

export default NewUser;
