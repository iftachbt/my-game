import React, { useState,useEffect } from "react";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import LevelOne from "./levels/LVL 1/levelOne";
import LevelTwo from "./levels/LVL 2/levelTwo";
import LevelThree from "./levels/LVL 3/levelThree";
import LevelFour from "./levels/LVL 4/levelFour";
import LevelFive from "./levels/LVL 5/levelFive";

function MainGamePage(){

  const navigate = useNavigate();
  
    
  return(
    <div>
        <Routes>
            <Route exact path="/" element={
            <LevelOne />} />
            <Route path="/LevelTwo" element={
            <LevelTwo />} />
            <Route path="/LevelThree" element={
            <LevelThree />} />
            <Route path="/LevelFour" element={
            <LevelFour />} />
            <Route path="/LevelFive" element={
            <LevelFive />} />
        </Routes>
    </div>
    )
}

export default MainGamePage
