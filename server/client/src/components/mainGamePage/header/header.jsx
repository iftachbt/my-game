import React, {useState} from "react";
import ProfileImage from "../../profileImage/profileImage";
import  style  from "./header.module.css";

function Header(props){
  const {name,shield,level,ATK,HP,gold,maxHP,luck}=props.characterSession
  return(
    <div className={style.body}>
      <div>name: {name} </div>
      <div>shield: {shield}</div>
      <div>level: {level}</div>
      <div>
        <ProfileImage 
          race={props.character.race}
          size="tiny"
        />
      </div>
      <div>ATK: {ATK}</div>
      <div>Health: {HP}/{maxHP}</div>
      <div>gold: {gold}</div>
      <div>lucky: {luck}</div>
    </div>
  )
}
export default Header