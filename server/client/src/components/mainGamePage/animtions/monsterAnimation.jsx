import React, {useEffect,useRef} from "react";
import { useState } from "react";
import style from "./monsterAnimation.module.css"
import {monster as monsterClass,boss,randomMonster} from "./assets/monsters/monster";
import { LinearProgress,Box,Typography  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { appBarTheme } from "./progressBarStyle";

const frameRate = 120


 function MonsterFigure(props){
  const { monster, index, moveMonster, setMonsterStatus, setMoveMonster, attackMonster, attackMode,setStage,heroDamage,thieve } = props
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

  useEffect(()=>{
    if(death || moveMonster !== index) return
    setMonsterStatus("run",index)
    setTimeout(() => {
      setMonsterStatus("run",index)
    },frameRate * 6 * 1)
    setTimeout(() => {
      setMonsterStatus("attack1",index)
    },frameRate * 6 * 2)
    setTimeout(() => {
      props.setHeroStatus("hurt")
      setMoveMonster(-1)
      setStage(0)
      setMonsterStatus("idle",index)
      heroDamage(monster.ATK)
    },frameRate * 6 * 3)
}, [ moveMonster])

function handleClick(){
  if(attackMode === "thieve") return thieve(index)
  attackMonster(index)
}

  const conStyle = [style[`index${index}`]]
  if(moveMonster === index && !death) {
    conStyle.push(style[`move${moveMonster}`])
  }

  return (
      <div className={conStyle.join(" ")}>
        <div className={style.barCon}>
          <ThemeProvider theme={appBarTheme} >
            <Typography >
              {`${monster.HP<=0?0:monster.HP}/${monster.maxHealth}`}
            </Typography>
            <LinearProgress value={((monster.HP * 100) / monster.maxHealth)} variant="determinate"/>
          </ThemeProvider>
        </div>
        <div className={[style.imgCon,(attackMode !== "none" && !death)?style.imgHover:""].join(" ")}
         onClick={() => handleClick()}>
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