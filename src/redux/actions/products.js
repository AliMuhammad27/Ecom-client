import axios from "axios";
import Swal from "sweetalert2";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_ERROR,
  PRODUCT_ERROR,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/product/getAll`, {
      params: { page: 1, limit: 5 },
    });
    console.log("Res", res.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR,
    });
  }
};

export const addProduct = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${BaseUrl}/api/product/addProduct`,
      formData,
      config
    );
    console.log("Res", res);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    history?.push("/Products");

    Swal.fire({
      icon: "success",
      title: "SUCCESS",
      text: "Product Created Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_PRODUCT_ERROR,
    });
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: err?.response?.data?.msg
        ? err?.response?.data?.msg
        : "Internal Server Error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const editProduct = (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("FormData", formData);
  try {
    const res = await axios.post(
      `${BaseUrl}/api/product/edit/${id}`,
      formData,
      config
    );
    console.log("Res", res);
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });
    Swal.fire({
      icon: "success",
      title: "SUCCESS",
      text: "Product Edited Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    console.log("Error", err);
    dispatch({
      type: EDIT_PRODUCT_ERROR,
    });
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: err?.response?.data?.msg
        ? err?.response?.data?.msg
        : "Internal Server Error",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BaseUrl}/api/product/getProduct/${id}`);
    console.log("Res", res.data);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: GET_PRODUCT_ERROR,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BaseUrl}/api/product/deleteprod/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
    if (dispatch) {
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "Product Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    dispatch(getAllProducts());
  } catch (err) {
    console.log(err);
    dispatch({
      type: DELETE_PRODUCT_ERROR,
    });
    Swal.fire({
      icon: "success",
      title: "SUCCESS",
      text: "Tax was Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
