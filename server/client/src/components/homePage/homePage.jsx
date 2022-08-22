import React from "react";
import style from "./homepage.module.css"
import {useNavigate} from "react-router-dom";

function HomePage(props){
    props.setLocation("homePage")
    const navigate = useNavigate();

    function handleClick(event){
        navigate('/' + event.target.name)
    }

    return(
        <div className={style.homePage}>
            <div className={style.background}></div>
            <h1 className={style.h1}>BitaIsland</h1>
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