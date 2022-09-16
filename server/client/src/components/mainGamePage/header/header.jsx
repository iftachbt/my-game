import { MenuItem, Select } from "@mui/material";
import React, {useState} from "react";
import ProfileImage from "../../profileImage/profileImage";
import  style  from "./header.module.css";

function Header(props){
  const {name,shield,level,ATK,HP,gold,maxHP,luck,frameRate}=props.characterSession
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
      <span className={style.speed}>
        <Select
          id="speed"
          value={frameRate}
          label="speed"
          defaultValue={120}
          onChange={(e) => {props.setFrameRate(+e.target.value)}}
        >
          <MenuItem value={120}>X1</MenuItem>
          <MenuItem value={90}>X1.5</MenuItem>
          <MenuItem value={60}>X2</MenuItem>
          <MenuItem value={30}>X4</MenuItem>
        </Select>
      </span>
    </div>
  )
}
export default Header