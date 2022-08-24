import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { saveCharacter } from "../../actions/character/character";
import { characterBuild } from "../../actions/character/character.build";
import { SelectClass } from "./selectClass";
// import style from "./createCharacter.module.css"

 function CreateCharacter(props){
    const navigate = useNavigate();
    const classchoice = ["human","elf","dwarf","dragonborn"]
    const [character , setCharacter] = useState({
        name:"",
        class:"elf"
    })
    const [selectDifficulty , setSelectDifficulty] = useState("")

    function handleDifficulty(event){
        setSelectDifficulty(event.target.value)
    }
    
    function handleChange(event){
        const value = event.target.value
        setCharacter(preValue => ({...preValue,"name":value}))
    }
    async function handleClick(event){
        console.log(event);
        const avater = characterBuild(character.name,character.class)
        setCharacter({name:"",class:""})
        props.setAvatar({
          "static":avater.static_(), 
          "dynamic":avater.dynamic()
        })
        props.setDifficulty(selectDifficulty)
        navigate("/mainGame")
        console.log("avater.toObj()", avater.toObj());
        const req = await saveCharacter(avater.toObj())
        console.log("req",req)
    }
 
    return(
        <div >
            <h1>hello {props.user.username}</h1>
            <button className="btn" onClick={() => navigate(-1)} >back</button>
            <select onChange={handleDifficulty} name="difficulty" >
                <option value="" disabled selected>difficulty</option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
            <div>
                <h1>select class</h1>
                {classchoice.map((className, index) => <SelectClass 
                setCharacter={setCharacter}
                 value={className}
                 id={index}
                 />)}
           </div>
           <input onChange={handleChange} name="name" placeholder="avatar's name" value={character.name} />
           <button onClick={handleClick}>create</button>
        </div>
    )
}
export default CreateCharacter