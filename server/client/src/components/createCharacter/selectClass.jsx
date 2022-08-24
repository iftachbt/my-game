import React from "react";
import style from "./createCharacter.module.css"

export function SelectClass(props){

    function handleClick(){
        props.setCharacter(preValue => ({...preValue, "race": props.value}))
    }
    return (
    <div className={style.charBox} onClick={handleClick} key={props.id}>
        <p>{props.value}</p>
    </div>
    )
}