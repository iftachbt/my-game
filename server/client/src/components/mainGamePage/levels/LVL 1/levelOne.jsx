import React from "react";
import style from "./levelOne.module.css"


function LevelOne(props){
  const handleNext=() => props.setComponentLVL(2)
 return(
    <div>
      <div className={style.background}></div>
      <button onClick={handleNext}>next</button>
    </div>
  )
}
export default LevelOne