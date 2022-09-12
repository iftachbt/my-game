import React, {useState,useEffect} from "react";
import Button from "../../buttons/buttons";
import style from "./gameOver.module.css";


function GameOver(props){
  return(
    <div className={style.body}>      
      <div className={style.formContainer}>
        <h1 className={style.h1}>GAME OVER</h1>
        <div className={style.middleContainer}>
        </div>
        <div className={style.bottomContainer}>
            <Button 
              text={"RESTART"}
            />
            <Button 
              text={"MENU"}
            />
        </div>      
      </div>
    </div>
    )
}

export default GameOver