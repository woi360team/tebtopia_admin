import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function Add_doctor() {
 

    const localRows = localStorage.getItem('token');
    const [users, setUsers]=useState([])
    useEffect(() => {
        const headers = { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVTJGc2RHVmtYMStlQW4zZzY0TklDVkloczFWZzREcWVUTTU3Rk56ZlZRYm9WcExybVNxQVo5bGl3dFJpMGZ2eDJhTzVTQUc5aGdJaGNGLzhldHBic1JKQ0gwMEtOdWI3cXd1Yjh2R3dXR05PK1ZIaGkyVVV5dXIwa1Q4dmZlRGJjZFZ3TlFHY3pNRjhjUlVLSXAzcXViS2prQjN5MDZuZ0JjblhqTlBRNmcxdG9LNjArMXl2bU5aSnZxNmRqRmZVNExHd2N3M05vVWI3WFJUMi9TSUxBQT09IiwiaWF0IjoxNzE4NzE5ODgyLCJleHAiOjE3MjM5MDM4ODJ9.-v0sE9rnLjL8GZcgzxf8kUqSSZLHKurInHsCtLtC2_c' };
        fetch('https://teptopiabackend.onrender.com/api/user-data-service/v1/users/get-all-users', { headers })
            .then(response => response.json())
            .then(data => 
                setUsers(data.data.userDetails)
               // console.log(data.data.userDetails)
               );
        
        
    }, []);


    
  return (
   <div className="layout-4">
  <div id="app">
    <div className="main-wrapper main-wrapper-1">
     <Nav />
    <Sidebar />
      <div className="main-content">
        <section className="section">
         <Header />
   {/* <span>{localRows}</span> */}  
    <div className="section-body">
   <div>
  <h2 classname="section-title">Doctor Management</h2>
  <div className="section-body">
    <h2 className="section-title">Add Doctor</h2>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4>Doctor Details</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <div className="input-group">
                <textarea className="form-control" defaultValue={"                                            \n                                        "} />
              </div>
            </div>
            <div className="form-group">
              <label>Logo</label>
              <div className="input-group">
                <input type="file" className="form-control" />
              </div>
            </div>                              </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Contact Information</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Phone Number</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-phone" />
                  </div>
                </div>
                <input type="text" className="form-control phone-number" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-envelope" />
                  </div>
                </div>
                <input type="email" className="form-control phone-number" />
              </div>
            </div>
            <div className="form-group">
              <label>Website URL</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user" />
                  </div>
                </div>
                <input type="text" className="form-control phone-number" />
              </div>
            </div>
            <div className="form-group">
              <label>Hospital Description</label>
              <div className="input-group">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Emergency Contact</h4>
          </div>
          <div className="card-body">
            <div className="form-group">   
              <div className="custom-switches-stacked mt-2">
                <label>Name</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-user" />
                    </div>
                  </div>
                  <input type="text" className="form-control phone-number" />
                </div>
              </div>
            </div>
            <div className="custom-switches-stacked mt-2">
              <label>Phone</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-phone" />
                  </div>
                </div>
                <input type="text" className="form-control phone-number" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4>Departments</h4>
          </div>
          <div className="card-body">
            <div className="section-title mt-0">Departments</div>
            <div className="form-group">
              <select className="form-control">
                <option> Acute medical unit</option>
                <option>AmadeoLab</option>
                <option>Ambulatory care</option>
                <option>Burn center</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Adminstrative Contact</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <div className="custom-switches-stacked mt-2">
                <label>Name</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-user" />
                    </div>
                  </div>
                  <input type="text" className="form-control phone-number" />
                </div>
              </div>
              <div className="custom-switches-stacked mt-2">
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-envelope" />
                    </div>
                  </div>
                  <input type="text" className="form-control phone-number" />
                </div>
              </div>
            </div>
            <div className="custom-switches-stacked mt-2">
              <label>Phone</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-phone" />
                  </div>
                </div>
                <input type="text" className="form-control phone-number" />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Other Information</h4>
          </div>
          <div className="card-body">
            <div className="form-group">   
              <div className="custom-switches-stacked mt-2">
                <label>Operating Hours</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-clock" />
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="custom-switches-stacked mt-2">
              <label>Service Offered</label>
              <div className="input-group">
                <select className="form-control">
                  <option>Emergency room services</option>
                  <option>Short-term hospitalization</option>
                  <option>X-ray/radiology services</option>
                  <option>General and specialty surgical services</option>
                  <option>Blood services</option>
                  <option>Laboratory services</option>
                </select>
              </div>
            </div>
            <div className="custom-switches-stacked mt-2">
              <label>Insurance Accepted</label>
              <select className="form-control">
                <option>Emergency room services</option>
                <option>Short-term hospitalization</option>
                <option>X-ray/radiology services</option>
                <option>General and specialty surgical services</option>
                <option>Blood services</option>
                <option>Laboratory services</option>
              </select>
            </div>
            <div className="custom-switches-stacked mt-2">
              <label>Faciities</label>
              <select className="form-control">
                <option>24*7 Emergency Services</option>
                <option>Trained Medical Staff</option>
                <option>Trained Nursing Staff</option>
                <option>Triage Area</option>
                <option>Consultation Area</option>
                <option>Patient Waiting Area</option>
                <option>Observation Ward</option>
                <option>Plaster / Dressing Room</option>
              </select>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-icon icon-left btn-primary btn-lg btn-block"><i className="far fa-edit" /> ADD</a>
      </div>
    </div>
  </div>
</div>

    </div>




        </section>
      </div>
  <Footer />
    </div>
  </div>
</div>

  )
}

export default Add_doctor
