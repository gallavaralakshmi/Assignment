
import { useState } from 'react';
import './App.css';
import Alluser from './components/AllUsers/Alluser';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Employee from './components/Roles/Employee/Employee';

function App() {

  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/mainpage' element={<MainPage/>}/>
        <Route path='/employees' element={<Employee/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
