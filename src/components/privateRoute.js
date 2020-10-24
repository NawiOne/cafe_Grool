import React, {useEffect} from "react";
import {useSelector} from 'react-redux';
import {Route, Redirect} from "react-router-dom";
import jwt from 'jsonwebtoken';


const authCheckAdmin = () => {
  // const token = window.localStorage.getItem('token');
  // if(token === null) {
  //   return false;
  // } else {
    
  //   const decodedToken = jwt.decode(token);
  //   console.log(decodedToken.id_level);
  //   const getTime = Number(new Date().getTime().toString().substr(0, 10));
  //   if(decodedToken.exp < getTime || decodedToken.id_level !== 1) {
  //     return false;
  //   }
  //   else
  //     return true;
  // }





};
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