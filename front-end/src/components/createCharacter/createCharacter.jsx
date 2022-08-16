import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import style from "./createCharacter.module.css"

 function CreateCharacter(props){
    const navigate = useNavigate();
    const [name,setName]=useState("")

    function handleChange(event){
        const value = event.target.value
        setName(value)
    }
    function handleClick(event){
        setName("")
    }
 
    return(
        <div >
            <h1>hello {props.user.username}</h1>
            <button className="btn" onClick={() => navigate(-1)} >back</button>
            <div className={style.charBox}><p onClick={() => {navigate("/")}}>home page</p></div>
            <div>
                <h1>select class</h1>
                <div className={style.charBox}><p>human</p></div>
                <div className={style.charBox}><p>elf</p></div>
                <div className={style.charBox}><p>dwarf</p></div>
                <div className={style.charBox}><p>dragonborn</p></div>
           </div>
           <input onChange={handleChange} placeholder="avatar's name" value={name} />
           <button onClick={handleClick}>create</button>
        </div>
    )
}
export default CreateCharacter