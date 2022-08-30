import React, { useEffect,useState }from "react";
import style from "./createSession.module.css";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../actions/gameSession/gameSession";
import { characterBuild } from "../../actions/character/character.build";
import { awaitToast } from "../../actions/toastAlert";

 function CreateSession(props){
  const [difficulty, setDifficulty] = useState("easy")
    const navigate = useNavigate();

    async function Create(){
      const name = props.character.name
      const race = props.character.race
      const characterId = props.character.id
      const character = characterBuild(name,race)
      const res = await awaitToast(createSession({
        ...character.toObj(),
        difficulty,
        characterId: characterId,
        kills:0,
        deaths:0
      }),"create session")
      if(res !== "err"){
        props.setCharacterSession(res)  
        navigate("/mainGame")
      }
    }
    function button(difficulty){
      return (
      <div className={style.btn_div}>
        <button className={style.btn} onClick={() => setDifficulty(difficulty)} >{difficulty}</button>
      </div>)
    }
    return(
    <div className={style.body}>
      <div className={style.formContainer}>
        <h1 className={style.h1}>set Difficulty</h1>
        <div className={style.middleContainer}>
          {button("easy")}
          {button("medium")}
          {button("hard")}
        </div>
        <div className={style.bottomContainer}>
          <div className={style.bottomBtn}>
            <button onClick={Create}>PLAY!</button>
          </div>
          <div className={style.bottomBtn}>
            <button onClick={() => props.setNoSession(false)}>BACK</button>
          </div>
        </div>
      </div>
    </div>
    )
}
export default CreateSession