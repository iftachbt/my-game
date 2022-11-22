import React from "react";
import style from "./menuPage.module.css"
import ProfileImage from "../profileImage/profileImage"

 function SessionInfo(props){
  return <div className={style.sessionInfo}>
            <div >
              <div className={style.mainInfo}>
              <h1 className={style.infoH1}>{props.res.name}</h1>
              <ProfileImage 
              race={props.character.race}
              size="tiny"
              />
            </div>
            <div className={style.infoTop}>
                <div >
                level: {props.res.level}
                </div>
                <div>
                difficulty: {props.res.difficulty}
                </div>
            </div>
            <div className={style.infoMiddle}>
              <div className={style.infoVal}>
              ATK: {props.res.ATK}
              </div>
              <div className={style.infoVal}>
              HP: {props.res.HP}/{props.res.maxHP}
              </div>
              <div className={style.infoVal}>
              shield: {props.res.shield}
              </div>
              <div className={style.infoVal}>
              gold: {props.res.gold}
              </div>
            </div>
            <div className={style.infoBottom}>
                <div>
                death: {props.character.death}
                </div>
                <div>
                kills: {props.character.kills}
                </div>
            </div>
            </div>
        </div>
}
export default SessionInfo