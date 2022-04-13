import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../../redux/actions/profile";
import Toasty from "../../utils/toast";
import { baseURl } from "../../utils/Helper";

const EditProfile = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [reciepts, setReciepts] = useState("");
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state?.auth?.admin?.admin);
  console.log(adminInfo);
  const adminImage = useSelector(
    (state) => state?.auth?.admin?.admin?.adminImage[0]
  );
  // const adminfirstname = useSelector(
  //   (state) => state?.auth?.admin?.admin?.firstname
  // );
  // const adminlastname = useSelector(
  //   (state) => state?.auth?.admin?.admin?.lastname
  // );
  useEffect(() => {
    if (adminInfo) {
      setFirstname(adminInfo?.firstname);
      setLastname(adminInfo.lastname);
      setEmail(adminInfo?.email);
      setImage(adminInfo?.adminImage);
    }
  }, [adminInfo]);
  //const adminemail = useSelector((state) => state?.auth?.admin?.admin?.email);
  const loadFile = (e) => {
    console.log("Running");
    var image = document.getElementById("upload");
    image.src = URL.createObjectURL(e.target.files[0]);
    setImage(image.src);
    setReciepts(e.target.files[0]);
  };
  console.log("Image", image);
  console.log("reciepts", reciepts);
  let formData = new FormData();
  formData.append("firstname", firstName);
  formData.append("lastname", lastName);
  formData.append("email", email);
  formData.append("reciepts", reciepts);

  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration" className="edit-profile">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded pad-20">
                    <div className="card-body p-md-2 p-lg-3 p-xl-4">
                      <div className="page-title">
                        <div className="row">
                          <div className="col-12">
                            <h1>
                              <Link to="/dashboard">
                                <i className="fa fa-angle-left" />
                              </Link>
                              Edit profile
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="user-block">
                        <div className="row justify-content-center">
                          <div className="col-12 col-lg-10 col-md-8 col-xl-5 light-primary-bg text-center">
                            <div className="d-flex justify-content-center mb-3">
                              <div className="profile-img text-center">
                                <div className="attached">
                                  <img
                                    // src="images/avatar.png"
                                    //src={`${baseURl()}${adminImage}`}
                                    src={
                                      reciepts
                                        ? reciepts
                                        : `${baseURl()}${adminImage}`
                                    }
                                    className="img-fluid ml-0"
                                    alt=""
                                  />
                                  <button
                                    name="file"
                                    onClick={() =>
                                      document.getElementById("upload").click()
                                    }
                                    className="camera-btn"
                                  >
                                    <i className="fa fa-camera" />
                                  </button>
                                  <input
                                    type="file"
                                    id="upload"
                                    name="file"
                                    onChange={(e) => loadFile(e)}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row detail-row d-flex align-items-center justify-content-around px-3">
                              <div className="col-md-6 col-12 text-left mb-1 lablename">
                                <label htmlFor>First Name:</label>
                              </div>
                              <div className="col-md-6 col-12 text-left mb-1">
                                <input
                                  type="text"
                                  name="firstname"
                                  className="form-control"
                                  placeholder="First Name"
                                  value={firstName}
                                  onChange={(e) => setFirstname(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 col-12 text-left mb-1 lablename">
                                <label htmlFor>Last Name:</label>
                              </div>
                              <div className="col-md-6 col-12 text-left mb-1">
                                <input
                                  type="text"
                                  name="lastname"
                                  className="form-control"
                                  placeholder="Last Name"
                                  value={lastName}
                                  onChange={(e) => setLastname(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 col-12 text-left mb-1 lablename">
                                <label htmlFor>Email Address:</label>
                              </div>
                              <div className="col-md-6 col-12 text-left mb-1">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control border-0"
                                  defaultValue="test@email.co"
                                  placeholder="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="row detail-row d-flex align-items-center mb-1">
                              <div className="col-12">
                                <button
                                  onClick={(e) => {
                                    firstName.length > 0 &&
                                    lastName.length > 0 &&
                                    email.length > 0 &&
                                    reciepts
                                      ? dispatch(updateProfile(formData))
                                      : Toasty(
                                          "Error",
                                          "please fill all the required fields"
                                        );
                                  }}
                                  type="submit"
                                  className="btn btn-primary btn-fixed-190"
                                >
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
