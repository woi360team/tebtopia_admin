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
     <Route path='/profile' element={login ?<Profile />: <Login />}></Route>
     <Route path='/settings' element={login ?<Settings />: <Login />}></Route>
     <Route path='/forgot' element={<Forgot_password /> }></Route>
     <Route path='/logout' element={<Logout />}></Route>
     <Route path='/dashboard' element={login ?<Dashboard />: <Login />}></Route>
     <Route path='/users' element={login ?<Users />: <Login />}></Route>
     <Route path='/add_doctor' element={login ?<Add_doctor />: <Login />}></Route>
     <Route path='/add_hospital' element={login ?<Add_hospital />: <Login />}></Route>
     <Route path='/add_user' element={login ?<Add_user />: <Login />}></Route>
     <Route path='/anaytics_dashboard' element={login ?<Anaytics_dashboard />: <Login />}></Route>
     <Route path='/application_settings' element={login ?<Application_settings />: <Login />}></Route>
     <Route path='/appointment_settings' element={login ?<Appointment_settings />: <Login />}></Route>
     <Route path='/contact_support' element={login ?<Contact_support />: <Login />}></Route>
     <Route path='/doctor_settings' element={login ?<Doctor_settings />: <Login />}></Route>
     <Route path='/generate_report' element={login ?<Generate_report />: <Login />}></Route>
     <Route path='/hep_center' element={login ?<Hep_center />: <Login />}></Route>
     <Route path='/hospital_settings' element={login ?<Hospital_settings />: <Login />}></Route>
     <Route path='/manage_doctor' element={login ?<Manage_doctor />: <Login />}></Route>
     <Route path='/manage_hospita' element={login ?<Manage_hospita />: <Login />}></Route>
     <Route path='/manage_user' element={login ?<Manage_user />: <Login />}></Route>
     <Route path='/overview' element={login ?<Overview />: <Login />}></Route>
     <Route path='/role_permission' element={login ?<Role_permission />: <Login />}></Route>
     <Route path='/send_notification' element={login ?<Send_notification />: <Login />}></Route>
     <Route path='/statistic' element={login ?<Statistic />: <Login />}></Route>
     <Route path='/user_activity' element={login ?<User_activity />: <Login />}></Route>
     <Route path='/view_all_appointment' element={login ?<View_all_appointment />: <Login />}></Route>
     <Route path='/view_notification' element={login ?<View_notification />: <Login />}></Route>
    

    
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
