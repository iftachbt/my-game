import React from "react";
import {
    // Routes,
    // Route,
    useNavigate
  } from "react-router-dom";
import LevelOne from "./levels/LVL 1/levelOne";
// import LevelTwo from "./levels/LVL 2/levelTwo";
// import LevelThree from "./levels/LVL 3/levelThree";
// import LevelFour from "./levels/LVL 4/levelFour";
// import LevelFive from "./levels/LVL 5/levelFive";

function MainGamePage(props){
  
  const navigate = useNavigate();

  props.setLocation("mainGame")
  if(!props.avatar) navigate('/startPage')
  
  return(
    <div>
      <LevelOne />
    </div>
    )
}

export default MainGamePage
