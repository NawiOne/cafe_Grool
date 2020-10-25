import React from "react";
import {useSelector} from 'react-redux';
import {Route, Redirect} from "react-router-dom";

const PrivateRouteHistory = ({children, ...rest}) => {
  const {auth} = useSelector((state) => state)

  return (
    <Route
      {...rest}
      render={({location}) => {
        return auth.isLogin === true ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: location,
                  msg: "Please login as Admin",
                },
              }}
            />
          );
      }}
    />

  );
};

export default PrivateRouteHistory;