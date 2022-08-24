import React, { useState,useEffect } from "react";
import { fetchUser } from "../../actions/user";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import Header from "../header/header";
import SignUp from "../formFilling/signup/signup";
import LogIn from "../formFilling/login/Login";
import CreateCharacter from "../createCharacter/createCharacter";
import MainGamePage from "../mainGamePage/mainGame";
import HomePage from "../homePage/homePage";
import Pause from "../../notes/pause/pause";
import StartPage from "../startPage/startPage";
import BackgroundSound from "../../sounds/sound";
import "./master.css"
import audio from "./images/home-page-sound/Adventure-320bit.mp3";



function Master(){
  const [user, setUser] = useState(false)
  const [avatar, setAvatar] = useState({
    static: {},
    dynamic: {}
  })
  const [difficulty, setDifficulty] = useState("easy")
  const [location, setLocation] = useState(false)
  const [headerState, setHeaderState] = useState(false)
  const [isMute,setMute] = useState(true)
  const [countOnce,setCountOnce] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    if(location !== "mainGame") {
      setHeaderState(false)
    }
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
        <BackgroundSound 
          url={audio}
          isMute={isMute}
          setMute={setMute}
        />
        <Header 
          user={user} 
          setUser={setUser} 
          location={location}
          setHeaderState={setHeaderState}
          isMute={isMute}
          setMute={setMute}
        />
        {headerState && 
        <Pause 
          setHeaderState={setHeaderState}
          isMute={isMute}
          setMute={setMute}
        /> } 
        <Routes>
            <Route exact path="/" element={
            <HomePage 
              setUser ={setUser}
              user ={user}
              setLocation ={setLocation}
              isMute={isMute}
              setMute={setMute}
              countOnce={countOnce}
              setCountOnce={setCountOnce}
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
              avatar={avatar}
              setDifficulty={setDifficulty}
              difficulty={difficulty}
             />} />
            <Route path="/mainGame" element={
            <MainGamePage 
              user={user}
              setLocation ={setLocation}
              setAvatar={setAvatar}
              avatar={avatar}
              headerState ={headerState}
             />} />
        </Routes>
    </div>
    )
}

export default Master
