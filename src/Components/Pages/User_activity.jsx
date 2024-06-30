import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function User_activity() {
   
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
      <h2 className="section-title"> Users Activity</h2>
      <div className="row row-deck">
  <div className="col-md-8">
    <div className="card">
      <div className="card-header">
        <h4>Users</h4>
        <div className="card-header-action">
          <a href="manage_user.html" className="btn btn-danger">View More <i className="fas fa-chevron-right" /></a>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive table-invoice">
          <table className="table table-striped">
            <tbody><tr>
                <th>ID</th>
                <th>User</th>
                <th>Status</th>
                <th>location</th>
                <th>Action</th>
              </tr>
              <tr>
                <td><a href="#">INV-87239</a></td>
                <td className="font-weight-600">Kusnadi</td>
                <td><div className="badge badge-warning">Active</div></td>
                <td>July 19, 2018</td>
                <td>
                  <a href="#" className="btn btn-primary">View</a>
                </td>
              </tr>
              <tr>
                <td><a href="#">INV-48574</a></td>
                <td className="font-weight-600">Susie Willis</td>
                <td><div className="badge badge-success">Offline</div></td>
                <td>July 21, 2018</td>
                <td>
                  <a href="#" className="btn btn-primary">View</a>
                </td>
              </tr>
              <tr>
                <td><a href="#">INV-76824</a></td>
                <td className="font-weight-600">Muhamad Nuruzzaki</td>
                <td><div className="badge badge-warning">Offline</div></td>
                <td>July 22, 2018</td>
                <td>
                  <a href="#" className="btn btn-primary">View</a>
                </td>
              </tr>
              <tr>
                <td><a href="#">INV-84990</a></td>
                <td className="font-weight-600">Agung Ardiansyah</td>
                <td><div className="badge badge-warning">Active</div></td>
                <td>July 22, 2018</td>
                <td>
                  <a href="#" className="btn btn-primary">View</a>
                </td>
              </tr>
              <tr>
                <td><a href="#">INV-87320</a></td>
                <td className="font-weight-600">Ardian Rahardiansyah</td>
                <td><div className="badge badge-success">Offline</div></td>
                <td>July 28, 2018</td>
                <td>
                  <a href="#" className="btn btn-primary">View</a>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card-hero">
      <div className="card-header">
        <div className="card-icon">
          <i className="far fa-question-circle" />
        </div>
        <h4>14</h4>
        <div className="card-description">Customers Feedback</div>
      </div>
      <div className="card-body p-0">
        <div className="tickets-list">
          <a href="#" className="ticket-item">
            <div className="ticket-title">
              <h4>The treatment of this hospital was very good. The nursing staff and doctor gave nice treatment, caring and helping. Thanks for all the care and help</h4>
            </div>
            <div className="ticket-info">
              <div>Laila Tazkiah</div>
              <div className="bullet" />
              <div className="text-primary">1 min ago</div>
            </div>
          </a>
          <a href="#" className="ticket-item">
            <div className="ticket-title">
              <h4>My mother was admitted at NIMS after she suffered a stroke on 7th April 2017 At 85 years of age, she is diabetic and is averse to hospitalization even in critical condition. </h4>
            </div>
            <div className="ticket-info">
              <div>Debra Stewart</div>
              <div className="bullet" />
              <div>2 hours ago</div>
            </div>
          </a>
          <a href="#" className="ticket-item">
            <div className="ticket-title">
              <h4>Thanks to Naturopathy doctors and staffs/Subordinates.</h4>
            </div>
            <div className="ticket-info">
              <div>Syahdan Ubaidillah</div>
              <div className="bullet" />
              <div>6 hours ago</div>
            </div>
          </a>
          <a href="features-tickets.html" className="ticket-item ticket-more">
            View All <i className="fas fa-chevron-right" />
          </a>
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

export default User_activity
