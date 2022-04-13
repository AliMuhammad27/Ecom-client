import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import Toasty from "../../utils/toast";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.table(formData);
  //   email.length > 0 && password.length > 0
  //     ? dispatch(login(email, password, history))
  //     : Toasty("Error", "please fill all the required fields");
  // };

  if (isAuthenticated) {
    history.push("/dashboard");
    console.log("Running");
  }
  return (
    <section className="login-wrap">
      <div className="container m-auto">
        <div className="login-inner">
          <div className="row">
            <div className="col-lg-12 col-12 ">
              <div className="right">
                <div className="logo text-center">
                  <img src="images/login-logo.png" alt="" />
                </div>
                <h1 className>Login</h1>
                <div className="row">
                  <div className="col-12 form-group position-relative">
                    <label htmlFor>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12 form-group mb-1">
                    <label htmlFor>
                      Password <span className="text-danger">*</span>{" "}
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control enter-input"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                      <button
                        className="btn view-btn position-absolute"
                        onClick="event.preventDefault()"
                      >
                        {" "}
                        <i
                          className="fa fa-eye-slash enter-icon right-icon"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-row">
                  <div className="d-flex justify-content-end">
                    <div className="forgot">
                      {" "}
                      <a href="#">Forgot Password?</a>{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-block col-12 text-center mt-4">
                    <button
                      onClick={(e) => {
                        email.length > 0 && password.length > 0
                          ? dispatch(login(email, password, history))
                          : Toasty(
                              "Error",
                              "please fill all the required fields"
                            );
                      }}
                      type="sumit"
                      className="btn btn-primary btn-login w-100"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
