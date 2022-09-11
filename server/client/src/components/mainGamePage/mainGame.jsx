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


function MainGamePage(props){
  const [componentLVL,setComponentLVL]=useState(props.characterSession.level||"1")
  const [heroAnimeStatus,setHeroAnimeStatus]=useState("idle")
  const [heroAnime,setHeroAnime]=useState(hero(props.character.race))
  const [monsterArray,setMonsterArray]=useState(levelConstructor(componentLVL,props.characterSession.difficulty))
  const [monsterAnimeStatus,setMosterAnimeStatus]=useState("idle")
  const [selectedMonster,setSelectedMonster]=useState(null)
  const [moveHero,setMoveHero]=useState(0)
  const [moveMonster,setMoveMonster]=useState(0)
  const navigate = useNavigate();
  props.setLocation("mainGame")

  useEffect(() => {
    !props.characterSession && navigate("/choosePage")
  })
  
  useEffect(() => {
    setMonsterArray(levelConstructor(componentLVL,props.characterSession.difficulty))
    console.log(monsterArray);
  },[componentLVL])

  return(
    <div>
      <Header 
      componentLVL={componentLVL}
      characterSession={props.characterSession}
      character={props.character}
      />
      <Levels 
      componentLVL={componentLVL}
      setComponentLVL={setComponentLVL}
      setMonsterArray={setMonsterArray}
      />
      <button onClick={() => setHeroAnimeStatus("attack1")}>attack1</button>
      <button onClick={() => setHeroAnimeStatus("death")}>death</button>
      <button onClick={() => setHeroAnimeStatus("hurt")}>hurt</button>
      <button onClick={() => setMoveHero(1)}>move1</button>
      <button onClick={() => setMoveHero(2)}>move2</button>
      <HeroFigure 
        anime={heroAnime}
        animeStatus={heroAnimeStatus}
        setAnimeStatus={setHeroAnimeStatus}
        setMonsterStatus={setMosterAnimeStatus}
        moveHero={moveHero}
        setMoveHero={setMoveHero}
      />
      <ActionsBar />
      {monsterArray.map((monster, index) =>{
        return <MonsterFigure 
        monster={monster}
        index={index}
        selectedMonster={selectedMonster}
        setSelectedMonster={setSelectedMonster}
        setAnimeStatus={setHeroAnimeStatus}
        monsterStatus={monsterAnimeStatus}
        setMonsterStatus={setMosterAnimeStatus}
        moveMonster={moveMonster}
        setMoveMonster={setMoveMonster}
      />
        })}
    </div>
    )
}

export default MainGamePage
