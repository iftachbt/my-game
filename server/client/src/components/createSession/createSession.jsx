import React, { useEffect,useState }from "react";
import style from "./createSession.module.css";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../actions/gameSession/gameSession";
import { characterBuild } from "../../actions/character/character.build";
import { awaitToast } from "../../actions/toastAlert";
import Button from "../buttons/buttons";


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
        <Button 
        text={difficulty}
        handleClick={() => setDifficulty(difficulty)}
        color="green"
        />)
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
            <Button 
              text={"PLAY!"}
              handleClick={Create}
            />
            <Button 
              text={"BACK"}
              handleClick={() => props.setNoSession(false)}
            />
        </div>
      </div>
    </div>
    )
}
export default CreateSession