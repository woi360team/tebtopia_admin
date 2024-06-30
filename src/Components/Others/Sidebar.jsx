import React,{useEffect,useState} from "react";
import axios from 'axios' 


function Sidebar() {
  const url = window.location.href;
  const pathname = window.location.pathname;
  return (
  
<div>
  {/* Start main left sidebar menu */}
  <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="/dashboard">TEBTOPIA</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="/dashboard">CP</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className=
            {(() => {
              if (pathname==="/dashboard") {
                return "dropdown active";
              } else if (pathname==="/overview") {
                return "dropdown active";
              }
              else if (pathname==="/statistic") {
                return "dropdown active";
              }
              else if (pathname==="/user_activity") {
                return "dropdown active";
              }
              else{
                return "dropdown";
              }
            })()}
         >
              <a href="/dashboard" className="nav-link has-dropdown"><i className="fas fa-fire" /><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/overview" ? "active" : "" }><a className="nav-link" href="/overview">Overview</a></li>
                <li className={ pathname==="/statistic" ? "active" : "" }><a className="nav-link" href="/statistic">Statistics</a></li>
                <li className={ pathname==="/user_activity" ? "active" : "" }><a className="nav-link" href="/user_activity">User Activity</a></li>
              </ul>
            </li>
            <li className="menu-header">Management</li>
            <li className={(() => {
              if (pathname==="/users") {
                return "dropdown active";
              } 
              else{
                return "dropdown";
              }
            })()}>
              <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span> Users Management</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/users" ? "active" : "" }><a className="nav-link" href='/users'>Users</a></li>
              </ul>
            </li>
            <li className={(() => {
              if (pathname==="/add_hospital") {
                return "dropdown active";
              } else if(pathname==="/manage_hospita")
                {
                  return "dropdown active";
                }
                else if(pathname==="/hospital_settings")
                  {
                    return "dropdown active";
                  }
              else{
                return "dropdown";
              }
            })()}>
              <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span> Hospital Management</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/add_hospital" ? "active" : "" }><a className="nav-link" href="/add_hospital">Add Hospital</a></li>
                <li className={ pathname==="/manage_hospita" ? "active" : "" }><a className="nav-link" href="/manage_hospita">Manage Hospital</a></li>
                <li className={ pathname==="/hospital_settings" ? "active" : "" }><a className="nav-link" href="/hospital_settings">Hospital Settings</a></li>
              </ul>
            </li>
            <li className=
            {(() => {
              if (pathname==="/add_doctor") {
                return "dropdown active";
              } else if(pathname==="/manage_doctor")
                {
                  return "dropdown active";
                }
                else if(pathname==="/doctor_settings")
                  {
                    return "dropdown active";
                  }
              else{
                return "dropdown";
              }
            })()}>
              <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span> Doctors Management</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/add_doctor" ? "active" : "" }><a className="nav-link" href="/add_doctor">Add Doctor</a></li>
                <li className={ pathname==="/manage_doctor" ? "active" : "" }><a className="nav-link" href="/manage_doctor">Manage Doctor</a></li>
                <li className={ pathname==="/doctor_settings" ? "active" : "" }><a className="nav-link" href="/doctor_settings">Doctor Settings</a></li>
              </ul>
            </li>
            <li className=
            {(() => {
              if (pathname==="/add_user") {
                return "dropdown active";
              } else if(pathname==="/manage_user")
                {
                  return "dropdown active";
                }
              else{
                return "dropdown";
              }
            })()}>
              <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span> User Management</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/add_user" ? "active" : "" }><a className="nav-link" href="/add_user">Add User</a></li>
                <li className={ pathname==="/manage_user" ? "active" : "" }><a className="nav-link" href="/manage_user">Manage User</a></li>
              </ul>
            </li>
            <li className=
             {(() => {
              if (pathname==="/view_all_appointment") {
                return "dropdown active";
              } else if(pathname==="/appointment_settings")
                {
                  return "dropdown active";
                }
              else{
                return "dropdown";
              }
            })()}>
              <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span> Appointments Management</span></a>
              <ul className="dropdown-menu">
                <li className={ pathname==="/view_all_appointment" ? "active" : "" }><a className="nav-link" href="/view_all_appointment">View All Appointments</a></li>
                <li className={ pathname==="/appointment_settings" ? "active" : "" }><a className="nav-link" href="/appointment_settings">Appointment Settings</a></li>
              </ul>
            </li>
            <li className="menu-header">Report &amp; Anaytics</li>
            <li className= { pathname==="/generate_report" ? "dropdown active" : "dropdown" }>
              <a href="/generate_report" className="nav-link"><i className="fas fa-th-large" /> <span>Generate Report</span></a>
            </li>
            <li className={ pathname==="/anaytics_dashboard" ? "dropdown active" : "dropdown" }>
              <a href="/anaytics_dashboard" className="nav-link"><i className="far fa-file-alt" /> <span>Analytics Dashboard</span></a>
            </li>
            <li className="menu-header">Settings</li>
            <li className={ pathname==="/application_settings" ? "dropdown active" : "dropdown" }>
              <a href="/application_settings" className="nav-link"><i className="far fa-user" /> <span>Application Settings</span></a>
            </li>
            <li className={ pathname==="/role_permission" ? "dropdown active" : "dropdown" }>
              <a href="/role_permission" className="nav-link"><i className="far fa-user" /> <span>Roles &amp; Permission</span></a>
            </li>
            <li className="menu-header">Notification</li>
            <li className={ pathname==="/view_notification" ? "dropdown active" : "dropdown" }>
              <a href="/view_notification" className="nav-link"><i className="far fa-user" /> <span>View Notification</span></a>
            </li>
            <li className={ pathname==="/send_notification" ? "dropdown active" : "dropdown" }>
              <a href="/send_notification" className="nav-link"><i className="far fa-user" /> <span>Send Notification</span></a>
            </li>
            <li className="menu-header">Support</li>
            <li className={ pathname==="/hep_center" ? "dropdown active" : "dropdown" }>
              <a href="/hep_center" className="nav-link"><i className="far fa-user" /> <span>Help Center</span></a>
            </li>
            <li className={ pathname==="/contact_support" ? "dropdown active" : "dropdown" }>
              <a href="/contact_support" className="nav-link"><i className="far fa-user" /> <span>Contact Support</span></a>
            </li>
          </ul>
        </aside>
      </div>
</div>
  )
}

export default Sidebar
