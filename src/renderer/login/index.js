import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from 'renderer/supabase';
import { SupabaseContext } from '../SupabaseContext';

import './style.scss';

function Login() {
  const [email, setEmail] = useState('odainef@gmail.com');
  const [password, setPassword] = useState('testing123');
  const [sessionData, setSessionData] = useState('');


  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    } else {
      // Redirect to the Search page
      navigate('/search');
    }
  }

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
            onChange={(query) => handleEmailChange(query)}
          />

          {/* <label className="usernameLabel">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            className="input mb-3"
            required
            value={password}
            onChange={(query) => handlePasswordChange(query)}
          />

          <p className="errorMsg" />
          <p className="errorMsg" />

          <button
            type="button"
            className="btn btn-success signInButton mb-3"
            onClick={() => signInWithEmail()}
          >
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
