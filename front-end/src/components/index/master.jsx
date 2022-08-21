import React, { useState,useEffect } from "react";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Header from "../header/header";
import SignUp from "../signup/signup";
import LogIn from "../login/login";
import CreateCharacter from "../createCharacter/createCharacter";
import MainGamePage from "../mainGamePage/mainGame";
import HomePage from "../homePage/homePage";
import Pause from "../../notes/pause/pause";
import StartPage from "../startPage/startPage";
import "./master.css"
import { fetchUser } from "../../actions/user";


function Master(){
  const [user, setUser] = useState(false)
  const [avatar, setAvatar] = useState(false)
  const [difficulty, setDifficulty] = useState("easy")
  const [location, setLocation] = useState(false)
  const [headerState, setHeaderState] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    if(location !== "mainGame") setHeaderState(false)
  },[location])

  useEffect(() => {
    fetchUserHandler()  
    // eslint-disable-next-line 
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
        <Header 
        user={user} 
        setUser={setUser} 
        location={location}
        setHeaderState={setHeaderState}
        />
        {headerState && <Pause 
        setHeaderState={setHeaderState}
        /> } 
        <Routes>
            <Route exact path="/" element={
            <HomePage 
              setUser ={setUser}
              user ={user}
              setLocation ={setLocation}
              />}
             />
            <Route path="/login" element={
            <LogIn 
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
              setLocation ={setLocation}
             />} />
            <Route path="/createCharacter" element={
            <CreateCharacter 
              user={user}
              setAvatar={setAvatar}
              setDifficulty={setDifficulty}
              difficulty={difficulty}
             />} />
            <Route path="/mainGame/*" element={
            <MainGamePage 
              user={user}
              setLocation ={setLocation}
              avatar ={avatar}
              headerState ={headerState}
             />} />
        </Routes>
    </div>
    )
}

export default Master
