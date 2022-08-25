import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { saveCharacter } from "../../actions/character/character";
import { SelectClass } from "./selectClass";
import style from "./createCharacter.module.css"

 function CreateCharacter(props){
    const navigate = useNavigate();
    const raceList = ["human","elf","dwarf","dragonborn"]
    const [character , setCharacter] = useState({
        name:"",
        race:"elf"
    })

    
    function handleChange(event){
        const value = event.target.value
        setCharacter(preValue => ({...preValue,"name":value}))
    }

    async function handleClick(){
      console.log("character", character);
      const req = await saveCharacter(character)
      console.log("req",req)
      req !== "err"
      ?navigate("/mainGame")
      :setCharacter({name:"",race:""})
    }
 
    return(
        <div >
            <h1>create Avatar</h1>
            <button className="btn" onClick={() => navigate(-1)} >back</button>
            <div>
                <h1>select race</h1>
                <div className={style.raceList}>
                    {raceList.map((className, index) => <SelectClass 
                    setCharacter={setCharacter}
                    value={className}
                    id={index}
                    />)}
                </div>
           </div>
           <input onChange={handleChange} name="name" placeholder="avatar's name" value={character.name} />
           <button onClick={handleClick}>create</button>
        </div>
    )
}
export default CreateCharacter