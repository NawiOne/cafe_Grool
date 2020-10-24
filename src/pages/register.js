import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerCreator, clearStatusCreator} from "../redux/actions/auth";

import "../css/register.css";
import cashierImg from "../img/gallery.png";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "")
      dispatch(registerCreator(username, password));
  };

  useEffect(() => {
    if (auth.status) {
      props.history.push("/login");
      dispatch(clearStatusCreator())
    }
  }, [auth.status]);

  return (
    <>
      <main className='register'>
        <div className='content-register'>
          <div className='card no-gutters'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6 ilust'>
                  <h2>All the food you need is here</h2>
                  <img className='img-fluid' src={cashierImg} alt='' />
                </div>
                <div className='col-md-6 register'>
                  <div className='error-register'>
                    <h2>Create new account</h2>
                    {auth.isPending ? (
                      <p className='please-wait'>Please wait...</p>
                    ) : auth.status === false ? (
                      <p>username already taken</p>
                    ) : null}
                  </div>

                  <form className='form mt-5'>
                    <div className='form-group'>
                      <label for='exampleInputEmail1'>Username</label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        name='username'
                        required
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className='form-group'>
                      <label for='exampleInputPassword1'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        name='password'
                        required
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div
                      className='btn mt-3'
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <button type='submit' className='btn btn-login'>
                        Submit
                      </button>
                    </div>
                    <Link className='link-account' to='/login' onClick={() => {
                        dispatch(clearStatusCreator())
                    }}>
                      Login
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

export default Register;
