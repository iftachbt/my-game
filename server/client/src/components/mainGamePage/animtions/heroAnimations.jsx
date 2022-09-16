import React, {useEffect} from "react";
import { useState } from "react";
import { sleep } from "../../utils";
import style from "./heroAnimation.module.css"


 function HeroFigure(props){
  const { frameRate, moveHero, setAnimeStatus, animeStatus } = props
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

  const conStyle = [style.con]
  if(moveHero && !death) {
    conStyle.push(style[`move${moveHero}`])
    conStyle.push(style[`speedx${frameRate}`])
  }

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