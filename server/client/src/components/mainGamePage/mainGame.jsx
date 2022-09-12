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


const HERO_ATTACK = 0;
const MONSTER_ATTACK = 1;

function MainGamePage(props){
  const [heroInfo,setHeroInfo ]= useState(props.characterSession||"")
  const [componentLVL,setComponentLVL ]= useState(props.characterSession.level||"1")
  const [heroAnimeStatus,setHeroAnimeStatus ]= useState("idle")
  const [heroAnime,setHeroAnime ]= useState(hero(props.character.race))
  const [monsterArray,setMonsterArray ]= useState(levelConstructor(componentLVL,props.characterSession.difficulty))
  const [selectedMonster,setSelectedMonster ]= useState(null)             
  const [moveHero,setMoveHero ]= useState(0)
  const [skillOneCount,setSkillOne ]= useState(0)
  const [skillTwoCount,setSkillTwo ]= useState(0)
  const [isHeroDead,setIsHeroDead ]= useState(false)
  const [moveMonster,setMoveMonster ]= useState(-1)
  const [attackMode,setAttackMode] = useState("none")
  const [store,setStore] = useState(false)
  const [stage,setStage] = useState(HERO_ATTACK)
  const navigate = useNavigate();
  props.setLocation("mainGame")

  useEffect(() => {
    !props.characterSession && navigate("/choosePage")
  })
  useEffect(() => {
    setMonsterArray(levelConstructor(componentLVL,props.characterSession.difficulty))
    console.log(monsterArray[0]);
  },[componentLVL])

  useEffect(() => {
    if(skillOneCount > 0)setSkillOne(skillOneCount-1) 
    if(skillTwoCount > 0)setSkillTwo(skillTwoCount-1) 
  },[stage])

  useEffect(() => {
    if(stage === MONSTER_ATTACK){
      if(monsterArray.filter(m => m.HP > 0).length === 0) return 
      let randomIndex = Math.floor(Math.random()*monsterArray.length)
      while(monsterArray[randomIndex].HP <= 0){
        randomIndex = Math.floor(Math.random()*monsterArray.length)
      }
      setMoveMonster(randomIndex)
    }
  },[stage])

  const setMonsterStatus = (status,index) => {
    const monsterArray_ = [...monsterArray]
    monsterArray_[index].setStatus(status)
    setMonsterArray(monsterArray_)
  }

  const heroDamageHandler = (damage) => {
    const heroInfo_ = {...heroInfo}
    heroInfo_.HP = heroInfo_.HP - damage
    if(heroInfo_.HP <= 0){
      setHeroAnimeStatus("death")
      setTimeout(() => {setIsHeroDead(true)},1500)
    }
    setHeroInfo(heroInfo_)
  }

  const monsterDamageHandler = () => {
    const monsterArray_ = [...monsterArray]
    monsterArray_[selectedMonster].damage(props.characterSession.ATK)
    if(monsterArray_[selectedMonster].HP <= 0){
      setHeroInfo(pre => {return{...pre, gold: heroInfo.gold + monsterArray_[selectedMonster].gold}})
      monsterArray_[selectedMonster].setStatus("death")
    }
    if(monsterArray_.filter(m => m.HP > 0).length === 0){
      setTimeout(() => {setStore(true)},1500)
    }
    setMonsterArray(monsterArray_)
    setTimeout(() => {
      setStage(MONSTER_ATTACK)
    }, 1000);
  }
  function attackAllMonsters(){
    if(skillOneCount !== 0) return;
    let monsterArray_ = [...monsterArray]
    monsterArray_.forEach(monster => {
      monster.damage(props.characterSession.ATK)
      monster.setStatus("hurt")
      setHeroAnimeStatus("attack1")
      if(monster.HP <= 0) {
        setHeroInfo(pre => {return{...pre, gold: heroInfo.gold + monster.gold}})
        monster.setStatus("death")
      }
      })
    if(monsterArray_.filter(m => m.HP > 0).length === 0){
      setTimeout(() => {setStore(true)},1500)
    }
    setSkillOne(6)
    setMonsterArray(monsterArray_)
    setTimeout(() => {
      setStage(MONSTER_ATTACK)
    }, 1000);
  }

  const attackMonsterHandler = (index) => {
    if(attackMode !== "none"){
      setSelectedMonster(index)
      setMoveHero(index+1)
    }
  }

  const next = () => {
    setMonsterArray([])
    setComponentLVL(componentLVL+1)
    setStore(false)
    setStage(HERO_ATTACK)
  }
  
  if(store){
    return (
      <div>
        store
        <button onClick={() => {next()}}>next</button>
      </div>
    )
  }
  return(
    <div className={(attackMode !== "none") ? style.curserTarget : null}>
      {isHeroDead && <GameOver character={props.character}/>}
      <Header 
        componentLVL={componentLVL}
        characterSession={heroInfo}
        character={props.character}
      />
      <Levels componentLVL={componentLVL}/>
      <HeroFigure 
        anime={heroAnime}
        animeStatus={heroAnimeStatus}
        setAnimeStatus={setHeroAnimeStatus}
        setMonsterStatus={(status) => {setMonsterStatus(status,selectedMonster)}}
        monsterDamage={monsterDamageHandler}
        moveHero={moveHero}
        setMoveHero={setMoveHero}
        setAttackMode={setAttackMode}
      />
      <ActionsBar 
        isActive={stage === HERO_ATTACK}
        setAttackMode={setAttackMode}
        attackAllMonsters={attackAllMonsters}
        skillOneCount={skillOneCount}
        />
      {monsterArray.map((monster, index) =>{
        return <MonsterFigure 
        monster={monster}
        index={index}
        setAnimeStatus={setHeroAnimeStatus}
        setMonsterStatus={(status,index) => {setMonsterStatus(status,index)}}
        setHeroStatus={setHeroAnimeStatus}
        moveMonster={moveMonster}
        setMoveMonster={setMoveMonster}
        attackMonster={() => {attackMonsterHandler(index)}}
        attackMode={attackMode}
        setStage={setStage}
        heroDamage={heroDamageHandler}
      />
        })}
    </div>
    )
}

export default MainGamePage
