import React from "react";
import style from "./homepage.module.css"
import {useNavigate} from "react-router-dom";
import { soundEffect } from "../../sounds/VFXsounds";
import  btnSound  from "../index/images/home-page-sound/impact-6291.mp3";

function HomePage(props){
    props.setLocation("homePage")
    const navigate = useNavigate();

    function handleClick(event){
        navigate('/' + event.target.name)
        soundEffect(btnSound)
    }
    

    return(
        <div className={style.homePage}>
            <div className={style.background}></div>
            <h1 className={style.h1}>BitIsland</h1>
            <div className={style.buttonContainer}>
                <div className={style.btn_div}>
                    <button className={style.btn} onClick={handleClick} name="login">start</button>
                </div>
                <div className={style.btn_div}>
                    <button className={style.btn} onClick={handleClick} name="sigup">SignUp</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage