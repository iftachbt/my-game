import React from "react";
import { useState } from "react";
import style from "./createCharacter.module.css"
import ProfileImage from "../profileImage/profileImage";

export function SelectClass(props){

    function handleClick(){
        props.setRace(props.value)
    }
    function conponent(){
      return (
      <div>
        <div className={props.race===props.value?style.charBox_select:style.charBox} onClick={handleClick} key={props.id}></div>
        <div className={style.charBox_label}>{props.value}</div>
      </div>
      )
    }
    return (
      <ProfileImage 
        race={props.value}
        conponent={conponent()}
      />
      )
    
}