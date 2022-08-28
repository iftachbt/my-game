import React, { useEffect,useState }from "react";
import style from "./createSession.module.css";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../actions/gameSession/gameSession";
import { characterBuild } from "../../actions/character/character.build";

 function CreateSession(props){
  const [difficulty, setDifficulty] = useState("easy")
    const navigate = useNavigate();

    async function Create(){
      const name = props.character.name
      const race = props.character.race
      const characterId = props.character.id
      const character = characterBuild(name,race)
      const res = await createSession({
        ...character.toObj(),
        difficulty: difficulty,
        characterId: characterId,
        kills:0,
        deaths:0
      })
      if(res !== "err"){
        props.setCharacterSession(res)  
        navigate("/mainGame")
      }
      else alert("something is wrong with CreateSession");    
    }
    return(
        <div className={style.body}>
            <div className={style.formContainer}>
            <h1>set Difficulty</h1>
            <div>
                <div className={style.btn}>
                    <button onClick={() => setDifficulty("easy")} >EASY</button>
                </div>
                <div>
                    <button onClick={() => setDifficulty("medium")}>MEDIUM</button>
                </div>
                <div>
                    <button onClick={() => setDifficulty("hard")} >HARD</button>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={() => Create()}>PLAY!</button>
                </div>
                <div>
                    <button onClick={() => props.setNoSession(false)}>BACK</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default CreateSession