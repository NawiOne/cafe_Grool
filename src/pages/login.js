import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginCreator } from "../redux/actions/auth";

import "../css/login.css";
import { Link } from "react-router-dom";
import cashierImg from "../img/gallery.png";

const Login = (props) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "")
      dispatch(loginCreator(username, password));
  };

  useEffect(() => {
    if (auth.isLogin) {
      props.history.push("/");
    }
  }, [auth.isLogin]);

  return (
    <>
      <main className='login'>
        <div className='content-login'>
          <div className='card no-gutters'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6 ilust'>
                  <h2>All the food you need is here</h2>
                  <img className='img-fluid' src={cashierImg} alt='' />
                </div>
                <div className='col-md-6 login'>
                  <div className='form-login-title'>
                    {props.location.state === undefined ? (
                      <h2>Login</h2>
                    ) : (
                      <h2>{props.location.state.msg}</h2>
                    )}
                    {auth.isPending ? (
                      <p>Please wait...</p>
                    ) : auth.error !== null ? (
                      <p>{auth.error}</p>
                    ) : null}
                  </div>

                  <form className='form login mt-5'>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Username</label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        name='username'
                        autoComplete='off'
                        required
                      />
                      <small id='emailHelp' className='form-text text-muted'>
                        input username here
                      </small>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        name='password'
                        autoComplete='off'
                        required
                      />
                      <small id='emailHelp' className='form-text text-muted'>
                        input password here
                      </small>
                    </div>
                    <div className='btn'>
                      <button
                        type='submit'
                        className='btn btn-login'
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        login
                      </button>
                    </div>
                    <Link className='link-account' to='/register'>
                      Create account
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
