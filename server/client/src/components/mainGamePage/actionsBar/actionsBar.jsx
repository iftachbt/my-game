import React, {useState,useEffect} from "react";
import style from "./actionsBar.module.css";


function ActionsBar(props){
  return(
    <div>
      <div className={style.actionContainer}>
        {["attack"].map((action) => {
          return (
            <div 
            style={{pointerEvents: props.isActive?"":"none"}}
            onClick={() => props.setAttackMode(action)}
            className={style.actionBox}
            >{action}</div>
          )
        })}
      </div>
    </div>
    )
}

export default ActionsBar
