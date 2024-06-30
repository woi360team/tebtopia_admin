import React,{useEffect,useState} from "react";
import axios from 'axios' 
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
const logout=()=>{
  window.localStorage.removeItem("logged")
  navigate('/')
}
  return (
  <div>
    <div className="navbar-bg" />
    {/* Start app top navbar */}
    {/* Start app top navbar */}
    <nav className="navbar navbar-expand-lg main-navbar">
      <form className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
          <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a></li>
          <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></a></li>
        </ul>
        <div className="search-element">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={250} />
          <button className="btn" type="submit"><i className="fas fa-search" /></button>
          <div className="search-backdrop" />
          <div className="search-result">
            <div className="search-header">Histories</div>
            <div className="search-item">
              <a href="#">How to Used HTML in Laravel</a>
              <a href="#" className="search-close"><i className="fas fa-times" /></a>
            </div>
            <div className="search-item">
              <a href="https://themeforest.net/user/admincraft/portfolio" target="_black">Admincraft Portfolio</a>
              <a href="#" className="search-close"><i className="fas fa-times" /></a>
            </div>
            <div className="search-item">
              <a href="#">#Tebtopia</a>
              <a href="#" className="search-close"><i className="fas fa-times" /></a>
            </div>
            <div className="search-header">Result</div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width={30} src="img/products/product-3-50.png" alt="product" />
                oPhone 11 Pro
              </a>
            </div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width={30} src="img/products/product-2-50.png" alt="product" />
                Drone Zx New Gen-3
              </a>
            </div>
            <div className="search-item">
              <a href="#">
                <img className="mr-3 rounded" width={30} src="img/products/product-1-50.png" alt="product" />
                Headphone JBL
              </a>
            </div>
            <div className="search-header">Projects</div>
            <div className="search-item">
              <a href="https://themeforest.net/item/epice-laravel-admin-template-for-hr-project-management/24466729" target="_black">
                <div className="search-icon bg-danger text-white mr-3"><i className="fas fa-code" /></div>
                Epice Laravel - Admin Template
              </a>
            </div>
            <div className="search-item">
              <a href="https://themeforest.net/item/soccer-project-management-admin-template-ui-kit/24646866" target="_black">
                <div className="search-icon bg-primary text-white mr-3"><i className="fas fa-laptop" /></div>
                Soccer - Admin Template
              </a>
            </div>
          </div>
        </div>
      </form>
      <ul className="navbar-nav navbar-right">
        <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope" /></a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right">
            <div className="dropdown-header">Messages
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>
            {/* <div className="dropdown-list-content dropdown-list-message">
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="img/avatar/avatar-1.png" className="rounded-circle" />
                  <div className="is-online" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Kusnaedi</b>
                  <p>Hello, Bro!</p>
                  <div className="time">10 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="img/avatar/avatar-2.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Dedik Sugiharto</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="img/avatar/avatar-3.png" className="rounded-circle" />
                  <div className="is-online" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Agung Ardiansyah</b>
                  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="img/avatar/avatar-4.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Ardian Rahardiansyah</b>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                  <div className="time">16 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-avatar">
                  <img alt="image" src="img/avatar/avatar-5.png" className="rounded-circle" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Alfa Zulkarnain</b>
                  <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                  <div className="time">Yesterday</div>
                </div>
              </a>
            </div> */}
            <div className="dropdown-footer text-center">
              <a href="#">View All <i className="fas fa-chevron-right" /></a>
            </div>
          </div>
        </li>
        <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></a>
          <div className="dropdown-menu dropdown-list dropdown-menu-right">
            <div className="dropdown-header">Notifications
              <div className="float-right">
                <a href="#">Mark All As Read</a>
              </div>
            </div>
            {/* <div className="dropdown-list-content dropdown-list-icons">
              <a href="#" className="dropdown-item dropdown-item-unread">
                <div className="dropdown-item-icon bg-primary text-white">
                  <i className="fas fa-code" />
                </div>
                <div className="dropdown-item-desc"> Template update is available now!
                  <div className="time text-primary">2 Min Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-info text-white">
                  <i className="far fa-user" />
                </div>
                <div className="dropdown-item-desc">
                  <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                  <div className="time">10 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-success text-white">
                  <i className="fas fa-check" />
                </div>
                <div className="dropdown-item-desc">
                  <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                  <div className="time">12 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-danger text-white">
                  <i className="fas fa-exclamation-triangle" />
                </div>
                <div className="dropdown-item-desc">
                  Low disk space. Let's clean it!
                  <div className="time">17 Hours Ago</div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="dropdown-item-icon bg-info text-white">
                  <i className="fas fa-bell" />
                </div>
                <div className="dropdown-item-desc">
                  Welcome to CodiePie template!
                  <div className="time">Yesterday</div>
                </div>
              </a>
            </div> */}
            <div className="dropdown-footer text-center">
              <a href="/send_notification">View All <i className="fas fa-chevron-right" /></a>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <img alt="image" src="img/avatar/avatar-1.png" className="rounded-circle mr-1" />
            <div className="d-sm-none d-lg-inline-block">Hi, Admin</div></a>
          <div className="dropdown-menu dropdown-menu-right">
            {/* <div className="dropdown-title">Logged in 5 min ago</div> */}
            <a href="/profile" className="dropdown-item has-icon"><i className="far fa-user" /> Profile</a>
            <a href="/dashboard" className="dropdown-item has-icon"><i className="fas fa-bolt" /> Dashboard</a>
            <a href="/settings" className="dropdown-item has-icon"><i className="fas fa-cog" /> Settings</a>
            <div className="dropdown-divider" />
            <a href="" onClick={() => logout()} className="dropdown-item has-icon text-danger"><i className="fas fa-sign-out-alt" /> Logout</a>
          </div>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav
