import { style } from "@mui/system";
import React, {useState} from "react";

function Header(props){
  return(
    <div className={style.body}>
      <div>name</div>
      <div>race</div>
      <div>shield</div>
      <div>level</div>
      <div>ATK</div>
      <div>Health</div>
      <div>gold</div>
    </div>
  )
}
export default Header