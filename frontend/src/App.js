
import { useState } from 'react';
import './App.css';
import Alluser from './components/AllUsers/Alluser';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Employee from './components/Roles/Employee/Employee';
import Addgoal from './components/Goals/Addgoal';
import Admin from './components/Roles/Admin/Admin';
import SAdmin from './components/Roles/SAdmin/SAdmin';
import ViewGoals from './components/Goals/ViewGoals';
import ViewAdmins from './components/Goals/ViewAdmins';
import Adminsadmin from './components/Roles/AdminSAdmin/Adminsadmin';
import Updategoal from './components/Goals/Updategoal';
import UpdateStatus from './components/Goals/UpdateStatus';

function App() {

  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/mainpage' element={<MainPage/>}/>
        <Route path='/employees' element={<Employee/>}/>
        <Route path='/admins' element={<Admin/>}/>
        <Route path='/superadmin' element={<SAdmin/>}/>
        <Route path='/addgoal' element={<Addgoal/>}/>
        <Route path='/updategoal' element={<Updategoal/>}/>
        <Route path='/updatestatus' element={<UpdateStatus/>}/>
        <Route path='/viewgoals' element={<ViewGoals/>}/>
        <Route path='/viewadmins' element={<ViewAdmins/>}/>
        <Route path='/adminsadmin' element={<Adminsadmin/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
