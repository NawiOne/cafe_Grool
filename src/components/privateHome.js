import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from 'react-redux';


const PrivateRoute = ({children, ...rest}) => {
  const {auth} = useSelector(state => state)
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
                  msg: "Login to continue",
                },
              }}
            />
          );
      }}
    />

  );
};

export default PrivateRoute;