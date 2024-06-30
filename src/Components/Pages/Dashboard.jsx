import React,{useEffect,useState} from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  return (
    
   <div className="layout-4">
  
  <div id="app">
    <div className="main-wrapper main-wrapper-1">
     <Nav />
    <Sidebar />
      {/* Start app main Content */}
      <div className="main-content">
        <section className="section">
         <Header />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Hospital</h4>
                  </div>
                  <div className="card-body">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="far fa-newspaper" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Doctor</h4>
                  </div>
                  <div className="card-body">
                    42
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-warning">
                  <i className="far fa-file" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Reception</h4>
                  </div>
                  <div className="card-body">
                    1,201
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-circle" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Booking</h4>
                  </div>
                  <div className="card-body">
                    47
                  </div>
                </div>
              </div>
            </div>                  
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Statistics</h4>
                  <div className="card-header-action">
                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_year">1Y</button>
                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="statistic-details mb-sm-4">
                    <div className="statistic-details-item">
                      <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span> 7%</span>
                      <div className="detail-value">$243</div>
                      <div className="detail-name">Today's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted"><span className="text-danger"><i className="fas fa-caret-down" /></span> 23%</span>
                      <div className="detail-value">$2,902</div>
                      <div className="detail-name">This Week's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span>9%</span>
                      <div className="detail-value">$12,821</div>
                      <div className="detail-name">This Month's Sales</div>
                    </div>
                    <div className="statistic-details-item">
                      <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span> 19%</span>
                      <div className="detail-value">$92,142</div>
                      <div className="detail-name">This Year's Sales</div>
                    </div>
                  </div>
                  <div id="apex-timeline-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12 col-sm-12">
              <form method="post" className="needs-validation" noValidate>
                <div className="card">
                  <div className="card-header">
                    <h4>Quick Draft</h4>
                  </div>
                  <div className="card-body pb-0">
                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" name="title" className="form-control" required />
                      <div className="invalid-feedback">Please fill in the title</div>
                    </div>
                    <div className="form-group">
                      <label>Content</label>
                      <textarea className="summernote-simple" defaultValue={""} />
                    </div>
                  </div>
                  <div className="card-footer pt-0">
                    <button className="btn btn-primary">Save Draft</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-7 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Today Booking</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-primary">View All</a>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>                         
                        <tr>
                          <td>
                            Introduction Laravel 5
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Installation
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - MVC
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Migration
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Deploy
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
                          <td>
                            <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                            <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Laravel 5 Tutorial - Closing
                            <div className="table-links">
                              in <a href="#">Web Development</a>
                              <div className="bullet" />
                              <a href="#">View</a>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width={30} className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                          </td>
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
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              {/*div class="card">
                          <div class="card-header">
                              <h4>Visitors & Referral</h4>
                          </div>
                          <div class="card-body">
                              <div class="row mb-sm-5">
                                  <div class="col text-center">
                                      <div class="browser browser-chrome"></div>
                                      <div class="mt-2 font-weight-bold">Chrome</div>
                                      <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 48%</div>
                                  </div>
                                  <div class="col text-center">
                                      <div class="browser browser-firefox"></div>
                                      <div class="mt-2 font-weight-bold">Firefox</div>
                                      <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 26%</div>
                                  </div>
                                  <div class="col text-center">
                                      <div class="browser browser-safari"></div>
                                      <div class="mt-2 font-weight-bold">Safari</div>
                                      <div class="text-muted text-small"><span class="text-danger"><i class="fas fa-caret-down"></i></span> 14%</div>
                                  </div>
                                  <div class="col text-center">
                                      <div class="browser browser-opera"></div>
                                      <div class="mt-2 font-weight-bold">Opera</div>
                                      <div class="text-muted text-small">7%</div>
                                  </div>
                                  <div class="col text-center">
                                      <div class="browser browser-internet-explorer"></div>
                                      <div class="mt-2 font-weight-bold">IE</div>
                                      <div class="text-muted text-small"><span class="text-primary"><i class="fas fa-caret-up"></i></span> 5%</div>
                                  </div>
                              </div>
                              <div id="visitorMap"></div>
                              <div class="mt-5">
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">2,100</div>
                                      <div class="font-weight-bold mb-1">Google</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">1,880</div>
                                      <div class="font-weight-bold mb-1">Facebook</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="67%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">1,521</div>
                                      <div class="font-weight-bold mb-1">Bing</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="58%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">884</div>
                                      <div class="font-weight-bold mb-1">Yahoo</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="36%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">473</div>
                                      <div class="font-weight-bold mb-1">Kodinger</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="28%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                                  <div class="mb-4">
                                      <div class="text-small float-right font-weight-bold text-muted">418</div>
                                      <div class="font-weight-bold mb-1">Multinity</div>
                                      <div class="progress" data-height="3">
                                          <div class="progress-bar" role="progressbar" data-width="20%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div*/}
              <div className="card">
                <div className="card-header">
                  <h4 className="d-inline">Recent Booking</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-primary">View All</a>
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
                        <div className="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                        <h6 className="media-title"><a href="#">Redesign header</a></h6>
                        <div className="text-small text-muted">Alfa Zulkarnain <div className="bullet" /> <span className="text-primary">Now</span></div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cbx-2" defaultChecked />
                        <label className="custom-control-label" htmlFor="cbx-2" />
                      </div>
                      <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-5.png" alt="avatar" />
                      <div className="media-body">
                        <div className="badge badge-pill badge-primary mb-1 float-right">Completed</div>
                        <h6 className="media-title"><a href="#">Add a new component</a></h6>
                        <div className="text-small text-muted">Serj Tankian <div className="bullet" /> 4 Min</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cbx-3" />
                        <label className="custom-control-label" htmlFor="cbx-3" />
                      </div>
                      <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-2.png" alt="avatar" />
                      <div className="media-body">
                        <div className="badge badge-pill badge-warning mb-1 float-right">Progress</div>
                        <h6 className="media-title"><a href="#">Fix modal window</a></h6>
                        <div className="text-small text-muted">Michelle Green <div className="bullet" /> 8 Min</div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="cbx-4" />
                        <label className="custom-control-label" htmlFor="cbx-4" />
                      </div>
                      <img className="mr-3 rounded-circle" width={50} src="img/avatar/avatar-1.png" alt="avatar" />
                      <div className="media-body">
                        <div className="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                        <h6 className="media-title"><a href="#">Remove unwanted classes</a></h6>
                        <div className="text-small text-muted">Farhan A Mujib <div className="bullet" /> 21 Min</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              {/*div class="card">
                          <div class="card-header">
                              <h4>This Week Stats</h4>
                              <div class="card-header-action">
                                  <div class="dropdown">
                                      <a href="#" class="dropdown-toggle btn btn-primary" data-toggle="dropdown">Filter</a>
                                      <div class="dropdown-menu dropdown-menu-right">
                                          <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> Electronic</a>
                                          <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> T-shirt</a>
                                          <a href="#" class="dropdown-item has-icon"><i class="far fa-circle"></i> Hat</a>
                                          <div class="dropdown-divider"></div>
                                          <a href="#" class="dropdown-item">View All</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="card-body">
                              <div class="summary">
                                  <div class="summary-info">
                                      <h4>$1,053</h4>
                                      <div class="text-muted">Sold 3 items on 2 customers</div>
                                      <div class="d-block mt-2"><a href="#">View All</a></div>
                                  </div>
                                  <div class="summary-item">
                                      <h6>Item List <span class="text-muted">(3 Items)</span></h6>
                                      <ul class="list-unstyled list-unstyled-border">
                                          <li class="media">
                                              <a href="#"><img class="mr-3 rounded" width="50" src="img/products/product-1-50.png" alt="product"></a>
                                              <div class="media-body">
                                                  <div class="media-right">$405</div>
                                                  <div class="media-title"><a href="#">PlayStation 9</a></div>
                                                  <div class="text-muted text-small">by <a href="#">Susie Willis</a> <div class="bullet"></div> Sunday</div>
                                              </div>
                                          </li>
                                          <li class="media">
                                              <a href="#"><img class="mr-3 rounded" width="50" src="img/products/product-2-50.png" alt="product"></a>
                                              <div class="media-body">
                                                  <div class="media-right">$499</div>
                                                  <div class="media-title"><a href="#">RocketZ</a></div>
                                                  <div class="text-muted text-small">by <a href="#">Susie Willis</a> <div class="bullet"></div> Sunday
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="media">
                                              <a href="#"><img class="mr-3 rounded" width="50" src="img/products/product-3-50.png" alt="product"></a>
                                              <div class="media-body">
                                                  <div class="media-right">$149</div>
                                                  <div class="media-title"><a href="#">Xiaomay Readme 4.0</a></div>
                                                  <div class="text-muted text-small">by <a href="#">Kusnaedi</a> <div class="bullet"></div> Tuesday
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="media">
                                              <a href="#"><img class="mr-3 rounded" width="50" src="img/products/product-5-50.png" alt="product"></a>
                                              <div class="media-body">
                                                  <div class="media-right">$499</div>
                                                  <div class="media-title"><a href="#">RocketZ Camera</a></div>
                                                  <div class="text-muted text-small">by <a href="#">Susie Willis</a> <div class="bullet"></div> Sunday
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="media">
                                              <a href="#"><img class="mr-3 rounded" width="50" src="img/products/product-4-50.png" alt="product"></a>
                                              <div class="media-body">
                                                  <div class="media-right">$149</div>
                                                  <div class="media-title"><a href="#">Xiaomay Laptop</a></div>
                                                  <div class="text-muted text-small">by <a href="#">Kusnaedi</a> <div class="bullet"></div> Tuesday
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div*/}
              <div className="card">
                <div className="card-header">
                  <h4>Doctors Activities</h4>
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
        </section>
      </div>
  

  <Footer />
    </div>
  </div>
</div>

  )
}

export default Dashboard
