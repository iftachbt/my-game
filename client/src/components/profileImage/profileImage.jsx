import React from "react";
import style from "./profile.module.css"

function ProfileImage(props){
  const race = () => {
    if(props.race==="human")return style.human
    if(props.race==="dragonborn")return style.dragonborn
    if(props.race==="elf")return style.elf
    return style.dwarf
  }
  const classRace = [props.size === "tiny" ?style.tiny_box :style.box,race()]
  
  return <div className={classRace.join(" ")}>{props.conponent}</div>
}
export default ProfileImage