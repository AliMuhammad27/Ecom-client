import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-dropzone-uploader/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";
ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
