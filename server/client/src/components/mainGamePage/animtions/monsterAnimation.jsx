import React, {useEffect} from "react";
import { useState } from "react";
import style from "./monsterAnimation.module.css"

const frameRate = 120

 function MonsterFigure(props){
  const [currentIndex,setCurrentIndex]=useState(0)
  const [death,setDeath]=useState(0)
  const anime = props.anime[props.monsterStatus]
  
  useEffect(()=>{
      setTimeout(() => {
        if(props.monsterStatus === "death" && currentIndex >= anime.frames){
          return setDeath(death + 1)
        }
        if(props.monsterStatus !== "idle" && currentIndex >= anime.frames){
          props.setAnimeStatus("idle")
        }
        setCurrentIndex(currentIndex >= anime.frames ? 0 : currentIndex + 1)
      },frameRate)
  }, [ currentIndex, death])

  useEffect(()=>{
    if(!props.moveMonster) return
    props.setMonsterStatus("run")
    setTimeout(() => {
      props.setMonsterStatus("run")
    },frameRate * 6 * 1)
    setTimeout(() => {
      props.setMonsterStatus("attack1")
    },frameRate * 6 * 2)
    setTimeout(() => {
      props.setMoveMonster(false)
      props.setMonsterStatus("idle")
    },frameRate * 6 * 3)
}, [ props.moveMonster])

  const conStyle = [style.con]
  if(props.moveMonster) conStyle.push(style[`move${props.moveMonster}`])

  return (
    <div>
      <div className={conStyle.join(" ")}>
        <div className={style.imgCon}>
          <img   src={anime.img}
            style={{
              width: 47.9 * (anime.frames + 1),
              height: 48,
              transform: `translateX(${currentIndex * -48}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default MonsterFigure