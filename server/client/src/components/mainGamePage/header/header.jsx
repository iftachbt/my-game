import React, {useState} from "react";
import ProfileImage from "../../profileImage/profileImage";
import  style  from "./header.module.css";

function Header(props){
  const {name,shield,level,ATK,HP,gold,maxHP,luck}=props.characterSession
  return(
    <div className={style.body}>
      <div className={style.profileImage}>
        <ProfileImage 
          race={props.character.race}
          size="tiny"
        />
      </div>
      <div>level: {level}</div>
      <div>shield: {shield}</div>
      <div>name: {name} </div>
      
      <div>ATK: {ATK}</div>
      <div>Health: {HP}/{maxHP}</div>
      <div>gold: {gold}</div>
    </div>
  )
}
export default Header