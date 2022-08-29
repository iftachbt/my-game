import React from "react";
import { useState } from "react";
import style from "./createCharacter.module.css"

export function SelectClass(props){

    function handleClick(){
        props.setRace(props.value)
    }
    function conponent(){
      if(props.race===props.value)return (
        <div>
          <div className={style.charBox_select} onClick={handleClick} key={props.id}></div>
          <div className={style.charBox_label}>{props.value}</div>
        </div>
          )
      return (
      <div>
        <div className={style.charBox} onClick={handleClick} key={props.id}></div>
        <div className={style.charBox_label}>{props.value}</div>
      </div>
      )
    }

    if(props.value==="human")return <div className={style.human}>{conponent()}</div>
    
    if(props.value==="dragonborn")return <div className={style.dragonborn}>{conponent()}</div>

    if(props.value==="elf")return <div className={style.elf}>{conponent()}</div>

    return <div className={style.dwarf}>{conponent()}</div>
}