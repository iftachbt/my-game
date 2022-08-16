import React, { useState,useEffect } from "react";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Header from "../header/header";
import SignUp from "../signup/signup";
import LogIn from "../login/login";
import UserProflie from "../user/user";
import CreateCharacter from "../createCharacter/createCharacter";
import MainGamePage from "../mainGamePage/mainGame";
import HomePage from "../homePage/homePage";
import StartPage from "../startPage/startPage";
import "./master.css"
import { fetchUser } from "../../actions/user";


function Master(){
  const [user, setUser] = useState(false)

  const navigate = useNavigate();
  
    useEffect(() => {
      fetchUserHandler()  
  },[])
  
  const fetchUserHandler = async () => {
    if(!user){
      const user_ = await fetchUser()
      if(!user_ || user_ === "") navigate("/")
      else{
        setUser(user_)
      }
    }
  }
    
  return(
    <div>
        <Header user={user} />
        <Routes>
            <Route exact path="/" element={
            <HomePage 
              setUser ={setUser}
              user ={user}
              />}
             />
            <Route path="/login" element={
            <LogIn 
              setUser ={setUser} 
              user ={user} />}
             />
            <Route path="/userProflie" element={
            <UserProflie 
              setUser ={setUser} 
              user ={user} />}
             />
            <Route path="/sigup" element={
            <SignUp 
              setUser ={setUser}
              user ={user}/>}
             />
            <Route path="/startPage" element={
            <StartPage 
              user={user}
             />} />
            <Route path="/createCharacter" element={
            <CreateCharacter 
              user={user}
             />} />
            <Route path="/mainGame" element={
            <MainGamePage 
              user={user}
             />} />
        </Routes>
    </div>
    )
}

export default Master
