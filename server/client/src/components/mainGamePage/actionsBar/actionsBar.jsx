import React, {useState,useEffect} from "react";


function MainGamePage(props){
  const [componentLVL,setComponentLVL]=useState(props.characterSession.level||"1")

  useEffect(() => {
  })
  
  useEffect(() => {
    
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
