import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  console.log("privatedRoute", isAuthenticated, isLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !isLoading ? (
          <Redirect to="/" />
        ) : (
          <>
            <Navbar />
            <Component {...props} />
          </>
        )
      }
    />
  );
};
export default PrivateRoute;
