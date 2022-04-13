import axios from "axios";
import Swal from "sweetalert2";
import {
  ADD_TAX,
  ADD_TAX_ERROR,
  DELETE_TAX,
  DELETE_TAX_ERROR,
  EDIT_TAX,
  EDIT_TAX_ERROR,
  GET_TAXES,
  TAX_ERROR,
} from "./actionTypes";
const BaseUrl = "http://localhost:5000";

//getting all taxs
export const getAllTaxes =
  (searchString, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${BaseUrl}/api/tax/getAllTaxs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_TAXES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TAX_ERROR,
      });
    }
  };

//adding a single tax
export const addTax =
  (formData, searchString, status, from, to, sort, page, perPage) =>
  async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BaseUrl}/api/tax/createTax`,
        formData,
        config
      );
      dispatch({
        type: ADD_TAX,
        payload: res.data,
      });
      if (dispatch) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Tax Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      dispatch(
        getAllTaxes(searchString, status, from, to, sort, page, perPage)
      );
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: ADD_TAX_ERROR,
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

//edit a tax by id
export const editTax =
  (taxid, percent, searchString, status, from, to, sort, page, perPage) =>
  async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${BaseUrl}/api/tax/editTax/${taxid}`,
        { percent },
        config
      );
      dispatch({
        type: EDIT_TAX,
        payload: res.data,
      });
      if (dispatch) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Tax was deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      dispatch(
        getAllTaxes(searchString, status, from, to, sort, page, perPage)
      );
    } catch (err) {
      console.log("err", err);
      dispatch({
        type: EDIT_TAX_ERROR,
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

//deleting tax by id
export const deleteTax =
  (id, searchString, status, from, to, sort, page, perPage) =>
  async (dispatch) => {
    try {
      const res = await axios.delete(`${BaseUrl}/api/tax/deleteTax/${id}`);
      console.log("ID", id);
      dispatch({
        type: DELETE_TAX,
        payload: { TaxID: id },
      });
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "Tax Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(
        getAllTaxes(searchString, status, from, to, sort, page, perPage)
      );
    } catch (err) {
      console.log("ERR", err);
      dispatch({
        type: DELETE_TAX_ERROR,
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
