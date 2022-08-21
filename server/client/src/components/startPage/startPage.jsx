import React from "react";
import style from "./startPage.module.css"
import { useNavigate } from "react-router-dom";

function StartPage(props){
    props.setLocation("startPage")
    const navigate = useNavigate();
    
    return(
        <div className={style.StartPage}>
            <div className={style.background}></div>
            <h1>hello {props.user.username}</h1>
            <div>
                <div>
                    <button className="btn" onClick={() => navigate('/createCharacter')} name="newGame">new game</button>
                </div>
                <div>
                    <button className="btn" onClick={() => navigate('/mainGame')} name="newGame">play</button>
                </div>
                <div>
                    <button className="btn" onClick={() => navigate('/game')} name="continueGame">continue</button>
                </div>
                <div>
                    <button className="btn" onClick={() => navigate('/about')} name="about">about</button>
                </div>
            </div>
        </div>
    )
}
export default StartPage