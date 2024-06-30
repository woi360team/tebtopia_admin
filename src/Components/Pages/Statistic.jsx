import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function Statistic() {
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
      <h2 className="section-title">Statistic Dashboard</h2>
      <div className="row">
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card">
      <div className="card-header">
        <h4>Application</h4>
      </div>
      <div className="card-body">
        <div className="row mb-sm-5">
          <div className="col text-center">
            <div className="browser browser-chrome" />
            <div className="mt-2 font-weight-bold">Admin</div>
            <div className="text-muted text-small"><span className="text-primary"><i className="fas fa-caret-up" /></span> 48</div>
          </div>
          <div className="col text-center">
            <div className="browser browser-firefox" />
            <div className="mt-2 font-weight-bold">Hospital</div>
            <div className="text-muted text-small"><span className="text-primary"><i className="fas fa-caret-up" /></span> 26</div>
          </div>
          <div className="col text-center">
            <div className="browser browser-safari" />
            <div className="mt-2 font-weight-bold">Reception</div>
            <div className="text-muted text-small"><span className="text-danger"><i className="fas fa-caret-down" /></span> 14</div>
          </div>
          <div className="col text-center">
            <div className="browser browser-opera" />
            <div className="mt-2 font-weight-bold">Doctor</div>
            <div className="text-muted text-small">7</div>
          </div>
          <div className="col text-center">
            <div className="browser browser-internet-explorer" />
            <div className="mt-2 font-weight-bold">User</div>
            <div className="text-muted text-small"><span className="text-primary"><i className="fas fa-caret-up" /></span> 5</div>
          </div>
        </div>
        <div id="visitorMap" />
        <div className="mt-5">
          <div className="mb-4">
            <div className="text-small float-right font-weight-bold text-muted">2,100</div>
            <div className="font-weight-bold mb-1">Admin</div>
            <div className="progress" data-height={3}>
              <div className="progress-bar" role="progressbar" data-width="80%" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-small float-right font-weight-bold text-muted">1,880</div>
            <div className="font-weight-bold mb-1">Hospital</div>
            <div className="progress" data-height={3}>
              <div className="progress-bar" role="progressbar" data-width="67%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-small float-right font-weight-bold text-muted">1,521</div>
            <div className="font-weight-bold mb-1">Doctor</div>
            <div className="progress" data-height={3}>
              <div className="progress-bar" role="progressbar" data-width="58%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-small float-right font-weight-bold text-muted">884</div>
            <div className="font-weight-bold mb-1">Reception</div>
            <div className="progress" data-height={3}>
              <div className="progress-bar" role="progressbar" data-width="36%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-small float-right font-weight-bold text-muted">473</div>
            <div className="font-weight-bold mb-1">User</div>
            <div className="progress" data-height={3}>
              <div className="progress-bar" role="progressbar" data-width="28%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <h4 className="d-inline">Top Doctors</h4>
        <div className="card-header-action">
          <a href="manage_doctor.html" className="btn btn-primary">View All</a>
        </div>
      </div>
      <div className="card-body">
        <ul className="list-unstyled list-unstyled-border">
          <li className="media">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cbx-1" />
              <label className="custom-control-label" htmlFor="cbx-1" />
            </div>
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-4.png" alt="avatar" />
            <div className="media-body">
              <div className="badge badge-pill badge-danger mb-1 float-right">Germen Medical Center</div>
              <h6 className="media-title"><a href="#">Dr. Pawel Zwolak MD, PhD</a></h6>
              <div className="text-small text-muted">Spine Surgeon<div className="bullet" /> <span className="text-primary">Dubai</span></div>
            </div>
          </li>
          <li className="media">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cbx-2" defaultChecked />
              <label className="custom-control-label" htmlFor="cbx-2" />
            </div>
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-5.png" alt="avatar" />
            <div className="media-body">
              <div className="badge badge-pill badge-primary mb-1 float-right">Zia Medical Center</div>
              <h6 className="media-title"><a href="#">Dr. Imtiaz Hashmi</a></h6>
              <div className="text-small text-muted">ORTHOPEDICS <div className="bullet" /> Dubai</div>
            </div>
          </li>
          <li className="media">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cbx-3" />
              <label className="custom-control-label" htmlFor="cbx-3" />
            </div>
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-2.png" alt="avatar" />
            <div className="media-body">
              <div className="badge badge-pill badge-warning mb-1 float-right">Zia Medical Center</div>
              <h6 className="media-title"><a href="#">Dr. Omar Awija</a></h6>
              <div className="text-small text-muted">ORTHOPEDICS <div className="bullet" /> Dubai</div>
            </div>
          </li>
          <li className="media">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cbx-4" />
              <label className="custom-control-label" htmlFor="cbx-4" />
            </div>
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-1.png" alt="avatar" />
            <div className="media-body">
              <div className="badge badge-pill badge-danger mb-1 float-right">Not Zia Medical Center</div>
              <h6 className="media-title"><a href="#">Dr. Salman Hameed</a></h6>
              <div className="text-small text-muted">ORTHOPEDICS<div className="bullet" /> Dubai</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-lg-6 col-md-6 col-12">
    <div className="card">
      <div className="card-header">
        <h4>This Week Stats</h4>
      </div>
      <div className="card-body">
        <div className="summary">
          <div className="summary-info">
            <h4>$1,053</h4>
            <div className="text-muted">Sold 3 items on 2 customers</div>
            <div className="d-block mt-2"><a href="#">View All</a></div>
          </div>
          <div className="summary-item">
            <h6>Item List <span className="text-muted">(3 Items)</span></h6>
            <ul className="list-unstyled list-unstyled-border">
              <li className="media">
                <a href="#"><img className="mr-3 rounded" width={50} src="img/products/product-1-50.png" alt="product" /></a>
                <div className="media-body">
                  <div className="media-right">$405</div>
                  <div className="media-title"><a href="#">PlayStation 9</a></div>
                  <div className="text-muted text-small">by <a href="#">Susie Willis</a> <div className="bullet" /> Sunday</div>
                </div>
              </li>
              <li className="media">
                <a href="#"><img className="mr-3 rounded" width={50} src="img/products/product-2-50.png" alt="product" /></a>
                <div className="media-body">
                  <div className="media-right">$499</div>
                  <div className="media-title"><a href="#">RocketZ</a></div>
                  <div className="text-muted text-small">by <a href="#">Susie Willis</a> <div className="bullet" /> Sunday
                  </div>
                </div>
              </li>
              <li className="media">
                <a href="#"><img className="mr-3 rounded" width={50} src="img/products/product-3-50.png" alt="product" /></a>
                <div className="media-body">
                  <div className="media-right">$149</div>
                  <div className="media-title"><a href="#">Xiaomay Readme 4.0</a></div>
                  <div className="text-muted text-small">by <a href="#">Kusnaedi</a> <div className="bullet" /> Tuesday
                  </div>
                </div>
              </li>
              <li className="media">
                <a href="#"><img className="mr-3 rounded" width={50} src="img/products/product-5-50.png" alt="product" /></a>
                <div className="media-body">
                  <div className="media-right">$499</div>
                  <div className="media-title"><a href="#">RocketZ Camera</a></div>
                  <div className="text-muted text-small">by <a href="#">Susie Willis</a> <div className="bullet" /> Sunday
                  </div>
                </div>
              </li>
              <li className="media">
                <a href="#"><img className="mr-3 rounded" width={50} src="img/products/product-4-50.png" alt="product" /></a>
                <div className="media-body">
                  <div className="media-right">$149</div>
                  <div className="media-title"><a href="#">Xiaomay Laptop</a></div>
                  <div className="text-muted text-small">by <a href="#">Kusnaedi</a> <div className="bullet" /> Tuesday
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <h4>Recent Activities</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled list-unstyled-border">
          <li className="media">
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-1.png" alt="avatar" />
            <div className="media-body">
              <div className="float-right text-primary">Now</div>
              <div className="media-title">Farhan A Mujib</div>
              <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-2.png" alt="avatar" />
            <div className="media-body">
              <div className="float-right">12m</div>
              <div className="media-title">Michelle Green</div>
              <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-3.png" alt="avatar" />
            <div className="media-body">
              <div className="float-right">17m</div>
              <div className="media-title">Debra Stewart</div>
              <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-4.png" alt="avatar" />
            <div className="media-body">
              <div className="float-right">21m</div>
              <div className="media-title">Alfa Zulkarnain</div>
              <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
            </div>
          </li>
        </ul>
        <div className="text-center pt-1 pb-1">
          <a href="#" className="btn btn-primary btn-lg btn-round">View All</a>
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

export default Statistic
