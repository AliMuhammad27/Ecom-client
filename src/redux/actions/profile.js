import axios from "axios";
import Swal from "sweetalert2";
import {
  GET_PRODUCT_ERROR,
  GET_PROFILE,
  PASSWORD_ERROR,
  PASSWORD_UPDATED,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";

//getting updated profile
export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/adminauth/getprofile`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_ERROR,
    });
  }
};
//updating profile
export const updateProfile = (formData) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  console.log(formData);
  try {
    const res = await axios.post(
      `${BaseUrl}/api/adminauth/editprofile`,
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    if (dispatch) {
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "Profile Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    dispatch(getProfile());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: err?.response?.data?.msg
        ? err?.response?.data?.msg
        : "Wrong Password",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  console.log(formData);
  try {
    const res = await axios.post(
      `${BaseUrl}/api/adminauth/verifyAndRest`,
      formData,
      config
    );
    dispatch({
      type: PASSWORD_UPDATED,
      payload: res.data,
    });
    if (dispatch) {
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "Password Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    console.log("res.data", res.data);
  } catch (err) {
    dispatch({
      type: PASSWORD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: err?.response?.data?.msg
        ? err?.response?.data?.msg
        : "Wrong Password",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
