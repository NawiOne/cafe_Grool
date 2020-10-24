import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import cashierImg from "../img/gallery.png";
import loading from "../img/Spinner.gif";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    status: null,
    msg: null,
  };

  localStorage = () => {
    localStorage.setItem("token", this.state.status.data.token);
  };

  handleForm = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({
      user: newUser,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.user.username !== "" && this.state.user.password !== "") {
      const url = "http://54.198.163.118:8000/auth/login";
      Axios.post(url, this.state.user, {
        headers: { token: localStorage.getItem("token") },
      })
        .then((res) => {
          this.setState({
            status: res.data,
          });
          if (res.data.status === 200) {
            this.localStorage();
            this.props.history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        msg: "Username or Password cannot be empty",
      });
    }
  };

  render() {
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
                    {this.props.location.state === undefined ? (
                      <h2>Login</h2>
                    ) : (
                      <h2>{this.props.location.state.msg}</h2>
                    )}
                    <p>
                      {(() => {
                        if (this.state.status !== null) {
                          switch (this.state.status.isSuccess) {
                            case true:
                              return null;
                            case false:
                              return this.state.status.data;
                            default:
                              return null;
                          }
                        } else {
                          return this.state.msg;
                        }
                      })()}
                    </p>

                    <form className='form login mt-5'>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Username</label>
                        <input
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          onChange={this.handleForm}
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
                          onChange={this.handleForm}
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
                          onClick={this.handleSubmit}
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
  }
}
export default Login;
