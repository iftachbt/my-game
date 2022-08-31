import React from "react"
import style from "./buttons.module.css"

function Button(props){
  const {text,handleClick} =props
  const color = () => {
    if(props.color==="green")return style.green_btn_div
    if(props.color==="black")return style.black_btn_div
    return style.red_btn_div
  }
  
  return(
    <div  className={color()} onClick={handleClick} >
      <p className={style.p}>{text}</p>
      <div className={style.btn} ></div>
      </div>
  )
}
export default Button