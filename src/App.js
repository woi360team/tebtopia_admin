import logo from './logo.svg';
import './App.css';
import Login from './Components/Pages/Login.jsx'
import Dashboard from './Components/Pages/Dashboard.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Components/Pages/Users.jsx';
import Add_doctor from './Components/Pages/Add_doctor.jsx'
import Add_hospital from './Components/Pages/Add_hospital.jsx'
import Add_user from './Components/Pages/Add_user.jsx'
import Anaytics_dashboard from './Components/Pages/Anaytics_dashboard.jsx'
import Application_settings from './Components/Pages/Application_settings.jsx'
import Appointment_settings from './Components/Pages/Appointment_settings.jsx'
import Contact_support from './Components/Pages/Contact_support.jsx'
import Doctor_settings from './Components/Pages/Doctor_settings.jsx'
import Generate_report from './Components/Pages/Generate_report.jsx'
import Hep_center from './Components/Pages/Hep_center.jsx'
import Hospital_settings from './Components/Pages/Hospital_settings.jsx'
import Manage_doctor from './Components/Pages/Manage_doctor.jsx'
import Manage_hospita from './Components/Pages/Manage_hospita.jsx'
import Manage_user from './Components/Pages/Manage_user.jsx'
import Overview from './Components/Pages/Overview.jsx'
import Role_permission from './Components/Pages/Role_permission.jsx'
import Send_notification from './Components/Pages/Send_notification.jsx'
import Statistic from './Components/Pages/Statistic.jsx'
import User_activity from './Components/Pages/User_activity.jsx'
import View_all_appointment from './Components/Pages/View_all_appointment.jsx'
import View_notification from './Components/Pages/View_notification.jsx'
import Logout from './Components/Others/Logout.jsx'
import Forgot_password from './Components/Pages/Forgot_password.jsx'
import Register from './Components/Pages/Register.jsx'
import Profile  from './Components/Pages/Profile.jsx';
import Settings from './Components/Pages/Settings.jsx';


function App() {
 const login=  window.localStorage.getItem("logged");
  return (
    
    <BrowserRouter>
    <Routes>
     <Route path='/' element={login ? <Dashboard /> : <Login />}></Route>
     <Route path='/register' element={<Register />}></Route>
     <Route path='/profile' element={<Profile />}></Route>
     <Route path='/settings' element={<Settings />}></Route>
     <Route path='/forgot' element={<Forgot_password />}></Route>
     <Route path='/logout' element={<Logout />}></Route>
     <Route path='/dashboard' element={<Dashboard />}></Route>
     <Route path='/users' element={<Users />}></Route>
     <Route path='/add_doctor' element={<Add_doctor />}></Route>
     <Route path='/add_hospital' element={<Add_hospital />}></Route>
     <Route path='/add_user' element={<Add_user />}></Route>
     <Route path='/anaytics_dashboard' element={<Anaytics_dashboard />}></Route>
     <Route path='/application_settings' element={<Application_settings />}></Route>
     <Route path='/appointment_settings' element={<Appointment_settings />}></Route>
     <Route path='/contact_support' element={<Contact_support />}></Route>
     <Route path='/doctor_settings' element={<Doctor_settings />}></Route>
     <Route path='/generate_report' element={<Generate_report />}></Route>
     <Route path='/hep_center' element={<Hep_center />}></Route>
     <Route path='/hospital_settings' element={<Hospital_settings />}></Route>
     <Route path='/manage_doctor' element={<Manage_doctor />}></Route>
     <Route path='/manage_hospita' element={<Manage_hospita />}></Route>
     <Route path='/manage_user' element={<Manage_user />}></Route>
     <Route path='/overview' element={<Overview />}></Route>
     <Route path='/role_permission' element={<Role_permission />}></Route>
     <Route path='/send_notification' element={<Send_notification />}></Route>
     <Route path='/statistic' element={<Statistic />}></Route>
     <Route path='/user_activity' element={<User_activity />}></Route>
     <Route path='/view_all_appointment' element={<View_all_appointment />}></Route>
     <Route path='/view_notification' element={<View_notification />}></Route>
    

    
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
