import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Levels from "./levels/levels";
import Header from "./header/header";
import HeroFigure from "./animtions/heroAnimations";
import MonsterFigure from "./animtions/monsterAnimation";
import { useEffect } from "react";
import hero from "./animtions/assets/heros/hero";
import ActionsBar from "./actionsBar/actionsBar";
import { levelConstructor } from "./gameConstructor/gameConstructor";
import style from "./mainGame.module.css"
import GameOver from "./gameOver/gameOver";
import Shop from "./shop/shop";
import { updateCharacter } from "../../actions/character/character";
import { sleep } from "../utils";


const HERO_ATTACK = 0;
const MONSTER_ATTACK = 1;

function MainGamePage(props){
  const [heroInfo,setHeroInfo ]= useState(props.characterSession||"")
  const [heroAnimeStatus,setHeroAnimeStatus ]= useState("idle")
  const [heroAnime,setHeroAnime ]= useState(hero(props.character.race))
  const [monsterArray,setMonsterArray ]= useState(levelConstructor(heroInfo))
  const [moveHero,setMoveHero ]= useState(0)
  const [attackAllTimeOut,setAttackAllTimeOut ]= useState(0)
  const [thieveTimeOut,setThieveTimeOut ]= useState(0)
  const [isHeroDead,setIsHeroDead ]= useState(false)
  const [moveMonster,setMoveMonster ]= useState(-1)
  const [attackMode,setAttackMode] = useState("none")
  const [store,setStore] = useState(false)
  const [stage,setStage] = useState(HERO_ATTACK)
  const [frameRate,setFrameRate] = useState(120)
  const navigate = useNavigate();
  props.setLocation("mainGame")

  useEffect(() => {
    !props.characterSession && navigate("/choosePage")
  })
  useEffect(() => {
    setMonsterArray(levelConstructor(heroInfo))
  },[heroInfo.level])

  useEffect(() => {
    if(attackAllTimeOut > 0)setAttackAllTimeOut(attackAllTimeOut-1) 
    if(thieveTimeOut > 0)setThieveTimeOut(thieveTimeOut-1) 
  },[stage])

  useEffect(() => {
    if(!props.pushSave)return
    props.saveSession(heroInfo)
    props.setPushSave(false)
  },[props.pushSave])

  useEffect(() => {
    if(stage === MONSTER_ATTACK)
      monsterTurnHandler()
  },[stage])

  const monsterTurnHandler = async () => {
    if(monsterArray.filter(m => m.HP > 0).length === 0) return 
    let randomIndex = Math.floor(Math.random()*monsterArray.length)
    while(monsterArray[randomIndex].HP <= 0){
      randomIndex = Math.floor(Math.random()*monsterArray.length)
    }
    setMoveMonster(randomIndex)
    const ml2wait = frameRate * 6
    setMonsterStatus("run",randomIndex)
    await sleep(ml2wait)
    setMonsterStatus("run",randomIndex)
    await sleep(ml2wait)
    setMonsterStatus("attack1",randomIndex)
    await sleep(ml2wait)
    setHeroAnimeStatus("hurt")
    setMoveMonster(-1)
    endTurn()
    heroDamageHandler(monsterArray[randomIndex].ATK)
  }

  const setMonsterStatus = (status,index) => {
    const monsterArray_ = [...monsterArray]
    monsterArray_[index].setStatus(status)
    setMonsterArray(monsterArray_)
  }

  const heroDamageHandler = (damage) => {
    const heroInfo_ = {...heroInfo}
    console.log("damage",damage);
    const chanceToHit = Math.floor(Math.random() * (100))
    if(chanceToHit > heroInfo_.shield) heroInfo_.HP = heroInfo_.HP - damage
    if(heroInfo_.HP <= 0){
      setHeroAnimeStatus("death")
      setTimeout(() => {setIsHeroDead(true)},1500)
      updateCharacter({...props.character,inc:"death"})
    }
    setHeroInfo(heroInfo_)
  }

  const onMonsterClick = (index) => {
    attackMonsterHandler(index)
  }

  const attackMonsterHandler = async (index) => {
    if(attackMode !== "none"){
      const ml2wait = frameRate * 6
      setAttackMode("none")
      setMoveHero(index+1)
      setHeroAnimeStatus("run")
      await sleep(ml2wait)
      setHeroAnimeStatus("run")
      await sleep(ml2wait)
      if(attackMode === "thieve"){
        takeMonsterGold(index)
        setThieveTimeOut(10)
      }
      else{
        setHeroAnimeStatus("attack1")
        monsterDamageHandler(index)
      }
      await sleep(ml2wait)
      setMoveHero(false)
      endTurn()
    }
  }

  const monsterDamageHandler = (target) => {
    const monsterArray_ = [...monsterArray]
    setMonsterStatus("hurt",target)
    monsterArray_[target].damage(heroInfo.ATK)
    if(monsterArray_[target].HP <= 0){
      takeMonsterGold(target)
      monsterArray_[target].setStatus("death")
      updateCharacter({...props.character,inc:"kills"})
    }
    if(monsterArray_.filter(m => m.HP > 0).length === 0){
      setTimeout(() => {setStore(true)},1500)
    }
    setMonsterArray(monsterArray_)
  }
  const attackAllMonsters = () => {
    if(attackAllTimeOut !== 0) return;
    setHeroAnimeStatus("attack1")
    setTimeout(() => 
      monsterArray.forEach((monster,index) =>
        monsterDamageHandler(index))
    ,500)
    setAttackAllTimeOut(6)
    endTurn()
  }

 
  const takeMonsterGold =(target) => {
    setHeroInfo(pre => {return{...pre, gold: pre.gold + monsterArray[target].gold}})
  }
 
  const endTurn = () => {
    setTimeout(() => {
      setStage(stage === HERO_ATTACK?MONSTER_ATTACK:HERO_ATTACK)
    }, frameRate*3);
  }
  
  const next = () => {
    setMonsterArray([])
    setHeroInfo(preVal => {return{...preVal, level: heroInfo.level +1}})
    setStore(false)
    setStage(HERO_ATTACK)
  }
  console.log(frameRate);
  if(store) return (
    <>
    <Header 
        characterSession={heroInfo}
        character={props.character}
        setFrameRate={setFrameRate}
      />
      <Levels componentLVL={heroInfo.level} isStore={true}/>
      <Shop 
        next={next} 
        hero={heroInfo} 
        setHero={setHeroInfo}  />
      <HeroFigure 
        anime={heroAnime}
        frameRate={frameRate}
        animeStatus={heroAnimeStatus}
        setAnimeStatus={setHeroAnimeStatus}
        setMoveHero={setMoveHero}
      />
    </>
  )
  return(
    <div className={(attackMode !== "none") ? style.curserTarget : null}>
      {isHeroDead && <GameOver character={props.character}/>}
      <Header 
        characterSession={heroInfo}
        character={props.character}
        setFrameRate={setFrameRate}
      />
      <Levels componentLVL={heroInfo.level}/>
      <HeroFigure 
        anime={heroAnime}
        frameRate={frameRate}
        animeStatus={heroAnimeStatus}
        setAnimeStatus={setHeroAnimeStatus}
        moveHero={moveHero}
      />
      <ActionsBar 
        isActive={stage === HERO_ATTACK}
        setAttackMode={setAttackMode}
        attackAllMonsters={attackAllMonsters}
        attackAllTimeOut={attackAllTimeOut}
        takeMonsterGold={takeMonsterGold}
        thieveTimeOut={thieveTimeOut}
        />
      {monsterArray.map((monster, index) =>{
        return <MonsterFigure 
        monster={monster}
        frameRate={frameRate}
        index={index}
        setMonsterStatus={(status,index) => {setMonsterStatus(status,index)}}
        moveMonster={moveMonster}
        attackMode={attackMode}
        onMonsterClick={() =>  onMonsterClick(index)}
      />
        })}
    </div>
    )
}

export default MainGamePage
