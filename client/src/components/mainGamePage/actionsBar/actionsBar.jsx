import React, {useState,useEffect} from "react";
import style from "./actionsBar.module.css";


function ActionsBar(props){
  const {attackAllMonsters,setAttackMode,attackAllTimeOut,isActive,thieveTimeOut} = props


  function handleStyle(action){
    if(action === "attack") return 
    if(action === "attackAll" && attackAllTimeOut > 0) return style["gray"]
    if(action === "thieve" && thieveTimeOut > 0) return style["gray"]
    return 
  }
  function handleH1(action){
    if(action === "attack") return action
    if(action === "attackAll" && attackAllTimeOut > 0) return Math.floor(attackAllTimeOut/2)
    if(action === "thieve" && thieveTimeOut > 0) return Math.floor(thieveTimeOut/2)
    return action
  }

  function handleAttack(action){
    if(action === "attackAll") return attackAllMonsters()
    setAttackMode(action)
  }
  return(
    <div>
      <div className={style.actionContainer}>
        {["attack","attackAll","thieve"].map((action) => {
          handleStyle(action)
          return (
            <div 
            style={{pointerEvents: isActive?"":"none"}}
            onClick={() => handleAttack(action)}
            className={[style.actionBox,handleStyle(action),style[action]].join(" ")}
            ><h1>{handleH1(action)}</h1></div>
          )
        })}
      </div>
    </div>
    )
}

export default ActionsBar
