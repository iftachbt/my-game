import React, {useEffect} from "react";
import { useState } from "react";
import style from "./heroAnimation.module.css"

const frameRate = 120

 function HeroFigure(props){
  const { attackMode, moveHero, setAnimeStatus, setMonsterStatus, monsterDamage, setMoveHero, setAttackMode, animeStatus } = props
  const [currentIndex,setCurrentIndex]=useState(0)
  const [death,setDeath]=useState(0)
  const anime = props.anime[props.animeStatus]
  
  useEffect(()=>{
      setTimeout(() => {
        if(animeStatus === "death" && currentIndex >= anime.frames){
          return setDeath(death + 1)
        }
        if(animeStatus !== "idle" && currentIndex >= anime.frames){
          setAnimeStatus("idle")
        }
        setCurrentIndex(currentIndex >= anime.frames ? 0 : currentIndex + 1)
      },frameRate)
  }, [ currentIndex, death])

  useEffect(()=>{
    if(!moveHero) return
    setAnimeStatus("run")
    setTimeout(() => {
      setAnimeStatus("run")
    },frameRate * 6 * 1)
    setTimeout(() => {
      setAnimeStatus("attack1")
    },frameRate * 6 * 2)
    setTimeout(() => {
      setMonsterStatus("hurt")
      monsterDamage()
    },frameRate * 6 * 3)
    setTimeout(() => {
      setMoveHero(false)
      setAnimeStatus("idle")
      setAttackMode("none")
    },frameRate * 6 * 4)
}, [ moveHero])

  const conStyle = [style.con]
  if(moveHero) conStyle.push(style[`move${moveHero}`])

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