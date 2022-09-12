import React, {useState,useEffect} from "react";
import style from "./actionsBar.module.css";


function ActionsBar(props){
  const {attackAllMonsters,setAttackMode} = props
  
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
            style={{pointerEvents: props.isActive?"":"none"}}
            onClick={() => handleAttack(action)}
            className={style.actionBox}
            ><h1>{action}</h1></div>
          )
        })}
      </div>
    </div>
    )
}

export default ActionsBar
