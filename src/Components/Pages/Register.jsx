import React,{useEffect,useState} from "react";
import axios from 'axios' 
import { useNavigate } from "react-router-dom";



function Register() {
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
              <h4>Register</h4>
            </div>
       
            <div className="card-body">
  <form method="POST">
    <div className="row">
      <div className="form-group col-6">
        <label htmlFor="frist_name">First Name</label>
        <input id="frist_name" type="text" className="form-control" name="frist_name" autofocus />
      </div>
      <div className="form-group col-6">
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" className="form-control" name="last_name" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" className="form-control" name="email" />
      <div className="invalid-feedback">
      </div>
    </div>
   
      <div className="form-group">
        <label htmlFor="password" className="d-block">Password</label>
        <input id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator" name="password" />
        <div id="pwindicator" className="pwindicator">
          <div className="bar" />
          <div className="label" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password2" className="d-block">Password Confirmation</label>
        <input id="password2" type="password" className="form-control" name="password-confirm" />
      </div>
    
    {/*div class="form-divider">Your Home</div>
                          <div class="row">
                              <div class="form-group col-6">
                                  <label>Country</label>
                                  <select class="form-control selectric">
                                      <option>USA</option>
                                      <option>Palestine</option>
                                      <option>Syria</option>
                                      <option>Malaysia</option>
                                      <option>Thailand</option>
                                  </select>
                              </div>
                              <div class="form-group col-6">
                                  <label>Province</label>
                                  <select class="form-control selectric">
                                      <option>West Java</option>
                                      <option>East Java</option>
                                  </select>
                              </div>
                          </div>
                          <div class="row">
                              <div class="form-group col-6">
                                  <label>City</label>
                                  <input type="text" class="form-control">
                              </div>
                              <div class="form-group col-6">
                                  <label>Postal Code</label>
                                  <input type="text" class="form-control">
                              </div>
                          </div*/}
    <div className="form-group">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" name="agree" className="custom-control-input" id="agree" />
        <label className="custom-control-label" htmlFor="agree">I agree with the terms and conditions</label>
      </div>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
    </div>
  </form>
</div>



          </div>
          <div className="mt-5 text-muted text-center">
           Already have an account? <a href="/">Login</a>
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

export default Register
