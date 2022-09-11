import React, {useEffect} from "react";
import { useState } from "react";
import style from "./monsterAnimation.module.css"
import {monster,boss,randomMonster} from "./assets/monsters/monster";

const frameRate = 120


 function MonsterFigure(props){
  const [monsterAnime,setMonsterAnime]=useState(props.monster.type === "regular"
  ?monster(randomMonster(props.monster.type))
  :boss(randomMonster(props.monster.type))
  )
  const [currentIndex,setCurrentIndex]=useState(0)
  const [death,setDeath]=useState(0)
  const anime = monsterAnime[props.monsterStatus]
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

function handleClick(){
  props.setSelectedMonster(props.index)
}

  const conStyle = [style[`index${props.index}`]]
  if(props.moveMonster) conStyle.push(style[`move${props.moveMonster}`])

  return (
    <div>
      <div className={conStyle.join(" ")}>
        <div className={props.selectedMonster === props.index?style.imgCon_selected :style.imgCon} onClick={handleClick}>
          <img   src={anime.img}
            style={{
              width: 47.9 * (anime.frames + 1),
              height: 48,
              transform: `translateX(${currentIndex * -48}px)`,
            }}
            usemap="#image_map"
          />
          <map name="image_map">
            <area alt="" title="" href="" coords="4,13,22,47" shape="rect" />
            <area alt="" title="" href="" coords="52,23,70,45" shape="rect" />
            <area alt="" title="" href="" coords="99,17,122,35" shape="rect" />
            <area alt="" title="" href="" coords="147,6,170,19" shape="rect" />
            <area alt="" title="" href="" coords="197,-9,218,2" shape="rect" />
            <area alt="" title="" href="" coords="245,-25,267,-14" shape="rect" />
          </map>  
        </div>
      </div>
    </div>
  );
}
export default MonsterFigure