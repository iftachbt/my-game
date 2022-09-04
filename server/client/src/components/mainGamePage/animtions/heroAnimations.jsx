import React, {useEffect} from "react";
import { useState } from "react";
import style from "./heroAnimation.module.css"

const frameRate = 120

 function HeroFigure(props){
  const [currentIndex,setCurrentIndex]=useState(0)
  const [death,setDeath]=useState(0)
  const anime = props.anime[props.animeStatus]
  
  useEffect(()=>{
      setTimeout(() => {
        if(props.animeStatus === "death" && currentIndex >= anime.frames){
          return setDeath(death + 1)
        }
        if(props.animeStatus !== "idle" && currentIndex >= anime.frames){
          props.setAnimeStatus("idle")
        }
        setCurrentIndex(currentIndex >= anime.frames ? 0 : currentIndex + 1)
      },frameRate)
  }, [ currentIndex, death])

  useEffect(()=>{
    if(!props.moveHero) return
    props.setAnimeStatus("run")
    setTimeout(() => {
      props.setAnimeStatus("run")
    },frameRate * 6 * 1)
    setTimeout(() => {
      props.setAnimeStatus("attack1")
      props.setMonsterStatus("hurt")
    },frameRate * 6 * 2)
    setTimeout(() => {
      props.setMoveHero(false)
      props.setAnimeStatus("idle")
      props.setMonsterStatus("idle")
    },frameRate * 6 * 3)
}, [ props.moveHero])

  const conStyle = [style.con]
  if(props.moveHero) conStyle.push(style[`move${props.moveHero}`])

  return (
    <div>
      <div className={conStyle.join(" ")}>
        <div className={style.imgCon}>
          <img   src={anime.img}
            style={{
              width: 48.1 * (anime.frames + 1),
              height: 48,
              transform: `translateX(${currentIndex * -48}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HeroFigure