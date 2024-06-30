import React,{useEffect,useState} from "react";
import axios from 'axios' 


function Header() {
  const url = window.location.href;
  const pathname = window.location.pathname;
  return (
  
<div>
<div className="section-header">

{(() => {
        if (pathname==="/dashboard") {
          return <h1>Dashboard</h1>;
        } else if (pathname==="/add_doctor") {
          return <h1>Add Doctor</h1>;
        }
        else if (pathname==="/users") {
          return <h1>Users</h1>;
        }
        else if (pathname==="/add_hospital") {
          return <h1>Add Hospital</h1>;
        }
        else if (pathname==="/add_user") {
          return <h1>Add Users</h1>;
        }
        else if (pathname==="/anaytics_dashboard") {
          return <h1>Anaytics Dashboard</h1>;
        }
        else if (pathname==="/application_settings") {
          return <h1>Application Settings</h1>;
        }
        else if (pathname==="/appointment_settings") {
          return <h1>Appointment Settings</h1>;
        }
        else if (pathname==="/contact_support") {
          return <h1>Contact Support</h1>;
        }
        else if (pathname==="/doctor_settings") {
          return <h1>Doctor Settings</h1>;
        }
        else if (pathname==="/generate_report") {
          return <h1>Generate Report</h1>;
        }
        else if (pathname==="/hep_center") {
          return <h1>Help Center</h1>;
        }
        else if (pathname==="/hospital_settings") {
          return <h1>Hospital Settings</h1>;
        }
        else if (pathname==="/manage_doctor") {
          return <h1>Manage Doctor</h1>;
        }
        else if (pathname==="/manage_hospita") {
          return <h1>Manage Hospital</h1>;
        }
        else if (pathname==="/manage_user") {
          return <h1>Manage User</h1>;
        }
        else if (pathname==="/overview") {
          return <h1>Overview</h1>;
        }
        else if (pathname==="/role_permission") {
          return <h1>Role Permission</h1>;
        }
        else if (pathname==="/send_notification") {
          return <h1>Send Notification</h1>;
        }
        else if (pathname==="/statistic") {
          return <h1>Statistic</h1>;
        }
        else if (pathname==="/user_activity") {
          return <h1>User Activity</h1>;
        }
        else if (pathname==="/view_all_appointment") {
          return <h1>View All Appointment</h1>;
        }
        else if (pathname==="/view_notification") {
          return <h1>View Notification</h1>;
        }
        else if (pathname==="/profile") {
          return <h1>Profile</h1>;
        }
        else if (pathname==="/settings") {
          return <h1>Settings</h1>;
        }

      })()}
            
          </div>
</div>
  )
}

export default Header
