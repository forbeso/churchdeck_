import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row row-width">
        <div className="col-12 loginLeftContainer d-flex justify-content-center align-items-center">
          <h1 className="title animate__animated animate__fadeInDown">
            church<span>deck</span>
          </h1>
          <p className="title mb-5 small animate__animated animate__fadeInUp">
            by Abundant Life Ministries
          </p>

          {/* <label className="usernameLabel">Username</label> */}
          <input
            type="text"
            placeholder="Username"
            className="input mb-3"
            // autoFocus
            required
            value={email}
            onChange={handleEmailChange}
          />

          {/* <label className="usernameLabel">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            className="input mb-3"
            required
            value={password}
            onChange={handlePasswordChange}
          />

          <p className="errorMsg" />
          <p className="errorMsg" />

          <button type="button" className="btn btn-success signInButton mb-3">
            Sign in
          </button>
          <Link to="/Search">Go to home</Link>

          {/* <div>
                <input type="checkbox" className="form-check-input" id="remembermeCheck"></input>
                <label className="form-check-label remembermeLabel" htmlFor="remembermeCheck"> &nbsp; Remember me</label>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
