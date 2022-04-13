import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTax } from "../../redux/actions/taxes";
import Toasty from "../../utils/toast";
const AddTax = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    state: "",
    percent: "",
  });
  const dispatch = useDispatch();
  const { state, percent } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="modal fade tax-modal add-tax p-0"
      tabIndex
      role
      aria-labelledby
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" />
            <button
              type="button"
              className="btn close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-12 text-center">
                <h3>Add New Tax State</h3>
              </div>
            </div>
            <form action method="post">
              <div className="row">
                <div className="col-12 form-group">
                  <label htmlFor className="form-label">
                    State
                  </label>
                  <select
                    name="state"
                    className="form-control"
                    id
                    defaultValue={state}
                    onChange={(e) => onChange(e)}
                  >
                    <option value="Select">Select</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="New york">New york</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="California">California</option>
                    <option value="New jersey">New jersey</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                  </select>
                </div>
                <div className="col-12 form-group confrm-pass">
                  <label htmlFor className="form-label">
                    Tax %
                  </label>
                  <input
                    type="text"
                    name="percent"
                    placeholder="0"
                    className="form-control"
                    value={percent}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-12 form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    data-toggle="modal"
                    area-label="Close"
                    data-dismiss="modal"
                    data-target=".added-tax"
                    onClick={() => {
                      console.log("percent length", percent?.length);
                      console.log("state length", state?.length);
                      percent?.length > 0 && state?.length > 0
                        ? dispatch(
                            addTax(
                              formData,
                              searchString,
                              status,
                              from,
                              to,
                              sort,
                              page,
                              perPage
                            )
                          )
                        : Toasty("error", "please fill out all the fields");
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTax;
