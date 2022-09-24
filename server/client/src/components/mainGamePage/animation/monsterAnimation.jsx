import React, {useEffect,useRef} from "react";
import { useState } from "react";
import style from "./monsterAnimation.module.css"
import {monster as monsterClass,boss,randomMonster} from "./assets/monsters/monster";
import { LinearProgress,Box,Typography  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { appBarTheme } from "./progressBarStyle";
import { sleep } from "../../utils";



 function MonsterFigure(props){
  const { frameRate,monster, index, moveMonster, setMonsterStatus, attackMonster, attackMode,thieve, onMonsterClick } = props
  const [monsterAnime,setMonsterAnime]=useState(monster.type === "regular"
  ?monsterClass(randomMonster(monster.type))
  :boss(randomMonster(monster.type))
  )
  const [currentIndex,setCurrentIndex]=useState(0)
  const [death,setDeath]=useState(0)
  const [status,seStatus]=useState("idle")
  const [changeStatus,setChangeStatus]=useState(false)

  const anime = monsterAnime[monster.status]
  
  useEffect(()=>{
      setTimeout(() => {
        if(changeStatus ){
          setCurrentIndex(0)
          setChangeStatus(false)
          return 
        }
        if(monster.status === "death" && currentIndex >= anime.frames){
          return setDeath(death + 1)
        }
        if(monster.status !== "idle" && currentIndex >= anime.frames){
          setMonsterStatus("idle",index)
        }
        setCurrentIndex(currentIndex >= anime.frames ? 0 : currentIndex + 1)
      },frameRate)
  }, [ currentIndex, death, changeStatus])

  useEffect(()=>{
    seStatus(monster.status)
    if(monster.status !== "idle")
      setChangeStatus(true)
  }, [ monster.status ])

  const conStyle = [style[`index${index}`]]
  if(moveMonster === index && !death) {
    conStyle.push(style[`move${moveMonster}`])
    conStyle.push(style[`speedx${frameRate}`])
  }

  return (
      <div className={conStyle.join(" ")}>
        <div className={style.barCon}>
          <ThemeProvider theme={appBarTheme} >
            <Typography >
              <span className={style.barConSpan}>{`${monster.HP<=0?0:monster.HP}/${monster.maxHealth}`}</span>
            </Typography>
            <LinearProgress value={((monster.HP * 100) / monster.maxHealth)} variant="determinate"/>
          </ThemeProvider>
        </div>
        <div className={[style.imgCon,(attackMode !== "none" && !death)?style.imgHover:""].join(" ")}
         onClick={() => onMonsterClick()}>
          <img src={anime.img}
            style={{
              width: 47.9 * (anime.frames + 1),
              height: 48,
              transform: `translateX(${currentIndex * -48}px)`,
            }}
          />
        </div>
      </div>
  );
}
export default MonsterFigure