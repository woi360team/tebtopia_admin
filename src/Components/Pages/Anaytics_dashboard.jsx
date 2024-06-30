import React,{useEffect,useState,Component } from "react";
import axios from 'axios' 
import Header from "../Others/Header";
import Sidebar from "../Others/Sidebar";
import Nav from "../Others/Nav";
import Footer from "../Others/Footer";


function Analytics_dashboard() {
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
      <h2 className="section-title">Dashboard</h2>
  
    </div>




        </section>
      </div>
  <Footer />
    </div>
  </div>
</div>

  )
}

export default Analytics_dashboard
