import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function Manage_doctor() {
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
      <h2 className="section-title">Manage Doctors</h2>
    <div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h4>Total Doctor Details</h4>
        <div className="card-header-action">
          <a href="#" className="btn btn-primary">View All</a>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Working Hospital</th>
                <th>Phone </th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>                         
              <tr>
                <td>
                  Dr. Pawel Zwolak MD, PhD
                  <div className="table-links">
                    <a href="#">Spine Surgeon</a>
                    <div className="bullet" />
                    <a href="#">View</a>
                  </div>
                </td>
                <td>
                  <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Germen Medical Center</a>
                </td>
                <td>123456789</td>
                <td> pawe@gmai.com</td>
                <td>Active</td>
                <td>
                  <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                  <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                </td>
              </tr>
              <tr>
                <td>
                  Dr. Imtiaz Hashmi 
                  <div className="table-links">
                    <a href="#">ORTHOPEDICS</a>
                    <div className="bullet" />
                    <a href="#">View</a>
                  </div>
                </td>
                <td>
                  <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Zia Medical Center</a>
                </td>
                <td>123456789</td>
                <td> imtiaz@gmai.com</td>
                <td>Active</td>
                <td>
                  <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                  <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                </td>
              </tr>
              <tr>
                <td>
                  Dr. Omar Awija
                  <div className="table-links">
                    <a href="#">ORTHOPEDICS</a>
                    <div className="bullet" />
                    <a href="#">View</a>
                  </div>
                </td>
                <td>
                  <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Zia Medical Center</a>
                </td>
                <td>123456789</td>
                <td> omar@gmai.com</td>
                <td>Active</td>
                <td>
                  <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                  <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Manage_doctor
