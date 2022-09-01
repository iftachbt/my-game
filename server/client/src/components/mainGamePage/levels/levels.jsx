import React from "react";
import LevelBackground from "./level.BG/level.BG";


function Levels(props){

  const level = props.componentLVL

  const BGlevel = () =>{
    let calcultor = level.toString().slice(-1)
    if(calcultor === "0") return "5"
    if(calcultor > 5) calcultor = calcultor-5
    return calcultor.toString()
  }
   return(
      <div>
        <LevelBackground 
          BGlevel={BGlevel()}
          componentLVL={level}
          setComponentLVL={props.setComponentLVL}
        />
      </div>
      )
}

export default Levels
