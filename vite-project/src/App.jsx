import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./HomePage";
import {useState} from 'react'
function App() {
 const [userData, setUserData]=useState()
  return (
    
      <div>
       <Routes>
          <Route path="/home" element={<Home userData={userData} />} />
          <Route path="/" element={<LoginPage setUserData={setUserData} />} />
       </Routes>
      </div>
   
  );
}

export default App;




