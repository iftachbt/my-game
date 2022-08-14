import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Header from "../header/header";
import SignUp from "../signup/signup";
import LogIn from "../login/login";
import HomePage from "../homePage/homePage";
import StartPage from "../startPage/startPage";
import "./master.css"


function Master(){
  const [userState, setUserState]=useState(false)
  const [auth, setAuth]=useState(false)

  console.log("res", userState);
  
    
  return(
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage auth={auth} />} />
            <Route path="/login" element={<LogIn 
            setUserState ={setUserState} 
            setAuth ={setAuth}
            auth ={auth} />} />
            <Route path="/sigup" element={<SignUp 
            setUserState ={setUserState}
            setAuth ={setAuth}/>} />
            <Route path="/startPage" element={<StartPage 
            userState={userState}
            auth={auth} />} />
        </Routes>
    </Router>
    )
}

export default Master
