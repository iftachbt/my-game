import React from "react";
import style from "./background.module.css"


function LevelBackground(props){

  const backgroundStyle = () => {
    if(props.isStore) return style.store
    if(props.BGlevel === "1") return style.backgroundImage_1
    if(props.BGlevel === "2") return style.backgroundImage_2
    if(props.BGlevel === "3") return style.backgroundImage_3
    if(props.BGlevel === "4") return style.backgroundImage_4
    return style.backgroundImage_2
  }

 return(
    <div>
      <div className={[style.background,backgroundStyle()].join(" ")}></div>
    </div>
  )
}
export default LevelBackground
