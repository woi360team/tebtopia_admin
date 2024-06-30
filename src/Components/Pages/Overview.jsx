import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function Overview() {
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
      <h2 className="section-title">Overview Dashboard</h2>
   <div className="row">
  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="card card-statistic-2">
      <div className="card-stats">
        <div className="card-stats-title">Booking Statistics - 
          <div className="dropdown d-inline">
            <a className="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="orders-month">August</a>
            <ul className="dropdown-menu dropdown-menu-sm">
              <li className="dropdown-title">Select Month</li>
              <li><a href="#" className="dropdown-item">January</a></li>
              <li><a href="#" className="dropdown-item">February</a></li>
              <li><a href="#" className="dropdown-item">March</a></li>
              <li><a href="#" className="dropdown-item">April</a></li>
              <li><a href="#" className="dropdown-item">May</a></li>
              <li><a href="#" className="dropdown-item">June</a></li>
              <li><a href="#" className="dropdown-item">July</a></li>
              <li><a href="#" className="dropdown-item active">August</a></li>
              <li><a href="#" className="dropdown-item">September</a></li>
              <li><a href="#" className="dropdown-item">October</a></li>
              <li><a href="#" className="dropdown-item">November</a></li>
              <li><a href="#" className="dropdown-item">December</a></li>
            </ul>
          </div>
        </div>
        <div className="card-stats-items">
          <div className="card-stats-item">
            <div className="card-stats-item-count">24</div>
            <div className="card-stats-item-label">Pending</div>
          </div>
          <div className="card-stats-item">
            <div className="card-stats-item-count">12</div>
            <div className="card-stats-item-label">Waiting</div>
          </div>
          <div className="card-stats-item">
            <div className="card-stats-item-count">23</div>
            <div className="card-stats-item-label">Completed</div>
          </div>
        </div>
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-archive" />
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Total Bookings</h4>
        </div>
        <div className="card-body">
          59
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="card card-statistic-2">
      <div className="card-chart">
        <canvas id="balance-chart" height={80} />
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-dollar-sign" />
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Users</h4>
        </div>
        <div className="card-body">
          $187,13
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="card card-statistic-2">
      <div className="card-chart">
        <canvas id="sales-chart" height={80} />
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-shopping-bag" />
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Doctor</h4>
        </div>
        <div className="card-body">
          4,732
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row row-deck">
  <div className="col-lg-8">
    <div className="card">
      <div className="card-header">
        <h4>Booking vs User</h4>
      </div>
      <div className="card-body">
        <canvas id="myChart" height={158} />
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card gradient-bottom">
      <div className="card-header">
        <h4>Top 5 Hospitals</h4>
        <div className="card-header-action dropdown">
          <a href="#" data-toggle="dropdown" className="btn btn-danger dropdown-toggle">Month</a>
          <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <li className="dropdown-title">Select Period</li>
            <li><a href="#" className="dropdown-item">Today</a></li>
            <li><a href="#" className="dropdown-item">Week</a></li>
            <li><a href="#" className="dropdown-item active">Month</a></li>
            <li><a href="#" className="dropdown-item">This Year</a></li>
          </ul>
        </div>
      </div>
      <div className="card-body" id="top-5-scroll">
        <ul className="list-unstyled list-unstyled-border">
          <li className="media">
            <img className="mr-3 rounded" width={55} src="img/aster.jpg" alt="product" />
            <div className="media-body">
              <div className="float-right"><div className="font-weight-600 text-muted text-small">Al Qusais</div></div>
              <div className="media-title">Aster Hospital</div>
              <div className="mt-1">
                <div className="budget-price">
                  <div className="budget-price-square bg-primary" data-width="64%" />
                  <div className="budget-price-label">68,714</div>
                </div>
                <div className="budget-price">
                  <div className="budget-price-square bg-danger" data-width="43%" />
                  <div className="budget-price-label">38,700</div>
                </div>
              </div>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded" width={55} src="img/prime.jfif" alt="product" />
            <div className="media-body">
              <div className="float-right"><div className="font-weight-600 text-muted text-small">Dubai</div></div>
              <div className="media-title">PRIME Hospital</div>
              <div className="mt-1">
                <div className="budget-price">
                  <div className="budget-price-square bg-primary" data-width="84%" />
                  <div className="budget-price-label">107,133</div>
                </div>
                <div className="budget-price">
                  <div className="budget-price-square bg-danger" data-width="60%" />
                  <div className="budget-price-label">91,455</div>
                </div>
              </div>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded" width={55} src="img/zu.jfif" alt="product" />
            <div className="media-body">
              <div className="float-right"><div className="font-weight-600 text-muted text-small">Dubai</div></div>
              <div className="media-title">Zulekha Hospital</div>
              <div className="mt-1">
                <div className="budget-price">
                  <div className="budget-price-square bg-primary" data-width="34%" />
                  <div className="budget-price-label">3,717</div>
                </div>
                <div className="budget-price">
                  <div className="budget-price-square bg-danger" data-width="28%" />
                  <div className="budget-price-label">2,835</div>
                </div>
              </div>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded" width={55} src="img/download.jfif" alt="product" />
            <div className="media-body">
              <div className="float-right"><div className="font-weight-600 text-muted text-small">Dubai</div></div>
              <div className="media-title">Medeor 24x7 Hospital</div>
              <div className="mt-1">
                <div className="budget-price">
                  <div className="budget-price-square bg-primary" data-width="45%" />
                  <div className="budget-price-label">13,972</div>
                </div>
                <div className="budget-price">
                  <div className="budget-price-square bg-danger" data-width="30%" />
                  <div className="budget-price-label">9,660</div>
                </div>
              </div>
            </div>
          </li>
          <li className="media">
            <img className="mr-3 rounded" width={55} src="img/Canadian.jfif" alt="product" />
            <div className="media-body">
              <div className="float-right"><div className="font-weight-600 text-muted text-small">Dubai</div></div>
              <div className="media-title">Canadian Specialist</div>
              <div className="mt-1">
                <div className="budget-price">
                  <div className="budget-price-square bg-primary" data-width="35%" />
                  <div className="budget-price-label">7,391</div>
                </div>
                <div className="budget-price">
                  <div className="budget-price-square bg-danger" data-width="28%" />
                  <div className="budget-price-label">5,472</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-footer pt-3 d-flex justify-content-center">
        <div className="budget-price justify-content-center">
          <div className="budget-price-square bg-primary" data-width={20} />
          <div className="budget-price-label">Completed</div>
        </div>
        <div className="budget-price justify-content-center">
          <div className="budget-price-square bg-danger" data-width={20} />
          <div className="budget-price-label">Cancel</div>
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

export default Overview
