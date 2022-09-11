import React, {useState,useEffect} from "react";
import style from "./actionsBar.module.css";


function ActionsBar(props){
  let target = props.selectedMonster+1
  return(
    <div>
    <div className={style.body}></div>
    <div className={style.actionContainer}>

      <div className={style.actionBox} onClick={() => props.setMoveHero(target)}>
        attack
        
      </div>
      <div className={style.actionBox}>

      </div>
      <div className={style.actionBox}>

      </div>
    </div>
    </div>
    )
}

export default ActionsBar
