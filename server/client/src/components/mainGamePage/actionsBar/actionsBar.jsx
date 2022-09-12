import React, {useState,useEffect} from "react";
import style from "./actionsBar.module.css";


function ActionsBar(props){
  const {attackAllMonsters,setAttackMode,skillOneCount,isActive} = props

  // if(skillOneCount>0)
  function handleStyle(action){
    if(action === "attack") return style["actionBox"]
    if(skillOneCount > 0) return style["gray"]
    return style["actionBox"]
  }
  function handleH1(action){
    if(action === "attack") return action
    if(skillOneCount > 0) return Math.floor(skillOneCount/2)
    return action
  }

  function handleAttack(action){
    if(action === "attackAll") return attackAllMonsters()
    setAttackMode(action)
  }
  return(
    <div>
      <div className={style.actionContainer}>
        {["attack","attackAll"].map((action) => {
          return (
            <div 
            style={{pointerEvents: isActive?"":"none"}}
            onClick={() => handleAttack(action)}
            className={[handleStyle(action),style[action]].join(" ")}
            ><h1>{handleH1(action)}</h1></div>
          )
        })}
      </div>
    </div>
    )
}

export default ActionsBar
