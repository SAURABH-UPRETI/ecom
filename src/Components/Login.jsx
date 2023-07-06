import React from 'react'
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import { BrowserRouter as Router, Route, Link, Switch, Routes } from "react-router-dom";

const Login = () => {
  return (
    <>
       <div className="container-fluid login-background-img">
        <div className="container p-5 login-main-box w-25">
          <div>
            <form action="">
              <h4 className="text-center my-4">Login Form</h4>
              <div className="form-group">
                <span className="login-icon">
                  <PersonIcon />
                </span>
                <input
                  type="email number"
                  className="form-control input-sm ps-5 my-3"
                  placeholder="Email/Number"
                  required
                />
              </div>
              <div className="form-group">
                <span className="login-icon">
                  <KeyIcon />
                </span>
                <input
                  type="Password"
                  className="form-control  input-sm ps-5 my-3"
                  placeholder="Password"
                  required
                />
              </div>
            </form>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="form-check-label">Remember me</label>
              <a href="" className="ms-4">
                Forget Password?
              </a>
            </div>
            <button type="button" className="btn btn-info w-100  my-4">
              Log IN
            </button>
          </div>

          <h6 className=" text-center my-3">
            New user? <a href=""> <Link to="/signup">Signup</Link></a>
          </h6>
        </div>
      </div></>
  )
}

export default Login