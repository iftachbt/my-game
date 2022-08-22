import  style  from "./pause.module.css";
import React from "react";
import {useNavigate} from "react-router-dom";

function Pause(props){
    const navigate = useNavigate();

    const handleMute = () =>{
        props.setMute(!props.isMute)
    }


    return(
        <div className={style.body}>
            <div>
                <input onClick={handleMute} type="checkbox" id="BGAudio" name="BGAudio" value="mute" />
                <label for="BGAudio"> mute</label><br></br>
            </div>
            <div>
                <button className="btn" onClick={() => navigate('/startPage')} name="startPage">exit</button>
            </div>
            <div>
                <button className="btn" onClick={() => props.setHeaderState(false)}>resume</button>
            </div>
        </div>
    )
}
export default Pause