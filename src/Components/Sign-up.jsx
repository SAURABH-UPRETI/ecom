import React from 'react'
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
const Signup = () => {
  return (
    <>
      <div className="container-fluid login-background-img">
        <div className="container p-4 login-main-box w-25">
          <div>
            <form action=" ">
              <h4 className="text-center mb-4">Sign Up</h4>
              <div className="form-group">
                <span className="login-icon">
                  <PersonIcon />
                </span>
                <input
                  type="text"
                  className="form-control input-sm ps-5 my-3"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <span className="login-icon">
                  <EmailIcon />
                </span>
                <input
                  type="email"
                  className="form-control  ps-5 my-3"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <span className="login-icon">
                  <LocalPhoneIcon />
                </span>
                <input
                  type="number"
                  className="form-control  ps-5 my-3"
                  placeholder="Mobile Number"
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
                />
              </div>
              <div className="form-group">
                <span className="login-icon">
                  <KeyIcon />
                </span>
                <input
                  type="Password"
                  className="form-control  input-sm ps-5 my-3"
                  placeholder="Confirm-Password"
                />
              </div>
            </form>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label htmlFor="form-check-label" required>
              Accept Turms and Condition
            </label>
          </div>
          <button type="button" className="btn w-100  btn-info mt-3">
            Sign Up
          </button>

          <h6 className="text-center my-3">
            Already accout? <a href=""> Sign In</a>
          </h6>
        </div>
      </div></>
  )
}

export default Signup;