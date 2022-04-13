import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updatePassword } from "../../redux/actions/profile";
import Toasty from "../../utils/toast";
const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    existingPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { existingPassword, newPassword, confirmPassword } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
    existingPassword.length > 0 &&
    newPassword.length > 0 &&
    confirmPassword.length > 0
      ? dispatch(updatePassword(formData))
      : Toasty("Error", "please fill all the required fields");
  };
  return (
    <div>
      <div class="app-content content dashboard">
        <div class="content-wrapper">
          <div class="content-body">
            {/* <!-- Basic form layout section start --> */}
            <form onSubmit={(e) => onSubmit(e)}>
              <section id="configuration" class="update-password">
                <div class="row">
                  <div class="col-12">
                    <div class="card rounded">
                      <div class="card-body p-md-2 p-lg-3 p-xl-4">
                        <div class="page-title">
                          <div class="row">
                            <div class="col-12">
                              <h1>
                                <Link to="/profile">
                                  <i class="fa fa-angle-left"></i>
                                </Link>
                                Change Password
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div class="user-block">
                          <div class="row justify-content-center">
                            <div class="col-12 col-lg-10 col-md-8 col-xl-5 light-primary-bg text-left">
                              <div class="row detail-row p-3 mb-0">
                                <div class="col-12 form-group mb-2">
                                  <label>
                                    Existing Password{" "}
                                    <span class="text-danger">*</span>
                                  </label>
                                  <div class="position-relative">
                                    <input
                                      type="password"
                                      name="existingPassword"
                                      value={existingPassword}
                                      onChange={(e) => onChange(e)}
                                      class="form-control enter-input"
                                      placeholder="Enter Current Password"
                                    />
                                    <button
                                      class="view-btn position-absolute"
                                      onclick="event.preventDefault()"
                                    >
                                      <i
                                        class="fa enter-icon right-icon fa-eye-slash"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="col-12 form-group mb-2">
                                  <label>
                                    New Password{" "}
                                    <span class="text-danger">*</span>
                                  </label>
                                  <div class="position-relative">
                                    <input
                                      type="password"
                                      name="newPassword"
                                      value={newPassword}
                                      onChange={(e) => onChange(e)}
                                      class="form-control enter-input"
                                      placeholder="Enter Current Password"
                                    />
                                    <button
                                      class="view-btn position-absolute"
                                      onclick="event.preventDefault()"
                                    >
                                      <i
                                        class="fa enter-icon right-icon fa-eye-slash"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                                <div class="col-12 form-group mb-2">
                                  <label>
                                    Confirm Password{" "}
                                    <span class="text-danger">*</span>
                                  </label>
                                  <div class="position-relative">
                                    <input
                                      type="password"
                                      name="confirmPassword"
                                      value={confirmPassword}
                                      onChange={(e) => onChange(e)}
                                      class="form-control enter-input"
                                      placeholder="Enter Current Password"
                                    />
                                    <button
                                      class="view-btn position-absolute"
                                      onclick="event.preventDefault()"
                                    >
                                      <i
                                        class="fa enter-icon right-icon fa-eye-slash"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 text-center" type="submit">
                                <button class="btn btn-primary" type="submit">
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
