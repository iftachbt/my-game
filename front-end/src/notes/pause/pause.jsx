import  style  from "./pause.module.css";
import React from "react";
import {useNavigate} from "react-router-dom";

function Pause(props){
    const navigate = useNavigate();


    return(
        <div className={style.body}>
            <div>
                <button className="btn">setting</button>
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