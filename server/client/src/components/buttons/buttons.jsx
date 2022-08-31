import React from "react"
import style from "./buttons.module.css"

function Button(props){
  const {text,handleClick,color} =props

  return(
    <div  className={color ?style.green_btn_div :style.red_btn_div} onClick={handleClick} >
        <p className={style.p}>{text}</p>
      <div className={style.btn} ></div>
      </div>
  )
}
export default Button