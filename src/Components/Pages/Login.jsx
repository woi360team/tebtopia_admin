import React,{useEffect,useState} from "react";
import axios from 'axios' 
import { useNavigate } from "react-router-dom";



function Login() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [token, settoken] = useState('');
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();

const Submit=(e) =>{
    e.preventDefault()
    axios.post("https://teptopiabackend.onrender.com/api/user-admin-service/v1/admin/login",{email,password})
    .then( result =>{ 
      console.log(result)
      if(result.data.data['token'] && result.data.status==="success")
        {
         localStorage.setItem('token', JSON.stringify(result.data.data['token']));
         localStorage.setItem('logged', true);
          navigate('/dashboard');
            window.location.reload();
        }
        else
        {
          setErrorMessage("Username or Password Incorrect!!")
          navigate('/')
        }
              }   
        )
    .catch(err =>console.log(err))
}

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
              <h4>Login</h4>
            </div>
            <div className="card-body">
            {errorMessage && (
            <div className="alert alert-danger alert-dismissible show fade">
  <div className="alert-body">
    <button className="close" data-dismiss="alert"><span>×</span></button>
    {errorMessage}</div></div>
)}

              <form method="POST" onSubmit={Submit} className="needs-validation" noValidate>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" name="email" tabIndex={1} required autofocus />
                  <div className="invalid-feedback">
                    Please fill in your email
                  </div>
                </div>
                <div className="form-group">
                  <div className="d-block">
                    <label htmlFor="password" className="control-label">Password</label>
                    <div className="float-right">
                      <a href="/forgot" className="text-small">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input id="password" onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" name="password" tabIndex={2} required />
                  <div className="invalid-feedback">
                    please fill in your password
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                    <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                      Login
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

export default Login
