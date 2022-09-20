import React, {useState,useEffect} from "react";
import Button from "../../buttons/buttons";
import style from "./gameOver.module.css";
import {  useNavigate } from "react-router-dom";
import {  deleteSession } from "../../../actions/gameSession/gameSession";



function GameOver(props){
  const { character } = props
  const navigate = useNavigate();

  async function endSessionHandler(){
    navigate("/menuPage")
    const del = await deleteSession(props.character.id)
  }

  return(
    <div className={style.body}>      
      <div className={style.formContainer}>
        <h1 className={style.h1}>GAME OVER</h1>
        <div className={style.middleContainer}>
        </div>
        <div className={style.bottomContainer}>
            <Button 
              text={"MENU"}
              handleClick={endSessionHandler}
            />
        </div>      
      </div>
    </div>
    )
}

export default GameOver