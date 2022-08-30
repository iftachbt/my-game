import React from "react";
import style from "./startPage.module.css"

 function SessionInfo(props){
  return <div className={style.sessionInfo}>
            <div >
            <h1>{props.res.name}</h1>
            <div>
                <div >
                level: {props.res.level}
                </div>
                <div>
                difficulty: {props.res.difficulty}
                </div>
            </div>
                <div>
                ATK: {props.res.ATK}
                </div>
                <div>
                HP: {props.res.HP}
                </div>
                <div>
                shield: {props.res.shield}
                </div>
                <div>
                gold: {props.res.gold}
                </div>
            <div>
                <div>
                death: {props.res.deaths}
                </div>
                <div>
                kills: {props.res.kills}
                </div>
            </div>
            </div>
        </div>
}
export default SessionInfo