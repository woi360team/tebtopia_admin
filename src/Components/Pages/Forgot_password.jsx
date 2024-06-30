import React,{useEffect,useState} from "react";
import axios from 'axios' 
import { useNavigate } from "react-router-dom";



function Forgot_password() {
  return (
  
<div id="app">
  <section className="section">
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
          <div className="login-brand">
            <img src="img/logo.svg" alt="logo" className="shadow-light" />
          </div>
          <div className="card card-primary">
            <div className="card-header">
              <h4>Forgot Password</h4>
            </div>
          <div className="card-body">
  <p className="text-muted">We will send a link to reset your password</p>
  <form method="POST">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" className="form-control" name="email" tabIndex={1} required autofocus />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
        Forgot Password
      </button>
    </div>
  </form>
</div>

          </div>
          <div className="mt-5 text-muted text-center">
            Don't have an account? <a href="/register">Create One</a>
          </div>
          <div className="simple-footer">
            Copyright © Tetopia 2024
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Forgot_password
